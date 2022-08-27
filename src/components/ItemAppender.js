import Component from "../core/Component.js";
import { itemObserver } from "../core/Observer.js";
import State from "../core/State.js";
export default class ItemAppender extends Component {
    constructor(targetSelector, props) {
        super(targetSelector, props);
        this._state = new State(itemObserver.get());
        // 상태가 옵저버와 엮여있는 컴포넌트에서는 걍 new State하지 말고 observer.get()을 바로 해서 쓰면 안되는걸까?
        this.render();
    }

    template() {
        return `
            <button class="append-btn">추가</button>
        `;
    }

    onClickAppend() {
        itemObserver.update({
            itemNumber: this._state.get("itemNumber") + 1,
            items: [...this._state.get("items"), `item${this._state.get("itemNumber")}`],
        });
        this._state = new State(itemObserver.get());
    }

    setEvent() {
        this.addEvent("click", ".append-btn", this.onClickAppend.bind(this));
    }
}
