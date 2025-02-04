import beach1 from "./hawaiian_beach.jpg";

export function generateHomePage() {
    const content = document.querySelector("div#content");
    const homeElements = [];
    function makeText(elementType, elementText) {
        const element = document.createElement(elementType);
        element.textContent = elementText;
        return element;
    }
    function makeImg(id, src) {
        const element = document.createElement("img");
        element.src = src;
        element.classList.add(id);
        return element;
    }
    homeElements.push(makeText("h1", "Aloha! Welcome to Johnny Lingo's Hawaiian Eats!"));
    homeElements.push(makeText("h2", 'Come in and try our "8-cow" Polynesian eats!'))
    homeElements.push(makeImg("main", beach1));
    homeElements.push(makeText("p","Johnny Lingo's was founded to bring the spririt of aloha back to the mainland.  Take your tastebuds on vacation with our delicious plates - our succulent kalua pork, our tangy teriyaki chicken, or our tender beef will take you back to your own private paradise!  Whether you crave the variety of the Big Island, the wild beauty of Kauai, or the decadent resort life of Maui, we have something for you!"));
    homeElements.push(makeText("button", "See Menu"));


    homeElements.forEach((element) => {
        content.appendChild(element);
    });
} 
