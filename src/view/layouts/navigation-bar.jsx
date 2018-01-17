export default class NavigationBar extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div id="id-navigationbar" class="scrollspy">
                <div class="navbar-fixed">

                    <ul class="dropdown-content" id="mobile-menu">
                        <li id="list-sobre"><a href="#id-sobre">Sobre mim</a></li>
                        <li id="list-projetos"><a href="#id-projetos">Projetos</a></li>
                        <li id="list-artigos"><a href="#id-artigos">Artigos</a></li>
                        <li id="list-contatos"><a href="#id-contatos">Contatos</a></li>
                    </ul>

                    <nav>
                        <div class="nav-wrapper container">

                            <a href="#id-navigationbar" class="brand-logo left"> PedroDrim </a>
                            <a data-activates="mobile-menu" class="hide-on-large-only dropdown-button right"><i class="material-icons">menu</i></a>

                            <ul class="right hide-on-med-and-down">
                                <li id="list-sobre"><a href="#id-sobre">Sobre mim</a></li>
                                <li id="list-projetos"><a href="#id-projetos">Projetos</a></li>
                                <li id="list-artigos"><a href="#id-artigos">Artigos</a></li>
                                <li id="list-contatos"><a href="#id-contatos">Contatos</a></li>
                            </ul>
                            
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
