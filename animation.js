var ol = 0;
var isPlaying = false;
var circleInterval;
var width;
var heigth;


var el = document.getElementById("circle");

var sc = 1;

function circleAnimation(time) {


  ol++;
  sc++;
  el.style.left = ol + "px";
  width = el.style.width = sc + "px";
  height = el.style.height = sc + "px";
  el.style.borderRadius = sc * 100 + "px";
  el.textContent = "The width: " + width + "\n" + " The height: " + height;

  circleInterval = requestAnimationFrame(circleAnimation);
}

function mouseClicked() {
  if (isPlaying) {
    isPlaying = false;
    el.style.backgroundColor = "#21897E";
    cancelAnimationFrame(circleInterval);
  } else {
    isPlaying = true;
    el.style.backgroundColor = "#7A306C";
    circleInterval = requestAnimationFrame(circleAnimation);
  }
}

el.addEventListener("click", mouseClicked);
el.style.backgroundColor = "#21897E";
