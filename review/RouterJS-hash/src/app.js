import UserInputPage from "./pages/NameInputPage.js";
import MenuPage from "./pages/MenuPage.js";
import GamePage from "./pages/GamePage.js";
import SettingsPage from "./pages/SettingsPage.js";

import createRouter from "./core/Router.js";
//import Reducer from "./core/Reducer";

const main = document.querySelector("#mainContainer");

const Pages = {
    main : new UserInputPage(main),
    menu : new MenuPage(main),
    game : new GamePage(main),
    setting : new SettingsPage(main)
};

const router = new createRouter();

router.addRoute("#/", Pages.main)
        .addRoute("#/menu", Pages.menu)
        .addRoute("#/game", Pages.game)
        .addRoute("#/settings", Pages.setting);

main.innerHTML = `
    <button type="button" id="MainBtn" data-navigate="#/">main</button>
    <button type="button" id="menuBtn" data-navigate="#/menu">menu</button>
    <button type="button" id="gameBtn" data-navigate="#/game">game</button>
    <button type="button" id="setBtn" data-navigate="#/settings">set</button>
`;

window.addEventListener("click", ({target}) => {
    if(target.matches("[data-navigate]")) {
        router.navigate(target.dataset.navigate);
    }
});

router.start();