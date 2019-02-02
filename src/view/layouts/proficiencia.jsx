import LogoText from "./logo-text"

export default class Proficiencia extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div class="container">

                <LogoText id="id_sobre" text={GLOBAL_DATA.proficiencia.proficiencia_mainName} logo={GLOBAL_DATA.logo}/>

                <div class="col center-align s12">
                    <ul class="tabs">
                        <li class="tab"><a href="#id-back-end" class="secondary-text">{GLOBAL_DATA.proficiencia.proficiencia_tab_backEnd}</a></li>
                        <li class="tab"><a href="#id-front-end" class="secondary-text">{GLOBAL_DATA.proficiencia.proficiencia_tab_frontEnd}</a></li>
                        <li class="tab"><a href="#id-tools" class="secondary-text">{GLOBAL_DATA.proficiencia.proficiencia_tab_tools}</a></li>
                    </ul>
                </div>

                <div>
                    <div id="id-back-end" class="row s4">
                        <canvas id="grafico-back-end" />
                    </div>
                        
                    <div id="id-front-end" class="row s4">
                        <canvas id="grafico-front-end" />
                    </div>

                    <div id="id-tools" class="row s4">
                        <canvas id="grafico-tools" />
                    </div>
                </div>
                
            </div>
        );
    }
}