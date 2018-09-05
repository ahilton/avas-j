import React, {Component} from 'react'
import {Button, Grid, Icon, Image, Label, Rail, Responsive, Segment, Statistic,} from 'semantic-ui-react'
import FundraisingEvent from "./FundraisingEvent";

var fundraiseYogaImg = require('../img/fundraising-community-yoga.jpg')


class Thermometer extends Component {

    state = {fundraisingBlockIndex: 0}

    fundraisingBlocks = [
        {
            height:'20%',
            amount: '$8,125',
            title: 'Community Fundraiser',
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
        },{
            height:'30%',
            amount: '$64,400',
            title: 'Donations',
            // imageSrc: fundraiseYogaImg,
            color: '#8DD1CA',
            content: <div>

                <embed height="210px" width="100%" src="https://www.gofundme.com/mvc.php?route=widgets/mediawidget&fund=jupcnf-avas-journey&image=0&coinfo=1&preview=1" type="text/html">
                </embed>
            </div>
        },{
            height:'50%',
            amount: '$64,400',
            title: 'Donations',
            imageSrc: fundraiseYogaImg,
            color: '#E99F86',
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
            }}>
                Ava's Journey
            </h1><h1 className='normal' style={{
            fontSize: '2.0em',
            marginTop:0,
            marginBottom:40,
            color:'#888',
            fontWeight: 300
        }}>
            Fundraising Updates
        </h1>
            <Rail internal attached position='left' style={{textAlign:'left'}}>
                <Icon onClick={this.previousFundraisingBlock} link name='chevron left' size='big' style={{color:'#ccc', marginTop: 70, marginLeft: 30}}/>
            </Rail>
            <Rail internal attached position='right' style={{textAlign:'right'}}>
                <Icon onClick={this.nextFundraisingBlock} link name='chevron right' size='big' style={{color:'#ccc', marginTop: 70, marginRight: 30}}/>
            </Rail>

            <FundraisingEvent {...fundraisingBlock}/>

        </div>


        const thermBreakpointWidth = 700

        return (

            <Segment clearing raised className='thermometerSegment'>
                <Responsive minWidth={thermBreakpointWidth}>
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
                                // zIndex: 1,
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