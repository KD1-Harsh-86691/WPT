var counter = 0;
var anotherCounter = 0;
var QueueNosArray = new Array();

function Stop() {
    console.log("object");
    debugger;
    for (var i = 0; i < QueueNosArray.length; i++) {
        var QueueNoToDestroy = QueueNosArray[i];
        window.clearInterval(QueueNoToDestroy);
    }
    QueueNosArray = new Array();
    // var refToDiv = document.getElementById("QueNos");
    // refToDiv.innerText = QueueNosArray.toString();
}


// start a car
function Start() {
    var QueueNo = window.setInterval(driveCar, 100);
    QueueNosArray.push(QueueNo);

    // var refToDiv = document.getElementById("QueNos");

    // refToDiv.innerText = QueueNosArray.toString();
}


function driveCar() {
    counter = counter + 10;
    var refTomyCar = document.getElementById("myImage");

    if (refTomyCar.style.marginLeft != "540px") {
        refTomyCar.style.marginLeft = counter + "px";

        // to print margin in x-axis
        document.getElementById("x-axis").value = refTomyCar.style.marginLeft;
    }
    else {
        refTomyCar.style.rotate = "40deg";
        crashCar();
    }

}


function crashCar() {
    var refTomyCar = document.getElementById("myImage");
    anotherCounter = anotherCounter + 10;
    refTomyCar.style.marginTop = anotherCounter + "px";

    // to print margin in y-axis
    document.getElementById("y-axis").value = refTomyCar.style.marginTop;

    if(refTomyCar.style.marginTop == "300px")
    {
        // debugger;
        console.log("Hello world..123");
        Stop();
    }


}

