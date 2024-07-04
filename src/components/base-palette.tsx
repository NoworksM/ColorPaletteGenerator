import ColorDisplay from './color-display'
import AddBaseColor from './add-base-color'
import {MouseEventHandler, useState} from 'react'
import ColorItem from '../data/color-item.ts'
import ColorHueEditor from './color-hue-editor.tsx'
import Color from 'colorjs.io'

export default function BasePalette({colors, onAdd, onColorChanged}: BasePaletteParams) {
    const [editingColor, setEditingColor] = useState<Readonly<ColorItem> | null>(null)

    const editHue = (colorItem: ColorItem) => {
        if (editingColor && colorItem.index === editingColor.index) {
            setEditingColor(null)
            onColorChanged(editingColor)
        } else {
            setEditingColor(colorItem)
        }
    }

    const mapColorItem = (colorItem: ColorItem) => {
        if (editingColor && colorItem.index === editingColor.index) {
            return <ColorDisplay key={editingColor.index} colorItem={editingColor} editable={true} onEdit={editHue}/>
        } else {
            return <ColorDisplay key={colorItem.index} colorItem={colorItem} editable={true} onEdit={editHue}/>
        }
    }

    const hueChanged = (hue: number) => {
        if (!editingColor) {
            return
        }

        const updatedColor = new Color(editingColor.color)
        updatedColor.oklch.h = hue

        setEditingColor({index: editingColor.index, color: updatedColor.toString({format: "hex"}), hue: hue})
    }

    return <div>
        <div className="flex flex-row">
            {colors.map(mapColorItem)}
            <AddBaseColor onAdd={onAdd}/>
        </div>

        {editingColor !== null ? <ColorHueEditor hue={editingColor.hue} onHueChanged={hueChanged}/> : null}
    </div>
}

export interface BasePaletteParams {
    colors: Readonly<Array<ColorItem>>
    onAdd: MouseEventHandler
    onColorChanged: (colorItem: ColorItem) => void
}