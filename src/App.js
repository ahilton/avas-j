import './App.css';

import PropTypes from 'prop-types'
import React, {Component} from 'react'
import DesktopContainer from "./container/DesktopContainer";
import MobileContainer from "./container/MobileContainer";
import Thermometer from "./component/Thermometer";

import {BrowserRouter, Route, withRouter} from "react-router-dom";
import FAQ from "./component/faq/FAQ";
import InstagramSegment from "./component/home/InstagramSegment";
import FAQSegment from "./component/home/FAQSegment";
import Footer from "./component/Footer";
import GalaSegment from "./component/home/GalaSegment";
import EventsSegment from "./component/home/EventsSegment";

const App = ({children}) => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTopComponent>
            <Route exact path="/" component={HomepageLayout}/>
            <Route path="/gala" component={GalaLayout}/>
            <Route path="/events" component={EventsLayout}/>
            <Route path="/press" component={PressLayout}/>
            <Route path="/faq" component={FAQLayout}/>
        </ScrollToTopComponent>
    </BrowserRouter>
)
export default App

const ResponsiveContainer = ({children}) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
        <Footer/>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const FAQLayout = () => (
    <ResponsiveContainer>
        <FAQ/>
    </ResponsiveContainer>
)
const PressLayout = () => (
    <ResponsiveContainer>
        <h1>Press</h1>
    </ResponsiveContainer>
)
const EventsLayout = () => (
    <ResponsiveContainer>
        <h1>Events</h1>
    </ResponsiveContainer>
)
const GalaLayout = () => (
    <ResponsiveContainer>
        <h1>Gala</h1>
    </ResponsiveContainer>
)

const HomepageLayout = () => (
    <ResponsiveContainer>
        <Thermometer/>
        <InstagramSegment/>
        <FAQSegment/>
        <GalaSegment/>
        <EventsSegment/>
    </ResponsiveContainer>
)

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return this.props.children
    }
}

const ScrollToTopComponent = withRouter(ScrollToTop)