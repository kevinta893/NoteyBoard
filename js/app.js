/**
 * Created by Kevin on 4/16/2016.
 */

var lastPt = {};
var mouseDown = false;
var mouseMoved = false;

var canvas;
var canvasCtx;
var CANVAS_ATTR = {
    width: 500,
    height: 500
};

var canvasPen = {
    color: "#aa5432",
    lineJoin: "round",
    lineWidth: 5
};

var lines = [];

$(document).ready(function(){
    //hook up mouse event
    canvas = document.getElementById("billboard");
    canvas.setAttribute("width", CANVAS_ATTR.width);
    canvas.setAttribute("height", CANVAS_ATTR.height);

    canvasCtx = canvas.getContext("2d");


    canvas.addEventListener("mousedown", function(e){
        mouseDown = true;
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;
        lastPt = {x: mouseX, y: mouseY};

        drawLine(lastPt.x, lastPt.y, lastPt.x, lastPt.y + 0.01);
    });

    canvas.addEventListener("mousemove", function(e){
        if (mouseDown == true){
            var mouseX = e.pageX - this.offsetLeft;
            var mouseY = e.pageY - this.offsetTop;
            //draw line
            drawLine(lastPt.x, lastPt.y, mouseX, mouseY);

            lastPt = {x: mouseX, y: mouseY};
        }
    });

    canvas.addEventListener("mouseup", function(e){
        mouseDown = false;
    });

    canvas.addEventListener("mouseleave", function(e){
        mouseDown = false;
    });
});

function drawLine(x1,y1,x2,y2){
    canvasCtx.strokeStyle = canvasPen.color;
    canvasCtx.lineJoin = canvasPen.lineJoin;
    canvasCtx.lineWidth = canvasPen.lineWidth;
    canvasCtx.beginPath();
    canvasCtx.moveTo(x1, y1);
    canvasCtx.lineTo(x2, y2);
    canvasCtx.closePath();
    canvasCtx.stroke();

    //track this line
    lines.push({x1: x1, y1: y1, x2: x2, y2: y2});
}

function clearCanvas(){
    canvasCtx.clearRect(0,0, canvasCtx.canvas.width, canvasCtx.canvas.height);
}