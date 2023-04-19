class CustomClickerDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode : "open"}).append(quiz14_02.content.cloneNode(true));

        this.CurrentCoin = localStorage.getItem("CurrentCoin") ?
                        Number.parseInt(localStorage.getItem("CurrentCoin"))
                        : 0;
        this.upgradeCount = localStorage.getItem("Upgrade") ?
                        Number.parseInt(localStorage.getItem("Upgrade"))
                        : 0;

        this.addCoinBtn = this.shadowRoot.querySelector("#addCoinBtn");
        this.upgradeCoinBtn = this.shadowRoot.querySelector("#upgradeCoinBtn");
        this.saveCoinBtn = this.shadowRoot.querySelector("#saveCoinBtn");

        this.printCoinValue = this.shadowRoot.querySelector("#printCoin");
        this.printNotice = this.shadowRoot.querySelector(".printNotice");
    }

    connectedCallback() {
        this.printCoinValue.innerHTML = `${this.CurrentCoin}`;

        this.addCoinBtn.addEventListener("click", () => {
            this.CurrentCoin += Number.parseInt(this.addCoinBtn.value) * (this.upgradeCount + 1);
            this.printCoinValue.innerHTML = `${this.CurrentCoin}`;
        });

        this.upgradeCoinBtn.addEventListener("click", () => {
            if (this.CurrentCoin >= (this.upgradeCount+1) * this.upgradeCoinBtn.value) {
                if (this.upgradeCount < 5) {
                    this.upgradeCount += 1;
                    this.CurrentCoin -= this.upgradeCount * this.upgradeCoinBtn.value;
                } else {
                    this.printNotice.innerHTML="<p>This is already the best upgrade.</p>";
                }

                this.printCoinValue.innerHTML = `${this.CurrentCoin}`;
            }
            else {
                this.printNotice.innerHTML = "<p>It's not enough. the number of coins</p>";
            }
        });

        this.saveCoinBtn.addEventListener("click", () => {
            if(localStorage) {
                let coinKey = "CurrentCoin";
                let coinVal = this.CurrentCoin;
                localStorage.setItem(coinKey, coinVal);

                let upgradeKey = "Upgrade";
                let upgradevVal = this.upgradeCount;
                localStorage.setItem(upgradeKey, upgradevVal);
            }
        });
    }
}

customElements.define("clicker-game", CustomClickerDisplay);