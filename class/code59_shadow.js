document.querySelector(".sample").attachShadow({mode : "open"});
const h1 = document.createElement("h1");
h1.textContent = "hi";

document.querySelector(".sample").shadowRoot.innerHTML = `
    <style>
        h1 {
            color : red
        }
    </style>
    <p> Have a good day</p>
`;

document.querySelector(".sample").shadowRoot.prepend(h1);