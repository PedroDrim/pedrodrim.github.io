export default class About extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <section class="success" id="about">
                    <div class="container">
                        <h2 class="text-center">Sobre mim</h2>
                        <hr class="star-light" />
                        <div class="row">
                            <div class="col-lg-4 offset-lg-2">
                                <p>Sou um eterno aprendiz, sempre tentando aprender coisas novas para integra-las (mesmo que não possuam
                        a menor semelhança).</p>
                                <p>Desenvolvedor de jogos pela engine Rpg Maker durante 12 anos (começei aos 8), entretanto não possuo nenhum
                        jogo profissional publicado.</p>
                            </div>
                            <div class="col-lg-4">
                                <p>Estagiário pela Embrapa - Arroz e feijão pelo doutor Alexandre Bryan Heinnemann durante 2 anos na área
                        de análise de dados e scripts de automação em R.</p>
                                <p>Estudante de graduação do curso Engenharia de software pela UFG, desenvolvedor back-end com foco em Java
                        / Android, R / Shiny e Ruby.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}