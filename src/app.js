import "./extensionMethods.js";
import { Clamp, CreateElement, RandomRange } from "./helperFunctions.js";

export async function Init() {
    CreateElement("h1", { innerText: "Click on an image to change it" });
    const data = await getRandomImages(10);
    data.forEach(e => {
        CreateElement("img", { src: e, width: 300, height: 200, onclick: imageOnClick });
    });
}

async function imageOnClick(e) {
    const image = await getRandomImages(1);
    e.target.src = image;
}

async function getRandomImages(amount) {
    amount = Clamp(amount, 1, 100);
    const page = RandomRange(1, Math.floor(100 / amount));
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${amount}`);
    const data = await response.json();
    return data.map(e => e.download_url);
}
