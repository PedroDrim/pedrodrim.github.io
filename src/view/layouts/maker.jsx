export default class Maker extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div id="maker">
                <a class="brand-logo right" href="#game"> {GLOBAL_DATA.navbar.navbar_mainName} </a>
            </div>
        );
    }
}