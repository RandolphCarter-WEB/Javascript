const sticky = document.querySelector(".sticky");
const stickyParent = document.querySelector(".sticky-parent");

let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height - sticky.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    let stickyPosition = sticky.getBoundingClientRect().top;

    if(stickyPosition > 1) {
        return;
    }
    else {
        let scrolled = stickyParent.getBoundingClientRect().top;
        sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * 0.85 * (-scrolled);
    }
});