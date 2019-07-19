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

    asNumber = () => {
        return this.month;
    }

    getNumberOfDays = () => {
        const days31 = [1, 3, 5, 7, 8, 10, 12];
        const days30 = [4, 6, 9, 11];
        if(this.month === Months.FEBRUARY){
            if(this.year.isLeapYear()){
                return 28;
            }
            else{
                return 29;
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

    getDays = () => {
        return range(this.getNumberOfDays(), 1)
            .map(d => new Day(this.year.asNumber(), this.month, d));
    }

    getKeyValue = () => {
        switch(this.month){
            case Months.JANUARY:
                return 1;
            case Months.FEBRUARY:
                return 4;
            case Months.MARCH:
                return 4;
            case Months.APRIL:
                return 0;
            case Months.MAY:
                return 2;
            case Months.JUNE:
                return 5;
            case Months.JULY:
                return 0;
            case Months.AUGUST:
                return 3;
            case Months.SEPTEMBER:
                return 6;
            case Months.OCTOBER:
                return 1;
            case Months.NOVEMBER:
                return 4;
            case Months.DECEMBER:
                return 6;
            default:
                throw new Error("Unreachable code");                                                                                                                                                                                                                                                                                                                                                                                                                   
        }
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