import CardProjetos from "./card-projetos"

export default class Projetos extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>

                <div class="col center-align s12">
                    <div id="id-projetos" class="section scrollspy">
                        <h4>Projetos</h4>
                    </div>
                </div>

                <div class="container">
                    <CardProjetos />
                    <CardProjetos />
                    <CardProjetos />
                </div>
                
            </div>
        );
    }
}