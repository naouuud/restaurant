import $ from "jquery";
import HomeImage from "./images/PXL_20221203_113837614.PORTRAIT.jpg";
import { content, newElement } from "./index.js";
import { generateMenu } from "./menu.js";
import { generateContact } from "./contact";
export { generateHome };

function generateHome() {
    content.empty();

    newElement("div", "tabs", "", content);
    newElement("ul", "", "", $("div.tabs"));
    newElement("li", "home selected", "Home", $("div.tabs ul"));
    newElement("li", "menu", "Menu", $("div.tabs ul"));
    newElement("li", "contact", "Contact", $("div.tabs ul"));

    newElement("div", "content", "", content);

    newElement("div", "introduction", "", $("div.content"));
    newElement("h1", "", "Nouni's Dessert Emporium", $(".content .introduction"));
    newElement("ul", "", "", $(".content .introduction"));
    newElement("li", "", "Nouni's desserts are freshly baked on the daily, made with the finest local ingredients. We have something for every palate, come on over and try!", $(".content .introduction ul"));
    newElement("li", "", "", $(".content .introduction ul"));
    newElement("img", "", "", $(".content .introduction ul li:nth-child(2)"));
    $(".content .introduction ul li img").attr("src", HomeImage);
    $(".content .introduction ul li img").attr("alt", "Freshly baked cake glazed");
    
    newElement("div", "hours", "", $("div.content"));
    newElement("h2", "", "We're open:", $(".content .hours"));
    newElement("ul", "", "", $(".content .hours"));
    newElement("li", "", "Monday to Wednesday: 8:00 to 21:00", $(".content .hours ul"));
    newElement("li", "", "Thursday to Friday: 8:00 to 23:00", $(".content .hours ul"));
    newElement("li", "", "Saturday: 12:00 to 21:00", $(".content .hours ul"));
    newElement("li", "", "Sunday: Rest day :)", $(".content .hours ul"));
    
    newElement("div", "location", "", $("div.content"));
    newElement("h2", "", "Location:", $(".content .location"));
    newElement("ul", "", "", $(".content .location"));
    newElement("li", "", "Mansour Jurdak St.", $(".content .location ul"));
    newElement("li", "", "Ras Beirut", $(".content .location ul"));
    newElement("li", "", "(opposite old lighthouse)", $(".content .location ul"));
    
    newElement("div", "footer", "", content);
    newElement("ul", "", "", $("div.footer"));
    newElement("li", "", "Designed by Nour Aoude for The Odin Project", $("div.footer ul"));
    
    $(".tabs .menu").on("click", generateMenu);
    $(".tabs .contact").on("click", generateContact);
}