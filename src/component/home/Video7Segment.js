import React from 'react'

import {Container, Image, Segment} from 'semantic-ui-react'

var img = require('../../img/media-7news.jpg')

const Video7Segment = ({detail}) => (

    <Segment inverted basic style={{
        paddingBottom: '4em',
        margin: 0
    }} textAlign='center'>

        <Container text textAlign='left' style={{paddingLeft: 25}}>

            <p style={{marginBottom: 30}}>
                <Image href='https://www.facebook.com/7NewsMelbourne/'
                       verticalAlign='bottom' rounded size='tiny' src={img} style={{marginRight: 20}}/>
                <span style={{
                    fontSize: '1.6em',
                    fontWeight: 300
                }}>
                <b>7 News</b> Melbourne
            </span>
            </p>
        </Container>

        <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F7NewsMelbourne%2Fvideos%2F159346311685700%2F&show_text=0&width=560"
            width={560} height={315} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0}
            allowTransparency="true" allowFullScreen="true"/>

    </Segment>
)


export default Video7Segment