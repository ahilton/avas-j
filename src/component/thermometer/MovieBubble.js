import React from 'react'
import BubbleText from "./BubbleText";
import {Icon} from "semantic-ui-react";

const MovieBubble = () => (
    <BubbleText>
        <div style={{display:'inline', float:'right'}}>
            <Icon name='film' size='massive'/>
        </div>
        <p>
            Thanks to the lovely Lauren, Millie and Natalie for organizing a fundraising movie night at the fabulous <b>Palace Cinemas in Brighton</b>.
        </p>
        <p>
            About 80 people came, the raffle was fab (thank you to everyone who contributed) and we even had people who were at the cinema separate to us come and make donations after seeing the posters and banners and reading about Ava’s journey.
        </p>
    </BubbleText>
)

export default MovieBubble