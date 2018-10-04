import React from 'react'

import artBackground from '../../img/art4ava.jpg'
import EventCell from "./EventCell";

const ArtEvent = ({children}) => (

    <div style={{
        minHeight:300,
        height:300
    }}>
    <EventCell
        backgroundImg={artBackground}
    >
    </EventCell>
    </div>
)


export default ArtEvent