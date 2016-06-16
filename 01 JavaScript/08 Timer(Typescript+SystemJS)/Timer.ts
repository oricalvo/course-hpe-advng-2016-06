export interface TimerCallback {
    (timer: Timer, args: TimerArgs): void;
}

export interface TimerArgs {
}

export class Timer {
    private interval:number;
    private intervalId: number;
    private callbacks: TimerCallback[];

    constructor(interval:number) {
        this.interval = interval;
        this.intervalId = 0;
        this.callbacks = [];
    }

    start() {
        if(this.intervalId) {
            return;
        }

        this.intervalId = setInterval(()=> {
            this.raise();
        }, this.interval)
    }
    
    stop() {
        if(!this.intervalId) {
            return;
        }
        
        clearTimeout(this.intervalId);
        this.intervalId = 0;
    }

    subscribe(callback: TimerCallback) {
        this.callbacks.push(callback);
    }

    unsubscribe(callback: TimerCallback) {
        for(var i=0; i<this.callbacks.length; i++) {
            if(this.callbacks[i] == callback) {
                this.callbacks.splice(i, 1);
                i--;
            }
        }
    }
    
    private raise() {
        var args: TimerArgs = {};
        for(var callback of this.callbacks) {
            callback(this, args);
        }
    }
}
