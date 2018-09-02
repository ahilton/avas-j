import React, {Component} from 'react'
import {Grid, Label, Segment,} from 'semantic-ui-react'


class Thermometer extends Component {

    render() {
        // const {children} = this.props
        // const {fixed} = this.state

        return (

            <Segment basic className='thermometerSegment'>
                <Grid centered container >
                    <Grid.Row>
                        <Grid.Column textAlign='center' width={3}>
                            <h1>Total Raised $1000</h1>
                        </Grid.Column>
                        <Grid.Column textAlign='center' stretched width={10}>
                            <h1>Target $350,000</h1>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid stretched centered container className='thermometerGrid'>

                    <Grid.Row>
                    <Grid.Column textAlign='center' className='thermometerColumn' stretched width={3}>



                        <div className='thermometerContainer' style={{


                        }}>

                            <Segment basic className='thermometerBlock' style={{
                                height: '20%',
                                //padding:0
                            }}>
                                <div style={{
                                    width:'300px',
                                    height: 5,
                                    minHeight: 5,
                                    backgroundColor:'blue',
                                    position:'absolute',
                                    left:50
                                }}/>
                                <Label as='a'  size='large' color='black' ribbon>
                                    Donations
                                </Label>

                            </Segment>

                            <Segment basic  className='thermometerBlock' style={{
                                height: '30%'
                            }}>

                            </Segment>

                            <Segment basic className='thermometerBlock' style={{
                                height: '50%'
                            }}>

                            </Segment>

                            <Segment circular className='thermometerBlockBase'>
                            </Segment>
                        </div>
                    </Grid.Column>
                    <Grid.Column className='thermometerDetailColumn' stretched width={10}>
                        <div style={{
                            height: '100%',
                            backgroundColor: '#bbb'
                        }}>

                        </div>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default Thermometer