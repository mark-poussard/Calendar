import EntryRaw from "./EntryRaw";

export default class Entry{
    startDate : Date;
    endDate : Date;
    location : String;

    constructor(startDate : Date, endDate : Date, location : String){
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
    }

    static fromRAW = (raw : EntryRaw) => {
        return null;
    }
}