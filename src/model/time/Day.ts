import Year from "./Year";
import Month, { Months } from "./Month";
import CalendarOptions from "../CalendarOptions";

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
        return this.toDate().getDay();
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

    getMonth = () => {
        return this.month;
    }

    getYear = () => {
        return this.year;
    }

    isToday = () => {
        const now = new Date();
        return now.getFullYear() === this.year.asNumber()
                && now.getMonth() === this.month.asNumber()
                && now.getDate() === this.day;
    }

    toDate = () => {
        return new Date(Date.UTC(this.year.asNumber(), this.month.asNumber(), this.day));
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

    asString : (day : number) => {
        switch(day){
            case Days.MONDAY :
                return "MON";
            case Days.TUESDAY :
                return "TUE";
            case Days.WEDNESDAY :
                return "WED";
            case Days.THURSDAY :
                return "THU";
            case Days.FRIDAY :
                return "FRI";
            case Days.SATURDAY :
                return "SAT";
            case Days.SUNDAY :
                return "SUN";
            default :
                return "";
        }
    },

    getFirstDayOfWeek : () => {
        return CalendarOptions.START_CALENDAR_HEADER_ON;
    },

    getLastDayOfWeek : () => {
        return (Days.getFirstDayOfWeek() + 6) % 7;
    },
}