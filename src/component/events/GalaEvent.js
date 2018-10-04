import React from 'react'

import plazaBackground from '../../img/plazaBg.png'
import EventCell from "./EventCell";

const GalaEvent = ({children}) => (

    <EventCell
        backgroundImg={plazaBackground}
    >
        <h1 className='normal' style={{
            fontWeight: 200,
            fontSize: '3em',
            marginBottom: 0
        }}>
            Ava's Gala Dinner
        </h1>

        {children}

        <h3 className='normal' style={{
            fontWeight: 200,
            fontSize: '1.1em'
        }}>
            Celebrity Hosts
            <span style={{color: '#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            Black Tie
            <span style={{color: '#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            3 Course Dinner
            <span style={{color: '#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            Prizes
            <span style={{color: '#cccccc'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            Silent Auction
        </h3>
    </EventCell>
)


export default GalaEvent