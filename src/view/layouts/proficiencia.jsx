export default class Proficiencia extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div class="container">

                <div class="col center-align s12">
                    <div id="id-sobre" class="section scrollspy">
                        <span class="flow-text green-text"><strong>Conhecimento</strong></span>
                    </div>
                </div>

                <div class="col center-align s12">
                    <ul class="tabs">
                        <li class="tab"><a href="#id-back-end">Back-End</a></li>
                        <li class="tab"><a href="#id-front-end">Front-end</a></li>
                        <li class="tab"><a href="#id-tools">Ferramentas</a></li>
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