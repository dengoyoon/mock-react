import Component from "../core/Component.js";
import { itemObserver } from "../core/Observer.js";
import State from "../core/State.js";
export default class Items extends Component {
    _itemNumber;
    constructor(targetSelector, props) {
        super(targetSelector, props);

        // 이 state를 만들어 놓으면 itemObserver에서 Items의 setItem을 등록해놓은 상태이기 때문에
        // 얼핏 아이템 옵저버의 state와 Items의 state가 따로 움직일 것 같지만
        // 옵저버의 state 변경과 동시에 Items의 state도 변경된다.
        this._state = new State(itemObserver.get());

        itemObserver.subscribe(this.setState.bind(this));

        this.render();
    }

    template() {
        const { items } = this.state;
        return `
            <ul>
                ${items
                    .map(
                        (item, index) => `
                            <li>
                                <span>${item}</span><button class="delete-btn" data-index="${index}">삭제</button>    
                            </li>
                        `
                    )
                    .join("")}
            </ul>
        `;
    }

    onClickDelete(e) {
        // delete는 어쨌든 Items, 즉 자기자신 안에서 일어나는 이벤트인데 아래처럼 옵저버를 이용하는게 맞나?
        // setState만을 이용해도 문제가 없었을 것을 알지만,
        // 한편으로는 해당 옵저버가 appender와도 연결이 되어있고
        // 옵저버에 setState가 들어가있기 때문에 문제가 없나 싶기도하다.

        // 결론은 ItemAppender랑 동기화 시키기 위해서 사용해야하는거 맞나?
        itemObserver.update({
            itemNumber: this._state.get("itemNumber") - 1,
            items: [
                ...this._state
                    .get("items")
                    .filter((_, index) => index !== Number(e.target.dataset.index)),
            ],
        });
    }

    setEvent() {
        this.addEvent("click", ".delete-btn", this.onClickDelete.bind(this));
    }
}
