import React from 'react'
import BubbleText from "./BubbleText";
import {Button} from "semantic-ui-react";

const DonationsBubble = () => (
    <BubbleText>
        <p>
            We have been blessed to have been supported by family, friends, companies and strangers and so far have raised over $70,000. There is still a long road ahead.
        </p>
        {/*<p>*/}
            {/*Asking for help and money doesn’t come natural to us. We have always worked hard, proud for what we have achieved and what we make for ourselves and our family, but this would not be possible to achieve alone. It takes a community to come together to help offer Ava a chance in life.*/}
        {/*</p>*/}
        <p>
            We could not be more grateful and indebted to all those who have supported us so far and continue to support - this community is truly amazing!
        </p>
        <p></p>
        <p style={{marginTop:50}}>
            <Button as='a' color='pink' href='https://www.gofundme.com/jupcnf-avas-journey/donate' size='massive'>Donate Now</Button>
        </p>
    </BubbleText>
)

export default DonationsBubble