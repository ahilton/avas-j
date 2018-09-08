import React from 'react'

import {Button, Grid, Icon, Segment,} from 'semantic-ui-react'

import plazaBackground from '../../img/plazaBg.png'

const GalaSegment = ({children}) => (

    <Segment className='gala' basic style={{
        backgroundColor: 'black',
        padding: '4em 0 4em 0',
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
                        Ava's Gala Dinner
                    </h1>
                    <h3 className='normal' style={{
                        fontWeight: 300,
                        fontSize: '1.2em',
                        marginTop: 0,
                        // marginBottom: 40
                    }}>
                        17.11.18
                    </h3>
                    <h3 className='normal' style={{
                        fontWeight: 300,
                        fontSize: '1.2em',
                        marginTop: 0,
                        marginBottom: 40
                    }}>
                        Regent Theatre
                        <span style={{color: '#cccccc'}}>,&nbsp;&nbsp;</span>
                        Plaza Ballroom
                        <span style={{color: '#cccccc'}}>,&nbsp;&nbsp;</span>
                        Melbourne
                    </h3>
                    {children}
                    <p style={{fontSize: '1.33em'}}>
                        <Button  as='a' href='https://www.trybooking.com/422407' size='huge' style={{
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
)


export default GalaSegment