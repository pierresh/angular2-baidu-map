import { Overlay } from './Overlay'
import { BPointConstructor } from './Point'

export interface BPolygonConstructor {
  new (points: Array<BPointConstructor>, options?: PolygonOptions): BPolygon
}

export interface BPolygon extends Overlay {
  setPath(points: Array<BPointConstructor>): void
  setStrokeColor(strokeColor: string): void
  setFillColor(fillColor: string): void
  setStrokeOpacity(strokeOpacity: number): void
  setStrokeWeight(strokeWeight: number): void
  setFillOpacity(fillOpacity: number): void
  setStrokeStyle(strokeStyle: string): void
  enableEditing(): void
  disableEditing(): void
  enableMassClear(): void
  disableMassClear(): void
}

export interface PolygonOptions {
  strokeColor?: string
  fillColor?: string
  strokeWeight?: number
  strokeOpacity?: number
  fillOpacity?: number
  strokeStyle?: string
  enableMassClear?: boolean
  enableEditing?: boolean
  enableClicking?: string
}
