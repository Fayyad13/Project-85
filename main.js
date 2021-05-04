var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var car2_height = 70;
var car2_width = 120;

var car1_height = 70;
var car1_width = 120;

var car1_x = 10;
var car1_y = 10;

var car2_x = 10;
var car2_y = 100;

var background_image = "racing.jpg";
var car1_image = "car1.png";
var car2_image = "car2.png.png";

function add(){
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = background_image;

    car1ImgTag = new Image();
    car1ImgTag.onload = uploadCar1;
    car1ImgTag.src = car1_image;

    car2ImgTag = new Image();
    car2ImgTag.onload = uploadCar2;
    car2ImgTag.src = car2_image;
}
function uploadBackground(){
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height)
}

function uploadCar1(){
    ctx.drawImage(car1ImgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2ImgTag, car2_x, car2_y, car2_width, car2_height);
}

canvas.addEventListener("keydown", my_keyDown);

function my_keyDown(e){
    var keyPress = e.keyCode;

    if (keyPress == '38'){
        car1_up();
        console.log("up")
    }
    if (keyPress == '40'){
        car1_down();
        console.log("down")
    }
    if (keyPress == '37'){
        car1_left();
        console.log("left")
    }
    if (keyPress == '39'){
        car1_right();
        console.log("right")
    }
    if (keyPress == '87'){
        car2_up();
        console.log("up")
    }
    if (keyPress == '83'){
        car2_down();
        console.log("down")
    }
    if (keyPress == '65'){
        car2_left();
        console.log("left")
    }
    if (keyPress == '68'){
        car2_right();
        console.log("right")
    }
    if(car_x>700){
        console.log("Car1 Won");
        document.getElementById('game_status'.innerHTML = "Car1 Won!!"
function car1_up(){
    if(car1_y>0)
    {
        car1_y = car1_y - 10;
        console.log("When up arrow is pushed, x =" + car1_x + "| y = "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
    }

function car1_down(){
    if(car1_y <=500){
        car1_y = car1_y+ 10;
        console.log("When down arrow is pressed, x = " + car1_x +"| y = "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
    }

function car1_left(){
    if(car1_x >=0){
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x = "+car1_x+"| y = "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
    }

function car1_right(){
    if(car1_x <=700){
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, x = "+car1_x+"| y = "+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2_up(){
    if(rover_y>0)
    {
        car2_y = car2_y - 10;
        console.log("When W key is pushed, x =" + car2_x + "| y = "+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
    }

function car2_down(){
    if(car2_y <=500){
        car2_y = car2_y+ 10;
        console.log("When S key is pressed, x = " + car2_x +"| y = "+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
    }

function car2_left(){
    if(car2_x >=0){
        car2_x = car2_x - 10;
        console.log("When A key is pressed, x = "+car2_x+"| y = "+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
    }

function car2_right(){
    if(car2_x <=700){
        car2_x = car2_x + 10;
        console.log("When D key is pressed, x = "+car2_x+"| y = "+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}