import Localization from './localization'
import Copyright from './copyright'

export default class FooterLayout extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <Localization />
                <Copyright />
            </div>
        );
    }
}
