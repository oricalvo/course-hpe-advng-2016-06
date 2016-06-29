import {appModule} from "./app";

class HomeCtrl {
    message: string;

    constructor() {
        this.message = "Hello Ng 2";
    }
    
    sayHello() {
        alert("Hello " + this.message);
    }

    clean() {
        console.log("Clean");
    }
}

appModule.controller("HomeCtrl", HomeCtrl);
