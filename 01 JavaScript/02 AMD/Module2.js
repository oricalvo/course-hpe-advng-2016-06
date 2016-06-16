define(function() {
    function setInternalState(){
    }

    function doSomething() {
        console.log("Module2");
    }

    function run(){
        console.log("run2");
    }

    return {
        run: run,
    };
});
