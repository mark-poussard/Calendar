import Year from "./Year";
import Month from "./Month";

export default class Day{
    year : Year;
    month : Month;
    day : number;

    constructor(year : number, month : number, day : number){
        this.year = new Year(year);
        this.month = new Month(year, month);
        this.day = day;
    }

    getDayOfTheWeek = () => {
        
    }
}

export const Days = {
    MONDAY      : 0,
    TUESDAY     : 1,
    WEDNESDAY   : 2,
    THURSDAY    : 3,
    FRIDAY      : 4,
    SATURDAY    : 5,
    SUNDAY      : 6,
}