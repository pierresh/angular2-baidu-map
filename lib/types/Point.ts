export interface BPointConstructor {
  new (lng?: number, lat?: number): BPoint
}

export interface BPoint {
  equals(other: BPoint): boolean
}

export interface Point {
  lng: number
  lat: number
}
