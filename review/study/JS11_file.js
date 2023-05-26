const productList = document.querySelector('#productList');
const products = [
    {id: "p-01", name : "product01"},
    {id: "p-02", name : "product02"},
    {id: "p-03", name : "product03"}
];

products.map(product => {
    const newElement = document.createElement("li");
    newElement.id = product.id;
    newElement.textContent = product.name;
    return newElement;
}).forEach(element => {
    productList.appendChild(element);
});

setTimeout(() => {
    const secondElement = document.querySelector("ul li:nth-child(2)");
    secondElement.remove();
}, 5000);

productList.after(`<div>Wrong Use</div>`);
productList.insertAdjacentHTML("beforebegin", "<p>Add Sentence</p>");