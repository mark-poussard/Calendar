import EntryRaw from "./EntryRaw";
import Color from "../Color";

export default class Entry{
    startDate : Date;
    endDate : Date;
    location : string;

    constructor(startDate : Date, endDate : Date, location : string){
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
    }

    getColor = () => {
        return Color.fromString(this.location);
    }

    static fromRAW = (raw : EntryRaw) => {
        return new Entry(
            new Date(raw.startDate),
            new Date(raw.endDate),
            raw.location
        );
    }
}