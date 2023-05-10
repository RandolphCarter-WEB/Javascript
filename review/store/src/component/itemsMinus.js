import Component from "../core/Component.js";

export default class ItemsMinusList extends Component {
    initState() {
        return {
            a: 10,
            b: 20
        };
    }

    template() {
        const { a, b } = this.state;

        return `
            <input id="minusA" value="${a}" size="5" />
            <input id="minusB" value="${b}" size="5" />
            <p>${a} - ${b} = ${a - b}</p>
        `;
    }

    setEvent() {
        const { $target, state } = this;

        $target.querySelector("#minusA").addEventListener("change", ({target}) => {
            state.a = Number.parseInt(target.value)
        });

        $target.querySelector("#minusB").addEventListener("change", ({target}) => {
            state.b = Number.parseInt(target.value)
        });
    }
}