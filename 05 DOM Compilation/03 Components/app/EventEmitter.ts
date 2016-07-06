export class EventEmitter {
    listeners: Function[];

    constructor() {
        this.listeners = [];
    }
    
    raise(name: string) {
        for(let listener of this.listeners) {
            listener();
        }
    }
    
    subscribe(name: string, listener) {
        this.listeners.push(listener);
    }
}
