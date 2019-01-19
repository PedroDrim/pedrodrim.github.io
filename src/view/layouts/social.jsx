export default class Social extends React.Component {

    constructor(props) {
        super();
    }

    render() {

        function getMedia(media){
            media = media.toLowerCase();
            var resposta = ["waves-effect waves-light btn btn-floating secondary-dark", "logo-" + media];
            return(resposta);            
        }

        return (
            <li>
                <a href={this.props.data.link} class={getMedia(this.props.data.media)[0]}>
                    <ion-icon class="large" name={getMedia(this.props.data.media)[1]}></ion-icon>
                </a>
            </li>                
        );
    }
}