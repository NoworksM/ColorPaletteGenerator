import RangeSlider from './input/range-slider.tsx'

export default function ColorHueEditor({hue, onHueChanged}: ColorHueEditorParams) {
    return <RangeSlider label="Hue" min={0} max={360} step={0.001} value={hue} decimalPlaces={3} onValueChanged={onHueChanged}/>
}

export interface ColorHueEditorParams {
    hue: number
    onHueChanged: (hue: number) => void
}