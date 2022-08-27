import State from "../core/State.js";
import Component from "../core/Component.js";

export default class Title extends Component {
    constructor(targetSelector, props) {
        super(targetSelector, props);
        this._state = new State({});

        this.render();
    }

    template() {
        return `
            <h2>아이템을 늘리고 줄여보자</h2>
        `;
    }
}
