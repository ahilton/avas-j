import PropTypes from 'prop-types'
import React from 'react'

import {
    Button,
    Segment,
    Grid,
    Header,
    Image, Container, Responsive,
} from 'semantic-ui-react'
import AvaIntroText from "./AvaIntroText";
import AvaIntroButtons from "./AvaIntroButtons";

var ava = require('../img/ava.jpg')

const AvaIntro = ({ mobile }) => (
    <Segment className='ava-intro' vertical>
        <Grid container stackable verticalAlign='top' textAlign='justified'>

            {!mobile && <Grid.Row>
                <Grid.Column stretched width={6} textAlign='center'>
                    <Image bordered rounded size='medium' src={ava} />
                </Grid.Column>
                <Grid.Column width={10}>
                    <AvaIntroText/>
                    <AvaIntroButtons/>
                </Grid.Column>
            </Grid.Row>}

            {mobile && <Container text>
                <Responsive minWidth={600}>
                    <Image bordered rounded spaced='left' floated='left' size='medium' src={ava} />
                    <AvaIntroText/>
                    <AvaIntroButtons/>
                </Responsive>
                <Responsive maxWidth={600}>
                    <Container textAlign={'center'} style={{marginBottom:'2em'}}>
                        <Image bordered rounded size='medium' src={ava} style={{display:'inline-block'}}/>
                    </Container>
                    <AvaIntroText/>
                    <AvaIntroButtons mobile/>
                </Responsive>

            </Container>}

        </Grid>
    </Segment>
)

AvaIntro.propTypes = {
    mobile: PropTypes.bool,
}

export default AvaIntro