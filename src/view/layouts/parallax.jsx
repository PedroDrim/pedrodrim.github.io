export default class Parallax extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <div cass="col s12">
                    <div class="parallax-container">
                        <div class="parallax">
                            <img src="src/public/images/parallax.webp" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}