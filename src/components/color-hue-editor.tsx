import RangeSlider from './input/range-slider.tsx'

export default function ColorHueEditor({hue, onHueChanged}: ColorHueEditorParams) {
    return <div className="flex flex-col w-64">
        <RangeSlider label="Hue" min={0} max={360} step={0.001} value={hue} decimalPlaces={3} onValueChanged={onHueChanged}/>
        <div className="h-6 mx-2 w-64" style={{backgroundImage: `linear-gradient(to right, oklch(74% 0.12 0), oklch(74% 0.12 30), oklch(74% 0.12 60), oklch(74% 0.12 90), oklch(74% 0.12 120), oklch(74% 0.12 150), oklch(74% 0.12 180), oklch(74% 0.12 210), oklch(74% 0.12 240), oklch(74% 0.12 270), oklch(74% 0.12 300), oklch(74% 0.12 330), oklch(74% 0.12 360)`}}/>
    </div>
}

export interface ColorHueEditorParams {
    hue: number
    onHueChanged: (hue: number) => void
}