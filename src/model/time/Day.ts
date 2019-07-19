import Year from "./Year";
import Month, { Months } from "./Month";

export default class Day{
    year : Year;
    month : Month;
    day : number;

    constructor(year : number, month : number, day : number){
        this.year = new Year(year);
        this.month = new Month(year, month);
        this.day = day;
    }

    // http://mathforum.org/dr.math/faq/faq.calendar.html
    getDayOfTheWeek = () => {
        const step1 = this.year.lastTwoDigits();
        const step2 = step1 / 4;
        const step3 = step2 + this.day;
        const step4 = step3 + this.month.getKeyValue();
        let step5 = step4;
        if(this.year.isLeapYear() && 
            (this.month.asNumber() === Months.JANUARY
            || this.month.asNumber() === Months.FEBRUARY)){
            step5 = step5 - 1;
        }
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