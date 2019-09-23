var x = random(0, 399);
var y = random(0, 399);

var eyeSize = 9;
var f = createFont("sans-serif");

//head
noStroke();
fill(255, 215, 170);
ellipse(x, y, 60, 65);
fill(255, 255, 255);

//hair 
noStroke();
fill(102, 0, 0);
rect(x - 30,y - 22, 7, 18);
rect(x + 23, y - 22, 7, 18);
quad(x - 25, y - 35, x + 36, y - 41, x + 30, y - 22, x - 30, y - 22); 



//mouth
fill(0, 0, 0);
stroke(0, 0, 0);
arc(x, y + 15, 24, 12, 0, 180);

//nose
noFill();
bezier(x - 2, y - 3, x + 29, y + 10, x - 5, y + 7, x, y + 9);

//eyebrows
stroke(102, 50, 22);
strokeWeight(2);
line(x - 21, y - 16, x - 6, y - 18);
line(x + 21, y - 16, x + 7, y - 18);

//eyes
noStroke();
fill(255, 255, 255);
arc(x - 13, y - 7, 16, 12, 0, 360);
arc(x + 13, y - 7, 16, 12, 0, 360);
fill(102, 50, 22);
ellipse(x - 13, y - 7, eyeSize, eyeSize);
ellipse(x + 13, y - 7, eyeSize, eyeSize);

//glasses
stroke(92, 32, 0);
noFill();
ellipse(x - 13, y - 6, 17, 16);
ellipse(x + 13, y - 6,17, 16);
arc(x, y - 11, 13, 3, 0, 143);
line(x + 21, y - 11, x + 28, y - 13);
line(x - 29, y - 14, x - 20, y - 12);

//pupils
noStroke();
fill(0, 0, 0);
ellipse(x - 13, y - 7, 5, 5);
ellipse(x + 13, y - 6, 5, 5);

//left chisel
fill(255, 255, 255);
arc(x - 37, y + 30, 33, 54, 0, 362);

//right chisel
arc(x + 37, y + 30, 33, 54, 0, 362);

//body
noStroke();
fill(0, 16, 194);
rect(x - 36, y + 33, 76, 85);
fill(255, 255, 255);
arc(x - 23, y + 33, 31, 5, 0, 360);
arc(x + 25, y + 33, 31, 5, 0, 360);

//shirt graphic & initials
fill(255, 255, 255);
textSize(7);
text("THE", x - 27, y + 55);
text("NORTH", x - 27, y + 61);
text("FACE", x - 27, y + 67);
textFont(f, 20);
text("JJS", x - 17, y + 91);

noStroke();

//left arm
fill(0, 16, 194);
stroke(0, 0, 0);
rect(x - 50, y + 36, 19, 88);
noStroke();
arc(x - 35, y + 37, 30, 10, 0, 360);
arc(x - 49, y + 51, 7, 33, 0, 360);
fill(255, 255, 255);
arc(x - 53, y + 96, 10, 77, 0, 360);

//left hand
stroke(0, 0, 0);
fill(255, 215, 170);
ellipse(x - 40, y + 124, 22, 19);
ellipse(x - 32, y + 125, 7, 7);

//right arm
fill(0, 16, 194);
rect(x + 35, y + 36, 19, 88);
noStroke();
arc(x + 40, y + 37, 30, 10, 0, 360);
arc(x + 53, y + 51, 7, 33, 0, 360);
fill(255, 255, 255);
arc(x + 58, y + 98, 10, 77, 0, 360);

//right hand
stroke(0, 0, 0);
fill(255, 215, 170);
ellipse(x + 45, y + 124, 22, 19);
ellipse(x + 37, y + 124, 7, 7);
