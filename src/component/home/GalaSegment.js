import React from 'react'

import {Button, Grid, Icon, Image, Responsive, Segment,} from 'semantic-ui-react'

import plazaBackground from '../../img/ballroom-bg-2.jpg'
import transparentLogo from '../../img/gala-transparent.png'

const GalaSegment = ({children, showDetail=false}) => (

    <Segment className='gala' basic style={{
        backgroundColor: 'black',
        padding: '1.5em',
        backgroundImage: `url(${plazaBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        paddingTop: 0
    }} vertical textAlign='center'>
        <Grid padded verticalAlign='middle' style={{
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
                            style={{marginBottom:-70}}
                        />
                    </Responsive>
                    <Responsive maxWidth={600}>
                        <Image
                            size='big'
                            centered
                            src={transparentLogo}
                            style={{marginBottom:-20}}
                        />
                    </Responsive>


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
                            <div style={{whiteSpace:'nowrap', display:'inline'}}>Regent Theatre,</div>
                            <span style={{color: '#cccccc'}}>&nbsp;&nbsp;</span>
                        </Responsive>
                        <div style={{whiteSpace:'nowrap', display:'inline'}}>Plaza Ballroom,</div>
                        <span style={{color: '#cccccc'}}>&nbsp;&nbsp;</span>
                        <span style={{whiteSpace:'nowrap'}}>Melbourne</span>
                    </h3>}
                    {children}
                    {showDetail && <p style={{fontSize: '1.33em'}}>
                        <Button as='a' href='http://avasgala.eventbrite.com.au/' size='huge' style={{
                            // {marginRight:'10em'}
                        }}>
                            <Icon name='ticket'/>
                            Book Now
                        </Button>
                    </p>}
                    {/*<h3 className='normal' style={{*/}
                        {/*fontWeight: 200,*/}
                        {/*fontSize: '1.1em'*/}
                    {/*}}>*/}
                        {/*Celebrity Hosts*/}
                        {/*<span style={{color: '#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>*/}
                        {/*Black Tie*/}
                        {/*<span style={{color: '#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>*/}
                        {/*3 Course Dinner*/}
                        {/*<span style={{color: '#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>*/}
                        {/*Prizes*/}
                        {/*<span style={{color: '#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>*/}
                        {/*Silent Auction*/}
                    {/*</h3>*/}
                </Grid.Column>
            </Grid.Row>
        </Grid>

    </Segment>
)


export default GalaSegment