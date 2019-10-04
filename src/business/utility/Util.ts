export function range(size : number, startAt = 0) {
    return [...(Array(size) as any).keys()].map(i => parseInt(i) + startAt);
}

// From https://stackoverflow.com/a/16348977
export function stringToHexColour(str : string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}