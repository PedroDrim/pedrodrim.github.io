import CardTemplate from "./card-template"
import LogoText from "./logo-text";

export default class Personal extends React.Component {

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
                <LogoText id="id_personal" text={GLOBAL_DATA.navbar.navbar_tab_personal}/>

                <div class="container">
                    {arrayData(GLOBAL_DATA.personal_projects)}                   
                </div>

            </div>
        );
    }
}