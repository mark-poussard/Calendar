type Callback<T> = (value : T) => void;

export default class SubscribableValue<T>{
    private value : T;
    private subscriptions : Map<number, Callback<T>>;
    private subscriptionsIdGenerator : number;
    private isInCallback : boolean;

    constructor(value : T){
        this.value = value;
        this.subscriptions = new Map<number, Callback<T>>();
        this.subscriptionsIdGenerator = 0;
        this.isInCallback = false;
    }

    subscribeToValue = (callback : Callback<T>) => {
        if(this.isInCallback){
            throw new Error("Tried to subscribe to value in a callback.");
        }
        const subscriptionId = this.subscriptionsIdGenerator++;
        this.subscriptions.set(subscriptionId, callback);
        this.doCallback(callback);
        return subscriptionId;
    }

    unsubscribe = (subscriptionId : number) => {
        if(this.isInCallback){
            throw new Error("Tried to unsubscribe to value in a callback.");
        }
        this.subscriptions.delete(subscriptionId);
    }

    setValue = (value : T) => {
        if(this.isInCallback){
            throw new Error("Tried to set value in a callback.");
        }
        this.value = value;
        this.subscriptions.forEach(callback => this.doCallback(callback));
    }

    getValue = () => this.value;

    private doCallback = (callback : Callback<T>) => {
        this.isInCallback = true;
        callback(this.value);
        this.isInCallback = false;
    }
}