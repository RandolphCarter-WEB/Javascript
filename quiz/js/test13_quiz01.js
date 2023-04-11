class CustomDevelopCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode : "open"}).append(quiz13_01.content.cloneNode(true));

        this.ButtonList = this.shadowRoot.querySelectorAll(".developSub img");
        this.ConnectButton = this.shadowRoot.querySelector(".developConnect");

        const jsonProfile = `{
            "name": "GrayKim",
            "title": "프리랜서 컨설턴트",
            "content": "웹, 안드로이드 개발관련 컨설팅 및 보안 컨설팅에 대해 도와드립니다."
        }`;

        this.profile = JSON.parse(jsonProfile);

        this.ProfileName = this.profile["name"];
        this.ProfileTitle = this.profile["title"];
        this.ProfileContent = this.profile["content"];
    }

    setUp = () => {
        const $targetDiv = this.shadowRoot.querySelector(".developInfoText");

        const developName = document.createElement("h1");
        const developWork = document.createElement("p");
        const developEx = document.createElement("p");

        developName.setAttribute("class", "developName");
        developName.textContent = this.ProfileName;

        developWork.setAttribute("class", "developWork");
        developWork.textContent = this.ProfileTitle;

        developEx.setAttribute("class", "developEx");
        developEx.textContent = this.ProfileContent;

        $targetDiv.append(developName, developWork, developEx);
    }

    connectedCallback() {
        this.setUp();

        this.ButtonList.forEach(Element => {
            Element.addEventListener("click", (e) => {
                console.log(e.target);
            })
        });

        this.ConnectButton.addEventListener("click", (e) => {
            console.log(e.target);
        })
    }
}

customElements.define("develop-info", CustomDevelopCard);