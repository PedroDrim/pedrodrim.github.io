import Social from './social'

export default class Localization extends React.Component {

    constructor(props) {
        super();
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
                        <h5>{GLOBAL_DATA.localization.localization_mainName}</h5>
                    </div>

                    <div class="col l6 s12">
                        <p>{GLOBAL_DATA.localization.localization_position_editable.alt.label}: {GLOBAL_DATA.localization.localization_position_editable.alt.value} {GLOBAL_DATA.localization.localization_position_editable.alt.unity}</p>
                        <p>{GLOBAL_DATA.localization.localization_position_editable.lat.label}: {GLOBAL_DATA.localization.localization_position_editable.lat.value}</p>
                        <p>{GLOBAL_DATA.localization.localization_position_editable.lon.label}: {GLOBAL_DATA.localization.localization_position_editable.lon.value}</p>
                    </div>

                    <div class="col l4 offset-l2 s12">
                        <ul class="list-inline">
                            {arrayData(GLOBAL_DATA.localization.localization_social_media)}
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}