import React from 'react'

import {Container, Grid, List, Segment,} from 'semantic-ui-react'

const Footer = () => (

    <Segment inverted vertical style={{padding: '5em 0em', fontSize:'1.1em'}}>
        <Container>
            <Grid divided inverted centered stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                        {/*<Header inverted as='h4' content='About'/>*/}
                        <List link inverted>
                            <List.Item as='a' href='mailto:info@avasjourney.com.au'>
                                Contact Us
                            </List.Item>
                            <br/>
                            <List.Item as='a' href='https://www.gofundme.com/jupcnf-avas-journey/donate'>
                                Donate
                            </List.Item>
                        </List>
                    </Grid.Column>
                    {/*<Grid.Column width={3}>*/}
                        {/*<Header inverted as='h4' content='Services'/>*/}
                        {/*<List link inverted>*/}
                            {/*<List.Item as='a'>Banana Pre-Order</List.Item>*/}
                            {/*<List.Item as='a'>DNA FAQ</List.Item>*/}
                            {/*<List.Item as='a'>How To Access</List.Item>*/}
                            {/*<List.Item as='a'>Favorite X-Men</List.Item>*/}
                        {/*</List>*/}
                    {/*</Grid.Column>*/}
                    <Grid.Column width={9}>
                        {/*<Header as='h4' inverted>*/}
                        {/*Footer Header*/}
                        {/*</Header>*/}
                        {/*<p>*/}
                        {/*Extra space for a call to action inside the footer that could help re-engage users.*/}
                        {/*</p>*/}


                        {/*<style type="text/css">*/}
                        {/**/}
                        {/*/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.*/}
                        {/*We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */}
                        {/*</style>*/}

                        <div id="mc_embed_signup">
                            <h2 className='normal' style={{
                                fontWeight: 400
                            }}>Subscribe to Ava's mailing list</h2>
                            <form
                                action="https://avasjourney.us19.list-manage.com/subscribe/post?u=446327b352951006ca5e58c25&amp;id=a8f6b3da69"
                                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                                className="validate" target="_blank" novalidate>
                                <div id="mc_embed_signup_scroll">
                                    <div className="mc-field-group">
                                        <label for="mce-EMAIL">
                                            Email Address
                                            {/*<span className="asterisk">*</span>*/}
                                        </label>
                                        <input type="email" name="EMAIL" className="required email" id="mce-EMAIL"/>
                                    </div>
                                    <div id="mce-responses" className="clear">
                                        <div className="response" id="mce-error-response" style={{display: 'none'}}/>
                                        <div className="response" id="mce-success-response" style={{display: 'none'}}/>
                                    </div>
                                    {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
                                    <div style={{position: 'absolute', left: -5000}} aria-hidden="true">
                                        <input type="text" name="b_446327b352951006ca5e58c25_a8f6b3da69" tabindex="-1"
                                               value=""/>
                                    </div>
                                    <div className="clear">
                                        <input type="submit" value="Subscribe" name="subscribe"
                                                                  id="mc-embedded-subscribe" className="button"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <div style={{
                        marginTop:10,
                        color:'#555'
                    }}>
                        Website Design by <b><a className='webmasterlink' href='mailto:ahilton@gmail.com'>Zut Studios</a></b> - 2018
                    </div>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
)


export default Footer