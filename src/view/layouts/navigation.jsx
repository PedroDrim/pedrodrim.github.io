export default class Navigation extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <nav class="navbar fixed-top navbar-toggleable-md navbar-light" id="mainNav">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarExample" aria-controls="navbarExample"
                        aria-expanded="false" aria-label="Toggle navigation">
                        Menu
            <i class="fa fa-bars"></i>
                    </button>
                    <div class="container">
                        <a class="navbar-brand" href="#page-top">Pedro Henrique (Drim)</a>
                        <div class="collapse navbar-collapse" id="navbarExample">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="#portfolio">Projetos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about">Sobre mim</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
