export default class CardTemplate extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <div class="col s12 l6">
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src={this.props.card.imagem} />
                        </div>
                        <div class="card-content">
                            <span class="card-title flow-text activator grey-text text-darken-4"><strong>{this.props.card.titulo}</strong><i class="material-icons right">more_vert</i></span>
                            <span class="flow-text"><a href={this.props.card.url}>{this.props.card.resumo}</a></span>
                        </div>
                        <div class="card-reveal row">
                            <span class="card-title flow-text grey-text text-darken-4">
                                <strong><a href={this.props.card.url}>{this.props.card.titulo}</a></strong>
                                <i class="material-icons right">close</i>
                            </span>

                            <span class="flow-text">{this.props.card.descricao}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}