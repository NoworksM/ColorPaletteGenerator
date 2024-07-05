import ColorPalette from '../data/color-palette.ts'
import ColorItem from '../data/color-item.ts'
import Color from 'colorjs.io'

export default function PaletteColorDisplay({palette, colorItem}: PaletteDisplayParams) {
    const colors: Color[] = []

    const lightnessStep = palette.uniformLightness ? 0 : (palette.maxLightness - palette.minLightness) / palette.shades
    const chromaStep = palette.uniformChroma ? 0 : (palette.maxChroma - palette.minChroma) / palette.shades

    let lightness = palette.minLightness
    let chroma = palette.minChroma

    for (let idx = 0; idx < palette.shades; idx++) {
        const color = new Color(colorItem.color)

        color.oklch.l = lightness
        color.oklch.c = chroma

        colors.push(color)

        lightness += lightnessStep
        chroma += chromaStep
    }



    return <div>
        {colors.map(c => <ColorShade color={c}/>)}
    </div>
}

function ColorShade({color}: ColorShadeParams) {
    return <div className="h-8 w-12" style={{backgroundColor: color.display()}}>
    </div>
}

export interface PaletteDisplayParams {
    palette: ColorPalette
    colorItem: ColorItem
}

interface ColorShadeParams {
    color: Color
}