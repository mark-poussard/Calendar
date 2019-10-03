import Entry from "../../model/data/Entry";
import DataGetter from "./DataGetter";

class DataStore{

    private data : Entry[] | undefined;
    private dataGetter : DataGetter;
    private callbacks : (() => void)[];
    private callbackLock : boolean;

    constructor(){
        this.dataGetter = new DataGetter();
        this.callbacks = [];
        this.callbackLock = false;
    }

    init = () => {
        this.dataGetter.getData()
            .then(data => this.data = data)
            .then(this.doCallbacks);
    }

    onDataReady = (callback : () => void) => {
        if(this.data != null){
            this.doCallback(callback);
        }
        else{
            this.callbacks.push(callback);
        }
    }

    getLocationsForDate = (date : Date) => {
        if(this.data == null){
            throw new Error("Data was not ready to consume");
        }
        const result = [];
        for(let entry of this.data){
            if(date.getTime() >= entry.startDate.getTime()
                && date.getTime() <= entry.endDate.getTime()){
                result.push(entry.location);
            }
        }
        return result;
    }

    private doCallbacks = () => {
        for(let callback of this.callbacks){
            this.doCallback(callback);
        }
        this.callbacks = [];
    }

    private doCallback = (callback : () => void) => {
        if(this.callbackLock){
            throw new Error("Can't call a callback in a callback");
        }
        this.callbackLock = true;
        callback();
        this.callbackLock = false;
    }
}

export default new DataStore();