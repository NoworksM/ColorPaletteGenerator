import ColorPalette from '../data/color-palette.ts'
import RangeSlider from './input/range-slider.tsx'
import Checkbox from './input/checkbox.tsx'

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

    const lightnessChanged = (uniformLightness: number) => {
        const cloned = structuredClone(palette) as ColorPalette

        cloned.minLightness = uniformLightness
        cloned.maxLightness = uniformLightness

        onPaletteChanged?.(cloned)
    }

    const chromaChanged = (uniformChroma: number) => {
        const cloned = structuredClone(palette) as ColorPalette

        cloned.minChroma = uniformChroma
        cloned.maxChroma = uniformChroma

        onPaletteChanged?.(cloned)
    }

    const uniformLightnessChanged = (uniformLightness: boolean) => {
        const cloned = structuredClone(palette) as ColorPalette

        cloned.uniformLightness = uniformLightness
        cloned.maxLightness = cloned.minLightness

        onPaletteChanged?.(cloned)
    }

    const uniformChromaChanged = (uniformChroma: boolean) => {
        const cloned = structuredClone(palette) as ColorPalette

        cloned.uniformLightness = uniformChroma
        cloned.maxChroma = cloned.minChroma

        onPaletteChanged?.(cloned)
    }

    const shadesChanged = (shades: number) => {
        const cloned = structuredClone(palette) as ColorPalette

        cloned.shades = shades

        onPaletteChanged?.(cloned)
    }

    return <div className="flex flex-col">
        <RangeSlider key="shades" value={palette.shades} label="Shades" min={0} max={32} step={1} onValueChanged={shadesChanged}/>
        <Checkbox checked={palette.uniformLightness} label="Uniform Lightness" onValueChanged={uniformLightnessChanged}/>
        <RangeSlider key="minLightness" value={palette.minLightness} label="Min Lightness" min={0} max={1} step={0.001} decimalPlaces={3} onValueChanged={minLightnessChanged}/>
        <RangeSlider key="maxLightness" value={palette.maxLightness} label="Max Lightness" min={0} max={1} step={0.001} decimalPlaces={3} onValueChanged={maxLightnessChanged}/>
        <Checkbox checked={palette.uniformChroma} label="Uniform Chroma" onValueChanged={uniformChromaChanged}/>
        <RangeSlider key="minChroma" value={palette.minChroma} label="Min Chroma" min={0.0} max={0.37} step={0.001} decimalPlaces={3} onValueChanged={minChromaChanged}/>
        <RangeSlider key="maxChroma" value={palette.maxChroma} label="Max Chroma" min={0.0} max={0.37} step={0.001} decimalPlaces={3} onValueChanged={maxChromaChanged}/>
    </div>
}

export interface PaletteSettingsParams {
    palette: ColorPalette
    onPaletteChanged?: (palette: ColorPalette) => void
}