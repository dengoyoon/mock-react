import Component from "../core/Component.js";
import State from "../core/State.js";
export default class ItemAppender extends Component {
    constructor(targetSelector, props) {
        super(targetSelector, props);
        this._state = new State({});

        this.render();
    }

    template() {
        return `
            <button class="append-btn">추가</button>
        `;
    }
}
