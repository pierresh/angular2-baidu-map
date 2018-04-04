import { BSizeConstructor, BSize, Size } from './Size'

export interface BIconConstructor {
  new (url: string, size?: BSize, opts?: BIconOptions): BIcon
}

export interface BIcon {
  setImageUrl(imageUrl: string): void
  setSize(size: BSize): void
  setImageSize(imageSize: BSize): void
  setAnchor(anchor: BSize): void
  setImageOffset(offset: BSize): void
  setInfoWindowAnchor(anchor: BSize): void
  setPrintImageUrl(url: string): void
}

export interface Icon {
  anchor?: Size
  size?: Size
  imageOffset?: Size
  imageUrl?: string
  infoWindowAnchor?: Size
  printImageUrl?: string
}

export interface IconOptions {
  anchor?: Size
  imageOffset?: Size
  infoWindowAnchor?: Size
  printImageUrl?: string
}

export interface BIconOptions {
  anchor?: BSizeConstructor
  imageOffset?: BSizeConstructor
  infoWindowAnchor?: BSizeConstructor
  printImageUrl?: string
}
