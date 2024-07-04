import ColorItem, {ColorItemArraySchema} from './data/color-item.ts'

const colorPaletteKey = "colorPalette"

export function loadColorPalette(defaultValue: Readonly<ColorItem[]>): Readonly<ColorItem[]> {
    const storedColorsRaw = localStorage.getItem(colorPaletteKey)

    if (!storedColorsRaw) {
        return defaultValue
    }

    const parsed = JSON.parse(storedColorsRaw)

    const schemaParsed = ColorItemArraySchema.safeParse(parsed)

    if (schemaParsed.success) {
        return schemaParsed.data
    } else {
        return defaultValue
    }
}

export function saveColorPalette(value: Readonly<ColorItem[]>) {
    localStorage.setItem(colorPaletteKey, JSON.stringify(value))
}