import { stringToHexColour, stringToHash } from "../business/utility/Util";

export default class Color{
    red : number;
    green : number;
    blue : number;
    alpha : number;

    constructor(red : number, green : number, blue : number, alpha : number){
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }

    lighten = (value : number) => {
        const red = (this.red + value <= 255)?(this.red + value):(255);
        const green = (this.green + value <= 255)?(this.green + value):(255);
        const blue = (this.blue + value <= 255)?(this.blue + value):(255);
        return new Color(red, green, blue, this.alpha);
    }

    darken = (value : number) => {
        const red = (this.red - value >= 0)?(this.red - value):(0);
        const green = (this.green - value >= 0)?(this.green - value):(0);
        const blue = (this.blue - value >= 0)?(this.blue - value):(0);
        return new Color(red, green, blue, this.alpha);
    }

    toCssString = () => {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }

    static RED = new Color(255, 0, 0, 1);
    static GREEN = new Color(0, 255, 0, 1);
    static BLUE = new Color(0, 0, 255, 1);
    static GRAY = new Color(128, 128, 128, 1);

    static COLORS = [
        '--color-pink', '--color-yellow', '--color-green', '--color-purple', '--color-grey', '--color-blue',
        '--color-manatee', '--color-tumbleweed', '--color-sage', '--color-cadet-grey', '--color-wild-blue-yonder', '--color-peter-blue '
    ];

    static fromHexString = (hexString : string) => {
        const red = parseInt(hexString.substr(1, 2), 16);
        const green = parseInt(hexString.substr(3, 2), 16);
        const blue = parseInt(hexString.substr(5, 2), 16);
        return new Color(red, green, blue, 1);
    }

    static fromString = (str : string) => {
        const hash = stringToHash(str);
        return `var(${Color.COLORS[hash % Color.COLORS.length]})`;
    }
}