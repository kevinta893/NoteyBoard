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
    });

    canvas.addEventListener("mousemove", function(e){
        if (mouseDown == true){
            var mouseX = e.pageX - this.offsetLeft;
            var mouseY = e.pageY - this.offsetTop;
            //draw line
            canvasCtx.beginPath();
            canvasCtx.moveTo(lastPt.x, lastPt.y);
            canvasCtx.lineTo(mouseX, mouseY);
            canvasCtx.stroke();

            lastPt = {x: mouseX, y: mouseY};
        }
    });

    canvas.addEventListener("mouseup", function(e){
        mouseDown = false;

    });
});

function clearCanvas(){
    canvasCtx.clearRect(0,0, canvasCtx.canvas.width, canvasCtx.canvas.height);
}