import './App.css';

import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Button, Container, Divider, Grid, Header, Icon, Image, List, Segment} from 'semantic-ui-react'
import DesktopContainer from "./container/DesktopContainer";
import MobileContainer from "./container/MobileContainer";
import Thermometer from "./component/Thermometer";
import Instagram from "./component/Instagram";

import plazaBackground from './img/plazaBg.png'
// import plazaBackground from './img/plaza.jpg'
// var plazaImg = require('./img/plaza.jpg')


const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const HomepageLayout = () => (
    <ResponsiveContainer>

        <Thermometer/>

        <Segment style={{
            padding: '6em 0em',
            borderTop: 'none'
        }} textAlign='center'>



            {/*<blockquote*/}
                {/*class="instagram-media"*/}
                {/*data-instgrm-captioned*/}
                {/*data-instgrm-permalink="https://www.instagram.com/p/BnPN8aDHY5P/?utm_source=ig_embed"*/}
                {/*data-instgrm-version="9" className="insta-bquote">*/}
                {/*<div style={{padding:8}}>*/}
                    {/*<div className="insta-div1">*/}
                        {/*<div className="insta-div2" >*/}

                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<p style={{margin:'8px 0 0 0', padding:'0 4px'}}>*/}
                        {/*<a className="insta-link1" href="https://www.instagram.com/p/BnPN8aDHY5P/?utm_source=ig_embed" target="_blank">*/}
                            {/*September is childhood cancer awareness month. I wanted to share some facts. 🎗 This page is all about Ava and her journey with Neuroblastoma;*/}
                            {/*however she isn’t the only child suffering / who has suffered cancer. Some we see fighting for their lives like Ava in the Royal Children’s hospital each day.*/}
                            {/*Some we read about from other parts of Australia and the world. Some have battled and won. Some battled and devastatingly didn’t survive. Some are newborns, toddlers like Ava,*/}
                            {/*some are slightly older or in their teens. All kids. All not deserving of this hand they’ve been dealt. In the picture below left is Ava a year ago in 2017.*/}
                            {/*A seemingly happy healthy toddler loving her food and a good babycino. On the right is Ava 1year later in 2018. Unable to eat and sustained with a high calorific formula feed provided via an NG tube.*/}
                            {/*Small and underweight for her age. Alive only because of the toxic medicines regularly administered Through the lines you see going into her heart. Childhood Cancer is not rare.*/}
                            {/*Just people don’t really know or want to think about it. We didn’t. Until it happened to Ava. Some facts for you:*/}
                            {/*On average 900 Australian children will be diagnosed with cancer this year One in five of those children will die. Of those cured, 10% will go on to develop a treatment*/}
                            {/*related cancer in later life Almost half of childhood cancers are diagnosed between the ages of 0-4 years These are the hard facts to absorb and are the same throughout the world:*/}
                            {/*Childhood cancer is the biggest killer of children out of any childhood disease. Government funding for cancer research is disproportionately directed towards adult cancers. 4% of funding globally*/}
                            {/*is expected to be received for childhood cancer. Just 4%. Did you know the average age of diagnosis of cancer in an adult is 67 years - average life lost to cancer is 17 The average age of diagnosis*/}
                            {/*of cancer in a child is 6 years - average life LOST IS 71 YEARS! And finally. This one hurts me the most: Neuroblastoma claims more lives of children under the age of 5 than any other cancer.*/}
                            {/*🎗#avasneuroblastomajourney #childhoodcancerawareness #gogold #hope #neuroblastoma #morethan4*/}
                        {/*</a>*/}
                    {/*</p>*/}
                    {/*<p className="insta-p2">*/}
                        {/*A post shared by*/}
                        {/*<a className="insta-link2" href="https://www.instagram.com/leeleeloves12/?utm_source=ig_embed" target="_blank">*/}
                            {/*Leanne*/}
                        {/*</a> (@leeleeloves12) on*/}
                        {/*<time className="insta-time" datetime="2018-09-02T20:51:04+00:00">Sep 2, 2018 at 1:51pm PDT</time>*/}
                    {/*</p>*/}
                {/*</div>*/}
            {/*</blockquote> <script async defer src="//www.instagram.com/embed.js"></script>*/}
            <Grid stackable container centered >
                <Grid.Column width={4} stretched verticalAlign="middle">


                    <a href='https://www.instagram.com/leeleeloves12/'> <div style={{marginBottom:10}}>
                        <Icon name='instagram' size='huge'/>
                    </div>
                    <h1 className='normal thin' style={{margin:0}}>
                        Follow
                    </h1>
                    <h1 style={{margin:0, marginBottom:20}}>
                        Ava's Journey
                    </h1>
                    <p style={{
                        fontSize:'1.3em',
                        color:'#aaa'
                    }}>
                        @leeleeloves12
                    </p>
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


        <Segment basic style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            "How can I help?"
                        </Header>
                        <div style={{ fontSize: '1.33em', padding: '0 3em'}}>
                            {/*<p>*/}
                                {/*Thank you for taking an interest in Ava's Journey.*/}
                            {/*</p>*/}
                            <p>
                                We welcome messages of support, volunteers, fundraising ideas, donated auction items...
                            </p>
                            <p>
                                <Button as='a' href='mailto:info@avasjourney.com.au' size='huge' style={{}}>
                                    <Icon name='mail'/>
                                    Get in touch
                                </Button>
                            </p>
                            <p>
                                Follow & share: &nbsp;
                                <a href='https://www.facebook.com/Avasneuroblastomajourney/'><Icon name='facebook' size='big'/></a>
                                <a href='https://www.instagram.com/leeleeloves12/'><Icon name='instagram' size='big'/></a>
                            </p>

                            {/*<p>*/}
                                {/*<Button as='a' size='huge' style={{*/}
                                    {/*// {marginRight:'10em'}*/}
                                {/*}}>*/}
                                    {/*Contact Us*/}
                                {/*</Button>*/}
                            {/*</p>*/}

                        </div>
                    </Grid.Column>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em', margin:'0 0' }}>
                            "What is neuroblastoma?"
                        </Header>
                        <Header as='h3' style={{ fontSize: '2em', marginBottom:'1em' }}>
                            "How can we beat it?"
                        </Header>

                        <p style={{ fontSize: '1.33em' }}>
                            <Button as='a' size='huge' style={{
                                // {marginRight:'10em'}
                            }}>
                                FAQ
                            </Button>
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            Read our FAQ page to find out more
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
            <Grid  padded verticalAlign='middle' style={{height:'100%'}} >
                <Grid.Row textAlign='center'>
                    <Grid.Column>
                        <h1 className='normal' style={{
                            fontWeight:200,
                            fontSize:'3em'
                        }}>
                            Ava's Gala
                        </h1>
                        <h3 className='normal' style={{
                            fontWeight:300,
                            fontSize:'1.2em'
                        }}>
                            11.11.18
                            <span style={{color:'#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                            Plaza Ballroom
                        </h3>

                        <p style={{ fontSize: '1.33em' }}>
                            <Button as='a' size='huge' style={{
                                // {marginRight:'10em'}
                            }}>
                                <Icon name='ticket'/>
                                Book Now
                            </Button>
                        </p>
                        <h3 className='normal' style={{
                            fontWeight:200,
                            fontSize:'1.1em'
                        }}>
                            Guest Speakers
                            <span style={{color:'#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                            3 Course Dinner
                            <span style={{color:'#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                            Auction
                            <span style={{color:'#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                            Prizes
                        </h3>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Segment>

        <Segment basic style={{
            padding: '6em 0em',
        }} textAlign='center'>
            <h1>
                Upcoming Events
            </h1>

            <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fweloveyoursoul%2Fposts%2F1947340912225430&width=350&show_text=true&height=528&appId"
                width="350" height="528"
                style={{border: 'none', overflow: 'hidden'}} scrolling="no"
                frameborder="0" allowTransparency="true" allow="encrypted-media">

            </iframe>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Breaking The Grid, Grabs Your Attention
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Instead of focusing on content creation and hard work, we have learned how to master the
                    art of doing nothing by providing massive amounts of whitespace and generic content that
                    can seem massive, monolithic and worth your attention.
                </p>
                <Button as='a' size='large'>
                    Read More
                </Button>

                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    <a href='#'>Case Studies</a>
                </Divider>

                <Header as='h3' style={{ fontSize: '2em' }}>
                    Did We Tell You About Our Bananas?
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                    it's really true. It took years of gene splicing and combinatory DNA research, but our
                    bananas can really dance.
                </p>
                <Button as='a' size='large'>
                    I'm Still Quite Interested
                </Button>
            </Container>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                                <List.Item as='a'>Religious Ceremonies</List.Item>
                                <List.Item as='a'>Gazebo Plans</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services' />
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

export default HomepageLayout