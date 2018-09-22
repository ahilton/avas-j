import React from 'react'

import {Button, Grid, Icon, Segment,} from 'semantic-ui-react'

const FAQSegment = () => (

    <Segment basic style={{padding: '0em'}} vertical>
        <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
                <Grid.Column style={{padding: '5em 2em 5em 2em'}}>
                    <h3 style={{fontSize: '2.5em', marginBottom: 30}}>
                        "How can I help?"
                    </h3>
                    <div style={{fontSize: '1.2em', padding: '0 3em'}}>
                        <p>
                            Every time we get a new <a href='https://www.gofundme.com/jupcnf-avas-journey/donate'>donation</a> or message, it brings us so much hope and joy, you can never know.
                        </p>
                        <p >
                            Or if you have the capacity to donate auction items for our events, volunteer specialist skills, share her story and events on social media, or just want to say hi, we would love for you to get in touch.
                        </p>
                        <p>
                            <Button as='a' href='mailto:info@avasjourney.com.au' size='huge' style={{backgroundColor:'#8DD1CA'}}>
                                <Icon name='mail'/>
                                Get in touch
                            </Button>
                        </p>

                    </div>
                </Grid.Column>
                <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                    <h3 style={{fontSize: '2.5em', marginBottom: 40}}>
                        Follow & share<br/>
                        Ava's Journey
                    </h3>
                    <p>

                        <a href='https://www.facebook.com/Avasneuroblastomajourney/'>
                            <Icon name='facebook' size='huge' style={{color:'black'}}/>
                        </a>

                        <a href='https://www.instagram.com/leeleeloves12/'>
                            <Icon name='instagram' size='huge' style={{color:'black'}}/>
                        </a>
                    </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)


export default FAQSegment