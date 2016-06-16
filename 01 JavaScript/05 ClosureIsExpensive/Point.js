var Point = (function(){
    "use strict";
    
    function Point(x, y){
        function dump(){
            console.log(x + ", " + y);
        }

        function move(dx, dy){
            x+=dx;
            y+=dy;
        }

        return {
            dump: dump,
            move: move,
        };
    }
    
    return Point;
})();