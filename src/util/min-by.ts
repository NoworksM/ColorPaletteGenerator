export default function minBy<T>(arr: T[], func: (value: T) => number): T | undefined {
    const min = Math.min(...arr.map(func))
    return arr.find(item => func(item) === min)
}