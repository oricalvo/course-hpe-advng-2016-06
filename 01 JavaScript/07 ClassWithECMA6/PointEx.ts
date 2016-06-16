import {Point} from "./Point";

export class PointEx extends Point {
    private z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);

        setTimeout(()=>{
            
        }, 1000);
        
        this.z = z;
    }

    dump() {
        super.dump();

        console.log(this.z);
    }
}
