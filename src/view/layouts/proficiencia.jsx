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
                    <canvas id="grafico"></canvas>
                </div>

                <div class="col center-align s12">
                    <ul class="pagination">
                        <li class="waves-effect" id="bnt-back-end"><a href="#!">1</a></li>
                        <li class="waves-effect" id="bnt-front-end"><a href="#!">2</a></li>
                        <li class="waves-effect" id="bnt-tools"><a href="#!">3</a></li>
                    </ul>
                </div>

            </div>
        );
    }
}