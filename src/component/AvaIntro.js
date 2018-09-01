import PropTypes from 'prop-types'
import React from 'react'

import {
    Button,
    Segment,
    Grid,
    Header,
    Image, Container,
} from 'semantic-ui-react'

var ava = require('../img/ava.jpg')

const AvaIntro = ({ mobile }) => (
    <Segment className='ava-intro' style={{ padding: '4em 0em' }} vertical>
        <Grid container stackable verticalAlign='top' textAlign='justified'>
            <Grid.Row>
                <Grid.Column stretched width={6} textAlign='center'>
                    <Image bordered rounded style={{margin: '0 auto 0 auto'}} size='medium' src={ava} />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Header as='h3'>
                        Ava's Journey
                    </Header>
                    <p>
                        Just 2 weeks after her 2nd birthday, Ava was diagnosed with Stage 4 High Risk Neuroblastoma - a rare, very aggressive childhood cancer with a low survival rate and high change of relapse.
                    </p>
                    <p>
                        A relapse leaves limited treatment options and is almost always terminal.
                    </p>
                    <Header as='h3' >
                        Fundraising
                    </Header>
                    <p >
                        Ava’s best hope is to receive a new treatment only available from Sloan Kettering Hospital in New York City.
                    </p>
                    <p>
                        We were stunned and horrified to learn that the treatment and associated costs are estimated at <b>$300,000</b>, but we are determined to raise the money for our baby girl.
                    </p>
                    <Container textAlign='center' style={{marginTop:'2.5em'}}>
                        <Button size='huge' style={{
                            marginRight:'1em'
                        }}>Donate Now</Button>
                        <Button inverted size='huge'>Read More...</Button>
                    </Container>
                </Grid.Column>

            </Grid.Row>
        </Grid>
    </Segment>
)

AvaIntro.propTypes = {
    mobile: PropTypes.bool,
}

export default AvaIntro