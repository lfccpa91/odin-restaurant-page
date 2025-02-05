import katsuChicken from "./food/chickenKatsu.jpg";
import teriyakiChicken from "./food/teriyakiChicken.jpg";
import kaluaPork from "./food/kaluaPork.jpg";
import teriyakiBeef from "./food/teriyakiBeef.jpg";
import mahiMahi from "./food/mahiMahi.jpg";
import poke from "./food/poke.jpg";
import macSalad from "./food/macSalad.jpg";
import spinachSalad from "./food/spinachSalad.jpg";
import whiteRice from "./food/whiteRice.jpg";
import brownRice from "./food/brownRice.jpg";
import pog from "./food/pog.jpg";
import coconutWater from "./food/coconutWater.jpg";
import hawaiianIce from "./food/hawaiianIce.jpg";


export function generateMenu() {
    const content = document.querySelector("div#content");
    const menuElements = [];
    function generateCard(name, description, price, image) {
        const newCard = document.createElement("div");
        newCard.classList.add("menuCard");
        const newImage = document.createElement("img");
        newImage.src = image;
        newCard.appendChild(newImage);
        const newName = document.createElement("h2");
        newName.textContent = name;
        newCard.appendChild(newName);
        const newDescription = document.createElement("p");
        newDescription.textContent = description;
        newCard.appendChild(newDescription);
        const newPrice = document.createElement("div");
        newPrice.textContent = price;
        newCard.appendChild(newPrice);
        return newCard;
    }
    function sectionHeader(section) {
        const newSection = document.createElement("h1");
        newSection.textContent = section;
        return newSection;
    }

    menuElements.push(sectionHeader("Main Dishes"));
    menuElements.push(generateCard("Katsu Chicken", "Crispy breaded chicken with our signature tangy sauce", "$9.25", katsuChicken));
    menuElements.push(generateCard("Teriyaki Chicken", "Succulent grilled chicken with our sweet and savory teriyaki sauce", "$8.15", teriyakiChicken));
    menuElements.push(generateCard("Kalua Pork", "Melt in your mouth pork slow cooked in a traditional imu oven, served over cabbage", "$8.75",kaluaPork));
    menuElements.push(generateCard("Teriyaki Beef", "Marinated beef grilled to perfection", "$11.50", teriyakiBeef));
    menuElements.push(generateCard("Mahi Mahi", "Tender grilled Mahi Mahi fillet with our honey teriyaki glaze", "$12.50", mahiMahi));
    menuElements.push(generateCard("Poke Bowl", "Diced raw ahi tuna served over vegetables with our honey teriyaki glaze", "$10.50", poke));
    menuElements.push(sectionHeader("Sides and Salads"));
    menuElements.push(generateCard("Macaroni Salad", "Fahu's secret recipe!", "$2.50", macSalad));
    menuElements.push(generateCard("Spinach Salad", "Spinach, almonds, and our sweet hawaiian dressing", "$5.00", spinachSalad));
    menuElements.push(generateCard("White Rice", "Sticky white rice, 2 scoops", "$1.25", whiteRice));
    menuElements.push(generateCard("Brown Rice", "Long-grain brown rice, 2 scoops", "$2.25", brownRice));
    menuElements.push(sectionHeader("Drinks"));
    menuElements.push(generateCard("POG Juice", "Fresh pineapple orange guava juice, an island favorite", "$2.15", pog));
    menuElements.push(generateCard("Coconut Water", "Cococut water with a hint of lime", "$1.75", coconutWater));
    menuElements.push(generateCard("Hawaiian Ice", "Shaved ice with your choice of flavoring, topped with evaporated milk and coconut shavings", "$4.60", hawaiianIce));

    menuElements.forEach((element) => {
        content.appendChild(element);
    });
}