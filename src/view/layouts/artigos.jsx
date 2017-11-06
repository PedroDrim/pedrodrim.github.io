import CardArtigos from "./card-artigos"

export default class Artigos extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>

                <div class="col center-align s12">
                    <div id="id-artigos" class="section scrollspy">
                        <h4>Artigos</h4>
                    </div>
                </div>

                <div class="container">
                    <CardArtigos />
                    <CardArtigos />
                    <CardArtigos />
                </div>
                
            </div>
        );
    }
}