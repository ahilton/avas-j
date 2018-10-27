import React from 'react'

import {Container, Image, Segment} from 'semantic-ui-react'

var img = require('../../img/media-project.jpg')


const Video10Segment = ({detail, children}) => (

    <Segment inverted basic style={{
        padding: '4em 0em',
        margin: 0
    }} textAlign='center'>

        <Container text textAlign='left' style={{paddingLeft: 25}}>

            <p style={{marginBottom: 30}}>
                {detail && <Image
                    href='https://www.facebook.com/TheProjectTV/?__xts__%5B0%5D=68.ARBraXPVzIvhdaXvb25Q8wHIq1lzTUgb78CuD4KrvADMbsX1dPnj06WnUEfShBSI0_d-4S_LbBL9uCnoc_27DvsR435-NAhdm3p2iTHVgd7bX4zc2NPnLjY3DTuI-OvK2vXcqxeXw-BRT2R9tp1SMuOBFfIdUt_Il-S_SkJfjZzUtOyWMO-L_mLBtEvi1vWp3kRHRHFjRyJUMMNYO_E2a1p5vXyx4DuTK6Tn3KwTTg'
                    verticalAlign='bottom' circular size='tiny' src={img} style={{marginRight: 20}}/>}
                <span style={{
                    fontSize: '1.6em',
                    fontWeight: 300
                }}>
                <b>The Project</b> | Channel 10
            </span>
            </p>
        </Container>

        <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FTheProjectTV%2Fvideos%2F1882576588523845%2F&show_text=0&width=560"
            width={560} height={315} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0}
            allowTransparency="true" allowFullScreen="true"/>

        {children}
    </Segment>
)


export default Video10Segment