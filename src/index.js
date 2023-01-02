import $ from "jquery";
import "./style.css";
import { generateHome } from "./home.js";
export { content, newElement };

const content = $("div#content");

function newElement(type, elementClass, HTML, parent) {
    const element = document.createElement(type);
    element.classList = elementClass;
    element.innerHTML = HTML;
    parent.append(element);
}

generateHome();