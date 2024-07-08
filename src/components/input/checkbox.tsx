import {ChangeEvent} from 'react'

export default function Checkbox({checked, id, label, onValueChanged, width}: CheckboxParams) {
    width ??= "w-64"

    id ??= label

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        onValueChanged?.(e.currentTarget.checked)
    }

    return <div className={`flex flex-row ${width} m-2`}>
        <label htmlFor={id} className="text-slate-950 dark:text-slate-50 flex-1">{label}</label>
        <input type="checkbox" checked={checked} onChange={change}/>
    </div>
}

export interface CheckboxParams {
    checked: boolean
    label: string
    id?: string
    onValueChanged?: (checked: boolean) => void
    width?: string
}