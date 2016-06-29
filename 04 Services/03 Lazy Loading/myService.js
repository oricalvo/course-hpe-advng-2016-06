(function() {
    
    angular.module("myApp").factory("myService", function() {
        return {
            run: function() {
                console.log("run");
            }
        };
    });
    
})();



// module.exports = {
//     run: function() {
//         console.log("run");
//     }
// };
