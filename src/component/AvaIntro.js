import PropTypes from 'prop-types'
import React from 'react'

import {Container, Grid, Image, Responsive, Segment,} from 'semantic-ui-react'
import AvaIntroText from "./AvaIntroText";
import AvaIntroButtons from "./AvaIntroButtons";

var ava = require('../img/ava.jpg')
var avasq = require('../img/ava-sq.jpg')

const AvaIntro = ({mobile}) => (
    <Segment className='ava-intro' vertical>
        <Grid container stackable verticalAlign='top' textAlign='justified'>

            {!mobile && <Grid.Row>
                <Grid.Column stretched width={6} textAlign='center'>
                    <Image bordered rounded size='medium' src={ava}/>
                </Grid.Column>
                <Grid.Column width={10}>
                    <AvaIntroText/>
                    <AvaIntroButtons/>
                </Grid.Column>
            </Grid.Row>}

            {mobile && <Container text>
                <Responsive minWidth={600}>
                    <Container textAlign={'center'} style={{marginBottom: '2em'}}>
                        <Image bordered circular size='medium' src={avasq} style={{display: 'inline-block'}}/>
                    </Container>
                    <AvaIntroText/>
                    <AvaIntroButtons/>
                </Responsive>
                <Responsive maxWidth={600}>
                    <Container textAlign={'center'} style={{marginBottom: '2em'}}>
                        <Image bordered circular size='medium' src={avasq} style={{display: 'inline-block'}}/>
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