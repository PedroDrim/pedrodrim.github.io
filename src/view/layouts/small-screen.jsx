export default class SmallScreen extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <div class="scroll-top hidden-lg-up">
                    <a class="btn btn-primary page-scroll" href="#page-top">
                        <i class="fa fa-chevron-up"></i>
                    </a>
                </div>
            </div>
        );
    }
}
