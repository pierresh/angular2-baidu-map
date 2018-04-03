import {
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange
} from '@angular/core'

import { nullCheck } from '../helpers/validate'
import { MapService } from '../providers/mapService'
import { BHeatmap, HeatmapOptions, HeatmapData } from '../types/Heatmap'
import { HeatmapLibLoader } from '../providers/heatmapLibLoader'

@Directive({
  selector: 'heatmap'
})
export class HeatmapComponent implements OnInit, OnChanges, OnDestroy {
  @Input() private dataset: HeatmapData
  @Input() private options: HeatmapOptions

  @Output() private loaded = new EventEmitter()

  private heatmap: BHeatmap

  constructor(private _service: MapService, private heatmapLibLoader: HeatmapLibLoader) {}

  public ngOnInit() {
    nullCheck(this.dataset, 'dataset is required for <heatmap>')

    this._service.getNativeMap().then(() => {
      return this.heatmapLibLoader.load(() => {
        this._service
          .addOverlay(() => {
            return (this.heatmap = new window.BMapLib.HeatmapOverlay(this.options))
          })
          .then(() => {
            this.loaded.emit(this.heatmap)
            if (this.dataset) {
              this.heatmap.setDataSet(this.dataset)
            }
          })
      })
    })
  }

  public ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes.dataset && !changes.dataset.isFirstChange()) {
      this.heatmap.setDataSet(changes.dataset.currentValue)
    }
    if (changes.options && !changes.options.isFirstChange()) {
      this.heatmap.setOptions(changes.options.currentValue)
    }
  }

  public ngOnDestroy() {
    this._service.removeOverlay(this.heatmap)
  }
}
