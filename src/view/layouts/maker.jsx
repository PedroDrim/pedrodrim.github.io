export default class Maker extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div id="maker">
                <a class="brand-logo right modal-trigger" href="#game"> {GLOBAL_DATA.navbar.navbar_mainName} </a>

                <div id="game" class="modal">
                    <div class="modal-content container">
                        <div id="sketch">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}