import {} from "./extensionMethods.js";

export function CreateElement(tag, parent = null, options = {}) {
    if (typeof options !== "object") throw new Error("OPTIONS MUST BE AN OBJECT");
    const element = document.createElement(tag);
    if (parent instanceof HTMLElement) {
        parent.appendChild(element);
    } else {
        document.body.appendChild(element);
    }
    element.applyOptions(options);
    return element;
}

export function Clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
