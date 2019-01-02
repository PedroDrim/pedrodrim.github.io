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

                            <div id="maker">
                                <a href="#id-navigationbar" class="brand-logo right"> {GLOBAL_DATA.navbar_mainName} </a>
                            </div>

                            <ul class="tabs tabs-transparent hide-on-med-and-down">
                                <li class="tab"><a href="#id-sobre">{GLOBAL_DATA.navbar_tab_about}</a></li>
                                <li class="tab"><a href="#id-projetos">{GLOBAL_DATA.navbar_tab_projects}</a></li>
                                <li class="tab"><a href="#id-artigos">{GLOBAL_DATA.navbar_tab_articles}</a></li>
                            </ul>

                        </div>
                    </nav>

                    <div class="fixed-action-btn hide-on-large-only">
                        <a class="btn-floating btn-large red pulse">
                            <i class="large material-icons">more_vert</i>
                        </a>

                        <ul>
                            <li id="btn-sobre"><a href="#id-sobre" class="btn-floating red"><i class="material-icons">person</i></a></li>
                            <li id="btn-projetos"><a href="#id-projetos" class="btn-floating green"><i class="material-icons">apps</i></a></li>
                            <li id="btn-artigos"><a href="#id-artigos" class="btn-floating blue"><i class="material-icons">create</i></a></li>
                        </ul>
                    </div>
        
                </div>
            </div>
        );
    }
}