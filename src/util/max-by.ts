export default function maxBy<T>(arr: T[], func: (value: T) => number): T | undefined {
    const min = Math.max(...arr.map(func))
    return arr.find(item => func(item) === min)
}