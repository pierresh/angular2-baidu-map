import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DocBaidumapComponent } from './docBaidumap.component'
import { DocCenterAndZoomComponent } from './docCenterAndZoom.component'
import { DocControlComponent } from './docControl.component'
import { DocControlAnchorComponent } from './docControlAnchor.component'
import { DocIconComponent } from './docIcon.component'
import { DocMapOptionsComponent } from './docMapOptions.component'
import { DocMarkerComponent } from './docMarker.component'
import { DocPolylineComponent } from './docPolyline.component'
import { DocCircleComponent } from './docCircle.component'
import { DocPolygonComponent } from './docPolygon.component'
import { DocHeatmapComponent } from './docHeatmap.component'
import { DocMarkerOptionsComponent } from './docMarkerOptions.component'
import { DocHeatmapOptionsComponent } from './docHeatmapOptions.component'
import { DocHeatmapDataComponent } from './docHeatmapData.component'
import { DocHeatmapPointComponent } from './docHeatmapPoint.component'
import { DocTileLayerComponent } from './docTileLayer.component'
import { DocTrafficLayerComponent } from './docTrafficLayer.component'
import { DocTileLayerOptionsComponent } from './docTileLayerOptions.component'
import { DocTrafficLayerOptionsComponent } from './docTrafficLayerOptions.component'
import { DocNavigationControlOptionsComponent } from './docNavigationControlOptions.component'
import { DocNavigationControlTypeComponent } from './docNavigationControlType.component'
import { DocMapTypeEnumComponent } from './docMapTypeEnum.component'
import { DocPointComponent } from './docPoint.component'
import { DocSizeComponent } from './docSize.component'
import { DocPredictDateComponent } from './docPredictDate.component'
import { ApidocComponent } from './index.component'

const routes: Routes = [
  {
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'baidu-map'
      },
      {
        component: DocBaidumapComponent,
        path: 'baidu-map'
      },
      {
        component: DocMarkerComponent,
        path: 'marker'
      },
      {
        component: DocPolylineComponent,
        path: 'polyline'
      },
      {
        component: DocCircleComponent,
        path: 'circle'
      },
      {
        component: DocPolygonComponent,
        path: 'polygon'
      },
      {
        component: DocHeatmapComponent,
        path: 'heatmap'
      },
      {
        component: DocTileLayerComponent,
        path: 'tilelayer'
      },
      {
        component: DocTrafficLayerComponent,
        path: 'trafficlayer'
      },
      {
        component: DocControlComponent,
        path: 'control'
      },
      {
        component: DocMapOptionsComponent,
        data: {
          name: 'MapOptions'
        },
        path: 'map-options'
      },
      {
        component: DocMarkerOptionsComponent,
        data: {
          name: 'MarkerOptions'
        },
        path: 'marker-options'
      },
      {
        component: DocHeatmapOptionsComponent,
        data: {
          name: 'HeatmapOptions'
        },
        path: 'heatmap-options'
      },
      {
        component: DocTileLayerOptionsComponent,
        data: {
          name: 'TileLayerOptions'
        },
        path: 'tilelayer-options'
      },
      {
        component: DocTrafficLayerOptionsComponent,
        data: {
          name: 'TrafficLayerOptions'
        },
        path: 'trafficlayer-options'
      },
      {
        component: DocHeatmapDataComponent,
        data: {
          name: 'HeatmapData'
        },
        path: 'heatmap-data'
      },
      {
        component: DocHeatmapPointComponent,
        data: {
          name: 'HeatmapPoint'
        },
        path: 'heatmap-point'
      },
      {
        component: DocNavigationControlOptionsComponent,
        data: {
          name: 'NavigationControlOptions'
        },
        path: 'navigation-control-options'
      },
      {
        component: DocCenterAndZoomComponent,
        data: {
          name: 'CenterAndZoom'
        },
        path: 'center-and-zoom'
      },
      {
        component: DocPredictDateComponent,
        data: {
          name: 'PredictDate'
        },
        path: 'predictdate'
      },
      {
        component: DocPointComponent,
        data: {
          name: 'Point'
        },
        path: 'point'
      },
      {
        component: DocSizeComponent,
        data: {
          name: 'Size'
        },
        path: 'size'
      },
      {
        component: DocIconComponent,
        data: {
          name: 'Icon'
        },
        path: 'icon'
      },
      {
        component: DocControlAnchorComponent,
        data: {
          name: 'ControlAnchor'
        },
        path: 'control-anchor'
      },
      {
        component: DocNavigationControlTypeComponent,
        data: {
          name: 'NavigationControlType'
        },
        path: 'navigation-control-type'
      },
      {
        component: DocMapTypeEnumComponent,
        data: {
          name: 'MapTypeEnum'
        },
        path: 'maptypeenum'
      },
      {
        path: '**',
        redirectTo: 'baidu-map'
      }
    ],
    component: ApidocComponent,
    path: 'apidoc'
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ApidocRouteModule {}
