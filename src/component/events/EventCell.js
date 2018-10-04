import React from 'react'

import {Button, Grid, Icon, Segment,} from 'semantic-ui-react'

const EventCell = ({children, backgroundImg}) => (

    <Segment className='gala' basic style={{
        backgroundColor: 'black',
        padding: '2em',
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '100%'
    }} vertical textAlign='center'>
        <Grid padded verticalAlign='middle' style={{
            height: '100%',
        }}>
            <Grid.Row textAlign='center'>
                <Grid.Column>
                    {children}
                </Grid.Column>
            </Grid.Row>
        </Grid>

    </Segment>
)


export default EventCell