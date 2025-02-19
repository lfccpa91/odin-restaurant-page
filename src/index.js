import "./styles.css";
console.log("Index.js Open");
import { generateHomePage} from "./home.js";
import {generateMenu} from "./menu.js";
import {generateContact} from "./contact.js";

generateHomePage();

const homeButton = document.querySelector("button#homeButton");
const menuButton = document.querySelector("button#menuButton");
const contactButton = document.querySelector("button#contactButton");
const contentDiv = document.querySelector("div#content");

homeButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    generateHomePage();
});

menuButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    generateMenu();
});

contactButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    generateContact();
});
