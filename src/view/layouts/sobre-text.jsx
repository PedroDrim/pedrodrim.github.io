export default class SobreText extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div class="col center-align s12 m6 l6">
                <p class="flow-text">
                    {this.props.text}
                </p>
            </div>
        );
    }
}