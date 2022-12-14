class Observer {
    _state = {};
    _subscribers;

    constructor(initialValue) {
        this._state = { ...initialValue };
        this._subscribers = new Set();
    }

    get() {
        return this._state;
    }

    // update를 Object.defineProperty를 이용하면 좀 더 자연스러운 연출이 될듯?
    update(newState) {
        this._state = { ...newState };
        this._notify();
    }

    updateWithKey(key, newState) {
        this._state[key] = newState;
        this._notify();
    }

    _notify() {
        const state = this._state;
        this._subscribers.forEach((callback) => {
            callback(state);
        });
    }

    subscribe(callback) {
        this._subscribers.add(callback);
    }
}

export const itemObserver = new Observer({ items: ["item1", "item2"], itemNumber: 3 });
