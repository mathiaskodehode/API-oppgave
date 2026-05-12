import "./extensionMethods.js";
import { CreateElement, RandomRange } from "./helperFunctions.js";

export async function Init() {
    const data = await getRandomImages(10);
    data.forEach(e => {
        CreateElement("img", { src: e, width: 300, height: 200, onclick: imageOnClick });
    });
}

async function imageOnClick(e) {
    console.log(e);
    const image = await getRandomImages(1);
    e.target.src = image;
}

async function getRandomImages(amount) {
    const response = await fetch(`https://picsum.photos/v2/list?page=${RandomRange(1, 100)}&limit=${amount}`);
    const data = await response.json();
    const arr = data.map(e => e.download_url);
    return arr;
}
