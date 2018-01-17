import CardTemplate from "./card-template"

export default class Projetos extends React.Component {

    constructor(props) {
        super();
        this.state = {
            picture: "src/model/projetos/images/game.png",
            title: "Template",
            summary: "Um exemplo de projeto",
            fullText: "Descrição completa do projeto, devendo conter as ferramentas utilizadas, cliente, tempo e quaisquer outras informações que se julgue necessária."
        }
    }

    render() {
        return (
            <div>

                <div class="col center-align s12">
                    <div id="id-projetos" class="section scrollspy">
                        <span class="flow-text green-text"><strong>Projetos</strong></span>
                    </div>
                </div>

                <div class="container">
                    <CardTemplate card={this.state} />
                    <CardTemplate card={this.state} />
                    <CardTemplate card={this.state} />
                    <CardTemplate card={this.state} />
                </div>

            </div>
        );
    }
}