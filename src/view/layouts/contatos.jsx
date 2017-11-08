export default class Contatos extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <div class="col center-align s12">
                    <div id="id-contatos" class="section scrollspy">
                        <span class="flow-text green-text">Contate-me</span>
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
                                <label for="email_input">Email</label>
                            </div>

                            <div class="input-field col s12">
                                <textarea id="text_input" type="text" class="materialize-textarea" data-length="120" name="name" />
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

/**
                <section id="contact">
                    <div class="container">
                        <h2 class="text-center">Contate-me</h2>
                        <hr class="star-primary" />
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <form name="sentMessage" id="contactForm" novalidate>
                                    <div class="control-group">
                                        <div class="form-group floating-label-form-group controls">
                                            <label>Nome</label>
                                            <input class="form-control" id="name" type="text" placeholder="Name" required data-validation-required-message="Please enter your name." />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="form-group floating-label-form-group controls">
                                            <label>Endereço de Email</label>
                                            <input class="form-control" id="email" type="email" placeholder="Endereço de Email" required data-validation-required-message="Entre com o seu email." />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="form-group floating-label-form-group controls">
                                            <label>Telefone</label>
                                            <input class="form-control" id="phone" type="tel" placeholder="Telefone" required data-validation-required-message="Entre com o seu telefone." />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="form-group floating-label-form-group controls">
                                            <label>Mensagem</label>
                                            <textarea class="form-control" id="message" rows="5" placeholder="Mensagem" required data-validation-required-message="Escreva a mensagem."></textarea>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <br />
                                    <div id="success"></div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success btn-lg">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                */