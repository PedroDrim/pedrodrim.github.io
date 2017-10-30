import * as React from "react";

export default class CardContent extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <span class="flow-text">{this.props.text}</span>
            </div>
        );
    }
}

