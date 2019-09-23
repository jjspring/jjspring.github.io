//bitmoji variables
var bitmojiX =54;
var bitmojiY = 41;
var bitmojiSpeed = random(1,5);
//bunny variables
var bunnyX = -19;
var bunnyY = 208;
var bunnySpeed = random(1, 5);
//froggy variables
var froggyX = 103;
var froggyY = 349;
var froggySpeed = random(1,5);

draw = function() {
background(255, 255, 255);

var eyeSize = 9;
var f = createFont("sans-serif");

//head
noStroke();
fill(255, 215, 170);
ellipse(bitmojiX, bitmojiY, 60, 65);
fill(255, 255, 255);

//hair 
noStroke();
fill(102, 0, 0);
rect(bitmojiX - 30, bitmojiY - 22, 7, 18);
rect(bitmojiX + 23, bitmojiY - 22, 7, 18);
quad(bitmojiX - 25, bitmojiY - 35, bitmojiX + 36, bitmojiY - 41, bitmojiX + 30, bitmojiY - 22, bitmojiX - 30, bitmojiY - 22); 



//mouth
fill(0, 0, 0);
stroke(0, 0, 0);
arc(bitmojiX, bitmojiY + 15, 24, 12, 0, 180);

//nose
noFill();
bezier(bitmojiX - 2, bitmojiY - 3, bitmojiX + 29, bitmojiY + 10, bitmojiX - 5, bitmojiY + 7, bitmojiX, bitmojiY + 9);

//eyebrows
stroke(102, 50, 22);
strokeWeight(2);
line(bitmojiX - 21, bitmojiY - 16, bitmojiX - 6, bitmojiY - 18);
line(bitmojiX + 21, bitmojiY - 16, bitmojiX + 7, bitmojiY - 18);

//eyes
noStroke();
fill(255, 255, 255);
arc(bitmojiX - 13, bitmojiY - 7, 16, 12, 0, 360);
arc(bitmojiX + 13, bitmojiY - 7, 16, 12, 0, 360);
fill(102, 50, 22);
ellipse(bitmojiX - 13, bitmojiY - 7, eyeSize, eyeSize);
ellipse(bitmojiX + 13, bitmojiY - 7, eyeSize, eyeSize);

//glasses
stroke(92, 32, 0);
noFill();
ellipse(bitmojiX - 13, bitmojiY - 6, 17, 16);
ellipse(bitmojiX + 13, bitmojiY - 6,17, 16);
arc(bitmojiX, bitmojiY - 11, 13, 3, 0, 143);
line(bitmojiX + 21, bitmojiY - 11, bitmojiX + 28, bitmojiY - 13);
line(bitmojiX - 29, bitmojiY - 14, bitmojiX - 20, bitmojiY - 12);

//pupils
noStroke();
fill(0, 0, 0);
ellipse(bitmojiX - 13, bitmojiY - 7, 5, 5);
ellipse(bitmojiX + 13, bitmojiY - 6, 5, 5);

//left chisel
fill(255, 255, 255);
arc(bitmojiX - 37, bitmojiY + 30, 33, 54, 0, 362);

//right chisel
arc(bitmojiX + 37, bitmojiY + 30, 33, 54, 0, 362);

//body
noStroke();
fill(0, 16, 194);
rect(bitmojiX - 36, bitmojiY + 33, 76, 85);
fill(255, 255, 255);
arc(bitmojiX - 23, bitmojiY + 33, 31, 5, 0, 360);
arc(bitmojiX + 25, bitmojiY + 33, 31, 5, 0, 360);

//shirt graphic & initials
fill(255, 255, 255);
textSize(7);
text("THE", bitmojiX - 27, bitmojiY + 55);
text("NORTH", bitmojiX - 27, bitmojiY + 61);
text("FACE", bitmojiX - 27, bitmojiY + 67);
textFont(f, 20);
text("JJS", bitmojiX - 17, bitmojiY + 91);

noStroke();

//left arm
fill(0, 16, 194);
stroke(0, 0, 0);
rect(bitmojiX - 50, bitmojiY + 36, 19, 88);
noStroke();
arc(bitmojiX - 35, bitmojiY + 37, 30, 10, 0, 360);
arc(bitmojiX - 49, bitmojiY + 51, 7, 33, 0, 360);
fill(255, 255, 255);
arc(bitmojiX - 53, bitmojiY + 96, 10, 77, 0, 360);

//left hand
stroke(0, 0, 0);
fill(255, 215, 170);
ellipse(bitmojiX - 40, bitmojiY + 124, 22, 19);
ellipse(bitmojiX - 32, bitmojiY + 125, 7, 7);

//right arm
fill(0, 16, 194);
rect(bitmojiX + 35, bitmojiY + 36, 19, 88);
noStroke();
arc(bitmojiX + 40, bitmojiY + 37, 30, 10, 0, 360);
arc(bitmojiX + 53, bitmojiY + 51, 7, 33, 0, 360);
fill(255, 255, 255);
arc(bitmojiX + 58, bitmojiY + 98, 10, 77, 0, 360);

//right hand
stroke(0, 0, 0);
fill(255, 215, 170);
ellipse(bitmojiX + 45, bitmojiY + 124, 22, 19);
ellipse(bitmojiX + 37, bitmojiY + 124, 7, 7);
//end body


//bucktooth bunny
fill(202, 156, 255);
var eyeSize = 30;
var toothHeight = 18;
ellipse(bunnyX + 50, bunnyY - 30, 60, 120);  // left ear
ellipse(bunnyX + 140, bunnyY - 30, 60, 120);  // right ear

ellipse(bunnyX + 100, bunnyY + 70, 150, 150);    // face

fill(0, 0, 0);
ellipse(bunnyX + 70, bunnyY + 50, eyeSize, eyeSize);  // left eye
ellipse(bunnyX + 130, bunnyY + 50, eyeSize, eyeSize);  // right eye

line(bunnyX + 50, bunnyY + 100, bunnyX + 150, bunnyY + 100);   // mouth

noFill();
rect(bunnyX + 85, bunnyY + 100, 15, toothHeight); // left tooth
rect(bunnyX + 100, bunnyY + 100, 15, toothHeight); // right tooth
//end bunny


//funky frog
noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(froggyX, froggyY, 200, 100); // face
fill(0, 0, 0);
ellipse(froggyX, froggyY, 100, 50);
fill(30, 204, 91);
ellipse(froggyX - 50, froggyY - 50, 40, 40); // left eye socket
ellipse(froggyX + 50, froggyY - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(froggyX - 50, froggyY - 50, 30, 30); // left eyeball
ellipse(froggyX + 50, froggyY - 50, 30, 30); // right eyeball
fill(0, 0, 0);
rect(froggyX - 50, froggyY - 50, 10, 10);
rect(froggyX + 50, froggyY - 50, 10, 10);
//end froggy


//random speed
bunnyX = bunnyX + bunnySpeed;
bitmojiX = bitmojiX + bitmojiSpeed;
froggyX = froggyX + froggySpeed;
};

