export function range(size : number, startAt = 0) {
    return [...(Array(size) as any).keys()].map(i => parseInt(i) + startAt);
}