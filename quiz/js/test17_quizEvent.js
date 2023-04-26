import ImgData from "./test17_Data.js";

export function makeDraggable(element) {
    element.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("id", e.target.id);
        e.dataTransfer.setData("data-class-name", e.target.dataset.className);

        
    },false);
}

export function dropItem(e, target) {
    const img_id = e.dataTransfer.getData("id");
    const imgData = document.querySelector("#"+img_id);

    target.append(imgData);
}