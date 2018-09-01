import PropTypes from 'prop-types'
import React from 'react'

import {Header,} from 'semantic-ui-react'

const AvaIntroText = ({mobile}) => (

    <div>
        <Header as='h3'>
            Ava's Journey
        </Header>
        <p>
            Just 2 weeks after her 2nd birthday, Ava was diagnosed with Stage 4 High Risk Neuroblastoma - a rare, very
            aggressive childhood cancer with a low survival rate and high change of relapse.
        </p>
        <p>
            A relapse leaves limited treatment options and is almost always terminal.
        </p>
        <Header as='h3'>
            Fundraising
        </Header>
        <p>
            Ava’s best hope is to receive a new treatment only available from Sloan Kettering Hospital in New York City.
        </p>
        <p>
            We were stunned and horrified to learn that the treatment and associated costs are estimated at
            <b>$300,000</b>, but we are determined to raise the money for our baby girl.
        </p>
    </div>
)

AvaIntroText.propTypes = {
    mobile: PropTypes.bool,
}

export default AvaIntroText