canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

Background_image = "mars.jpg";
Rover_image = "rover.png";

Rover_width = 100;
Rover_height = 90;

Rover_x = 10;
Rover_y = 10;

function add() {
 Background_img_tag= new Image();

 Background_img_tag.onload= upload_background;

 Background_img_tag.src= Background_image;

 Rover_img_tag= new Image();

 Rover_img_tag.onload= upload_Rover;

 Rover_img_tag.src= Rover_image;

}


function upload_background() {
    ctx.drawImage(Background_img_tag, 0, 0, canvas.width, canvas.height);
}

function upload_Rover() {
    ctx.drawImage(Rover_img_tag, Rover_x, Rover_y, Rover_width, Rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '37') {
        left();
        console.log("left")
    }

    if(keyPressed == '38') {
        up();
        console.log("up")
    }

    if(keyPressed == '39') {
        right();
        console.log("right")
    }

    if(keyPressed == '40') {
        down();
        console.log("down")
    }
}

function up() 
{
if(Rover_y >= 0)
{ 
    Rover_y -=10;
    console.log("when up arrow is pressed, x = " + Rover_x + " | y = " + Rover_y); 
    upload_background();
    upload_Rover();
}

}

function down() 
{
if(Rover_y <= 500)
{ 
    Rover_y += 10;
    console.log("when down arrow is pressed, x = " + Rover_x + " | y = " + Rover_y); 
    upload_background();
    upload_Rover();


}

}

function left() 
{
if(Rover_x >= 0)
{ 
    Rover_x -= 10;
    console.log("when left arrow is pressed, x = " + Rover_x + " | y = " + Rover_y); 
    upload_background();
    upload_Rover();


}

}

function right() 
{
if(Rover_x <= 700)
{ 
    Rover_x += 10;
    console.log("when down arrow is pressed, x = " + Rover_x + " | y = " + Rover_y); 
    upload_background();
    upload_Rover();


}

}

Nasa_mars_img_array = ["Nasa_1.jpeg", "NASA_2.jpeg","Nasa_3.jpeg", "NASA_4.jpeg", "NASA_5.jpeg"];

random_number = Math.floor(Math.random()*5);

Background_image = Nasa_mars_img_array[random_number];
console.log(" Background_image = " + Background_image);