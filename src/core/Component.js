export default class Component {
    _target;
    _state;
    _props;

    constructor(targetSelector, props) {
        this._target = document.querySelector(targetSelector);
        this._props = props;
    }

    render() {
        this._target.innerHTML = this.template();
        this.setEvent();
        this.mounted();
    }

    template() {
        return ``;
    }

    setEvent() {}

    addEvent(type, selector, callback) {
        const children = [...this._target.querySelectorAll(selector)];

        // const isTarget = (target) => children.includes(target);

        this._target.addEventListener(type, callback);
    }

    setState(newState) {
        this._state.setState(newState);
        this.render();
    }

    mounted() {}
}
