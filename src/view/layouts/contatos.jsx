export default class Contatos extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <div class="col center-align s12">
                    <div id="id-contatos" class="section scrollspy">
                        <span class="flow-text green-text"><strong>Contate-me</strong></span>
                    </div>
                </div>

                <div class="container">
                    <form action="https://formspree.io/pedrohenriquedrim@gmail.com" method="POST">
                        <div class="row">

                            <div class="input-field col s6">
                                <input id="title_input" type="text" class="validate" name="title" />
                                <label for="title_input">Titulo</label>
                            </div>

                            <div class="input-field col s6">
                                <input id="email_input" type="email" class="validate" name="email" />
                                <label for="email_input">Email para retorno</label>
                            </div>

                            <div class="input-field col s12">
                                <textarea id="text_input" type="text" class="materialize-textarea" name="name" />
                                <label for="name_input">Mensagem</label>
                            </div>

                            <button class="btn waves-effect waves-light" type="submit" value="send">Enviar
                                <i class="material-icons right">send</i>
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}