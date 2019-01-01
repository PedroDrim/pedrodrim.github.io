import Social from './social'

export default class Localization extends React.Component {

    constructor(props) {
        super();
        this.contact = [
            {
                media: "Github",
                link: "http://github.com/pedrodrim/"
            },

            {
                media: "Linkedin",
                link: "http://github.com/pedrodrim/"
            },

            {
                media: "Google",
                link: "http://github.com/pedrodrim/"
            }
        ]
    }

    render() {

        function arrayData(data){
            var rows = [];
                for (var i = 0; i < data.length; i++) {
                    rows.push(<Social data={data[i]} />);
                }
    
            return rows;
        };

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
                            {arrayData(this.contact)}
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}