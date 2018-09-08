import React from 'react'

import {Container, Image, Segment} from 'semantic-ui-react'

import GalaSegment from "../home/GalaSegment";

var ava = require('../../img/insta-ava2.jpg')

const Gala = () => (
    <div>
        <GalaSegment>
            <Segment compact basic text padded style={{
                marginBottom: 50,
                fontSize: '0.9em',
                backgroundColor: '#2B7C74',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 10
            }}>
                <Container>
                    {/*<Image floated='left' circular size='small' src={ava} style={{*/}
                        {/*// border: '10px #2B7C74 solid',*/}
                        {/*marginTop:-100,*/}
                        {/*// marginBottom:-20*/}
                    {/*}}/>*/}
                    <p>
                        Please join us for an unforgettable night supporting Ava
                        to receive life-saving treatment.
                    </p>
                    <p>
                        Tickets include Canepe's, Drinks & a five-star, 3 course dinner.
                    </p>
                    <p>
                        The event will be hosted by the wonderful Hamish and Andy & packed with A list celebrity guests.
                        Sponsors include Mercedes Benz, Emirates and Nike. There are once in a lifetime items going up
                        for Auction!
                        Also a 1/20 chance of winning a fabulous door prize!
                    </p>
                </Container>
            </Segment>
        </GalaSegment>
    </div>
)
export default Gala