import {z} from "zod"
import {ColorItemArraySchema} from './color-item.ts'

export const ColorPaletteSchema = z.object({
    minLightness: z.number().min(0).max(100),
    maxLightness: z.number().min(0).max(100),
    minSaturation: z.number().min(0).max(0.37),
    maxSaturation: z.number().min(0).max(0.37),
    shades: z.number().int().min(1).max(16),
    colors: ColorItemArraySchema
})

export type ColorPalette = z.infer<typeof ColorPaletteSchema>

export default ColorPalette