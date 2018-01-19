import NavigationBar from './navigation-bar'
import Sobre from './sobre'
import Projetos from './projetos'
import Artigos from './artigos'
import Contatos from './contatos'

export default class MainLayout extends React.Component {

    constructor(props) {
        super();
        this.state = {
            article: [
                {
                    "titulo": "Teste",
                    "imagem": "src/public/images/template.png",
                    "descricao": "Um exemplo de artigo apenas para preencher esta aba.",
                    "resumo": "Artigo de teste.",
                    "url": "https://github.com/PedroDrim"
                }
            ],
            projects: [
                {
                    "titulo": "Projeto CPU",
                    "imagem": "src/public/images/template.png",
                    "descricao": "É um projeto arquitetural feito em ruby focado na modularização e execução de comandos pré-definidos.",
                    "resumo": "Projeto pessoal de modularização.",
                    "url": "https://github.com/PedroDrim/Projeto-CPU"
                },
            
                {
                    "titulo": "Bsus UFG",
                    "imagem": "src/public/images/template.png",
                    "descricao": "Projeto realizado para a matéria de Integração 1 do curso de Engenharia de Software da UFG.",
                    "resumo": "HORUS framework em java.",
                    "url": "https://github.com/PedroDrim/integracao201701"
                },
            
                {
                    "titulo": "Planeje Insumos",
                    "imagem": "src/public/images/template.png",
                    "descricao": "Site em desenvolvimento para a Startup de mesmo nome.",
                    "resumo": "Site para comparação de preços.",
                    "url": "https://github.com/PedroDrim/planejeinsumos"
                },
            
                {
                    "id": "DroidMetronome",
                    "titulo": "Droid Metronome",
                    "imagem": "src/public/images/template.png",
                    "descricao": "Aplicativo de metrônomo para android desenvolvido para o projeto integrador dos alunos do 4* periodo do curso de engenharia de software.\nAtende o MPS-BR G e F.",
                    "resumo": "Metronomo funcional para Android.",
                    "url": "https://github.com/DroidFoundry/DroidMetronome"
                }, 
            
                {
                    "titulo": "Gitânio",
                    "imagem": "src/public/images/template.png",
                    "descricao": "Sistema Web para gestão comercial, com integração android, desenvolvido pelos alunos do 6* período do curso de Engenharia de Software da UFG.",
                    "resumo": "Sistema Web para gestão comercial.",
                    "url": "https://github.com/gustavosotnas/Gitanio"
                }
            ]
            
        }
    }

    render() {
        return (
            <div class="row">
                <div class="row">
                    <NavigationBar />
                </div>
                <div class="row" id="id-sobre">
                    <Sobre />
                    <Contatos />
                </div>
                <div class="row" id="id-projetos">
                    <Projetos data={this.state.projects}/>
                </div>
                <div class="row" id="id-artigos">
                    <Artigos data={this.state.article}/>
                </div>
            </div>
        );
    }
}
