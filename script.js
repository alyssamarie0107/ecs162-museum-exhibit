//Alyssa Rodriguez-ECS 162-Museum Exhibit
// to encourage crashing when there is a mistake
"strict mode";
// Javascript for countdown
// setInterval() will execute function once every second
// 1000 ms = 1 second
var x = setInterval(myCountdown, 1000);

function myCountdown() {
  // date counting down to
  var countdownDate = new Date("May 10, 2020 17:00:00").getTime();
  // todays date
  var today = new Date().getTime();

  // find the difference between today and countdown date
  var difference = Math.floor((countdownDate - today) / 1000);

  // not required but would be nice if message displayed when countdown ends
  if (difference < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Museum Closed.";
  }
  // toLocaleString() returns a string with a language-sensitive rep. of the difference value
  var t = difference.toLocaleString();

  // display the results in the element with id="countdown"
  document.getElementById("countdown").innerHTML = t;
}

// Javascript for slideshow
// cite: W3schools
// set the index of image
var imageIndex = 1;
showImages(imageIndex);

// function that increments the image index
// onclick = "PlusImgs(+1 or -1)" in HTML, therefore make function name "plusImgs"
// only increments to next image index if function = plusImgs
function plusImgs(n) {
  showImages((imageIndex += n));
}

// function to thumbnail current image
// onclick = "currImg(#)" in HTML, therefore make function name "currImg"
function currImg(n) {
  showImages((imageIndex = n));
}

// function that shows images as slideshow and arrows
function showImages(n) {
  var i;
  // display the images in the element with class="slideshow"
  var images = document.getElementsByClassName("slideshow");
  // display the circles in the element with class="circles"
  var circles = document.getElementsByClassName("circles");

  // image length = 4, if go pass this, go back to image 1
  if (n > images.length) {
    imageIndex = 1;
  }
  if (n < 1) {
    imageIndex = images.length;
  }

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }
  images[imageIndex - 1].style.display = "block";
  circles[imageIndex - 1].className += " active";
}
