function preload(){
}

function setup(){
    canvas = createCanvas(800,400);
    canvas.center();
    canvas.position(375, 255);
    video = createCapture(VIDEO);
    video.hide()
}
 function draw() {
    image(video, 100, 200, 375, 255);
    fill(0,175,0);
    stroke(0,175,0);
    circle(20,20,30);
    circle(780,20,30);
    circle(20,380,30);
    circle(780,380,30);
    fill(0,0,0);
    stroke(175,0,0);
    rect(40,10,720,10);
    rect(40,380,720,10);
    rect(10,40,10,320);
    rect(780,40,10,320);

}

function take_snapshot(){
    save('advay.png')
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
