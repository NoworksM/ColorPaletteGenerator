import ColorDisplay from './color-display'
import AddBaseColor from './add-base-color'
import {MouseEventHandler, useState} from 'react'
import ColorItem from '../data/color-item.ts'
import ColorHueEditor from './color-hue-editor.tsx'

export default function BasePalette({colors, onAdd}: BasePaletteParams) {
    const [editingColor, setEditingColor] = useState<number | null>(null)

    const editHue = (index: number) => {
        if (index === editingColor) {
            setEditingColor(null)
        } else {
            setEditingColor(index)
        }
    }

    return <div>
        <div className="flex flex-row">
            {colors.map(c =>
                <ColorDisplay key={c.index} colorItem={c} editable={true} onEdit={editHue}/>)}
            <AddBaseColor onAdd={onAdd}/>
        </div>

        {editingColor !== null ? <ColorHueEditor hue={colors[editingColor].hue}/> : null}
    </div>
}

export interface BasePaletteParams {
    colors: Array<ColorItem>
    onAdd: MouseEventHandler
}