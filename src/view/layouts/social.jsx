export default class Social extends React.Component {

    constructor(props) {
        super();
    }

    render() {

        function getMedia(media){
            media = media.toLowerCase();
            var resposta = ["fa fa-" + media, "waves-effect waves-light btn-floating social " + media];
            return(resposta);            
        }

        return (
            <li>
                <a href={this.props.data.link} class={getMedia(this.props.data.media)[1]}>
                    <i class={getMedia(this.props.data.media)[0]}></i> Me siga no {this.props.data.media}</a>
            </li>                
        );
    }
}