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
                            <img class="activator" src={this.props.card.picture} />
                        </div>
                        <div class="card-content">
                            <span class="card-title flow-text activator grey-text text-darken-4"><strong>{this.props.card.title}</strong><i class="material-icons right">more_vert</i></span>
                            <span class="flow-text"><a href="#">{this.props.card.summary}</a></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title flow-text grey-text text-darken-4"><strong>{this.props.card.title}</strong><i class="material-icons right">close</i></span>
                            <span class="flow-text">{this.props.card.fullText}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}