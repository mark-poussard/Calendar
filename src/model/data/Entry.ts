import EntryRaw from "./EntryRaw";

export default class Entry{
    startDate : Date;
    endDate : Date;
    location : string;

    constructor(startDate : Date, endDate : Date, location : string){
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
    }

    static fromRAW = (raw : EntryRaw) => {
        return new Entry(
            new Date(raw.startDate),
            new Date(raw.endDate),
            raw.location
        );
    }
}