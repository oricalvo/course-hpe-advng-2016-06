import {appModule} from "./app";
import "./clock";
import {ClockEventArgs, ClockComponent} from "./clock";
import {ComponentBase} from "./ComponentBase";
import {EventEmitter} from "./EventEmitter";

declare var require;

class HomeComponent extends ComponentBase {
    clockFormat: string;
    clock1: ClockComponent;
    model: any;

    constructor($scope, $attrs) {
        super($scope, $attrs);
        
        this.clockFormat = 'ss';
        this.model = {};
        this.provide.service("localDispatcher", EventEmitter);
    }
    
    change() {
        //console.log("change");
        
        //this.clockFormat = 'mm:ss';
        //this.model = {};
        this.model.id = 123;
    }

    onClockTick(args: ClockEventArgs) {
        //console.log("Tick: " + args.time);
    }

    stop() {
        this.clock1.stop();
    }

    syncClocks() {
        let dispatcher = this.getService("localDispatcher");
        console.log("sync raised");
        dispatcher.raise("sync");
    }
}

appModule.component("home", {
    template: require("./home.html!text"),
    controller: HomeComponent,
    styles: require("./home.css!css"),
});
