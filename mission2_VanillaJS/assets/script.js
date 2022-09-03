const slider = document.querySelector(".blackSlider");
const logo = document.getElementById("logo");

function hero() {
  const hero = document.querySelector(".hero");
  let heroHeight = 0;
  let heroWidth = 100;
  heroInterval = setInterval(() => {
    if (heroHeight == 75) {
      clearInterval(heroInterval);
    } else {
      heroHeight++;
      hero.style.height = heroHeight + "%";
    }
  }, 5);

  heroInterval2 = setInterval(() => {
    if (heroHeight == 100) {
      clearInterval(heroInterval2);
    } else {
      heroHeight++;
      hero.style.height = heroHeight + "%";
    }
  }, 15);
  setTimeout(() => {
    heroWidthInterval = setInterval(() => {
      if (heroWidth == 90) {
        clearInterval(heroWidthInterval);
      } else {
        heroWidth--;
        hero.style.width = heroWidth + "%";
      }
    }, 15);
    heroWidthInterval2 = setInterval(() => {
      if (heroWidth == 85) {
        clearInterval(heroWidthInterval2);
      } else {
        heroWidth--;
        hero.style.width = heroWidth + "%";
      }
    }, 35);
  }, 1000);
}

function landing() {
  hero();
}

window.onload = landing();
