export default class LogoText extends React.Component {

    constructor(props) {
        super();
    }

    render() {

        function optmizeImage(png, webp) {
            var target = navigator.userAgent.match("Chrome");
            var image = target? webp : png;

            return(image);
        }

        return (
            <div class="center-align">
                <div id={this.props.id} class="section scrollspy">
                    <div class="col s12">
                        <span class="flow-text secondary-text"><strong>{this.props.text}</strong></span>
                    </div>

                    <div class="col s12">
                        <img src={optmizeImage(this.props.logo.png, this.props.logo.webp)} class="responsive-img" />
                    </div>
                </div>
            </div>
        );
    }
}