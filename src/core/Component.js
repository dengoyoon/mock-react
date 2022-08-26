export default class Component {
    _target;
    _state;
    _props;

    constructor(targetSelector, props) {
        this._target = document.querySelector(targetSelector);
        this._props = props;

        this.render();
    }

    render() {
        this._target.innerHTML = this.template();
        this.mounted();
    }

    template() {}

    setEvent() {}

    addEvent() {}

    setState() {}

    mounted() {}
}
