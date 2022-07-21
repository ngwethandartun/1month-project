const imagesList = document.querySelectorAll(".images");
const slideImage = imagesList.length;
let imageNumber = 0;

document.querySelector(".prev-btn").addEventListener("click", movetoPrevSlide);
document.querySelector(".next-btn").addEventListener("click", movetoNextSlide);

function hideAll() {
  for (let slide of imagesList) slide.classList.remove("visible");
}
function movetoPrevSlide() {
  hideAll();
  if (imageNumber === 0) {
    imageNumber = slideImage - 1;
  } else {
    imageNumber--;
  }
  imagesList[imageNumber].classList.add("visible");
}

function movetoNextSlide() {
  hideAll();
  if (imageNumber === slideImage - 1) {
    imageNumber = 0;
  } else {
    imageNumber++;
  }
  imagesList[imageNumber].classList.add("visible");
}

const searchInput = document.querySelector(".menu-search");
const allMenu = document.querySelectorAll(".food-menu");
searchInput.addEventListener("keyup", (event) => {
  const searchKeyword = event.target.value.toLowerCase();
  for (let i = 0; i < allMenu.length; i++) {
    const currentMenu = allMenu[i].textContent.toLowerCase();
    if (currentMenu.includes(searchKeyword)) {
      allMenu[i].style.display = "block";
    } else {
      allMenu[i].style.display = "none";
    }
  }
});

const logIn = document.querySelector(".sign");

logIn.addEventListener("click", () => {
  if (document.querySelector(".sing-in").style.display === "none") {
    document.querySelector(".sing-in").style.display = "block";
  } else {
    document.querySelector(".sing-in").style.display = "none";
  }
});
