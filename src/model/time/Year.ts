
export default class Year{
    private year : number;

    constructor(year : number){
        this.year = year;
    }

    static getCurrentYear = () => {
        return new Year(new Date().getFullYear());
    }

    asNumber = () => { return this.year; }

    isLeapYear = () => {
        return (this.year % 4 === 0 && this.year%100 !== 0) 
                || (this.year%100 === 0 && this.year%400 === 0);
    }

    equals = (that : Year) => {
        return this.year === that.year;
    }
}