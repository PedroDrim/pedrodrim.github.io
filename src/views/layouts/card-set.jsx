import * as React from "react";
import Card from "./card";

export default class CardSet extends React.Component {

  constructor(props) {
    super();

    this.state = {
      image: "./images/template_carousel.webp",
      title: "Card de Teste",
      summary: "Oi"
    };

    console.log(this.state);
  }

  render() {
    return (
      <div class="grey darken-1">
        <div class="row center-align">
          <div class="col s12 m6 l6 xl6">
            <Card image={this.state.image} title={this.state.title} summary={this.state.summary} />
          </div>
          <div class="col s12 m6 l6 xl6">
            <Card image={this.state.image} title={this.state.title} summary={this.state.summary} />
          </div>
        </div>
      </div>
    );
  }
}