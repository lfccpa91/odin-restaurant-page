import hawaiianPlate from "./hawaiian_plate.jpg";
import {makeText, makeImg} from "./home.js"

export function generateContact() {
    const content = document.querySelector("div#content");
    const elements = [];
    elements.push(makeText("h1","Contact Us"));
    elements.push(makeText("p", "Ohana means family, and family means we'd love to hear from you!"))
    elements.push(makeImg("main", hawaiianPlate));
    elements.push(makeText("h2", "Operating Hours"));
    elements.push(makeText("div", "Monday:    Closed"));
    elements.push(makeText("div", "Tuesday:   10:30am - 9:30pm"));
    elements.push(makeText("div", "Wednesday: 10:30am - 9:30pm"));
    elements.push(makeText("div", "Thursday:  10:30am - 9:30pm"));
    elements.push(makeText("div", "Friday:    10:30am - 10:30pm"));
    elements.push(makeText("div", "Saturday:  10:30am - 10:30pm"));
    elements.push(makeText("div", "Sunday:    Closed"));
    elements.push(makeText("h2", "Locations"));
    elements.push(makeText("h3", "Arizona"));
    elements.push(makeText("div","747 N 39th Way\nMesa, AZ 84092"));
    elements.push(makeText("div","Tel: (480-555-5555"));
    elements.push(makeText("h3", "Arizona"));
    elements.push(makeText("div","5291 E Foxmoor Cir.\nSandy, UT 85205"));
    elements.push(makeText("div","Tel: (801-555-5555"));

    elements.forEach((element) => {
        content.appendChild(element);
    });

}