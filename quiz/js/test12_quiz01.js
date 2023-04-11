const myHeader = document.querySelector("#my_header");
const sticky = myHeader.offsetTop;


//과거에 사용했던 방식
//pageYOffset, pageXOffset =>> 전체 컨텐츠 기준으로 위치를 px로 잡을 떄에 사용하는 옵션.
window.onscroll = () => {
    if(window.pageYOffset > sticky) {
        myHeader.classList.add("sticky");
    }
    else {
        myHeader.classList.remove("sticky");
    }
}