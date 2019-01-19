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

        function optmizeImage(png, webp) {
            var target = navigator.userAgent.match("Chrome");
            var image = target? webp : png;

            return(image);
        }

        return (
            <div>
                <div class="col s12 l6">
                    <div class="card z-depth-3">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src={optmizeImage(this.props.card.image_png, this.props.card.image_webp)} />
                        </div>
                        <div class="card-content">
                            <span class="card-title flow-text activator secondary-dark-text"><strong>{this.props.card.title}</strong><i class="material-icons right">more_vert</i></span>
                            {addTagList(this.props.card.tags)}
                            <br></br>
                            <span class="flow-text"><a href={this.props.card.url}>{this.props.card.summary}</a></span>
                        </div>
                        <div class="card-reveal row">
                            <span class="card-title flow-text secondary-dark-text">
                                <strong><a href={this.props.card.url}>{this.props.card.title}</a></strong>
                                <i class="material-icons right">close</i>
                            </span>

                            <span class="flow-text">{this.props.card.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}