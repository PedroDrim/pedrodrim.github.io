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
                    "imagem": "src/public/images/random_1.png",
                    "descricao": "Um exemplo de artigo apenas para preencher esta aba.",
                    "resumo": "Artigo de teste.",
                    "tags": ["Teste"],
                    "url": "https://github.com/PedroDrim"
                }
            ],
            projects: [
                {
                    "titulo": "Projeto CPU",
                    "imagem": "src/public/images/random_2.png",
                    "descricao": "É um projeto arquitetural feito em ruby focado na modularização e execução de comandos pré-definidos.",
                    "resumo": "Projeto pessoal de modularização.",
                    "tags": ["Arquitetura", "Ruby", "Pessoal", "Modularização"],
                    "url": "https://github.com/PedroDrim/Projeto-CPU"
                },
            
                {
                    "titulo": "Bsus UFG",
                    "imagem": "src/public/images/random_3.png",
                    "descricao": "Projeto de framework realizado para a matéria de Integração 1 do curso de Engenharia de Software da UFG.",
                    "resumo": "HORUS framework em java.",
                    "tags": ["Faculdade", "Java", "Framework"],
                    "url": "https://github.com/PedroDrim/integracao201701"
                },
            
                {
                    "titulo": "Planeje Insumos",
                    "imagem": "src/public/images/random_4.png",
                    "descricao": "Site em desenvolvimento para a Startup de mesmo nome.",
                    "resumo": "Site para comparação de preços.",
                    "tags": ["Startup", "Protótipo", "javascript", "angularJs"],
                    "url": "https://github.com/PedroDrim/planejeinsumos"
                },
            
                {
                    "id": "DroidMetronome",
                    "titulo": "Droid Metronome",
                    "imagem": "src/public/images/random_1.png",
                    "descricao": "Aplicativo de metrônomo para android desenvolvido para o projeto integrador dos alunos do 4* periodo do curso de engenharia de software.\nAtende o MPS-BR G e F.",
                    "resumo": "Metronomo funcional para Android.",
                    "tags": ["Faculdade", "Arquitetura", "Java", "Android", "MPS-BR F"],
                    "url": "https://github.com/DroidFoundry/DroidMetronome"
                }, 
            
                {
                    "titulo": "Gitânio",
                    "imagem": "src/public/images/random_3.png",
                    "descricao": "Sistema Web para gestão comercial, com integração android, desenvolvido pelos alunos do 6* período do curso de Engenharia de Software da UFG.",
                    "resumo": "Sistema Web para gestão comercial.",
                    "tags": ["Faculdade", "Java", "Android", "Web"],
                    "url": "https://github.com/gustavosotnas/Gitanio"
                },

                {
                    "titulo": "Quick list",
                    "imagem": "src/public/images/random_6.png",
                    "descricao": "Projeto pessoal feito em express de uma lista atualizada apenas por requisições REST, com documentação e suporte a Docker.",
                    "resumo": "Lista atualizada apenas por REST.",
                    "tags": ["Pessoal", "Typescript", "Docker", "React"],
                    "url": "https://github.com/PedroDrim/Quick-List"
                },

                {
                    "titulo": "MyBuilder",
                    "imagem": "src/public/images/random_5.png",
                    "descricao": "Projeto pessoal feito em express de um gerenciador de hashes de imagens, com documentação e suporte a Docker.",
                    "resumo": "Gerenciador de hashes de imagens.",
                    "tags": ["Pessoal", "Docker", "Firebase-web"],
                    "url": "https://github.com/PedroDrim/MyBuilder"
                }
                
            ]
            
        }
    }

    render() {
        return (
            <div>
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
