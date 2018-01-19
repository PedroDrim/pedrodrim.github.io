import CardTemplate from "./card-template"

export default class Artigos extends React.Component {

    constructor(props) {
        super();
    }

    render() {

        function arrayData(data){
            var rows = [];
                for (var i = 0; i < data.length; i++) {
                    rows.push(<CardTemplate card={data[i]} />);
                }
    
            return rows;
        };

        return (
            <div>

                <div class="col center-align s12">
                    <div id="id-artigos" class="section scrollspy">
                        <span class="flow-text green-text"><strong>Artigos</strong></span>
                    </div>
                </div>

                <div class="container">
                    {arrayData(this.props.data)}                   
                </div>

            </div>
        );
    }
}