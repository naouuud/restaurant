import $ from "jquery";
import { content, newElement } from "./index.js";
import { generateHome } from "./home.js";
import { generateMenu } from "./menu.js";
export { generateContact };

function generateContact() {
    content.empty();

    newElement("div", "tabs", "", content);
    newElement("ul", "", "", $("div.tabs"));
    newElement("li", "home", "Home", $("div.tabs ul"));
    newElement("li", "menu", "Menu", $("div.tabs ul"));
    newElement("li", "contact selected", "Contact", $("div.tabs ul"));

    newElement("div", "content", "", content);

    newElement("div", "contact-info", "", $("div.content"));
    newElement("h2", "", "Reach us at", $(".content .contact-info"));
    newElement("ul", "", "", $(".content .contact-info"));
    newElement("li", "", "E: nouni@dessertemporium.com", $(".content .contact-info ul"));
    newElement("li", "", "P: 03/125-688", $(".content .contact-info ul"));
    newElement("li", "", "We look forward to receiving your feedback.", $(".content .contact-info ul"));
    
    newElement("div", "footer contact-footer", "", content);
    newElement("ul", "", "", $("div.footer"));
    newElement("li", "", "Designed by Nour Aoude for The Odin Project", $("div.footer ul"));
    
    $(".tabs .home").on("click", generateHome);
    $(".tabs .menu").on("click", generateMenu);
}