const toggleIcon = document.querySelector(".toggleMenuIcon");
const closeButton = document.getElementById("closeBtn");
const menu = document.getElementById("menu");
const li = menu.querySelectorAll("li");

toggleIcon.addEventListener("click", () => {
  if (menu.style.right == "0%") {
    menu.style.right = "-200%";
  } else {
    menu.style.right = "0%";
    closeButton.style.display = "block";
  }
});

closeButton.addEventListener("click", () => {
  menu.style.right = "-200%";
  closeButton.style.display = "none";
});

const linkActions = () => {
  li.forEach((n) => {
    n.querySelector("a").classList.remove("active");
    this.classList.add("active");
  });
};

li.forEach((n) => n.addEventListener("click", linkActions));
