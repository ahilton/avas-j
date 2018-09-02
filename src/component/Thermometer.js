import React, {Component} from 'react'
import {Grid, Image, Label, Responsive, Segment, Statistic,} from 'semantic-ui-react'
import FundraisingEvent from "./FundraisingEvent";

var fundraiseYogaImg = require('../img/fundraising-community-yoga.jpg')


class Thermometer extends Component {

    render() {
        // const {children} = this.props
        // const {fixed} = this.state

        var leftColSize = 5
        var rightColSize = 11

        return (

            <Segment clearing raised className='thermometerSegment' style={{
                backgroundColor:'#f4f4f4',
                zIndex:-100
            }}>
                <Grid stretched centered container className='thermometerGrid'>
                    <Grid.Column textAlign='center' width={leftColSize}>
                        <div className='thermometerContainer thermometerTopContainer'>
                            <Segment basic className='thermometerBlock' style={{height: '60%'}}>

                                <Label size='huge' ribbon>
                                    <Statistic size='tiny'>
                                        <Statistic.Value>$350,000</Statistic.Value>
                                        <Statistic.Label>target</Statistic.Label>
                                    </Statistic>
                                </Label>

                            </Segment>
                            <Segment basic className='thermometerBlock' style={{
                                height: '40%',
                                zIndex: 1,
                                backgroundColor: '#97DEFF'
                            }}>
                                <Label size='massive' color='black' ribbon>
                                    <Statistic inverted size='tiny'>
                                        <Statistic.Value>$80,400</Statistic.Value>
                                        <Statistic.Label>Raised</Statistic.Label>
                                    </Statistic>
                                </Label>
                            </Segment>
                        </div>

                        <div className='thermometerContainer thermometerMainContainer'>
                            <Segment basic className='thermometerBlock' style={{height: '20%'}}>
                                <div className='thermometerPointer' style={{backgroundColor: '#97DEFF'}}/>
                            </Segment>

                            <Segment basic className='thermometerBlock' style={{height: '30%'}}>
                            </Segment>

                            <Segment basic className='thermometerBlock' style={{height: '50%'}}>
                            </Segment>
                        </div>

                        <Responsive minWidth={Responsive.onlyComputer.minWidth} style={{
                            zIndex:-300
                        }}>
                            <div className='thermometerContainer thermometerBottomContainer'/>

                        </Responsive>
                        <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
                            <div className='thermometerContainer thermometerMobileBottomContainer'/>

                        </Responsive>

                    </Grid.Column>

                    <Grid.Column verticalAlign='middle' width={rightColSize}>

                        <Responsive minWidth={Responsive.onlyComputer.minWidth}>
                            <Segment verticalAlign='top' basic>
                                <h1 style={{
                                    fontSize: '3.0em',
                                    marginTop:0,
                                    marginBottom:20,
                                    color:'#888',
                                    // fontFamily:  'Poppins, Open Sans, Helvetica Neue, Arial, Helvetica, sans-serif',
                                    fontFamily: 'Lato, Helvetica Neue,Arial,Helvetica,sans-serif',
                                    fontWeight: 100
                                }}>
                                    Fundraising Tracker
                                </h1>
                            </Segment>
                        </Responsive>

                            <FundraisingEvent {...{
                                amount: '$7,400',
                                title: 'Community Fundriaser',
                                imageSrc: fundraiseYogaImg,
                                color: '#97DEFF',
                                content: <div>
                                    <p>
                                        Community Fundraiser for Ava’s Journey was a great success!
                                        Such wonderful people from all across Bayside came together to support her and
                                        it was just wonderful!
                                    </p>
                                    <p>
                                        Thank you to all, and @kingstonartsau for holding the event! 🤗 The wonder girl
                                        herself made an appearance for a couple of hours and had an amazing time!
                                    </p>
                                    <p>
                                        Here she is enjoying a spot of #pilates with Chris from @weloveyoursoul who
                                        kindly donated his time and skills to teach group Pilates classes at the event!
                                    </p>
                                </div>
                            }}/>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

export default Thermometer