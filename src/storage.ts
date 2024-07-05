import ColorItem from './data/color-item.ts'
import ColorPalette, {ColorPaletteSchema} from './data/color-palette.ts'

const colorPaletteKey = "colorPalette"

const minLightnessKey = "minLightness"
const maxLightnessKey = "maxLightness"

export function loadDefaultColorPalette(defaultValue: Readonly<ColorPalette>): Readonly<ColorPalette> {
    const storedColorsRaw = localStorage.getItem(colorPaletteKey)

    if (!storedColorsRaw) {
        return defaultValue
    }

    const parsed = JSON.parse(storedColorsRaw)

    const schemaParsed = ColorPaletteSchema.safeParse(parsed)

    if (schemaParsed.success) {
        return schemaParsed.data
    } else {
        return defaultValue
    }
}

export function saveDefaultColorPalette(value: Readonly<ColorItem[]>) {
    localStorage.setItem(colorPaletteKey, JSON.stringify(value))
}

export function loadMinLightness(defaultValue: number) {
    const rawMinLightness = localStorage.getItem(minLightnessKey)

    if (!rawMinLightness) {
        return defaultValue
    } else {
        return parseFloat(rawMinLightness)
    }
}

export function saveMinLightness(value: number) {
    localStorage.setItem(minLightnessKey, value.toString())
}

export function loadMaxLightness(defaultValue: number) {
    const rawMaxLightness = localStorage.getItem(maxLightnessKey)

    if (!rawMaxLightness) {
        return defaultValue
    } else {
        return parseFloat(rawMaxLightness)
    }
}

export function saveMaxLightness(value: number) {
    localStorage.setItem(maxLightnessKey, value.toString())
}