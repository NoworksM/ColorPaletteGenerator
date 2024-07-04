import z from "zod"

const hexColorRegex = new RegExp("^#[0-9a-f]{6}$", "i")

export const ColorItemSchema = z.object({
    index: z.number().int().min(0).max(256),
    color: z.string().regex(hexColorRegex),
    hue: z.number().min(0).max(360)
})

export const ColorItemArraySchema = z.array(ColorItemSchema)

export type ColorItem = z.infer<typeof ColorItemSchema>

export type ColorItemArray = z.infer<typeof ColorItemArraySchema>

export default ColorItem