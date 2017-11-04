export default class Footer extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <footer class="text-center">
                    <div class="footer-above">
                        <div class="container">
                            <div class="row">
                                <div class="footer-col col-md-4">
                                    <h3>Localização</h3>
                                    <p>Altitude: 841 metros
                                        <br />Latitude: -16.7399897
                                        <br />Longitude: -49.2613339
                                    </p>
                                </div>
                                <div class="footer-col col-md-4">
                                    <h3>Por aí...</h3>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="btn-social btn-outline" href="#">
                                                <i class="fa fa-fw fa-github"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="btn-social btn-outline" href="#">
                                                <i class="fa fa-fw fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="btn-social btn-outline" href="#">
                                                <i class="fa fa-fw fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="btn-social btn-outline" href="#">
                                                <i class="fa fa-fw fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="footer-col col-md-4">
                                    <h3>Sobre o portifólio</h3>
                                    <p>Este portfólio foi "copiado" com base neste template feito em bootstrap:
                            <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-below">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    MIT licence 2017
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
