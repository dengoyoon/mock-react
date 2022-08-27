export default class State {
    _state;
    constructor(state) {
        this._state = state;
    }

    getState() {
        return this._state;
    }

    get(key) {
        return this._state[key];
    }

    setState(newState) {
        this._state = { ...this._state, ...newState };
    }
}
