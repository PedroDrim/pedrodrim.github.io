export default class Copyright extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div class="footer-copyright">
                <div class="container center-align">
                    <a class="grey-text text-lighten-4" href="#!">{GLOBAL_DATA.copyright_name}</a>
                </div>
            </div>
        );
    }
}