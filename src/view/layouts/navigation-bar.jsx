export default class NavigationBar extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div id="id-navigationbar" class="scrollspy">
                <div class="nav-extended navbar-fixed">

                    <nav>
                        
                        <div class="nav-wrapper container">

                            <a href="#id-navigationbar" class="brand-logo right"> PedroDrim </a>
                          
                            <ul class="tabs tabs-transparent hide-on-med-and-down ">
                                <li class="tab"><a href="#id-sobre">Sobre mim</a></li>
                                <li class="tab"><a href="#id-projetos">Projetos</a></li>
                                <li class="tab"><a href="#id-artigos">Artigos</a></li>
                            </ul>

                        </div>

                        <div class="hide-on-large-only nav-content container">

                            <ul class="tabs tabs-transparent">
                                <li class="tab"><a href="#id-sobre">Sobre mim</a></li>
                                <li class="tab"><a href="#id-projetos">Projetos</a></li>
                                <li class="tab"><a href="#id-artigos">Artigos</a></li>
                            </ul>
                        
                        </div>

                    </nav>
                </div>
            </div>
        );
    }
}