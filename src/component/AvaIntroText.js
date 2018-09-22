import PropTypes from 'prop-types'
import React from 'react'

import {Header,} from 'semantic-ui-react'

const AvaIntroText = ({mobile}) => (

    <div>
        <Header as='h3'>
            Ava's Journey
        </Header>

        <p>
            On the 7th of April, two weeks after her second birthday, our baby girl was diagnosed with Stage 4 High Risk
            Neuroblastoma, a very rare and aggressive childhood cancer, and our world fell apart.
        </p>
        <p>
            Our little fighter is in her ninth round of chemo now and has gone through multiple operations. Her best
            chance is a lifesaving vaccine only available from Memorial Sloan Kettering Hospital in New York City. We
            were stunned and horrified to learn that the vaccine and associated costs are estimated at a daunting
            <b>$350,000</b>, but we are determined to raise the money for our baby girl.
        </p>
        <p>
            A team of volunteers has assembled to help us reach our goal, and we are depending on your generosity to
            help our baby girl get the treatment she needs.
        </p>
        <p>
            From the bottom of our hearts, <b>THANKYOU</b> for caring about Ava and sharing her story. Your support could be
            lifesaving.
        </p>
    </div>
)

AvaIntroText.propTypes = {
    mobile: PropTypes.bool,
}

export default AvaIntroText