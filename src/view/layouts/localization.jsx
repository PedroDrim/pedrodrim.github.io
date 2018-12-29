export default class Localization extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div class="container">
                <div class="row center-align">

                    <div class="col s12">
                        <h5>Onde estou</h5>
                    </div>

                    <div class="col l6 s12">
                        <p>Altitude: 841 metros</p>
                        <p>Latitude: -16.7399897</p>
                        <p>Longitude: -49.2613339</p>
                    </div>

                    <div class="col l4 offset-l2 s12">
                        <ul class="list-inline">
                            <li>
                                <a class="waves-effect waves-light btn-floating social github">
                                    <i class="fa fa-github"></i> Sign in with github</a>
                            </li>
                            <li>
                                <a class="waves-effect waves-light btn-floating social google">
                                    <i class="fa fa-google"></i> Sign in with Google+</a>
                            </li>
                            <li>
                                <a class="waves-effect waves-light btn-floating social twitter">
                                    <i class="fa fa-twitter"></i> Sign in with twitter</a>
                            </li>
                            <li>
                                <a class="waves-effect waves-light btn-floating social facebook">
                                    <i class="fa fa-facebook"></i> Sign in with facebook</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}