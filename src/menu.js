import $ from "jquery";
import BaklavaImage from "./images/PXL_20220615_140743366.jpg";
import CookieImage from "./images/PXL_20221203_113850743.PORTRAIT.jpg";
import CakeImage from "./images/PXL_20221203_113857486.PORTRAIT.jpg";
import { content, newElement } from "./index.js";
import { generateHome } from "./home.js";
import { generateContact } from "./contact";
export { generateMenu };

function generateMenu() {
    content.empty();

    newElement("div", "tabs", "", content);
    newElement("ul", "", "", $("div.tabs"));
    newElement("li", "home", "Home", $("div.tabs ul"));
    newElement("li", "menu selected", "Menu", $("div.tabs ul"));
    newElement("li", "contact", "Contact", $("div.tabs ul"));

    newElement("div", "content", "", content);

    newElement("div", "baklava", "", $("div.content"));
    newElement("h2", "", "Baklava Ice Cream", $(".content .baklava"));
    newElement("ul", "", "", $(".content .baklava"));
    newElement("li", "", "Traditional Greek baklava drizzled with honey and served with a side of vanilla ice cream.", $(".content .baklava ul"));
    newElement("li", "", "<b>300,000 LL</b>", $(".content .baklava ul"));
    newElement("li", "", "", $(".content .baklava ul"));
    newElement("img", "", "", $(".content .baklava ul li:nth-child(3)"));
    $(".content .baklava ul li img").attr("src", BaklavaImage);
    $(".content .baklava ul li img").attr("alt", "Baklava and vanilla ice cream");

    newElement("div", "cookie", "", $("div.content"));
    newElement("h2", "", "Ginger Cookie", $(".content .cookie"));
    newElement("ul", "", "", $(".content .cookie"));
    newElement("li", "", "Spicy ginger cookie baked to perfection.", $(".content .cookie ul"));
    newElement("li", "", "<b>150,000 LL</b>", $(".content .cookie ul"));
    newElement("li", "", "", $(".content .cookie ul"));
    newElement("img", "", "", $(".content .cookie ul li:nth-child(3)"));
    $(".content .cookie ul li img").attr("src", CookieImage);
    $(".content .cookie ul li img").attr("alt", "Ginger cookies with sprinkled sugar");

    newElement("div", "cake", "", $("div.content"));
    newElement("h2", "", "Pecan Date Cake", $(".content .cake"));
    newElement("ul", "", "", $(".content .cake"));
    newElement("li", "", "Scrumcious date cake topped with fresh pecans.", $(".content .cake ul"));
    newElement("li", "", "<b>250,000 LL</b>", $(".content .cake ul"));
    newElement("li", "", "", $(".content .cake ul"));
    newElement("img", "", "", $(".content .cake ul li:nth-child(3)"));
    $(".content .cake ul li img").attr("src", CakeImage);
    $(".content .cake ul li img").attr("alt", "Pecan date cake");

    newElement("div", "footer", "", content);
    newElement("ul", "", "", $("div.footer"));
    newElement("li", "", "Designed by Nour Aoude for The Odin Project", $("div.footer ul"));

    $(".tabs .home").on("click", generateHome);
    $(".tabs .contact").on("click", generateContact);
}