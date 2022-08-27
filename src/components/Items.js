import Component from "../core/Component.js";
import { itemObserver } from "../core/Observer.js";
import State from "../core/State.js";
export default class Items extends Component {
    _itemNumber;
    constructor(targetSelector, props) {
        super(targetSelector, props);
        this._state = new State(itemObserver.get());

        itemObserver.subscribe(this.setState.bind(this));

        this.render();
    }

    template() {
        const { items } = this._state.getState();
        return `
            <ul>
                ${items
                    .map(
                        (item) => `
                            <li>
                                <span>${item}</span><button class="delete-btn">삭제</button>    
                            </li>
                        `
                    )
                    .join("")}
            </ul>
        `;
    }

    onClickDelete(e) {
        if (e.target.tagName === "BUTTON") {
            // itemObserver.update({
            //     itemNumber : this._state.get('itemNumber') - 1,
            //     items : this._state.get('items').filter((_, index) => index !== e.target.)
            // })
            console.log(e.target.dataset.index);
        }
    }

    setEvent() {
        this.addEvent("click", "ul", this.onClickDelete.bind(this));
    }
}
