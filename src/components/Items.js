import Component from "../core/Component.js";
export default class Items extends Component {
    _itemNumber;
    constructor(targetSelector, props) {
        super(targetSelector, props);
        this._state = {
            items: ["item1", "item2"],
        };
        this._itemNumber = this._state.items.length + 1;

        this.render();
    }

    template() {
        const { items } = this._state;
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
}
