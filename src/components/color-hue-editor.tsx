export default function ColorHueEditor({hue}: ColorHueEditorParams) {
    return <div>
        <label>
            Hue
            <input type="range" min={0} max={360} step={0.001} defaultValue={hue}/>
        </label>
    </div>
}

export interface ColorHueEditorParams {
    hue: number
}