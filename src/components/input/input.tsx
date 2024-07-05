import {ChangeEventHandler, HTMLInputTypeAttribute} from 'react'

export default function Input({value, onChange, id, name, type}: InputParams) {
    return <input id={id} name={name} type={type} value={value} onChange={onChange} className="border-0 border-opacity-0 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-950 dark:text-slate-50 h-4 px-2 py-4"/>
}

export interface InputParams {
    value: number | string
    onChange: ChangeEventHandler<HTMLInputElement>
    id?: string
    name?: string
    type?: HTMLInputTypeAttribute
    min?: number | string
    max?: number | string
    step?: number | string
}