var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

images = ["anImage.jpg", "anotherImage.jpg", "AnotherOtherImage.jpg", "AnotherOtherOtherImage.jpg"]

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
background_image = images[random_number];

var rover_height = 100;
var rover_width = 90;

var rover_x = 10;
var rover_y = 10;

var rover_image = "rover.png";

function add(){
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = background_image;

    roverImgTag = new Image();
    roverImgTag.onload = uploadRover;
    roverImgTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height)
}

function uploadRover(){
    ctx.drawImage(roverImgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keyDown);

function my_keyDown(e){
    var keyPress = e.keyCode;

    if (keyPress == '38'){
        up();
        console.log("up")
    }
    if (keyPress == '40'){
        down();
        console.log("down")
    }
    if (keyPress == '37'){
        left();
        console.log("left")
    }
    if (keyPress == '39'){
        right();
        console.log("right")
    }
}
function up(){
    if(rover_y>0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pushed, x =" + rover_x + "| y = "+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_y <=500){
        rover_y = rover_y+ 10;
        console.log("When down arrow is pressed, x = " + rover_x +"| y = "+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x >=0){
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = "+rover_x+"| y = "+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x <=700){
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = "+rover_x+"| y = "+rover_y);
        uploadBackground();
        uploadRover();
    }
}