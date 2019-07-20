import Year from "./Year";
import { range } from "../../business/utility/Util";
import Day from "./Day";

export default class Month{
    private year : Year;
    private month : number;

    constructor(year : number, month : number){
        this.year = new Year(year);
        this.month = month;
    }

    static getCurrentMonth = () => {
        const now = new Date();
        return new Month(now.getFullYear(), now.getMonth());
    }

    public asNumber = () => {
        return this.month;
    }

    public asString = () => {
        switch(this.month){
            case Months.JANUARY:
                return "January";
            case Months.FEBRUARY:
                return "February";
            case Months.MARCH:
                return "March";
            case Months.APRIL:
                return "April";
            case Months.MAY:
                return "May";
            case Months.JUNE:
                return "June";
            case Months.JULY:
                return "July";
            case Months.AUGUST:
                return "August";
            case Months.SEPTEMBER:
                return "September";
            case Months.OCTOBER:
                return "October";
            case Months.NOVEMBER:
                return "November";
            case Months.DECEMBER:
                return "December";
        }
    }

    public getNumberOfDays = () => {
        const days31 = [0, 2, 4, 6, 7, 9, 11];
        const days30 = [3, 5, 8, 10];
        if(this.month === Months.FEBRUARY){
            if(this.year.isLeapYear()){
                return 29;
            }
            else{
                return 28;
            }
        }
        if(days31.indexOf(this.month) > -1){
            return 31;
        }
        if(days30.indexOf(this.month) > -1){
            return 30;
        }
        throw new Error("Unreachable code");
    }

    public getDays = () => {
        return range(this.getNumberOfDays(), 1)
            .map(d => new Day(this.year.asNumber(), this.month, d));
    }

    public getYear = () => {
        return this.year;
    }

    public getNextMonth = () => {
        let nextMonthYear = this.year.asNumber();
        let nextMonth = this.month + 1;
        if(nextMonth > Months.DECEMBER){
            nextMonth = Months.JANUARY;
            nextMonthYear += 1;
        }
        return new Month(nextMonthYear, nextMonth);
    }

    public getPreviousMonth = () => {
        let nextMonthYear = this.year.asNumber();
        let nextMonth = this.month - 1;
        if(nextMonth < Months.JANUARY){
            nextMonth = Months.DECEMBER;
            nextMonthYear -= 1;
        }
        return new Month(nextMonthYear, nextMonth);
    }
}

export const Months = {
    JANUARY     : 0,
    FEBRUARY    : 1,
    MARCH       : 2,
    APRIL       : 3,
    MAY         : 4,
    JUNE        : 5,
    JULY        : 6,
    AUGUST      : 7,
    SEPTEMBER   : 8,
    OCTOBER     : 9,
    NOVEMBER    : 10,
    DECEMBER    : 11,
}