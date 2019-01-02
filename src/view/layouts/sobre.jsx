export default class Sobre extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div class="container">

                    <div class="col center-align s12">
                    
                        <div id="id-sobre" class="section scrollspy">
                            <span class="flow-text green-text"><strong>Sobre mim</strong></span>
                        </div>
                    </div>

                    <div class="col center-align s12 m6 l6">
                        <p class="flow-text">
                            Sou um eterno aprendiz, sempre tentando aprender coisas novas para integra-las (mesmo que não possuam
                        a menor semelhança).
                        </p>
                        <p class="flow-text">
                            Desenvolvedor de jogos pela engine Rpg Maker durante 12 anos (começei aos 8), entretanto não possuo nenhum
                        jogo profissional publicado.
                        </p>
                    </div>

                    <div class="col center-align s12 m6 l6">
                        <p class="flow-text">
                            Estagiário pela Embrapa - Arroz e feijão pelo doutor Alexandre Bryan Heinnemann durante 2 anos e meio na área
                        de análise de dados e scripts de automação em R.
                        </p>
                        <p class="flow-text">
                            Estudante de graduação do curso Engenharia de software pela UFG, desenvolvedor back-end com foco em Java
                        / Android, R / Shiny, e Ruby.
                        </p>
                    </div>

            </div>
        );
    }
}