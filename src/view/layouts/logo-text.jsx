export default class LogoText extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div class="center-align">
                <div id={this.props.id} class="section scrollspy">
                    <div class="col s12">
                        <span class="flow-text secondary-text"><strong>{this.props.text}</strong></span>
                    </div>

                    <div class="col s12">
                        <img src="src/public/images/divider.png" class="responsive-img" />
                    </div>
                </div>
            </div>
        );
    }
}