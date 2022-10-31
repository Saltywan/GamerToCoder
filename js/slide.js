        var slideIndex = 0;
        var currentSlideIndex = 0;
        var slideArray = [];

        // var Banner, Logo, Wallpaper, Characters = assets();
        function Slide(background) {
          this.background = background;
          // we need an id to target later using getElementById
          this.id = "slide" + slideIndex;
          // Add one to the index for the next slide number
          slideIndex++;
          // Add this Slide to our array
          slideArray.push(this);
        }


        // Creating our slide objects, you can make as many as you want
        // alert(Wallpaper[0]);

        // var a = new Slide(
        //   Wallpaper[0]
        // );

        // var b = new Slide(
        //   Wallpaper[1]
        // );
        for (let i = 0; i < 10; i++) {
          if (i != 8){
            new Slide(Wallpaper[i]);
          }
        }

        function buildSlider() {
          var myHTML;
          for (var i = 0; i < slideArray.length; i++) {

            myHTML += "<div id='" + slideArray[i].id +
              "' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +

              "</div>";
          }
          document.getElementById("mySlider").innerHTML = myHTML;
          document.getElementById("slide" + currentSlideIndex).style.left = 0;
        }
        buildSlider();

function prevSlide() {
  var nextSlideIndex;
  if (currentSlideIndex === 0) {
    nextSlideIndex = slideArray.length - 1;
  } else {
    nextSlideIndex = currentSlideIndex - 1;
  }

  document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
  document.getElementById("slide" + currentSlideIndex).style.left = 0;
  document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
  document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
  currentSlideIndex = nextSlideIndex;
}

function nextSlide() {
  var nextSlideIndex;
  if (currentSlideIndex === (slideArray.length - 1)) {
    nextSlideIndex = 0;
  } else {
    nextSlideIndex = currentSlideIndex + 1;
  }

  document.getElementById("slide" + nextSlideIndex).style.left = "100%";
  document.getElementById("slide" + currentSlideIndex).style.left = 0;

  document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
  document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");

  currentSlideIndex = nextSlideIndex;
}

Slider = setInterval(nextSlide, 6500);

