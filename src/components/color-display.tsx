import Color from 'colorjs.io'
import ColorItem from '../data/color-item.ts'

export default function ColorDisplay({colorItem, onEdit, editable}: ColorDisplayParams) {
    const colorObject = new Color(colorItem.color)

    const click = () => {
        if (editable) {
            onEdit(colorItem)
        }
    }

    return <div className="w-32 h-24 p-2 m-4 rounded-xl" style={{backgroundColor: colorObject.display()}} onClick={click}>
        <div className="font-bold text-white">{colorObject.toString({format: "hex"})}</div>
    </div>
}

export interface ColorDisplayParams {
    colorItem: ColorItem
    editing?: boolean
    editable?: boolean
    onEdit: (colorItem: ColorItem) => void
}