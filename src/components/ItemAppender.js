import Component from "../core/Component.js";
import { itemObserver } from "../core/Observer.js";
import State from "../core/State.js";

export default class ItemAppender extends Component {
    constructor(targetSelector, props) {
        super(targetSelector, props);
        // this._state = new State(itemObserver.get());
        // 상태가 옵저버와 엮여있는 컴포넌트에서는 걍 new State하지 말고 observer.get()을 바로 해서 쓰면 안되는걸까?
        // => 안된다.
        // State와 Observer를 보면 둘다 클래스 필드 state는 그냥 객체를 담고 있기 때문에
        // 즉 State객체를 담고있는게 아니기 때문에 State객체를 따로 생성해주어 관리를 해야한다.
        this.render();
    }

    template() {
        return `
            <button class="append-btn">추가</button>
        `;
    }

    onClickAppend() {
        // ItemAppender는 상태라는게 굳이 필요 없으니까(상태에 따라서 모습이 변하는 요소가 아니니까)
        // 상태가 굳이 필요없는게 맞는지?
        // this._state = new State(itemObserver.get());
        const itemState = new State(itemObserver.get());
        itemObserver.update({
            itemNumber: itemState.get("itemNumber") + 1,
            items: [...itemState.get("items"), `item${itemState.get("itemNumber")}`],
        });
    }

    setEvent() {
        this.addEvent("click", ".append-btn", this.onClickAppend.bind(this));
    }
}
