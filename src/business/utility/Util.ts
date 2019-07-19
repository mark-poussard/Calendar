export function range(size : number, startAt = 0) {
    return [...Object.keys(Array(size))].map(i => parseInt(i) + startAt);
}