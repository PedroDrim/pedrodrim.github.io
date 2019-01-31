export default class Copyright extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div class="footer-copyright">
                <div class="container center-align">
                    <a class="secondary-light-text" href="#!">{GLOBAL_DATA.copyright}</a>
                </div>
            </div>
        );
    }
}