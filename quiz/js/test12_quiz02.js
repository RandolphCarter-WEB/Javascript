const header = document.querySelector("#header");

window.onscroll = () => {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.fontSize = "30px";
    }
    else {
        header.style.fontSize = "90px";
    }

    // if(header.getBoundingClientRect().y < 50) {
    //     header.style.fontSize = "30px";
    // }
    // else {
    //     header.style.fontSize = "90px";
    // }
}