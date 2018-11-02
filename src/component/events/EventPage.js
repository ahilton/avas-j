import React from 'react'
import {Button, Container, Icon, Image, Responsive, Segment} from "semantic-ui-react";
import EventWidget from "./EventWidget";
import GalaSegment from "../home/GalaSegment";

var img = require('../../img/ava-sq.jpg')
var galSponsors = require('../../img/gala-sponsors.png')

const EventPage = () => (

    <div className='eventPage' style={{backgroundColor: '#111', marginBottom: 0, padding: 0}}>
        <Responsive maxWidth={767}>
            <Segment textAlign='center' basic padded='very' style={{
                marginTop: 0,
                marginBottom: 0,
                backgroundColor: '#41BAAE'
            }}>
                {/*<h1 className='normal' style={{*/}
                {/*fontSize: '3em',*/}
                {/*fontWeight: 300*/}
                {/*}}>*/}
                {/*Ava's Gala*/}
                {/*</h1>*/}
            </Segment>
        </Responsive>
        <Responsive minWidth={767}>
            <Segment textAlign='center' basic padded='very' style={{
                marginTop: 0,
                marginBottom: 0,
                // backgroundColor: '#444'
            }}>

            </Segment>
        </Responsive>
        {/*<Responsive minWidth={767}>*/}

        {/*<Segment textAlign='center' basic style={{*/}
        {/*marginTop: 0,*/}
        {/*marginBottom: 0,*/}
        {/*// backgroundColor: 'black'*/}
        {/*}}>*/}
        {/*</Segment>*/}
        {/*</Responsive>*/}

        {/*<Segment basic textAlign='center' padded='very' style={{*/}
        {/*marginTop: 0,*/}
        {/*marginBottom: 0,*/}
        {/*backgroundColor: '#eee'*/}
        {/*}}>*/}
        {/*<h1 className='normal' style={{*/}
        {/*fontWeight:300,*/}
        {/*fontSize: '3em',*/}
        {/*//color:'white',*/}
        {/*marginTop:15*/}
        {/*}}>*/}
        {/*Fundraising Events*/}
        {/*</h1>*/}
        {/*<Menu secondary stackable compact size='huge' className='eventMenu'>*/}
        {/*<Menu.Item as='a'>*/}
        {/*<Link smooth to={'#galaEvent'}>*/}
        {/*<Icon name='star'/>&nbsp;*/}
        {/*Gala*/}
        {/*</Link>*/}
        {/*</Menu.Item>*/}
        {/*<Menu.Item as='a'>*/}
        {/*<Link smooth to={'#zooEvent'}>*/}
        {/*<Icon name='music'/>&nbsp;*/}
        {/*Electric Zoo*/}
        {/*</Link>*/}
        {/*</Menu.Item>*/}
        {/*</Menu>*/}
        {/*</Segment>*/}


        <EventWidget {...{
            bookingLink: <Button as='a' color='yellow' href='http://avasgala.eventbrite.com.au/' size='massive' style={{
                // backgroundColor:'#d77591'
            }}>
                <Icon name='ticket'/>
                Book Now
            </Button>,
            eventLink: 'galaEvent',
            eventCell: <GalaSegment/>,
            eventDate: [<span>Saturday 17<sup>th</sup> Nov</span>, '6:30pm - 11:30pm'],
            eventLocation: ['Regent Theatre', 'Plaza Ballroom', 'Melbourne'],
            eventTitle: 'Ava\'s Gala',
            bgColor: '#eee',
            eventDetail: <Container text textAlign='justified' style={{
                marginTop: 30,
                marginBottom: 50,
                fontSize: '1.2em',
                color: '#f4d378',
                // textAlign:'center',
                fontWeight: 300,

            }}>
                <p style={{
                    fontSize: '1.3em',
                    textAlign: 'center'

                }}>
                    Your ticket to Ava’s Gala could save her life
                </p>
                <p style={{
                    fontSize: '1.3em',
                    textAlign: 'center'

                }}>
                    <Image size='small' inline circular src={img}/>
                </p>

                <p>
                    Inspired by Ava’s treatment destination, we will treat you to a
                    magical night in <b style={{color: '#fae1a3'}}>New York.</b>
                </p>
                <p>
                    <b style={{color: '#fae1a3'}}>Head Chef, David Ricardo,</b> will delight tastebuds with
                    drinks and canapés on arrival as well as an
                    <b style={{color: '#fae1a3'}}> exquisite three-course culinary experience</b>.
                </p>
                <p>
                    <b style={{color: '#fae1a3'}}>Set in the glittering Plaza Ballroom</b>, our guest host
                    will entertain between acts from talented performers,
                    the <b style={{color: '#fae1a3'}}>auctioning of incredible items</b>, as well as our Keynote speaker
                    <b style={{color: '#fae1a3'}}>Col Reynolds (OAM)</b> who will share his inspiring story of how he
                    founded <b style={{color: '#fae1a3'}}>The Kids Cancer Project</b> 25 years ago.
                </p>
                <p>
                    Thank you for supporting this event,
                    your participation is truly life-saving.
                </p>
                <p style={{textAlign: 'center'}}>
                    <Button as='a' color='yellow' href='http://avasgala.eventbrite.com.au/' size='huge' style={{
                        backgroundColor: '#f4d378', color: 'black', margin: '1em'
                    }}><Icon name='ticket'/>
                        Book Tickets Now
                    </Button>
                </p>

                <p>
                    Proudly supported by:
                    <Image src={galSponsors}/>
                </p>
            </Container>
        }}/>

        {/*<Responsive minWidth={Responsive.onlyMobile.maxWidth}>*/}
        {/*<Divider section/>*/}
        {/*</Responsive>*/}


        {/*<EventWidget {...{*/}
        {/*eventLink:'zooEvent',*/}
        {/*eventCell: <ZooEvent/>,*/}
        {/*eventDate: ['POSTPONED'],*/}
        {/*eventLocation: ['Mentone Lifesaving Club'],*/}
        {/*eventTitle: 'Ava\'s Electric Zoo',*/}
        {/*eventDetail: <div className='zooEvent'>*/}
        {/*<h2 className='normal'><a href='http://ezoo.eventbrite.com.au'>Ava's Electric Zoo</a></h2>*/}
        {/*<p>Join us for a family friendly afternoon of <strong>great live music</strong>, <strong>epic BBQ</strong> &amp; <strong>exciting door prizes</strong> to help raise funds for Ava's life saving treatment.</p>*/}
        {/*<p>We are thrilled to feature the following musicians:</p>*/}
        {/*<ul>*/}
        {/*<li>*/}
        {/*<p><a href="https://www.rackett.tv/" target="_blank" title="rackett home page" rel="noopener noreferrer nofollow"><strong>Rackett</strong></a> - "<span>their trashy-pop sound is swaggering, swooning and instantly catchy</span>" - <em>Rolling Stone Australia</em></p>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*<p><em></em><strong><a href="http://www.sodastream.net.au/" target="_blank" title="sodastream home page" rel="noopener noreferrer nofollow">Sodastream</a></strong> - "One of Melbourne's most beautiful bands with <span>distinctive cinematic folk stylings and arguably the finest use of double bass in contemporary music" </span>- <em>Faster Louder </em></p>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*<p><span><strong><a href="https://www.facebook.com/tashaamoroso/" target="_blank" title="Tasha Amoroso home page" rel="noopener noreferrer nofollow">Tasha Amoroso</a></strong> - a local pop sensation, singer/songwriter, mentored by will.i.am during her time on The Voice Australia</span></p>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*<p><span><strong><a href="https://www.youtube.com/watch?v=EJu2_u2tKIQ" target="_blank" rel="noopener noreferrer nofollow">Sienna-Rose</a><a href="https://www.youtube.com/channel/UC8X2rbpzaKi6RbfgxCYGruA" target="_blank" title="Sienna-Rose home page" rel="noopener noreferrer nofollow"></a></strong> - 18 years old and ready to blow your minds with her unique blend of beatmaking &amp; vocal gymnastics</span></p>*/}
        {/*</li>*/}
        {/*</ul>*/}
        {/*</div>,*/}
        {/*bgColor:'#eee'*/}
        {/*}}/>*/}

    </div>
)

export default EventPage
