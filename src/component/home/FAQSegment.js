import React from 'react'

import {Button, Grid, Header, Icon, Segment,} from 'semantic-ui-react'
import {Link} from "react-router-dom";

const FAQSegment = () => (

    <Segment basic style={{padding: '0em'}} vertical>
        <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
                <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                    <h3 style={{fontSize: '3em', marginBottom: 30}}>
                        "How can I help?"
                    </h3>
                    <div style={{fontSize: '1.33em', padding: '0 3em'}}>
                        {/*<p>*/}
                        {/*Thank you for taking an interest in Ava's Journey.*/}
                        {/*</p>*/}
                        <p style={{}}>
                            We welcome messages of support, volunteering, <br/>fundraising ideas, donated auction
                            items...
                        </p>
                        <p>
                            <Button as='a' href='mailto:info@avasjourney.com.au' size='huge' style={{backgroundColor:'#8DD1CA'}}>
                                <Icon name='mail'/>
                                Get in touch
                            </Button>
                        </p>
                        <br/>
                        <p>
                            Follow & share Ava's Journey &nbsp;
                            <a href='https://www.facebook.com/Avasneuroblastomajourney/'>
                                <Icon name='facebook' size='big' style={{color:'black'}}/>
                            </a>

                            <a href='https://www.instagram.com/leeleeloves12/'>
                                <Icon name='instagram' size='big' style={{color:'black'}}/>
                            </a>
                        </p>

                    </div>
                </Grid.Column>
                <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                    <Header as='h3' style={{fontSize: '2em', margin: '0 0'}}>
                        "What is neuroblastoma?"
                    </Header>
                    <Header as='h3' style={{fontSize: '2em', marginBottom: '2em'}}>
                        "What's next for Ava?"
                    </Header>
                    <p style={{fontSize: '1.33em'}}>
                        Read our FAQ page to find out more
                    </p>
                    <p style={{fontSize: '1.33em'}}>
                        <Link to="/faq">
                            <Button as='a' size='huge' style={{backgroundColor:'#8DD1CA'}}>
                                FAQ
                            </Button>
                        </Link>
                    </p>

                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)


export default FAQSegment