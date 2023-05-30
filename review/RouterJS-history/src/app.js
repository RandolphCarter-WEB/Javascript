import LoginPage from "./pages/loginPage.js";
import MenuPage from "./pages/menuPage.js";
import GamePage from "./pages/gamePage.js";
import SettingsPage from "./pages/settingsPage.js";

import createRouter from "./core/Router.js";

const main = document.querySelector("#mainContainer");

let Pages = {
    login : { id : 1, data : "login", component : LoginPage(main) },
    menu : { id : 2, data : "menu", component :  MenuPage(main) },
    game : { id : 3, data : "game", component : GamePage(main) },
    settings : { id : 4, data : "settings", component : SettingsPage(main) }
};

const router = createRouter();
router.addRoute("/login", Pages.login)
        .addRoute("/menu", Pages.menu)
        .addRoute("/game", Pages.game)
        .addRoute("/settings", Pages.settings);

window.addEventListener("click", ({ target }) => {
    if (target.matches("[data-navigate]")) {
        const path = target.dataset.navigate;
        router.navigate(path);
    }
});
window.onpopstate = function() {
    const path = window.location.pathname;
    router.navigate(path);
}