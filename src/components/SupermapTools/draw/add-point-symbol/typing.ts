export interface PointSymbolProps {
  selectedTypeId: number
  symbolColor: string
  space: number
  density: number
}

export type PointSymbolState = PointSymbolProps & {
  selectedSymbolId: number
  addType: string
}