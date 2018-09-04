import PropTypes from 'prop-types'
import React from 'react'

import {Button, Container, Grid, Header,} from 'semantic-ui-react'

const AvaIntroButtons = ({mobile}) => (

    <Grid centered stackable={mobile} style={{marginTop:'2.5em'}} columns={2}>
        <Grid.Column textAlign='center' width={7}>
            <Button as='a' href='https://www.gofundme.com/jupcnf-avas-journey/donate' size='huge'>Donate Now</Button>
        </Grid.Column>
        <Grid.Column textAlign='center' width={7}>
            <Button inverted size='huge'>Read More...</Button>
        </Grid.Column>
    </Grid>
)

AvaIntroButtons.propTypes = {
    mobile: PropTypes.bool,
}

export default AvaIntroButtons