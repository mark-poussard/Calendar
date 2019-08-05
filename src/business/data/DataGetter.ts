import EntryRaw from "../../model/data/EntryRaw";
import Entry from "../../model/data/Entry";

//const DATA_SRC = "https://pastebin.com/raw/n2s9hVky";
const DATA_SRC = "https://gist.githubusercontent.com/mark-poussard/a43eade3e2426b64ca97932a23748fe8/raw/calendar.json"

export default class DataGetter{
    getData = async () => {
        return fetch(DATA_SRC, {cache: "no-store"})
            .then(response => response.json())
            .then(jsonData => this.deserializeData(jsonData))
    }

    deserializeData = (data : EntryRaw[]) : Entry[] => {
        return data.map(raw => Entry.fromRAW(raw));
    }
}