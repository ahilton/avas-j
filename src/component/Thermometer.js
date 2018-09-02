
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container, Grid, Image,
    Menu,
    Responsive,
    Segment,
    Visibility,
} from 'semantic-ui-react'


class Thermometer extends Component {

    render() {
        // const {children} = this.props
        // const {fixed} = this.state

        return (

            <Segment basic className='thermometerSegment'>
                <Grid stretched centered container className='thermometerGrid'>
                    <Grid.Column className='thermometerThinColumn' stretched width={3}>
                        <div style={{height:'10%', backgroundColor:'yellow'}}>
                            <div style={{
                                width:'300px',
                                border:'1px solid blue',
                                position:'absolute'
                            }}>

                            </div>

                        </div>

                        <div style={{height:'90%', backgroundColor:'green'}}>

                        </div>

                    </Grid.Column>
                    <Grid.Column className='thermometerFatColumn' stretched width={10}>
                        <div style={{height:'100%', backgroundColor:'green'}}>

                        </div>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

export default Thermometer