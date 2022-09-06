const logo = document.getElementById("logo");
const pPict = document.getElementsByClassName("pPicture");

function hero() {
  const hero = document.querySelector(".hero");
  let heroHeight = 0;
  let heroWidth = 100;
  var heroInterval = setInterval(() => {
    if (heroHeight == 75) {
      clearInterval(heroInterval);
    } else {
      heroHeight++;
      hero.style.height = heroHeight + "%";
    }
  }, 5);

  var heroInterval2 = setInterval(() => {
    if (heroHeight == 100) {
      clearInterval(heroInterval2);
    } else {
      heroHeight++;
      hero.style.height = heroHeight + "%";
    }
  }, 15);
  setTimeout(() => {
    var heroWidthInterval = setInterval(() => {
      if (heroWidth == 90) {
        clearInterval(heroWidthInterval);
      } else {
        heroWidth--;
        hero.style.width = heroWidth + "%";
      }
    }, 15);
    var heroWidthInterval2 = setInterval(() => {
      if (heroWidth == 75) {
        clearInterval(heroWidthInterval2);
      } else {
        heroWidth--;
        hero.style.width = heroWidth + "%";
      }
    }, 35);
  }, 1000);
}

function slider() {
  const slider = document.querySelector(".blackSlider");

  let sliderXPos = 0;

  var sliderWidthInterval = setInterval(() => {
    if (sliderXPos == 50) {
      clearInterval(sliderWidthInterval);
    } else {
      sliderXPos++;
      slider.style.width = sliderXPos + "%";
    }
  }, 25);

  var sliderWidthIntervali = setInterval(() => {
    if (sliderXPos == 100) {
      clearInterval(sliderWidthIntervali);
    } else {
      sliderXPos++;
      slider.style.width = sliderXPos + "%";
    }
  }, 35);
}

function profileFadeIn() {
  const pPict = document.getElementsByClassName("pPicture");
  let op = 0;

  fadeIn = setInterval(() => {
    if (op == 1) {
      clearInterval(fadeIn);
    } else {
      op++;
      pPict.style.opacity = op;
    }
  }, 25);
}

function landing() {
  hero();

  setTimeout(slider, 1200);

  profileFadeIn();
}

window.onload = landing();
