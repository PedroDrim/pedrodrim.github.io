export default class Social extends React.Component {

    constructor(props) {
        super();
    }

    render() {

        function getMedia(media){
            media = media.toLowerCase();
            var resposta = [];
            resposta.push("waves-effect waves-light btn-floating social " + media);
            resposta.push("fab fa-" + media);
            return(resposta);            
        }

        return (
            <li>
                <a href={this.props.data.link} class={getMedia(this.props.data.media)[0]}>
                <i class={getMedia(this.props.data.media)[1]}></i> Sign in with Google</a>
            </li>                
        );
    }
}