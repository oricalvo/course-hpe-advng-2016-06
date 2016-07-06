import {appModule} from "./app";
import {ComponentBase} from "./ComponentBase";
import {EventEmitter} from "./EventEmitter";

declare var require;

export class ClockComponent extends ComponentBase {
    time:Date;
    format:string;
    internalFormat:string;
    onTick:Function;
    intervalId: number;

    constructor(private $interval, $scope, $attrs) {
        super($scope, $attrs);

        this.time = new Date();
        this.internalFormat = this.format = this.format || "HH:mm:ss";
        this.intervalId = null;

        this.start();
        
        let localDispatcher: EventEmitter = this.getService("localDispatcher");
        localDispatcher.subscribe("sync", function() {
            console.log("sync caught");
        });
    }

    $onChanges() {
        console.log("$onChanges");

        this.internalFormat = this.format;
    }

    start() {
        if(this.intervalId) {
            return;
        }

        this.intervalId = this.$interval(() => {
            this.time = new Date();

            this.onTick({
                $event: {
                    time: this.time,
                }
            });
        }, 1000);
    }

    stop() {
        if(this.intervalId) {
            this.$interval.cancel(this.intervalId);
            this.intervalId = null;
        }
    }
}

export interface ClockEventArgs {
    time: Date;
}

appModule.component("clock", {
    template: require("./clock.html!text"),
    controller: ClockComponent,
    styles: require("./clock.css!css"),
    bindings: {
        format: "<",
        model: "<",
        onTick: "&",
    }
});
