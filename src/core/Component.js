export default class Component {
    _target;
    _state;
    _props;

    constructor(targetSelector, props) {
        this._target = document.querySelector(targetSelector);
        this._props = props;
        this.setEvent(); // 이벤트는 버블링을 사용하니까 생성자에서 한번만 해주면 된다.

        /*
        this._state = 지정하고 싶은 상태 값;
        this.render();

        this.render를 Component의 생성자에서 실행해주면 좋겠지만 state 저장이 각 컴포넌트에서
        선행이 되어야 해서 각 컴포넌트마다 실행시켜야 함.
        */
    }

    render() {
        this._target.innerHTML = this.template();
        this.mounted();
    }

    template() {
        return ``;
    }

    setEvent() {}

    addEvent(type, selector, callback) {
        // 이벤트 버블링을 사용하고 있기 때문에 현재 클릭한 요소(selector)가 타겟에 해당하는 요소인지 확인해야함.
        // 예를들어서 Items에서는 리스트 전체에 걸려있는 이벤트 리스너에 삭제 버튼을 클릭했을경우
        // 삭제 버튼이 리스트 전체에 해당하는 요소인지 확인한다는 뜻.
        const children = [...this._target.querySelectorAll(selector)];

        const isTarget = (target) => children.includes(target) || target.closest(selector);
        this._target.addEventListener(type, (event) => {
            if (!isTarget(event.target)) return false;
            callback(event);
        });
    }

    setState(newState) {
        this._state.setState(newState);
        this.render();
    }

    mounted() {}
}
