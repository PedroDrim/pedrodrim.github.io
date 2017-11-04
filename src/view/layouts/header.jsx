export default class Header extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <header class="masthead">
                    <div class="container">
                        <img class="img-fluid" src="src/public/images/profile.png" alt="" />
                        <div class="intro-text">
                            <span class="name">Pedro Henrique (Drim)</span>
                            <hr class="star-light" />
                            <span class="skills">Analista de dados - Engenheiro de Software - Desenvolvedor - Maker</span>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
