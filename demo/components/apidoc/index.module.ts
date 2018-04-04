import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { BaiduMapModule } from 'angular2-baidu-map'
import { SharedModule } from '../../shared/index.module'

import { ApidocRouteModule } from './route.module'

import { DocBaidumapComponent } from './docBaidumap.component'
import { DocCenterAndZoomComponent } from './docCenterAndZoom.component'
import { DocControlComponent } from './docControl.component'
import { DocControlAnchorComponent } from './docControlAnchor.component'
import { DocIconComponent } from './docIcon.component'
import { DocMapOptionsComponent } from './docMapOptions.component'
import { DocMarkerComponent } from './docMarker.component'
import { DocMarkerOptionsComponent } from './docMarkerOptions.component'
import { DocHeatmapOptionsComponent } from './docHeatmapOptions.component'
import { DocHeatmapDataComponent } from './docHeatmapData.component'
import { DocHeatmapPointComponent } from './docHeatmapPoint.component'
import { DocPolylineComponent } from './docPolyline.component'
import { DocCircleComponent } from './docCircle.component'
import { DocPolygonComponent } from './docPolygon.component'
import { DocHeatmapComponent } from './docHeatmap.component'
import { DocTileLayerComponent } from './docTileLayer.component'
import { DocTrafficLayerComponent } from './docTrafficLayer.component'
import { DocTileLayerOptionsComponent } from './docTileLayerOptions.component'
import { DocTrafficLayerOptionsComponent } from './docTrafficLayerOptions.component'
import { DocNavigationControlOptionsComponent } from './docNavigationControlOptions.component'
import { DocNavigationControlTypeComponent } from './docNavigationControlType.component'
import { DocPredictDateComponent } from './docPredictDate.component'
import { DocPointComponent } from './docPoint.component'
import { DocSizeComponent } from './docSize.component'
import { ApidocComponent } from './index.component'
import { SidebarComponent } from './sidebar.component'

@NgModule({
  declarations: [
    ApidocComponent,
    SidebarComponent,
    DocBaidumapComponent,
    DocCenterAndZoomComponent,
    DocControlAnchorComponent,
    DocIconComponent,
    DocPointComponent,
    DocMapOptionsComponent,
    DocMarkerOptionsComponent,
    DocHeatmapOptionsComponent,
    DocHeatmapDataComponent,
    DocHeatmapPointComponent,
    DocNavigationControlOptionsComponent,
    DocNavigationControlTypeComponent,
    DocSizeComponent,
    DocMarkerComponent,
    DocPolylineComponent,
    DocCircleComponent,
    DocPolygonComponent,
    DocHeatmapComponent,
    DocTileLayerComponent,
    DocTrafficLayerComponent,
    DocTileLayerOptionsComponent,
    DocTrafficLayerOptionsComponent,
    DocControlComponent,
    DocPredictDateComponent
  ],
  exports: [RouterModule],
  imports: [
    CommonModule,
    SharedModule,
    BaiduMapModule.forRoot({ ak: 'gd0GyxGUxSCoAbmdyQBhyhrZ' }),
    ApidocRouteModule
  ]
})
export class ApidocModule {}
