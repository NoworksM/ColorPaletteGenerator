import ColorPalette from '../data/color-palette.ts'
import PaletteColorDisplay from './palette-color-display.tsx'

export default function PaletteDisplay({palette}: PaletteDisplayParams) {
    return <div className="flex flex-row">
        {palette.colors.map(c => <PaletteColorDisplay palette={palette} colorItem={c}/>)}
    </div>
}

export interface PaletteDisplayParams {
    palette: ColorPalette
}