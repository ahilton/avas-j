import React from 'react'

import {Button, Grid, Icon, Image, Responsive, Segment,} from 'semantic-ui-react'

import plazaBackground from '../../img/ballroom-bg-2.jpg'
import transparentLogo from '../../img/gala-transparent.png'

const GalaSegment = ({children, showDetail = false}) => (

    <Segment className='gala' basic style={{
        backgroundColor: '#444',
        padding: '1.5em',
        backgroundImage: `url(${plazaBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        paddingTop: 0
    }} vertical textAlign='center'>
        <Grid className='galaGrid' padded verticalAlign='middle' style={{
            height: '100%',
            paddingTop: 0
        }}>
            <Grid.Row textAlign='center' style={{
                paddingTop: 0
            }}>
                <Grid.Column>
                    <Responsive minWidth={600}>
                        <Image
                            size='big'
                            centered
                            src={transparentLogo}
                            style={{marginBottom: -40}}
                        />
                    </Responsive>
                    <Responsive maxWidth={600}>
                        <Image
                            size='big'
                            centered
                            src={transparentLogo}
                            style={{marginBottom: 0}}
                        />
                    </Responsive>

                    {showDetail
                        &&
                    <div style={{padding: '56.25% 0 0 0', position: 'relative', marginTop:20, marginBottom:30}}>
                        <iframe src="https://player.vimeo.com/video/298069613?autoplay=1&byline=0&portrait=0" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen >
                        </iframe>
                    </div>
                    }
                    {/*<p><a href="https://vimeo.com/298069613">Ava&#039;s Gala Invitation and Live Auction Items Sneak Peak | November 17th | Plaza Ballroom</a> from <a href="https://vimeo.com/user24960641">Paula Burton</a> on <a href="https://vimeo.com">Vimeo</a>.</p>*/}

                    {showDetail && <h3 className='normal' style={{
                        fontWeight: 300,
                        fontSize: '1.2em',
                        marginTop: 0,
                        // marginBottom: 40
                    }}>
                        17<sup>th</sup> November, 2018
                    </h3>}
                    {showDetail && <h3 className='normal' style={{
                        fontWeight: 300,
                        fontSize: '1.2em',
                        marginTop: 0,
                        marginBottom: 30
                    }}>
                        <Responsive as='span' minWidth={600}>
                            <div style={{whiteSpace: 'nowrap', display: 'inline'}}>Regent Theatre,</div>
                            <span style={{color: '#cccccc'}}>&nbsp;&nbsp;</span>
                        </Responsive>
                        <div style={{whiteSpace: 'nowrap', display: 'inline'}}>Plaza Ballroom,</div>
                        <span style={{color: '#cccccc'}}>&nbsp;&nbsp;</span>
                        <span style={{whiteSpace: 'nowrap'}}>Melbourne</span>
                    </h3>}
                    {children}
                    {showDetail && <p style={{fontSize: '1.33em'}}>
                        {/*<Button as='a' href='http://avasgala.eventbrite.com.au/' size='huge' style={{*/}
                        {/*// {marginRight:'10em'}*/}
                        {/*}}>*/}
                        {/*<Icon name='ticket'/>*/}
                        {/*Book Now*/}
                        {/*</Button>*/}
                        {/*<Button as='a' color='yellow' href='http://avasgala.eventbrite.com.au/' size='huge' style={{*/}
                            {/*backgroundColor: '#f4d378', color: 'black', margin: '1em'*/}
                        {/*}}><Icon name='ticket'/>*/}
                            {/*Book Tickets Now*/}
                        {/*</Button>*/}
                    </p>}
                    {!showDetail && <h3 className='normal' style={{
                        fontWeight: 300,
                        fontSize: '1.1em',
                        color: '#f4d378',
                        marginBottom: 50,
                        lineHeight: '1.5em'
                    }}>
                        BLACK TIE
                        <br/>
                        <div style={{whiteSpace: 'nowrap', display: 'inline'}}>$250 PER PERSON</div>
                        <span style={{color: '#c2a961'}}> | </span>
                        <div style={{whiteSpace: 'nowrap', display: 'inline'}}>$2,500 TABLE OF TEN</div>
                    </h3>}

                    <h3 className='normal' style={{
                        fontWeight: 300,
                        fontSize: '1.1em',
                        lineHeight: '1.5em'
                    }}>
                        <div style={{whiteSpace: 'nowrap', display: 'inline'}}>Guest Speakers</div>
                        <span style={{color: '#999'}}> | </span>
                        <div style={{whiteSpace: 'nowrap', display: 'inline'}}>Auction</div>
                        <span style={{color: '#999'}}> | </span>
                        <div style={{whiteSpace: 'nowrap', display: 'inline'}}>Silent Auction Raffle</div>
                        <span style={{color: '#999'}}> | </span>
                        <div style={{whiteSpace: 'nowrap', display: 'inline'}}>Door Prizes</div>
                        <span style={{color: '#999'}}> | </span>
                        <div style={{whiteSpace: 'nowrap', display: 'inline'}}>Award-winning Chef</div>
                    </h3>
                </Grid.Column>
            </Grid.Row>
        </Grid>

    </Segment>
)


export default GalaSegment