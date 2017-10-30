import * as React from "react";
import Wrapper from './wrapper';
import CardSet from './card-set';
import Carousel from './carousel';
import Footer from './footer';

export default class MainLayout extends React.Component {

    constructor(props) {
        super();
        
        this.state = {
            array: [
                "./images/template_carousel.webp",
                "https://i.imgur.com/ltmWANZ.png",
                "https://media.wired.com/photos/5926dead8d4ebc5ab806bc22/master/pass/MastercardHP.jpg",
                "http://papers.co/wallpaper/papers.co-ag22-mickey-mouse-dark-minimal-circle-disney-art-36-3840x2400-4k-wallpaper.jpg"
            ]
        };
    }

    render() {
        return (
            <div>
                <Wrapper/>
                <Carousel imageArray={this.state.array}/>
                <CardSet/>
                <Footer/>
            </div>

        );
    }
}

