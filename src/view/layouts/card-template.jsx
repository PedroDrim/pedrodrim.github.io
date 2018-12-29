export default class CardTemplate extends React.Component {

    constructor(props) {
        super();
    }

    render() {

        function addTagList(data) {
            var rows = [];
            for (var i = 0; i < data.length; i++) {
                rows.push(<div class="chip">{data[i]} </div>);
            }

            return rows;
        }

        return (
            <div>
                <div class="col s12 l6">
                    <div class="card z-depth-3">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src={this.props.card.imagem} />
                        </div>
                        <div class="card-content">
                            <span class="card-title flow-text activator grey-text text-darken-4"><strong>{this.props.card.titulo}</strong><i class="material-icons right">more_vert</i></span>
                            {addTagList(this.props.card.tags)}
                            <br></br>
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