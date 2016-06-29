import {appModule} from "./app";

class MyService {
    constructor() {
    }

    run() {
    }
}

appModule.service("myService", MyService);
