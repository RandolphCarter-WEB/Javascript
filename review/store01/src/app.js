import Component from "./core/Component.js";
import { setA, setB, store } from './store/store.js';

const InputA = () => `<input id="stateA" value="${store.getState().a}" size="5">`
const InputB = () => `<input id="stateB" value="${store.getState().b}" size="5">`
const Calculator = () => `<p> a + b = ${store.getState().a + store.getState().b}</p>`;

export class App extends Component {
    template() {
        return `
            ${InputA()}
            ${InputB()}
            ${Calculator()}
        `;
    }

    setEvent() {
        const { $target } = this;

        $target.querySelector('#stateA').addEventListener('change', ({ target }) => {
            const value = Number.parseInt(target.value);
            store.dispatch(setA(value));
        });

        $target.querySelector('#stateB').addEventListener('change', ({ target }) => {
            const value = Number.parseInt(target.value);
            store.dispatch(setB(value));
        });
    }
}

new App(document.querySelector('#app'));