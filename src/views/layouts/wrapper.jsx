import * as React from "react";

export default class Wrapper extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo center">Logo</a>
                </div>
            </nav>
        );
    }
}

