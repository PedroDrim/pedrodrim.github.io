import NavigationBar from './navigation-bar'
import Parallax from './parallax'
import Sobre from './sobre'
import Projetos from './projetos'
import Artigos from './artigos'
import Contatos from './contatos'

export default class MainLayout extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div class="row">
                <div class="row">
                    <NavigationBar />
                    <Parallax />
                </div>
                <div class="row">
                    <Sobre />
                </div>
                <div class="row">
                    <Projetos />
                </div>
                <div class="row">
                    <Artigos />
                </div>
                <div class="row">
                    <Contatos />
                </div>
            </div>
        );
    }
}
