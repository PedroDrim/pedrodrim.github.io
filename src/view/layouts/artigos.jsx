import CardTemplate from "./card-template"

export default class Artigos extends React.Component {

    constructor(props) {
        super();
        this.state = {
            picture: "src/public/projetos/images/cake.png",
            title: "Template",
            summary: "Um exemplo de artigo",
            fullText: "Descrição completa do artigo, devendo conter as ferramentas utilizadas, dificuldade, tempo e quaisquer outras informações que se julgue necessária."
        }
    }

    render() {
        return (
            <div>

                <div class="col center-align s12">
                    <div id="id-artigos" class="section scrollspy">
                        <span class="flow-text green-text"><strong>Artigos</strong></span>
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