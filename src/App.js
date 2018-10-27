import './App.css';

import PropTypes from 'prop-types'
import React, {Component} from 'react'
import DesktopContainer from "./container/DesktopContainer";
import MobileContainer from "./container/MobileContainer";
import Thermometer from "./component/Thermometer";

import {BrowserRouter, Link, Redirect, Route, withRouter} from "react-router-dom";
import FAQ from "./component/faq/FAQ";
import InstagramSegment from "./component/home/InstagramSegment";
import FAQSegment from "./component/home/FAQSegment";
import Footer from "./component/Footer";
import Video10Segment from "./component/home/Video10Segment";
import Press from "./component/press/Press";
import EventPage from "./component/events/EventPage";
import GalaSegment from "./component/home/GalaSegment";
import SponsorSegment from "./component/home/SponsorSegment";
import {Button, Responsive, Segment} from "semantic-ui-react";

const App = ({children}) => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTopComponent>
            <Route exact path="/" component={HomepageLayout}/>
            {/*<Route path="/gala" component={GalaLayout}/>*/}
            {/*<Route path="/events" component={EventsLayout}/>*/}
            <Route path="/events" component={GalaLayout}/>
            <Route path="/gala-dinner" component={GalaLayout}/>
            <Route path="/gala" component={EventsLayout}/>
            <Route path="/press" component={PressLayout}/>
            <Route path="/faq" component={FAQLayout}/>
            <Route path="/friends" component={FriendsLayout}/>
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
        <Press/>
    </ResponsiveContainer>
)
const EventsLayout = () => (
    <ResponsiveContainer>
        <EventPage/>
    </ResponsiveContainer>
)
const GalaLayout = () => (
    <Redirect to="/gala"/>
)
// const GalaLayout = () => (
//     <Redirect to="/events#galaEvent" />
// )
const FriendsLayout = () => (
    <ResponsiveContainer>
        <Segment basic textAlign='center' padded='very' style={{
            marginTop: 0,
            marginBottom: 0,
            backgroundColor: '#eee'
        }}>
            <h1 className='normal' style={{
                fontWeight: 300,
                fontSize: '3em',
                //color:'white',
                marginTop: 30,
                marginBottom: -20
            }}>
                Friends of Ava
            </h1>
        </Segment>
        <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
            <SponsorSegment big size='medium'/>
        </Responsive>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <SponsorSegment big size='small'/>
        </Responsive>
    </ResponsiveContainer>
)

const HomepageLayout = () => (
    <ResponsiveContainer>
        <GalaSegment showDetail/>
        <FAQSegment/>
        <Video10Segment detail>
            <div style={{marginTop: 40}}>
                <Link to="/press"><Button inverted size='massive'>More...</Button></Link>
            </div>
        </Video10Segment>
        <Thermometer/>
        <InstagramSegment/>
        {/*<Responsive minWidth={Responsive.onlyMobile.maxWidth}>*/}
        {/*<SponsorSegment size='small'/>*/}
        {/*</Responsive>*/}
        {/*<Responsive maxWidth={Responsive.onlyMobile.maxWidth}>*/}
        {/*<SponsorSegment size='tiny'/>*/}
        {/*</Responsive>*/}

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