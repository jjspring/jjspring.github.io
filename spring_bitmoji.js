var eyeSize = 9;
var f = createFont("sans-serif");

//head
noStroke();
fill(255, 215, 170);
ellipse(100, 100, 60, 65);
fill(255, 255, 255);

//hair 
noStroke();
fill(102, 0, 0);
rect(70, 78, 7, 18);
rect(123, 78, 7, 18);
quad(75, 65, 136, 59, 130, 78, 70, 78); 



//mouth
fill(0, 0, 0);
stroke(0, 0, 0);
arc(100, 115, 24, 12, 0, 180);

//nose
noFill();
bezier(98, 97, 129, 110, 95, 107, 100, 109);

//eyebrows
stroke(102, 50, 22);
strokeWeight(2);
line(79, 84, 94, 82);
line(121, 84, 107, 82);

//eyes
noStroke();
fill(255, 255, 255);
arc(87, 93, 16, 12, 0, 360);
arc(113, 93, 16, 12, 0, 360);
fill(102, 50, 22);
ellipse(87, 93, eyeSize, eyeSize);
ellipse(113, 93, eyeSize, eyeSize);

//glasses
stroke(92, 32, 0);
noFill();
ellipse(87, 94, 17, 16);
ellipse(113, 94,17, 16);
arc(100, 89, 13, 3, 0, 143);
line(121, 89, 128, 87);
line(71, 86, 80, 88);

//pupils
noStroke();
fill(0, 0, 0);
ellipse(87, 93, 5, 5);
ellipse(113, 93, 5, 5);

//left chisel
fill(255, 255, 255);
arc(63, 130, 33, 54, 0, 362);

//right chisel
arc(137, 130, 33, 54, 0, 362);

//body
noStroke();
fill(0, 16, 194);
rect(64, 133, 76, 85);
fill(255, 255, 255);
arc(77, 133, 31, 5, 0, 360);
arc(125, 133, 31, 5, 0, 360);

//shirt graphic & initials
fill(255, 255, 255);
textSize(7);
text("THE", 73, 155);
text("NORTH", 73, 161);
text("FACE", 73, 167);
textFont(f, 20);
text("JJS", 83, 191);

noStroke();

//left arm
fill(0, 16, 194);
stroke(0, 0, 0);
rect(50, 136, 19, 88);
noStroke();
arc(65, 137, 30, 10, 0, 360);
arc(51, 151, 7, 33, 0, 360);
fill(255, 255, 255);
arc(47, 196, 10, 77, 0, 360);

//left hand
stroke(0, 0, 0);
fill(255, 215, 170);
ellipse(60 ,224, 22, 19);
ellipse(68, 225,7, 7);

//right arm
fill(0, 16, 194);
rect(135, 136, 19, 88);
noStroke();
arc(140, 137, 30, 10, 0, 360);
arc(153, 151, 7, 33, 0, 360);
fill(255, 255, 255);
arc(158, 198, 10, 77, 0, 360);

//right hand
stroke(0, 0, 0);
fill(255, 215, 170);
ellipse(145, 224, 22, 19);
ellipse(137, 224, 7, 7);
