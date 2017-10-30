import * as React from "react";
import CardContent from "./card-content";

export default class Card extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div class="card z-depth-3">
                <div class="card-image">
                    <img class="responsive-img" src={this.props.image} />
                    <span class="card-title">{this.props.title}</span>
                    <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                </div>
                <div class="card-content">
                    <CardContent text={this.props.summary} />
                </div>
            </div>

        );
    }
}

