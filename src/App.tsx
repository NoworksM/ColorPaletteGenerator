import {useState} from 'react'
import BasePalette from './components/base-palette'
import ColorItem from './data/color-item.ts'
import maxBy from './util/max-by.ts'
import Color from 'colorjs.io'
import {loadColorPalette} from './storage.ts'

const defaultColorHex = "#6366f1";
const defaultColor = new Color(defaultColorHex)
const defaultColors = loadColorPalette([{index: 0, color: defaultColorHex, hue: defaultColor.oklch[2]}])

function App() {
    const [minLightness, setMinLightness] = useState(defaultColor.oklch.l - 10)
    const [maxLightness, setMaxLightness] = useState(defaultColor.oklch.l + 10)
    const [minSaturation, setMinSaturation] = useState(defaultColor.oklch.c)
    const [maxSaturation, setMaxSaturation] = useState(defaultColor.oklch.c)
    const [shadeCount, setShadeCount] = useState(4)
    const [lightnessGap, setLightnessGap] = useState(10)
    const [colors, setColors] = useState<Readonly<ColorItem>[]>(defaultColors)

    const addColor = () => {
        const maxItem = maxBy(colors, (v) => v.index)

        const maxIndex = maxItem ? maxItem.index + 1 : 0

        const updatedColors: ColorItem[] = [...colors, {index: maxIndex, color: maxItem?.color ?? defaultColorHex, hue: maxItem ? maxItem.hue : defaultColor.oklch[2]}]

        updatedColors.sort((l, r) => l.index - r.index)

        setColors(updatedColors)
    }

    const colorChanged = (colorItem: ColorItem) => {
        const updatedColors = [...colors]

        for (let idx = 0; idx < updatedColors.length; idx++) {
            if (updatedColors[idx].index === colorItem.index) {
                updatedColors[idx] = colorItem
                break
            }
        }

        setColors(updatedColors)
    }

    return (
        <div className="flex flex-col h-screen">
            <header className="sticky top-0 z-10 h-8 bg-slate-300 dark:bg-slate-700">
                <div className="font-bold mx-2 text-slate-950 dark:text-slate-50 align-middle h-8">Color Palette
                    Generator
                </div>
            </header>
            <main className="bg-slate-100 dark:bg-slate-800 flex-1 h-[calc(100vh - )] ">
                <BasePalette colors={colors} onAdd={addColor} onColorChanged={colorChanged}/>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default App
