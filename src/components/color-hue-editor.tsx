import {ChangeEventHandler, FormEvent} from 'react'

export default function ColorHueEditor({hue, onHueChanged}: ColorHueEditorParams) {
    const change: ChangeEventHandler<HTMLInputElement> = (event: FormEvent<HTMLInputElement>) => {
        const updatedHue = parseFloat(event.currentTarget.value)

        onHueChanged(updatedHue)
    }

    return <div className="flex flex-col w-64">
        <div className="flex flex-row w-full">
            <label for="hue-editor" className="text-slate-950 dark:text-slate-50 flex-1">Hue</label>
            <input id="hue-editor" name="hue-editor" type="number" min="0" max="360" step="0.001" defaultValue={hue} onChange={change}/>
        </div>
        <input type="range" min={0} max={360} step="0.0001" defaultValue={hue} onChange={change}/>
    </div>
}

export interface ColorHueEditorParams {
    hue: number
    onHueChanged: (hue: number) => void
}