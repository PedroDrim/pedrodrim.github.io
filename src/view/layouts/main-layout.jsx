import NavigationBar from './navigation-bar'
import Sobre from './sobre'
import Professional from './professional'
import Personal from './personal'
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
                
                <div class="row" id="id-professional">
                    <Professional />
                </div>
                
                <div class="row" id="id-personal">
                    <Personal />
                </div>
            </div>
        );
    }
}
