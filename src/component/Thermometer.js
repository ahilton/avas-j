import React, {Component} from 'react'
import {Card, Container, Grid, Icon, Image, Label, Segment, Statistic,} from 'semantic-ui-react'

var fundraiseYogaImg = require('../img/fundraising-community-yoga.jpg')


class Thermometer extends Component {

    render() {
        // const {children} = this.props
        // const {fixed} = this.state

        var leftColSize=5
        var rightColSize=10

        return (

            <Segment basic className='thermometerSegment'>
                <Grid stretched centered container className='thermometerGrid'>
                    <Grid.Row style={{height:'30%'}}>
                        <Grid.Column textAlign='center' width={leftColSize}>
                            <div className='thermometerContainer thermometerTopContainer'>
                                <Segment basic className='thermometerBlock' style={{
                                    height: '60%'
                                }}>
                                    {/*<Label size='massive' ribbon>*/}
                                        {/*<span style={{*/}
                                            {/*fontWeight:300*/}
                                        {/*}}>*/}
                                            {/*Target:*/}
                                        {/*</span> $350,000*/}
                                    {/*</Label>*/}

                                    <Label size='huge' ribbon>
                                        {/*<span style={{*/}
                                        {/*fontWeight:300*/}
                                        {/*}}>*/}
                                        {/*Raised:*/}
                                        {/*</span> $80,400*/}
                                        <Statistic size='tiny' >
                                            <Statistic.Value >$350,000</Statistic.Value>
                                            <Statistic.Label >
                                                <span style={{
                                                    fontWeight:300,
                                                    fontSize:'0.7em'
                                                }}>
                                        target
                                        </span>

                                            </Statistic.Label>
                                        </Statistic>

                                    </Label>
                                </Segment>
                                <Segment basic className='thermometerBlock' style={{
                                    height: '40%',
                                    zIndex:1,
                                    backgroundColor: '#97DEFF'
                                }}>
                                    <Label size='massive' color='black' ribbon>
                                        {/*<span style={{*/}
                                            {/*fontWeight:300*/}
                                        {/*}}>*/}
                                            {/*Raised:*/}
                                        {/*</span> $80,400*/}
                                        <Statistic inverted size='tiny' >
                                            <Statistic.Value >$80,400</Statistic.Value>
                                            <Statistic.Label >
                                                <span style={{
                                                    fontWeight:300,
                                                    fontSize:'0.7em'
                                                }}>
                                        Raised
                                        </span>

                                            </Statistic.Label>
                                        </Statistic>

                                    </Label>
                                </Segment>
                            </div>
                        </Grid.Column>
                        <Grid.Column textAlign='center' verticalAlign='middle' stretched width={rightColSize}>
                            <h1 style={{fontSize:'2.5em'}}>
                                Fundraise-o-meter
                            </h1>
                            <Segment basic text textAlign='left' style={{width:'100%'}}>
                            <p>
                                Ava’s best hope is to receive a new treatment only available from Sloan Kettering Hospital in New York City.
                            </p><p>
                                We were stunned and horrified to learn that the treatment and associated costs are estimated at$300,000, but we are determined to raise the money for our baby girl..
                            </p>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{height:'60%'}} >
                    <Grid.Column textAlign='center' className='thermometerColumn' stretched width={leftColSize}>

                        <div className='thermometerContainer thermometerMainContainer'>

                            <Segment basic className='thermometerBlock' style={{
                                height: '20%',
                                //padding:0
                            }}>
                                <div style={{
                                    width:'300px',
                                    height: 15,
                                    minHeight: 15,
                                    backgroundColor:'#97DEFF',
                                    position:'absolute',
                                    left:50
                                }}/>
                                {/*<Label as='a'  size='large' color='black' ribbon>*/}
                                    {/*Donations*/}
                                {/*</Label>*/}

                            </Segment>

                            <Segment basic  className='thermometerBlock' style={{
                                height: '30%'
                            }}>
                                {/*<div style={{*/}
                                    {/*width:'300px',*/}
                                    {/*height: 5,*/}
                                    {/*minHeight: 5,*/}
                                    {/*backgroundColor:'#8DD1CA',*/}
                                    {/*position:'absolute',*/}
                                    {/*left:50*/}
                                {/*}}/>*/}
                            </Segment>

                            <Segment basic className='thermometerBlock' style={{
                                height: '50%'
                            }}>

                            </Segment>

                            {/*<Segment circular className='thermometerBlockBase'>*/}
                            {/*</Segment>*/}
                        </div>
                    </Grid.Column>
                    <Grid.Column className='thermometerDetailColumn' stretched width={rightColSize}>
                        <Segment basic  style={{
                            height: '100%',
                            backgroundColor: '#97DEFF',

                        }}>
                            <Label as='a' color='orange' ribbon='right'>
                                <Statistic inverted size='tiny' >
                                    <Statistic.Value >$7,400</Statistic.Value>
                                    <Statistic.Label >
                                                <span style={{
                                                    fontWeight:300,
                                                    // fontSize:'0.7em'
                                                }}>
                                        Raised
                                        </span>

                                    </Statistic.Label>
                                </Statistic>
                            </Label>

                            <Segment fluid basic style={{marginTop:-50}}>

                                <h1 style={{marginBottom:20}}>Community Fundriaser</h1>
                                <Image
                                    size='medium'
                                    floated='right'
                                    // fluid
                                    src={fundraiseYogaImg}/>
                                <p>
                                    Community Fundraiser for Ava’s Journey was a great success!
                                    Such wonderful people from all across Bayside came together to support her and it was just wonderful!
                                </p>
                                <p>
                                    Thank you to all, and @kingstonartsau for holding the event! 🤗 The wonder girl herself made an appearance for a couple of hours and had an amazing time!
                                </p>
                                <p>
                                    Here she is enjoying a spot of #pilates with Chris from @weloveyoursoul who kindly donated his time and skills to teach group Pilates classes at the event!
                                </p>
                            </Segment>
                            {/*<Card fluid>*/}
                                {/*<Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />*/}
                                {/*<Card.Content>*/}
                                    {/*<Card.Header>Matthew</Card.Header>*/}
                                    {/*<Card.Meta>*/}
                                        {/*<span className='date'>Joined in 2015</span>*/}
                                    {/*</Card.Meta>*/}
                                    {/*<Card.Description>Matthew is a musician living in Nashville.</Card.Description>*/}
                                {/*</Card.Content>*/}
                                {/*<Card.Content extra>*/}
                                    {/*<a>*/}
                                        {/*<Icon name='user' />*/}
                                        {/*22 Friends*/}
                                    {/*</a>*/}
                                {/*</Card.Content>*/}
                            {/*</Card>*/}
                        </Segment>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{height:'10%'}}>
                        <Grid.Column textAlign='center' width={leftColSize}>
                            <div className='thermometerContainer thermometerBottomContainer' style={{


                            }}>
                            </div>
                        </Grid.Column>
                        <Grid.Column textAlign='center' stretched width={rightColSize}>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default Thermometer