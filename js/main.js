function reflectatron_5000(mirror,x1,y1,x2,y2,x3,y3) {
  triangle(x1,y1,x2,y2,x3,y3);
  var xx1=mirror-x1;
  var xx2=mirror-x2;
  var xx3=mirror-x3;
  triangle(xx1+mirror,y1,xx2+mirror,y2,xx3+mirror,y3);
}
function setup() {

  createCanvas(400,400);
}

var bastardAmber = "#FFCDAB";
var mirror=185;
function draw() {
  background(220);

  noStroke();

  //tealparts
  fill('teal');
  reflectatron_5000(mirror,43,88,83,50,66,90);
  reflectatron_5000(mirror,70,90,124,91,135,59);
  reflectatron_5000(mirror,141,59,185,45,185,91);
  reflectatron_5000(mirror,29,94,37,94,102,159);
  reflectatron_5000(mirror,73,100,182,230,133,184);
  reflectatron_5000(mirror,73,100,182,230,165,189);
  reflectatron_5000(mirror,129,98,182,97,165,182);

  //darkblue areas
  fill('SteelBlue')
  reflectatron_5000(mirror,71,57,31,90,38,90);
  reflectatron_5000(mirror,71,86,119,44,87,48);
  reflectatron_5000(mirror,71,86,119,44,135,56);
  reflectatron_5000(mirror,124,44,143,56,180,44);
  reflectatron_5000(mirror,138,60,129,93,181,93);
  reflectatron_5000(mirror,42,95,68,94,126,180);
  reflectatron_5000(mirror,73,95,123,97,160,180);
  reflectatron_5000(mirror,185,97,166,186,186,232)





  
  
  
  
  
  




}





