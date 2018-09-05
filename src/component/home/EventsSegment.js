import React from 'react'

import {Segment} from 'semantic-ui-react'

const EventsSegment = () => (

    <Segment basic style={{
        padding: '6em 0em',
    }} textAlign='center'>
        <h1 style={{
            fontSize:'2.5em',
            marginBottom:50
        }}>
            Upcoming Events
        </h1>

        <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fweloveyoursoul%2Fposts%2F1947340912225430&width=350&show_text=true&height=528&appId"
            width="350" height="528"
            style={{border: 'none', overflow: 'hidden'}} scrolling="no"
            frameborder="0" allowTransparency="true" allow="encrypted-media">

        </iframe>
    </Segment>
)


export default EventsSegment