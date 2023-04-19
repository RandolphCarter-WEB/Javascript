function component() {
    const divElement = document.createElement("div");
    
    const partOfTheDay = ['twilight', 'afternoon', 'morning', 'evening'];
    divElement.innerHTML = sortArray(partOfTheDay);

    return divElement;
}

document.querySelector("#div1").append(component());