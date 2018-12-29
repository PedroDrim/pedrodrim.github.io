export default class NavigationBar extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div id="id-navigationbar">
                <div class="nav-extended navbar-fixed">
                    <nav class="teal lighten-1">
                        <div class="nav-wrapper container">

                            <a href="#id-navigationbar" class="brand-logo right"> PedroDrim </a>

                            <ul class="tabs tabs-transparent hide-on-med-and-down">
                                <li class="tab"><a href="#id-sobre">Sobre mim</a></li>
                                <li class="tab"><a href="#id-projetos">Projetos</a></li>
                                <li class="tab"><a href="#id-artigos">Artigos</a></li>
                            </ul>

                        </div>
                    </nav>

                    <div class="fixed-action-btn hide-on-large-only">
                        <a class="btn-floating btn-large red">
                            <i class="large material-icons">more_vert</i>
                        </a>

                        <ul>
                            <li><a href="#id-sobre" class="btn-floating red"><i class="material-icons">person</i></a></li>
                            <li><a href="#id-projetos" class="btn-floating green"><i class="material-icons">publish</i></a></li>
                            <li><a href="#id-artigos" class="btn-floating blue"><i class="material-icons">create</i></a></li>
                        </ul>
                    </div>
        
                </div>
            </div>
        );
    }
}