import ItemAppender from "./components/ItemAppender.js";
import Items from "./components/Items.js";
import Title from "./components/Title.js";
import Component from "./core/Component.js";
import State from "./core/State.js";

export default class App extends Component {
    constructor(targetSelector, props) {
        super(targetSelector, props);
        this._state = new State({});

        this.render();
    }

    mounted() {
        new Title("#title");
        new Items("#item-list");
        new ItemAppender("#item-appender");
    }

    template() {
        return `
            <header id="title"></header>
            <section id="item-list"></section>
            <footer id="item-appender"></footer>
        `;
    }
}
