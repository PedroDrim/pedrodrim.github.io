import CardTemplate from "./card-template"

export default class Projetos extends React.Component {

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
                    <div id="id-projetos" class="section scrollspy">
                        <span class="flow-text secondary-text"><strong>{GLOBAL_DATA.navbar_tab_projects}</strong></span>
                    </div>
                </div>

                <div class="container">
                    {arrayData(GLOBAL_DATA.projects)}                    
                </div>

            </div>
        );
    }
}