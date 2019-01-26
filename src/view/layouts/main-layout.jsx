import NavigationBar from './navigation-bar'
import Sobre from './sobre'
import Projetos from './projetos'
import Artigos from './artigos'
import Contatos from './contatos'
import Proficiencia from './proficiencia'

export default class MainLayout extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <div class="row">
                    <NavigationBar />
                </div>

                <div class="row" id="id-sobre">
                    <Sobre />
                    <Proficiencia />
                    <Contatos />
                </div>
                
                <div class="row" id="id-projetos">
                    <Projetos />
                </div>
                
                <div class="row" id="id-artigos">
                    <Artigos />
                </div>
            </div>
        );
    }
}
