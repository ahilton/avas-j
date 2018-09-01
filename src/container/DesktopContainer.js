import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container, Image,
    Menu,
    Responsive,
    Segment,
    Visibility,
} from 'semantic-ui-react'
import AvaIntro from "../component/AvaIntro";

var logo = require('../img/logo-t.png')


/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        className='homeHeader'
                        // style={{ minHeight: 500, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a' active>
                                    Home
                                </Menu.Item>
                                <Menu.Item as='a'>Gala</Menu.Item>
                                <Menu.Item as='a'>Events</Menu.Item>
                                <Menu.Item as='a'>Press</Menu.Item>
                                <Menu.Item position='right'>
                                    {/*<Button as='a' inverted={!fixed}>*/}
                                        {/*Donate Now*/}
                                    {/*</Button>*/}

                                    {/*<Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>*/}
                                    {/*Sign Up*/}
                                    {/*</Button>*/}
                                    <img src={logo}
                                           style={{position:'absolute',
                                               width:'20em',
                                               left:'-14em'
                                           }}
                                    />

                                </Menu.Item>
                            </Container>
                        </Menu>
                        <AvaIntro />
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

export default DesktopContainer