import * as eventLogin from "./test16_quiz01Event.js"

class UserIdPass extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = this.returnTemplate();
    }

    returnTemplate() {
        return `
            <div id="userLoginContainer">
                <form action="#">
                    ID : <input type="text" id="userID" placeholder="Input Your Id" name="userID" autocomplete="user-name" required=""> <br>
                    PW : <input type="password" id="userPW" placeholder="Input Your Password" name="userPW" autocomplete="current-password" required> <br>
                    <button type="button" id="loginBtn">Login</button>
                </form>
                <div id="resulDiv"></div>
            </div>`;
    }

    connectedCallback() {
        loginBtn.addEventListener("click" ,() => { eventLogin.userLogin(userID.value, userPW.value, resulDiv) })
    }
}

if ('customElements' in window) {
	customElements.define('user-idpass', UserIdPass);
}