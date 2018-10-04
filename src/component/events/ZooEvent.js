import React from 'react'

import zooBackground from '../../img/avaZoo.jpg'
import EventCell from "./EventCell";

const ZooEvent = ({children}) => (

    <div style={{
        minHeight:300,
        height:300
    }}>
    <EventCell
        backgroundImg={zooBackground}
    >
    </EventCell>
    </div>
)


export default ZooEvent