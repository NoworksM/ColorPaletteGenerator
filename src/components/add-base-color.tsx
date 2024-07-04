import {MouseEventHandler} from 'react'

export default function AddBaseColor({onAdd}: AddBaseColorParams) {
    return <div className="w-32 h-24 p-2 m-4 rounded-xl bg-slate-400 dark:bg-slate-700" onClick={onAdd}>
        <div className="font-bold text-white">Add Color</div>
    </div>
}

export interface AddBaseColorParams {
    onAdd: MouseEventHandler
}