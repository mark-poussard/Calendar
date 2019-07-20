import Year from "./Year";
import Month, { Months } from "./Month";

export default class Day{
    private year : Year;
    private month : Month;
    private day : number;

    constructor(year : number, month : number, day : number){
        this.year = new Year(year);
        this.month = new Month(year, month);
        this.day = day;
    }

    getDayOfTheWeek = () => {
        return new Date(this.year.asNumber(), this.month.asNumber(), this.day).getDay();
    }

    isFirstOfMonth = () => {
        return this.day === 1;
    }

    isLastOfMonth = () => {
        return this.day === this.month.getNumberOfDays();
    }

    asNumber = () => {
        return this.day;
    }
}

export const Days = {
    SUNDAY      : 0,
    MONDAY      : 1,
    TUESDAY     : 2,
    WEDNESDAY   : 3,
    THURSDAY    : 4,
    FRIDAY      : 5,
    SATURDAY    : 6,
}