import CardTemplate from "./card-template"
import LogoText from "./logo-text"

export default class Professional extends React.Component {

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
                <LogoText id="id_professional" text={GLOBAL_DATA.navbar.navbar_tab_professional} logo={GLOBAL_DATA.logo}/>

                <div class="container">
                    {arrayData(GLOBAL_DATA.professional_projects)}                    
                </div>

            </div>
        );
    }
}