var latestActivity;
var doSomething;

doSomething();

function doSomething() {
    console.log("Module1");

    //latestActivit = 10;
}

function run(){
    latestActivity = 10;

    console.log("run1");
}

exports.run = run;
