class CustomDevelopCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).append(quiz13_01.content.cloneNode(true));
  
        this.ButtonList = this.shadowRoot.querySelectorAll(".developSub img");
        this.ConnectButton = this.shadowRoot.querySelector(".developConnect");
    }
  
    setElement = () => {
        const devel_img = this.shadowRoot.querySelector(".developImg");
        const devel_txt = this.shadowRoot.querySelector(".developInfoText");
  
        const devel_name = document.createElement("h1");
        const devel_title = document.createElement("p");
        const devel_content = document.createElement("p");
  
        devel_img.style.backgroundImage = `url(${this.ImgUrl})`;
  
        devel_name.setAttribute("class", "developName");
        devel_title.setAttribute("class", "developWork");
        devel_content.setAttribute("class", "developEx");
  
        devel_name.textContent = this.name;
        devel_title.textContent = this.title;
        devel_content.textContent = this.content;
  
        devel_txt.append(devel_name, devel_title, devel_content);
    };
  
    connectedCallback() {
        this.ButtonList.forEach((Element) => {
                Element.addEventListener("click", (e) => {
                if(e.target.id == "develop_internet") {
                    console.log("This member's email is " + this.email);
                }
                else {
                    console.log(e.target);
                }
            });
        });
  
        this.ConnectButton.addEventListener("click", (e) => {
            console.log(e.target);
        });
    }
}
  
customElements.define("develop-info", CustomDevelopCard);
  
const jsonProfile = `{
    "team": [
      {
        "img": "img/team1.jpg",
        "name": "Jane Doe",
        "title": "CEO & Founder",
        "content": "Phasellus eget enim eu lectus faucibus vestibulum.",
        "email": "JaneDoe@example.com"
      },
      {
        "img": "img/team2.jpg",
        "name": "Mike Ross",
        "title": "Art Director",
        "content": "Phasellus eget enim eu lectus faucibus vestibulum.",
        "email": "MikeRoss@example.com"
      },
      {
        "img": "img/team3.jpg",
        "name": "John Doe",
        "title": "Designer",
        "content": "Phasellus eget enim eu lectus faucibus vestibulum.",
        "email": "JohnDoe@example.com"
      }
    ]
}`;
  
const User = JSON.parse(jsonProfile).team;
  
for (let i = 0; i < User.length; i++) {
    const customDevel = document.createElement("develop-info");
    customDevel.ImgUrl = "../" + User[i].img;
    customDevel.name = User[i].name;
    customDevel.title = User[i].title;
    customDevel.content = User[i].content;
    customDevel.email = User[i].email;
    document.querySelector(".items").appendChild(customDevel);
    customDevel.setElement();
}