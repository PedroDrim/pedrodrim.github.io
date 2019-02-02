import Maker from './maker'

export default class NavigationBar extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div id="id-navigationbar">
                <div class="nav-extended navbar-fixed">
                    
                    <nav class="primary">
                        <div class="nav-wrapper container">

                            <Maker />

                            <ul class="tabs tabs-transparent hide-on-med-and-down">
                                <li class="tab"><a href="#id-sobre">{GLOBAL_DATA.navbar.navbar_tab_about}</a></li>
                                <li class="tab"><a href="#id-professional">{GLOBAL_DATA.navbar.navbar_tab_professional}</a></li>
                                <li class="tab"><a href="#id-personal">{GLOBAL_DATA.navbar.navbar_tab_personal}</a></li>
                            </ul>

                        </div>
                    </nav>

                    <div class="fixed-action-btn hide-on-large-only">
                        <a class="btn-floating btn-large red pulse">
                            <i class="large material-icons fas fa-ellipsis-v"></i>
                        </a>

                        <ul>
                            <li id="btn-sobre"><a href="#id-sobre" class="btn-floating secondary-dark"><i class="material-icons fas fa-address-card"></i></a></li>
                            <li id="btn-professional"><a href="#id-professional" class="btn-floating secondary-dark"><i class="material-icons fas fa-comment-dollar"></i></a></li>
                            <li id="btn-personal"><a href="#id-personal" class="btn-floating secondary-dark"><i class="material-icons fas fa-comment-dots"></i></a></li>
                        </ul>
                    </div>
        
                </div>
            </div>
        );
    }
}