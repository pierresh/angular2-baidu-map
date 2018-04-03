import { ModuleWithProviders, NgModule } from '@angular/core'

import { ControlComponent } from './components/control.component'
import { MapComponent } from './components/map.component'
import { MarkerComponent } from './components/marker.component'
import { PolylineComponent } from './components/polyline.component'
import { CircleComponent } from './components/circle.component'
import { PolygonComponent } from './components/polygon.component'
import { LOADING_STATE, ScriptLoaderConfig } from './providers/scriptLoader'

import { BMap } from './types/BMap'

@NgModule({
  declarations: [
    MapComponent,
    MarkerComponent,
    ControlComponent,
    PolylineComponent,
    CircleComponent,
    PolygonComponent
  ],
  exports: [
    MapComponent,
    MarkerComponent,
    ControlComponent,
    PolylineComponent,
    CircleComponent,
    PolygonComponent
  ]
})
export class BaiduMapModule {
  public static forRoot(_config?: ScriptLoaderConfig): ModuleWithProviders {
    return {
      ngModule: BaiduMapModule,
      providers: [{ provide: ScriptLoaderConfig, useValue: _config }]
    }
  }
}

export { BMapInstance, MapOptions } from './types/Map'
export { Point } from './types/Point'
export { BMarker, MarkerOptions } from './types/Marker'
export { BPolyline, PolylineOptions } from './types/Polyline'
export { BCircle, CircleOptions } from './types/Circle'
export { BPolygon, PolygonOptions } from './types/Polygon'
export {
  ControlType,
  ControlAnchor,
  GeolocationControlOptions,
  NavigationControlOptions,
  NavigationControlType,
  OverviewMapControlOptions,
  ScaleControlOptions,
  MapTypeControlOptions,
  MapTypeControlType
} from './types/Control'
export { BInfoWindowConstructor, BInfoWindowOptions } from './types/InfoWindow'

declare global {
  interface Window {
    _scriptLoadState: LOADING_STATE
    BMap: BMap
    _loadingCallbacks: Array<() => void>
    baidumapinit: () => void
  }
}
