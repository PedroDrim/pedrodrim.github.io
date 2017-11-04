import About from './about'
import Contact from './contact'
import Footer from './footer'
import Header from './header'
import Navigation from './navigation'
import Portfolio from './portfolio'
import SmallScreen from './small-screen'

export default class MainLayout extends React.Component {

    constructor(props) {
        super();
    }

    /**
        <div>
            <Navigation />
            <Header />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
            <SmallScreen />
        </div>
    */

    render() {
        return (
            <div>
                <Navigation />
                <Footer />
            </div>
        );
    }
}
