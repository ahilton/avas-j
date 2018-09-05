import './App.css';

import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Button, Container, Divider, Grid, Header, Icon, List, Segment} from 'semantic-ui-react'
import DesktopContainer from "./container/DesktopContainer";
import MobileContainer from "./container/MobileContainer";
import Thermometer from "./component/Thermometer";
import Instagram from "./component/Instagram";

import plazaBackground from './img/plazaBg.png'
// import plazaBackground from './img/plaza.jpg'
// var plazaImg = require('./img/plaza.jpg')
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import FAQ from "./component/FAQ";

const App = ({children}) => (
    <Router basename={process.env.PUBLIC_URL}>
        <div>
            <Route exact path="/" component={HomepageLayout}/>
            <Route path="/gala" component={GalaLayout}/>
            <Route path="/events" component={EventsLayout}/>
            <Route path="/press" component={PressLayout}/>
            <Route path="/faq" component={FAQLayout}/>
            {/*<Route path="/topics" component={Topics} />*/}
        </div>
    </Router>
)
export default App

const ResponsiveContainer = ({children}) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
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

        <Segment style={{
            padding: '6em 0em',
            borderTop: 'none'
        }} textAlign='center'>

            <Grid stackable container centered>
                <Grid.Column width={4} stretched verticalAlign="middle">

                    <a href='https://www.instagram.com/leeleeloves12/' style={{
                        color:'black',
                        fontSize:'2em'
                    }}>
                        <div style={{marginBottom: 10}}>
                            <Icon name='instagram' size='huge'/>
                        </div>
                        <h1 className='normal thin' style={{margin: 0}}>
                            Follow
                        </h1>
                        <h1 style={{margin: 0, marginBottom: 20}}>
                            Ava's Journey
                        </h1>
                    </a>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Instagram url={'BnPN8aDHY5P'}/>
                </Grid.Column>
                <Grid.Column width={6} only='computer'>
                    <Instagram url={'BlXjA7Yg0Py'}/>
                </Grid.Column>

            </Grid>

        </Segment>


        <Segment basic style={{padding: '0em'}} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                        <h3 style={{fontSize: '3em', marginBottom: 30}}>
                            "How can I help?"
                        </h3>
                        <div style={{fontSize: '1.33em', padding: '0 3em'}}>
                            {/*<p>*/}
                            {/*Thank you for taking an interest in Ava's Journey.*/}
                            {/*</p>*/}
                            <p style={{}}>
                                We welcome messages of support, volunteering, <br/>fundraising ideas, donated auction
                                items...
                            </p>
                            <p>
                                <Button as='a' href='mailto:info@avasjourney.com.au' size='huge' style={{backgroundColor:'#8DD1CA'}}>
                                    <Icon name='mail'/>
                                    Get in touch
                                </Button>
                            </p>
                            <br/>
                            <p>
                                Follow & share Ava's Journey &nbsp;
                                <Link to='https://www.facebook.com/Avasneuroblastomajourney/'>
                                    <Icon name='facebook' size='big' style={{color:'black'}}/>
                                </Link>

                                <Link to='https://www.instagram.com/leeleeloves12/'>
                                    <Icon name='instagram' size='big' style={{color:'black'}}/>
                                </Link>
                            </p>

                        </div>
                    </Grid.Column>
                    <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                        <Header as='h3' style={{fontSize: '2em', margin: '0 0'}}>
                            "What is neuroblastoma?"
                        </Header>
                        <Header as='h3' style={{fontSize: '2em', marginBottom: '2em'}}>
                            "What's next for Ava?"
                        </Header>
                        <p style={{fontSize: '1.33em'}}>
                            Read our FAQ page to find out more
                        </p>
                        <p style={{fontSize: '1.33em'}}>
                            <Link to="/faq">
                                <Button as='a' size='huge' style={{backgroundColor:'#8DD1CA'}}>
                                    FAQ
                                </Button>
                            </Link>
                        </p>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment className='gala' basic style={{
            backgroundColor: 'black',
            padding: '0em',
            minHeight: 400,
            height: 400,
            backgroundImage: `url(${plazaBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }} vertical textAlign='center'>
            <Grid padded verticalAlign='middle' style={{height: '100%'}}>
                <Grid.Row textAlign='center'>
                    <Grid.Column>
                        <h1 className='normal' style={{
                            fontWeight: 200,
                            fontSize: '3em',
                            marginBottom: 0
                        }}>
                            Ava's Gala
                        </h1>
                        <h3 className='normal' style={{
                            fontWeight: 300,
                            fontSize: '1.2em',
                            marginTop: 0,
                            marginBottom: 40
                        }}>
                            11.11.18
                            <span style={{color: '#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                            Plaza Ballroom
                        </h3>

                        <p style={{fontSize: '1.33em'}}>
                            <Button inverted as='a' size='huge' style={{
                                // {marginRight:'10em'}
                            }}>
                                <Icon name='ticket'/>
                                Book Now
                            </Button>
                        </p>
                        <h3 className='normal' style={{
                            fontWeight: 200,
                            fontSize: '1.1em'
                        }}>
                            Guest Speakers
                            <span style={{color: '#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                            3 Course Dinner
                            <span style={{color: '#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                            Auction
                            <span style={{color: '#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                            Prizes
                        </h3>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Segment>

        <Segment basic style={{
            padding: '6em 0em',
        }} textAlign='center'>
            <h1 style={{
                fontSize:'2.5em',
                marginBottom:50
            }}>
                Upcoming Events
            </h1>

            <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fweloveyoursoul%2Fposts%2F1947340912225430&width=350&show_text=true&height=528&appId"
                width="350" height="528"
                style={{border: 'none', overflow: 'hidden'}} scrolling="no"
                frameborder="0" allowTransparency="true" allow="encrypted-media">

            </iframe>
        </Segment>

        {/*<Segment style={{padding: '8em 0em'}} vertical>*/}
            {/*<Container text>*/}
                {/*<Header as='h3' style={{fontSize: '2em'}}>*/}
                    {/*Breaking The Grid, Grabs Your Attention*/}
                {/*</Header>*/}
                {/*<p style={{fontSize: '1.33em'}}>*/}
                    {/*Instead of focusing on content creation and hard work, we have learned how to master the*/}
                    {/*art of doing nothing by providing massive amounts of whitespace and generic content that*/}
                    {/*can seem massive, monolithic and worth your attention.*/}
                {/*</p>*/}
                {/*<Button as='a' size='large'>*/}
                    {/*Read More*/}
                {/*</Button>*/}

                {/*<Divider*/}
                    {/*as='h4'*/}
                    {/*className='header'*/}
                    {/*horizontal*/}
                    {/*style={{margin: '3em 0em', textTransform: 'uppercase'}}*/}
                {/*>*/}
                    {/*<a href='#'>Case Studies</a>*/}
                {/*</Divider>*/}

                {/*<Header as='h3' style={{fontSize: '2em'}}>*/}
                    {/*Did We Tell You About Our Bananas?*/}
                {/*</Header>*/}
                {/*<p style={{fontSize: '1.33em'}}>*/}
                    {/*Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but*/}
                    {/*it's really true. It took years of gene splicing and combinatory DNA research, but our*/}
                    {/*bananas can really dance.*/}
                {/*</p>*/}
                {/*<Button as='a' size='large'>*/}
                    {/*I'm Still Quite Interested*/}
                {/*</Button>*/}
            {/*</Container>*/}
        {/*</Segment>*/}

        <Segment inverted vertical style={{padding: '5em 0em'}}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About'/>
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                                <List.Item as='a'>Religious Ceremonies</List.Item>
                                <List.Item as='a'>Gazebo Plans</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services'/>
                            <List link inverted>
                                <List.Item as='a'>Banana Pre-Order</List.Item>
                                <List.Item as='a'>DNA FAQ</List.Item>
                                <List.Item as='a'>How To Access</List.Item>
                                <List.Item as='a'>Favorite X-Men</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>
                                Footer Header
                            </Header>
                            <p>
                                Extra space for a call to action inside the footer that could help re-engage users.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
)

