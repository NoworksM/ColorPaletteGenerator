import {useState} from 'react'
import BasePalette from './components/base-palette'
import ColorItem from './data/color-item.ts'
import maxBy from './util/max-by.ts'
import Color from 'colorjs.io'
import {loadDefaultColorPalette, saveDefaultColorPalette} from './storage.ts'
import PaletteSettings from './components/palette-settings.tsx'
import ColorPalette from './data/color-palette.ts'
import PaletteDisplay from './components/palette-display.tsx'

const defaultColorHex = "#6366f1";
const defaultColor = new Color(defaultColorHex)
const defaultColors = loadDefaultColorPalette({
    minLightness: 0.1,
    maxLightness: 0.2,
    minChroma: 0.1,
    maxChroma: 0.1,
    shades: 4,
    colors: [{index: 0, color: defaultColorHex, hue: defaultColor.oklch[2]}]
})

function App() {
    const [palette, setPalette] = useState<Readonly<ColorPalette>>(defaultColors)

    const addColor = () => {
        const maxItem = maxBy(palette.colors, (v) => v.index)

        const maxIndex = maxItem ? maxItem.index + 1 : 0

        const updatedColors: ColorItem[] = [...palette.colors, {index: maxIndex, color: maxItem?.color ?? defaultColorHex, hue: maxItem ? maxItem.hue : defaultColor.oklch[2]}]

        updatedColors.sort((l, r) => l.index - r.index)

        const cloned = structuredClone(palette) as ColorPalette
        cloned.colors = updatedColors

        setPalette(cloned)
    }

    const colorChanged = (colorItem: ColorItem) => {
        const updatedColors = [...palette.colors]

        const color = new Color(colorItem.color)

        color.oklch.l = (palette.maxLightness + palette.minLightness) / 2
        color.oklch.c = (palette.maxChroma + palette.minChroma) / 2

        colorItem.color = color.toString({format: "hex"})

        for (let idx = 0; idx < updatedColors.length; idx++) {
            if (updatedColors[idx].index === colorItem.index) {
                updatedColors[idx] = colorItem
                break
            }
        }

        const cloned = structuredClone(palette) as ColorPalette
        cloned.colors = updatedColors

        updateColorLightnessAndChroma(cloned)

        saveDefaultColorPalette(cloned)

        setPalette(cloned)
    }

    const paletteChanged = (colorPalette: ColorPalette) => {
        updateColorLightnessAndChroma(colorPalette)

        saveDefaultColorPalette(colorPalette)

        setPalette(colorPalette)
    }

    const updateColorLightnessAndChroma = (colorPalette: ColorPalette) => {
        const averageLightness = (colorPalette.maxLightness + colorPalette.minLightness) / 2
        const averageChroma = (colorPalette.maxChroma + colorPalette.minChroma) / 2

        for (const colorItem of colorPalette.colors) {
            const color = new Color(colorItem.color)

            color.oklch.l = averageLightness
            color.oklch.c = averageChroma

            colorItem.color = color.toString({format: "hex"})
        }
    }

    return (
        <div className="flex flex-col h-screen">
            <header className="sticky top-0 z-10 h-8 bg-slate-300 dark:bg-slate-700">
                <div className="font-bold mx-2 text-slate-950 dark:text-slate-50 align-middle h-8">Color Palette
                    Generator
                </div>
            </header>
            <main className="bg-slate-100 dark:bg-slate-800 flex-1 h-[calc(100vh - )]">
                <PaletteSettings palette={palette} onPaletteChanged={paletteChanged}/>
                <BasePalette colors={palette.colors} onAdd={addColor} onColorChanged={colorChanged}/>
                <PaletteDisplay palette={palette}/>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default App
