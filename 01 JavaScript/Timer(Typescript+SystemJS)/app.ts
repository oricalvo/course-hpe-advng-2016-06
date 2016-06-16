import {Timer} from "./Timer";

var timer = new Timer(1000);

timer.subscribe(()=> {
    console.log("Tick1");
});

timer.subscribe(()=> {
    console.log("Tick2");
});

timer.start();
