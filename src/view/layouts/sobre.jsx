import LogoText from "./logo-text"
import SobreText from "./sobre-text"

export default class Sobre extends React.Component {

    constructor(props) {
        super();
    }

    render() {

        function arrayData(data){
            var rows = [];
                for (var i = 0; i < data.length; i++) {
                    rows.push(<SobreText text={data[i]} />);
                }
    
            return rows;
        };

        return (
            <div class="container">
                <LogoText id="id_sobre" text={GLOBAL_DATA.navbar_tab_about}/>
                {arrayData(GLOBAL_DATA.sobre)}
            </div>
        );
    }
}