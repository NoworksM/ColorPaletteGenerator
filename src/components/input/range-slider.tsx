import {ChangeEventHandler, FormEvent} from 'react'

export default function RangeSlider({min, max, step, value, onValueChanged, decimalPlaces, width, height, label, id}: RangeSliderParams) {
    const change: ChangeEventHandler<HTMLInputElement> = (event: FormEvent<HTMLInputElement>) => {
        const updatedHue = parseFloat(event.currentTarget.value)

        onValueChanged?.(updatedHue)
    }

    width ??= "w-64"

    id ??= label

    return <div className={`flex flex-col ${width} ${height} m-2`}>
        <div className="flex flex-row w-full">
            <label htmlFor={id} className="text-slate-950 dark:text-slate-50 flex-1">{label}</label>
            <input id={id} name={id} type="number" min={min} max={max} step={step} className="input" value={value?.toFixed(decimalPlaces ?? 0)} onChange={change}/>
        </div>
        <input type="range" className="text-slate-600" min={min} max={max} step={step} value={value} onChange={change}/>
    </div>
}

export interface RangeSliderParams {
    min?: number
    max?: number
    step?: number
    decimalPlaces?: number
    value: number
    onValueChanged?: (value: number) => void
    width?: string
    height?: string
    label: string
    id?: string
}