import * as React from "react";

export default class Carousel extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div class="carousel carousel-slider" data-indicators="true">
                <a class="carousel-item white-text" href="#one!"><img src={this.props.imageArray[0]} /></a>
                <a class="carousel-item white-text" href="#two!"><img src={this.props.imageArray[1]} /></a>
                <a class="carousel-item white-text" href="#three!"><img src={this.props.imageArray[2]} /></a>
                <a class="carousel-item white-text" href="#four!"><img src={this.props.imageArray[3]} /></a>
            </div>
        );
    }
}