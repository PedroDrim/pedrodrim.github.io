import CardTemplate from "./card-template"
import LogoText from "./logo-text"

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
                <LogoText id="id_projetos" text={GLOBAL_DATA.navbar_tab_projects}/>

                <div class="container">
                    {arrayData(GLOBAL_DATA.projects)}                    
                </div>

            </div>
        );
    }
}