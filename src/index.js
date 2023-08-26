import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

function createHeader() {
  const element = document.createElement("header");
  const heading = document.createElement("h1");
  heading.textContent = "Restaurant";
  element.appendChild(heading);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  homeBtn.classList.add("selected");
  btnContainer.append(homeBtn, menuBtn, contactBtn);
  element.appendChild(btnContainer);
  return element;
}
function createFooter() {
  const element = document.createElement("footer");
  const para = document.createElement("p");
  para.innerHTML = `<a href="https://www.theodinproject.com/">TheOdinProject</a> project`;

  element.appendChild(para);
  return element;
}
function createCard() {
  const element = document.createElement("div");
  element.classList.add("card");
  return element;
}

const content = document.getElementById("content");
content.appendChild(createHeader());
const card = createCard();
card.append(...createHome());
content.appendChild(card);
content.appendChild(createFooter());

const btns = document.querySelectorAll("button");

btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    card.innerHTML = "";
    console.log(e.target.textContent);
    if (e.target.textContent === "Home") {
      btns[0].classList.add("selected");
      btns[1].classList.remove("selected");
      btns[2].classList.remove("selected");
      card.append(...createHome());
    } else if(e.target.textContent==="Menu"){
        btns[0].classList.remove("selected");
        btns[1].classList.add("selected");
        btns[2].classList.remove("selected");
        card.append(...createMenu());
    } else{
        btns[0].classList.remove("selected");
        btns[1].classList.remove("selected");
        btns[2].classList.add("selected");
        card.append(...createContact());
    }
  })
);