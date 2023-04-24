import * as event from "./test16_quiz04Event.js"

class UserID extends HTMLElement {
    constructor() {
        super();
        this.$state = {};
        this.setDefault();
        this.render();
    }

    setDefault() {
        this.$state = {
            ID: [],
            PW: []
        };
    }

    render() { this.innerHTML = this.template(); }

    template() {
        const {ID = [], PW = []} = this.$state;

        return `
            <form active="#">
                <div id="UI_inputID">
                    <h4>ID</h4>
                    <input type="text" id="inputID" name="inputID" placeholder="Press Your ID" required>
                </div>
                <div id="problem_userID">
                    ${ID.map((element) => { return element }).join(`<br>`)}
                </div>
                <br>

                <div id="UI_inputPW">
                    <h4>Password</h4>
                    <input type="password" id="inputPW" name="inputPW" placeholder="Press Your PW" required>
                </div>
                <div id="problem_userPW">
                    ${PW.map((element) => { return element }).join(`<br>`)}
                </div>
                <br>

                <button id="joinBtn">Make</button>
            </form>
        `;
    }

    connectedCallback() {
        joinBtn.addEventListener("click", () => {
            const ID_checkResult =  event.checkID(inputID);
            const PW_checkResult =  event.checkPW(inputPW);

            this.setState({ID : ID_checkResult, PW : PW_checkResult});
        });
    }  

    setState($newState) {
        this.$state = { ...this.$state, ...$newState };
        this.render();
    }      
}

if(`customElements` in window) {
    customElements.define("login-container", UserID);
}