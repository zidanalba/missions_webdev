const profile = document.getElementById("pPicture");
const profileContainer = document.getElementById("profile");

function hero() {
  const hero = document.querySelector(".hero");
  let heroHeight = 0;
  let heroWidth = 100;
  var heroInterval = setInterval(() => {
    if (heroHeight >= 75) {
      clearInterval(heroInterval);
    } else {
      heroHeight++;
      hero.style.height = heroHeight + "%";
    }
  }, 5);

  var heroInterval2 = setInterval(() => {
    if (heroHeight >= 100) {
      clearInterval(heroInterval2);
    } else {
      heroHeight++;
      hero.style.height = heroHeight + "%";
    }
  }, 15);
  setTimeout(() => {
    var heroWidthInterval = setInterval(() => {
      if (heroWidth <= 90) {
        clearInterval(heroWidthInterval);
      } else {
        heroWidth--;
        hero.style.width = heroWidth + "%";
      }
    }, 15);
    var heroWidthInterval2 = setInterval(() => {
      if (heroWidth <= 75) {
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
    if (sliderXPos >= 50) {
      clearInterval(sliderWidthInterval);
    } else {
      sliderXPos++;
      slider.style.width = sliderXPos + "%";
    }
  }, 25);

  var sliderWidthIntervali = setInterval(() => {
    if (sliderXPos >= 100) {
      clearInterval(sliderWidthIntervali);
    } else {
      sliderXPos++;
      slider.style.width = sliderXPos + "%";
    }
  }, 35);
}

function profileFadeIn() {
  const pPict = document.getElementById("pPicture");
  let op = 0;

  fadeIn = setInterval(() => {
    if (op >= 1) {
      clearInterval(fadeIn);
    } else {
      op = op + 0.01;
      pPict.style.opacity = op;
    }
  }, 25);
}

function logoFadeIn() {
  const logo = document.getElementById("logo");
  let op = 0;

  fadeIn = setInterval(() => {
    if (op == 1) {
      clearInterval(fadeIn);
    } else {
      op = op + 0.01;
      logo.style.opacity = op;
    }
  }, 15);
}

function instaLogoFadeIn() {
  const insta = document.getElementById("insta");
  let op = 0;

  fadeIn = setInterval(() => {
    if (op == 1) {
      clearInterval(fadeIn);
    } else {
      op = op + 0.01;
      insta.style.opacity = op;
    }
  }, 15);
}

function githubLogoFadeIn() {
  const github = document.getElementById("github");
  let op = 0;

  fadeIn = setInterval(() => {
    if (op == 1) {
      clearInterval(fadeIn);
    } else {
      op = op + 0.01;
      github.style.opacity = op;
    }
  }, 15);
}

function profileHover() {
  profileContainer.style.backgroundColor = "yellow";
  profileContainer.classList.add("rounded");
  profileContainer.classList.remove("justify-content-center");
  profileContainer.style.justifyContent = "flex-start";
  let pName = Document.getElementById("pName");
  pName.innerHTML += "Mochammad Zidan Al-Baihaqi";
  let pDesc = Document.getElementById("pDesc");
}

function landing() {
  hero();

  setTimeout(slider, 1200);
  setTimeout(logoFadeIn, 1400);
  setTimeout(instaLogoFadeIn, 3200);
  setTimeout(githubLogoFadeIn, 3300);
  setTimeout(profileFadeIn, 2500);
}

window.onload = landing();
profile.addEventListener("mouseover", profileHover);
profile.addEventListener("mouseleave", () => {
  console.log("keluar");
});
