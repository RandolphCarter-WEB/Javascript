import UserInputPage from "./pages/NameInputPage.js";
import MenuPage from "./pages/MenuPage.js";
import GamePage from "./pages/GamePage.js";
import SettingsPage from "./pages/SettingsPage.js";

import createRouter from "./core/Router.js";
//import Reducer from "./core/Reducer";

const main = document.querySelector("#mainContainer");

const Pages = {
    main : UserInputPage(main),
    menu : MenuPage(main),
    game : GamePage(main),
    setting : SettingsPage(main)
};

const router = new createRouter();

router.addRoute("#/", Pages.main)
        .addRoute("#/menu", Pages.menu)
        .addRoute("#/game", Pages.game)
        .addRoute("#/settings", Pages.setting);

window.addEventListener("click", ({target}) => {
    if(target.matches("[data-navigate]")) {
        router.navigate(target.dataset.navigate);
    }
});

router.start();