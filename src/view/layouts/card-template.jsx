import CardContent from "./card-content"

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

        function arrayData(data){
            var rows = [];
                for (var i = 0; i < data.length; i++) {
                    rows.push(<CardContent text={data[i]} />);
                }
    
            return rows;
        };

        return (
            <div class="col s12 l6">
                <div class="card z-depth-3">

                    <div class="card-image">
                        <img src={optmizeImage(this.props.card.image_png, this.props.card.image_webp)} />
                        <a class="btn-floating halfway-fab waves-effect waves-light red modal-trigger" href={"#" + this.props.card.title}>
                            <i class="material-icons fas fa-eye"></i>
                        </a>
                    </div>

                    <div class="card-content">
                        <span class="card-title flow-text activator secondary-dark-text">
                            <strong>{this.props.card.title}</strong>
                        </span>

                        {addTagList(this.props.card.tags)}
                        <br></br>
                        
                        <span class="flow-text"><a href={this.props.card.url}>{this.props.card.subtitle}</a></span>
                    </div>

                    <div id={this.props.card.title} class="modal">
                        <div class="modal-content">
                            <div class="row">
                                {arrayData(this.props.card.description)}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}