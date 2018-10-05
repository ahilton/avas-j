import React from 'react'
import {Button, Divider, Icon, Menu, Responsive, Segment} from "semantic-ui-react";
import GalaEvent from "./GalaEvent";
import EventWidget from "./EventWidget";
import ZooEvent from "./ZooEvent";
import ArtEvent from "./ArtEvent";
import {HashLink as Link} from "react-router-hash-link";

const EventPage = () => (

    <div className='eventPage'>
        <Segment basic textAlign='center' padded='very' style={{
            marginTop: 0,
            marginBottom: 0,
            backgroundColor: '#eee'
        }}>
            <h1 className='normal' style={{
                fontWeight:300,
                fontSize: '3em',
                //color:'white',
                marginTop:15
            }}>
                Fundraising Events
            </h1>
            <Menu secondary stackable compact size='huge' className='eventMenu'>
                <Menu.Item link>
                    <Link smooth to={'#artEvent'}>
                        <Icon name='cocktail'/>&nbsp;
                        Art For Ava
                    </Link>
                </Menu.Item>
                <Menu.Item as='a'
                    // name='aboutUs'
                    // active={activeItem === 'aboutUs'}
                    // onClick={this.handleItemClick}
                >
                    <Link smooth to={'#zooEvent'}>
                        <Icon name='music'/>&nbsp;
                        Electric Zoo
                    </Link>
                </Menu.Item>
                <Menu.Item as='a'>
                    <Link smooth to={'#galaEvent'}>
                        <Icon name='star'/>&nbsp;
                        Gala
                    </Link>
                </Menu.Item>

            </Menu>
        </Segment>

        <EventWidget {...{
            bookingLink: <Button as='a' color='teal' href='http://art4ava.eventbrite.com.au' size='huge' style={{
                backgroundColor:'#d77591',
                // color:'while'
            }}>
                <Icon name='ticket'/>
                Book Now
            </Button>,
            eventLink:'artEvent',
            eventCell: <ArtEvent/>,
            eventDate: [<span>Friday 12<sup>th</sup> Oct</span>, '6:30pm'],
            eventLocation: ['Studio Gallery Melbourne','Cheltenham'],
            eventTitle: 'Art For Ava',
            eventDetail: <div className='artEvent'>
                <h2 className='normal'><a href='http://art4ava.eventbrite.com.au'> Art For Ava</a></h2>
                    <p>Want to know the secret to stunning art? And how to hang it like a pro? Keen to get some hints on design and styling? A dream team of
                        <a href="https://www.instagram.com/kerryarmstrongart/" target="_blank" rel="noopener noreferrer nofollow"><strong> Kerry Armstrong</strong></a>, <a href="https://www.instagram.com/aimeestylist/" target="_blank" rel="noopener noreferrer nofollow"><strong>Aimee Tarulli</strong></a> and <a href="https://www.lightslightslights.com.au/about/danielle/" target="_blank" rel="noopener noreferrer nofollow"><strong>Danielle Mastro</strong></a> are coming together to reveal all while raising funds for <strong>Ava Wake</strong></p>
                    <p>The $50 donation entry fee includes:</p>
                    <ul>
                        <li>
                            <p><strong>an incredible panel of experts - </strong><strong>Kerry, Aimee and Danielle</strong></p>
                        </li>
                        <li>
                            <p><strong>an epic and Insta-worthy <strong><a href="http://www.justgrazingthrough.com/" target="_blank" rel="noopener noreferrer nofollow">Just Grazing Through</a> </strong>cheese and grazing platter </strong></p>
                        </li>
                        <li>
                            <p><strong>free-flowing bubbles and wine</strong></p>
                        </li>
                        <li>
                            <p><strong>fabulous raffle prizes thanks to John Frieda, Molton Brown and Black Rock Cellars</strong></p>
                        </li>
                        <li>
                            <p><strong>a great chance to win a <strong>door prize -</strong> a limited edition Kerry Armstrong piece valued at over $4,000</strong>!</p>
                        </li>
                    </ul>
            </div>,
            bgColor:'#eee'
        }}/>

        <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
            <Divider section/>
        </Responsive>

        <EventWidget {...{
            bookingLink: <Button as='a' color='teal' href='http://ezoo.eventbrite.com.au' size='huge' style={{
                // backgroundColor:'#d77591'
            }}>
                <Icon name='ticket'/>
                Book Now
            </Button>,
            eventLink:'zooEvent',
            eventCell: <ZooEvent/>,
            eventDate: [<span>Sunday 28<sup>th</sup> Oct</span>, '12pm – 5:30pm'],
            eventLocation: ['Mentone Lifesaving Club'],
            eventTitle: 'Ava\'s Electric Zoo',
            eventDetail: <div className='zooEvent'>
                <h2 className='normal'><a href='http://ezoo.eventbrite.com.au'>Ava's Electric Zoo</a></h2>
                <p>Join us for a family friendly afternoon of <strong>great live music</strong>, <strong>epic BBQ</strong> &amp; <strong>exciting door prizes</strong> to help raise funds for Ava's life saving treatment.</p>
                <p>We are thrilled to feature the following musicians:</p>
                <ul>
                    <li>
                        <p><a href="https://www.rackett.tv/" target="_blank" title="rackett home page" rel="noopener noreferrer nofollow"><strong>Rackett</strong></a> - "<span>their trashy-pop sound is swaggering, swooning and instantly catchy</span>" - <em>Rolling Stone Australia</em></p>
                    </li>
                    <li>
                        <p><em></em><strong><a href="http://www.sodastream.net.au/" target="_blank" title="sodastream home page" rel="noopener noreferrer nofollow">Sodastream</a></strong> - "One of Melbourne's most beautiful bands with <span>distinctive cinematic folk stylings and arguably the finest use of double bass in contemporary music" </span>- <em>Faster Louder </em></p>
                    </li>
                    <li>
                        <p><span><strong><a href="https://www.facebook.com/tashaamoroso/" target="_blank" title="Tasha Amoroso home page" rel="noopener noreferrer nofollow">Tasha Amoroso</a></strong> - a local pop sensation, singer/songwriter, mentored by will.i.am during her time on The Voice Australia</span></p>
                    </li>
                    <li>
                        <p><span><strong><a href="https://www.youtube.com/watch?v=EJu2_u2tKIQ" target="_blank" rel="noopener noreferrer nofollow">Sienna-Rose</a><a href="https://www.youtube.com/channel/UC8X2rbpzaKi6RbfgxCYGruA" target="_blank" title="Sienna-Rose home page" rel="noopener noreferrer nofollow"></a></strong> - 18 years old and ready to blow your minds with her unique blend of beatmaking &amp; vocal gymnastics</span></p>
                    </li>
                </ul>
            </div>,
            bgColor:'#eee'
        }}/>

        <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
            <Divider section/>
        </Responsive>

        <EventWidget {...{
            bookingLink: <Button size='huge'>
                <Icon name='ticket'/>
                On Sale Soon
            </Button>,
            eventLink:'galaEvent',
            eventCell: <GalaEvent/>,
            eventDate: [<span>17<sup>th</sup> November</span>, '2018'],
            eventLocation: ['Regent Theatre', 'Plaza Ballroom', 'Melbourne'],
            eventTitle: 'Ava\'s Gala',
            bgColor:'#eee',
            eventDetail: <div >
            </div>
        }}/>

    </div>
)

export default EventPage
