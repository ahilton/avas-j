import React, {Component} from 'react'
import {Button, Grid, Icon, Image, Label, Rail, Responsive, Segment, Statistic,} from 'semantic-ui-react'
import FundraisingEvent from "./thermometer/FundraisingEvent";
import CommunityBubble from "./thermometer/CommunityBubble";
import JewelleryBubble from "./thermometer/JewelleryBubble";
import FitnessFirstBubble from "./thermometer/FitnessFirstBubble";
import RunsBubble from "./thermometer/RunsBubble";
import MovieBubble from "./thermometer/MovieBubble";
import CoffeeBubble from "./thermometer/CoffeeBubble";
import PlayZoneBubble from "./thermometer/PlayZoneBubble";
import DonationsBubble from "./thermometer/DonationsBubble";

var fundraiseYogaImg = require('../img/fundraising-community-yoga.jpg')
var fundraiseJewelleryImg = require('../img/fundraising-bangle.jpg')
var fundraiseCoffeeImg = require('../img/fundraising-coffee.jpg')
var fundraisePlayzoneImg = require('../img/fundraising-playzone.jpg')
var fundraiseFFImg = require('../img/fundraising-fitnessfirst.jpg')
var fundraisePaulaImg = require('../img/fundraising-paula.jpg')
var fundraiseMovieImg = require('../img/fundraising-movie.png')
var fundraiseDonationsImg = require('../img/insta-ava7.jpg')


class Thermometer extends Component {

    state = {fundraisingBlockIndex: Math.floor(Math.random() * 8) }

    /*
    @red            : #B03060;
@orange         : #FE9A76;
@yellow         : #FFD700;
@olive          : #32CD32; #b5cc18
@green          : #016936;#21ba45
@teal           : #008080; #00b5ad
@blue           : #0E6EB8; 2185d0
@violet         : #EE82EE;
@purple         : #B413EC; #a333c8
@pink           : #FF1493; #e03997
@brown          : #A52A2A;
*/

    fundraisingBlocks = [
        {
            height:'8%',
            amount: '$9,051',
            title: 'Community Fundraiser',
            imageSrc: fundraiseYogaImg,
            color: '#b5cc18',
            content: <CommunityBubble/>
        },{
            height:'10%',
            amount: '$7,221',
            title: 'Emma Hedley Jewellery',
            imageSrc: fundraiseJewelleryImg,
            color: '#21ba45',
            content: <JewelleryBubble/>
        },{
            height:'8%',
            amount: '$5,000',
            title: 'Fitness First Fundraiser',
            imageSrc: fundraiseFFImg,
            color: '#00b5ad',
            content: <FitnessFirstBubble/>
        },{
            height:'10%',
            amount: '$7,500',
            title: 'Sponsored Runners',
            imageSrc: fundraisePaulaImg,
            color: '#2185d0',
            content: <RunsBubble/>
        },{
            height:'5%',
            amount: '$1,541',
            title: 'Movie Fundraiser',
            imageSrc: fundraiseMovieImg,
            color: '#6435c9',
            content: <MovieBubble/>
        },{
            height:'5%',
            amount: '$1,000',
            title: 'Love Your Soul',
            imageSrc: fundraiseCoffeeImg,
            color: '#a333c8',
            content: <CoffeeBubble/>
        },{
            height:'5%',
            amount: '$530',
            title: 'Fitness First Playzone',
            imageSrc: fundraisePlayzoneImg,
            color: '#e054a4',
            content: <PlayZoneBubble/>
        },{
            height:'49%',
            amount: '$72,608',
            title: 'Donations',
            imageSrc: fundraiseDonationsImg,
            color: '#e03997',
            content: <DonationsBubble/>
        }
    ]

    setActiveFundraisingBlock = (index) => this.setState({ fundraisingBlockIndex: index })

    nextFundraisingBlock = () => {
        let {fundraisingBlockIndex} = this.state
        let newFundraisingBlockIndex = (fundraisingBlockIndex+1 >= this.fundraisingBlocks.length)?
            0:fundraisingBlockIndex+1
        this.setState({ fundraisingBlockIndex: newFundraisingBlockIndex })
    }

    previousFundraisingBlock = () => {
        let {fundraisingBlockIndex} = this.state
        let newFundraisingBlockIndex = (fundraisingBlockIndex === 0)?
            this.fundraisingBlocks.length-1:fundraisingBlockIndex-1
        this.setState({ fundraisingBlockIndex: newFundraisingBlockIndex })
    }


    render() {
        // const {children} = this.props
        // const {fixed} = this.state

        const { fundraisingBlockIndex } = this.state

        const fundraisingBlock = fundraisingBlockIndex?this.fundraisingBlocks[fundraisingBlockIndex]:this.fundraisingBlocks[0]


        var blocks = this.fundraisingBlocks.map((block, index) =>
            <Segment basic className='thermometerBlock' style={{height: block.height}} onMouseEnter={()=>this.setActiveFundraisingBlock(index)}>
                {fundraisingBlockIndex === index && <div className='thermometerPointer' style={{backgroundColor: block.color}}/>}
            </Segment>
        )

        var leftColSize = 5
        var rightColSize = 11

        var detail = <div>
            <h1 style={{
                fontSize: '3.0em',
                marginTop:0,
                marginBottom:5,
                color:'#222'
            }}>
                Ava's Journey
            </h1><h1 className='normal' style={{
            fontSize: '2.5em',
            marginTop:0,
            marginBottom:40,
            color:'#e03997',
            fontWeight: 300
        }}>
            Fundraising Updates
        </h1>
            <Rail internal attached position='left' style={{textAlign:'left'}}>
                <Icon onClick={this.previousFundraisingBlock} link name='chevron left' size='huge' style={{color:'#e03997', marginTop: 70, marginLeft: 30}}/>
            </Rail>
            <Rail internal attached position='right' style={{textAlign:'right'}}>
                <Icon onClick={this.nextFundraisingBlock} link name='chevron right' size='huge' style={{color:'#e03997', marginTop: 70, marginRight: 30}}/>
            </Rail>

            <FundraisingEvent {...fundraisingBlock}/>

        </div>


        const thermBreakpointWidth = 700

        return (

            <Segment clearing raised className='thermometerSegment'>
                <Responsive minWidth={thermBreakpointWidth}>
                <Grid stretched centered container className='thermometerGrid'>
                    <Grid.Column textAlign='center' width={leftColSize} style={{maxHeight:700}}>
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
                                // zIndex: 1,
                                backgroundColor: '#b5cc18'
                            }}>
                                <Label size='massive' color='black' ribbon>
                                    <Statistic inverted size='tiny'>
                                        <Statistic.Value>$98,400</Statistic.Value>
                                        <Statistic.Label>Raised</Statistic.Label>
                                    </Statistic>
                                </Label>
                            </Segment>
                        </div>

                        <div className='thermometerContainer thermometerMainContainer'>
                            {blocks}
                        </div>

                        <Responsive minWidth={Responsive.onlyComputer.minWidth}>
                            <div className='thermometerContainer thermometerBottomContainer'/>
                        </Responsive>
                        <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
                            <div className='thermometerContainer thermometerMobileBottomContainer'/>
                        </Responsive>

                    </Grid.Column>

                    <Grid.Column verticalAlign='top' width={rightColSize} style={{height:700, minHeight:700}}>

                        {/*<Responsive minWidth={Responsive.onlyComputer.minWidth}>*/}
                        <Segment basic compact>
                        {detail}
                        </Segment>
                    </Grid.Column>
                </Grid>
                </Responsive>
                <Responsive maxWidth={thermBreakpointWidth}>
                    <Segment textAlign='center' basic>
                        {detail}
                    </Segment>
                </Responsive>
            </Segment>
        )
    }
}

export default Thermometer