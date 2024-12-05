const backgrounds = ["landing-2.jpg", "landing.jpg", "landing-3.jpg"];
const landing = document.querySelector(".landing");
const bullets = document.querySelectorAll(".bullets li");

let nextBackgroundBtn = document.querySelector(".right-btn");
let previousBackgroundBtn = document.querySelector(".left-btn");

let activeIndexOfBackground = 1;
let currentBullet = 1;

const nextBackGroundImage = () => {
  activeIndexOfBackground++;
  if (activeIndexOfBackground > backgrounds.length - 1) {
    activeIndexOfBackground = 0;
  }
  landing.style.backgroundImage = `url("./imgs/${backgrounds[activeIndexOfBackground]}")`;
  bullets.forEach((bullet, index) => {
    if (index == activeIndexOfBackground) {
      if (!bullet.classList.contains("active")) {
        bullet.classList.add("active");
      }
    } else {
      bullet.classList.remove("active");
    }
  });
};
const beforeBackGroundImage = () => {
  activeIndexOfBackground--;
  if (activeIndexOfBackground < 0) {
    activeIndexOfBackground = backgrounds.length - 1;
  }
  landing.style.backgroundImage = `url("./imgs/${backgrounds[activeIndexOfBackground]}")`;

  bullets.forEach((bullet, index) => {
    if (index == activeIndexOfBackground) {
      if (!bullet.classList.contains("active")) {
        bullet.classList.add("active");
      }
    } else {
      bullet.classList.remove("active");
    }
  });
};

nextBackgroundBtn.onclick = nextBackGroundImage;

previousBackgroundBtn.onclick = beforeBackGroundImage;

bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", (e) => {
    bullets.forEach((bullet) => {
      bullet.classList.remove("active");
    });
    e.target.classList.add("active");
    landing.style.backgroundImage = `url("./imgs/${backgrounds[index]}")`;
  });
});

const shuffle = document.querySelectorAll(".shuffle li");
const boxs = document.querySelectorAll(".images-container .box");
shuffle.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    shuffle.forEach((el) => {
      el.classList.remove("active");
    });
    ele.classList.add("active");
    boxs.forEach((box) => {
      if (!box.classList.contains(ele.dataset.images)) {
        box.style.display = "none";
      } else {
        console.log(box);
        box.style.display = "block";
      }
    });
  });
});

const links = document.querySelectorAll(".links li a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
    document.querySelector(`${link.dataset.section}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});


const toggleBtn = document.querySelector(".toggle-menu");

toggleBtn.onclick = (e) => {    
    document.querySelector(".links").classList.toggle("open");
}
