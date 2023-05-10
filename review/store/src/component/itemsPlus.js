import Component from "../core/Component.js";

export default class ItemsPlusList extends Component {
    initState() {
        return {
            a: 10,
            b: 20
        };
    }

    template() {
        const { a, b } = this.state;

        return `
            <input id="plusA" value="${a}" size="5" />
            <input id="plusB" value="${b}" size="5" />
            <p>${a} + ${b} = ${a + b}</p>
        `;
    }

    setEvent() {
        const { $target, state } = this;

        $target.querySelector("#plusA").addEventListener("change", ({ target }) => {
            state.a = Number(target.value);
        });

        $target.querySelector("#plusB").addEventListener("change", ({ target }) => {
            state.b = Number(target.value);
        });
    }
}