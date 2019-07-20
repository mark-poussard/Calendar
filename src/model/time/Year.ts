
export default class Year{
    year : number;

    constructor(year : number){
        this.year = year;
    }

    asNumber = () => { return this.year; }

    isLeapYear = () => {
        return (this.year % 4 === 0 && this.year%100 !== 0) 
                || (this.year%100 === 0 && this.year%400 === 0);
    }
}