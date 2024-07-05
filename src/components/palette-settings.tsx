import ColorPalette from '../data/color-palette.ts'
import RangeSlider from './input/range-slider.tsx'

export default function PaletteSettings({palette, onPaletteChanged}: PaletteSettingsParams) {
    const minLightnessChanged = (minLightness: number) => {
        const cloned = structuredClone(palette) as ColorPalette

        cloned.minLightness = minLightness

        onPaletteChanged?.(cloned)
    }

    const maxLightnessChanged = (maxLightness: number) => {
        const cloned = structuredClone(palette) as ColorPalette

        cloned.maxLightness = maxLightness

        onPaletteChanged?.(cloned)
    }

    const minChromaChanged = (minChroma: number) => {
        const cloned = structuredClone(palette) as ColorPalette

        cloned.minChroma = minChroma

        onPaletteChanged?.(cloned)
    }

    const maxChromaChanged = (maxChroma: number) => {
        const cloned = structuredClone(palette) as ColorPalette

        cloned.maxChroma = maxChroma

        onPaletteChanged?.(cloned)
    }

    const shadesChanged = (shades: number) => {
        const cloned = structuredClone(palette) as ColorPalette

        cloned.shades = shades

        onPaletteChanged?.(cloned)
    }

    return <div className="flex flex-col">
        <RangeSlider key="shades" value={palette.shades} label="Shades" min={0} max={32} step={1} onValueChanged={shadesChanged}/>
        <RangeSlider key="minLightness" value={palette.minLightness} label="Min Lightness" min={0} max={100} onValueChanged={minLightnessChanged}/>
        <RangeSlider key="maxLightness" value={palette.maxLightness} label="Max Lightness" min={0} max={100} onValueChanged={maxLightnessChanged}/>
        <RangeSlider key="minChroma" value={palette.minChroma} label="Min Chroma" min={0.0} max={0.37} step={0.001} decimalPlaces={3} onValueChanged={minChromaChanged}/>
        <RangeSlider key="maxChroma" value={palette.maxChroma} label="Max Chroma" min={0.0} max={0.37} step={0.001} decimalPlaces={3} onValueChanged={maxChromaChanged}/>
    </div>
}

export interface PaletteSettingsParams {
    palette: ColorPalette
    onPaletteChanged?: (palette: ColorPalette) => void
}