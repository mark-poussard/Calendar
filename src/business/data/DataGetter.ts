import EntryRaw from "../../model/data/EntryRaw";
import Entry from "../../model/data/Entry";

const DATA_SRC = "https://pastebin.com/raw/n2s9hVky";

export default class DataGetter{
    getData = async () => {
        return fetch(DATA_SRC)
            .then(response => response.json())
            .then(jsonData => this.deserializeData(jsonData))
            .catch(error => console.error(error))
    }

    deserializeData = (data : EntryRaw[]) => {
        return data.map(raw => Entry.fromRAW(raw));
    }
}