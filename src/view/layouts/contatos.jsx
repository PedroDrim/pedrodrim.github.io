import LogoText from "./logo-text";

export default class Contatos extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <LogoText id="id_contatos" text={GLOBAL_DATA.contatos.contatos_mainName} logo={GLOBAL_DATA.logo}/>

                <div class="container">
                    
                    <div class="hide-on-med-and-down">
                        <form action="https://formspree.io/pedrohenriquedrim@gmail.com" method="POST">
                            <div class="row">

                                <div class="input-field col s6">
                                <i class="material-icons prefix fas fa-font"></i>
                                    <input id="title_input" type="text" class="validate" name="title" />
                                    <label for="title_input">{GLOBAL_DATA.contatos.contatos_title}</label>
                                </div>

                                <div class="input-field col s6">
                                <i class="material-icons prefix fas fa-at"></i>
                                    <input id="email_input" type="email" class="validate" name="email" />
                                    <label for="email_input">{GLOBAL_DATA.contatos.contatos_email}</label>
                                </div>

                                <div class="input-field col s12">
                                    <i class="material-icons prefix fas fa-feather-alt"></i>
                                    <textarea id="text_input" type="text" class="materialize-textarea" name="name" />
                                    <label for="name_input">{GLOBAL_DATA.contatos.contatos_message}</label>
                                </div>

                                <div class="center-align">
                                    <button class="btn waves-effect waves-light secondary" type="submit" value="send">{GLOBAL_DATA.contatos.contatos_btn_send}
                                        <i class="material-icons right fas fa-paper-plane"></i>
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>

                    <div class="hide-on-large-only">
                        <div class="center-align">
                            <a class="btn-floating btn-large waves-effect waves-light secondary" href="mailto:pedrohenriquedrim@gmail.com">
                                <i class="material-icons right fas fa-comments"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}