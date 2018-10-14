import React from 'react'

import {Grid, Icon, Segment,} from 'semantic-ui-react'
import Instagram from "../Instagram";

const InstagramSegment = () => (

    <Segment style={{
        padding: '6em 0em',
        borderTop: 'none'
    }} textAlign='center'>

        <Grid stackable container centered>
            <Grid.Column width={4} stretched verticalAlign="middle">

                <a href='https://www.instagram.com/leeleeloves12/' style={{
                    color:'black',
                    fontSize:'2em'
                }}>
                    <div style={{marginBottom: 10}}>
                        <Icon name='instagram' size='huge'/>
                    </div>
                    <h1 className='normal thin' style={{margin: 0}}>
                        Follow
                    </h1>
                    <h1 style={{margin: 0, marginBottom: 20}}>
                        Ava's Journey
                    </h1>
                </a>
            </Grid.Column>
            <Grid.Column width={6}>
                <Instagram url={'Bo1H2kKn-w_'}/>
            </Grid.Column>
            <Grid.Column width={6} only='computer'>
                <Instagram url={'BoAh9bVH-FE'}/>
            </Grid.Column>

        </Grid>

    </Segment>
)


export default InstagramSegment