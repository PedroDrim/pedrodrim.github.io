export default class NavigationBar extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div id="id-navigationbar" class="scrollspy">
                <div class="navbar-fixed">
                    <nav>
                        <div class="nav-wrapper container">
                            
                            <a href="#id-navigationbar" class="brand-logo left"> PedroDrim </a>
                            <ul id="nav-mobile" class="right">
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
