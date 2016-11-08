// Generated by dts-bundle v0.6.1
// Dependencies for this module:
//   ../@angular/core

declare module 'angular2-baidu-map' {
    import { SimpleChange, EventEmitter, OnInit, OnChanges, ElementRef } from '@angular/core';
    import { MapOptions, OfflineOptions } from 'angular2-baidu-map/interfaces/Options';
    import { PreviousMarker } from 'angular2-baidu-map/interfaces/PreviousMarker';
    export class BaiduMap implements OnInit, OnChanges {
        ak: string;
        options: MapOptions;
        offlineOpts: OfflineOptions;
        onMapLoaded: EventEmitter<{}>;
        onMarkerClicked: EventEmitter<{}>;
        map: any;
        offlineWords: string;
        previousMarkers: PreviousMarker[];
        constructor(el: ElementRef);
        ngOnInit(): void;
        ngOnChanges(changes: {
            [propertyName: string]: SimpleChange;
        }): void;
        _draw(): void;
    }
    export { MarkerOptions, MapDefaultOptions, MapOptions, OfflineOptions } from 'angular2-baidu-map/interfaces/Options';
    export { GeolocationControlOptions } from 'angular2-baidu-map/controls/GeoControl';
    export { ScaleControlOptions } from 'angular2-baidu-map/controls/ScaleControl';
    export { OverviewMapControlOptions } from 'angular2-baidu-map/controls/OverviewMapControl';
    export { NavigationControlOptions } from 'angular2-baidu-map/controls/NavigationControl';
    export { Icon } from 'angular2-baidu-map/interfaces/Icon';
    export { Size } from 'angular2-baidu-map/interfaces/Size';
    export { ControlAnchor } from 'angular2-baidu-map/enum/ControlAnchor';
    export * from 'angular2-baidu-map/enum/NavigationControlType';
    export { MapStatus } from 'angular2-baidu-map/enum/MapStatus';
}

declare module 'angular2-baidu-map/interfaces/Options' {
    import { ScaleControlOptions } from 'angular2-baidu-map/controls/ScaleControl';
    import { GeolocationControlOptions } from 'angular2-baidu-map/controls/GeoControl';
    import { OverviewMapControlOptions } from 'angular2-baidu-map/controls/OverviewMapControl';
    import { NavigationControlOptions } from 'angular2-baidu-map/controls/NavigationControl';
    export interface MarkerOptions {
        longitude: number;
        latitude: number;
        icon?: string;
        width?: number;
        height?: number;
        title?: string;
        content?: string;
        enableMessage?: boolean;
        autoDisplayInfoWindow?: boolean;
    }
    export interface MapDefaultOptions {
        navCtrl?: boolean | NavigationControlOptions;
        scaleCtrl?: boolean | ScaleControlOptions;
        overviewCtrl?: boolean | OverviewMapControlOptions;
        enableScrollWheelZoom?: boolean;
        geolocationCtrl?: boolean | GeolocationControlOptions;
        zoom?: number;
    }
    export interface MapOptions extends MapDefaultOptions {
        center: {
            longitude: number;
            latitude: number;
        };
        markers?: MarkerOptions[];
    }
    export interface OfflineOptions {
        retryInterval?: number;
        txt?: string;
    }
}

declare module 'angular2-baidu-map/interfaces/PreviousMarker' {
    export interface PreviousMarker {
        marker: any;
        listeners: Function[];
    }
}

declare module 'angular2-baidu-map/controls/GeoControl' {
    import { MapOptions } from 'angular2-baidu-map/interfaces/Options';
    import { ControlAnchor } from 'angular2-baidu-map/enum/ControlAnchor';
    import { Size } from 'angular2-baidu-map/interfaces/Size';
    import { Icon } from 'angular2-baidu-map/interfaces/Icon';
    export const setGeoCtrl: (map: any, opts: MapOptions) => void;
    export interface GeolocationControlOptions {
        anchor?: ControlAnchor;
        offset?: Size;
        showAddressBar?: boolean;
        enableAutoLocation?: boolean;
        locationIcon?: Icon;
    }
}

declare module 'angular2-baidu-map/controls/ScaleControl' {
    import { MapOptions } from 'angular2-baidu-map/interfaces/Options';
    import { ControlAnchor } from 'angular2-baidu-map/enum/ControlAnchor';
    import { Size } from 'angular2-baidu-map/interfaces/Size';
    export const setScaleCtrl: (map: any, opts: MapOptions) => void;
    export interface ScaleControlOptions {
        anchor?: ControlAnchor;
        offset?: Size;
    }
}

declare module 'angular2-baidu-map/controls/OverviewMapControl' {
    import { MapOptions } from 'angular2-baidu-map/interfaces/Options';
    import { ControlAnchor } from 'angular2-baidu-map/enum/ControlAnchor';
    import { Size } from 'angular2-baidu-map/interfaces/Size';
    export const setOverviewMapCtrl: (map: any, opts: MapOptions) => void;
    export interface OverviewMapControlOptions {
        anchor?: ControlAnchor;
        offset?: Size;
        size?: Size;
        isOpen?: boolean;
    }
}

declare module 'angular2-baidu-map/controls/NavigationControl' {
    import { MapOptions } from 'angular2-baidu-map/interfaces/Options';
    import { ControlAnchor } from 'angular2-baidu-map/enum/ControlAnchor';
    import { Size } from 'angular2-baidu-map/interfaces/Size';
    import { NavigationControlType } from 'angular2-baidu-map/enum/NavigationControlType';
    export const setNavigationCtrl: (map: any, opts: MapOptions) => void;
    export interface NavigationControlOptions {
        anchor?: ControlAnchor;
        offset?: Size;
        type?: NavigationControlType;
        showZoomInfo?: boolean;
        enableGeolocation?: boolean;
    }
}

declare module 'angular2-baidu-map/interfaces/Icon' {
    import { Size } from 'angular2-baidu-map/interfaces/Size';
    export interface Icon {
        url: string;
        size: Size;
    }
}

declare module 'angular2-baidu-map/interfaces/Size' {
    export interface Size {
        width: number;
        height: number;
    }
}

declare module 'angular2-baidu-map/enum/ControlAnchor' {
    export enum ControlAnchor {
        BMAP_ANCHOR_TOP_LEFT = 0,
        BMAP_ANCHOR_TOP_RIGHT = 1,
        BMAP_ANCHOR_BOTTOM_LEFT = 2,
        BMAP_ANCHOR_BOTTOM_RIGHT = 3,
    }
}

declare module 'angular2-baidu-map/enum/NavigationControlType' {
    export enum NavigationControlType {
        BMAP_NAVIGATION_CONTROL_LARGE = 0,
        BMAP_NAVIGATION_CONTROL_SMALL = 1,
        BMAP_NAVIGATION_CONTROL_PAN = 2,
        BMAP_NAVIGATION_CONTROL_ZOOM = 3,
    }
}

declare module 'angular2-baidu-map/enum/MapStatus' {
    export enum MapStatus {
        LOADING = 0,
        LOADED = 1,
    }
}

