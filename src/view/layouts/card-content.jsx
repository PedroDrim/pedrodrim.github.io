export default class CardContent extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div class="col s12">
                <p class="flow-text">
                    {this.props.text}
                </p>
            </div>
        );
    }
}