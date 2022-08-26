import Title from "./components/Title.js";
import Component from "./core/Component.js";
import State from "./core/State.js";

export default class App extends Component {
    constructor(targetSelector, props) {
        super(targetSelector, props);
        this._state = new State({});
    }

    // render() {
    //     super.render();
    // }

    mounted() {
        new Title("#title");
    }

    template() {
        return `
            <header id="title"></header>
        `;
    }
}
