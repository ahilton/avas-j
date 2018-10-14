import React from 'react'

import {Segment} from 'semantic-ui-react'

const EventsSegment = () => (

    <Segment basic style={{
        padding: '6em 0em',
    }} textAlign='center'>
        <h1 className='normal' style={{
            fontSize:'2.5em',
            marginBottom:50
        }}>
            Ava's Journey Update
        </h1>

        <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAvasneuroblastomajourney%2Fposts%2F333938467341533&width=500"
            width="500" height="592"
            style={{border: 'none', overflow: 'hidden'}} scrolling="no"
            frameborder="0" allowTransparency="true" allow="encrypted-media">

        </iframe>
    </Segment>
)


export default EventsSegment