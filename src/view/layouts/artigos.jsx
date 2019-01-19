import CardTemplate from "./card-template"
import LogoText from "./logo-text";

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
                <LogoText id="id_artigos" text={GLOBAL_DATA.navbar_tab_articles}/>

                <div class="container">
                    {arrayData(GLOBAL_DATA.articles)}                   
                </div>

            </div>
        );
    }
}