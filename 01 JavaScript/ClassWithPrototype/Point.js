var Point = (function(){
    "use strict";
   
    function Point(x, y){
        this.x = x;
        this.y = y;
    }
   
    Point.prototype.dump = function dump(){
        console.log(this.x + ", " + this.y);
    }

    Point.prototype.move = function move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
   
    return Point;
})();