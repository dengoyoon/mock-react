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
        this.mounted();
    }

    template() {
        return ``;
    }

    setEvent() {}

    addEvent() {}

    setState() {}

    mounted() {}
}
