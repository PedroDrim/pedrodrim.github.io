export default class Sobre extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>

                <div class="col center-align s12">
                    <div id="id-sobre" class="section scrollspy">
                        <h4>Sobre mim</h4>
                    </div>
                </div>

                <div class="col center-align s12 m6 l6">
                    <div class="container">
                        <h5>
                            Sou um eterno aprendiz, sempre tentando aprender coisas novas para integra-las (mesmo que não possuam
                        a menor semelhança).
                        </h5>
                    </div>
                    <div class="container">
                        <h5>
                            Desenvolvedor de jogos pela engine Rpg Maker durante 12 anos (começei aos 8), entretanto não possuo nenhum
                        jogo profissional publicado.
                        </h5>
                    </div>
                </div>

                <div class="col center-align s12 m6 l6">
                    <h5>
                        Estagiário pela Embrapa - Arroz e feijão pelo doutor Alexandre Bryan Heinnemann durante 2 anos na área
                        de análise de dados e scripts de automação em R.
                        </h5>
                    <h5>
                        Estudante de graduação do curso Engenharia de software pela UFG, desenvolvedor back-end com foco em Java
                        / Android, R / Shiny e Ruby.
                        </h5>
                </div>
            </div>
        );
    }
}