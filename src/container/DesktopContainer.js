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
                        {!fixed &&
                        <Container
                            style={{}}
                        >
                            <div style={{
                                position:'absolute',
                                width:'inherit'
                            }}>
                            <img src={logo}
                                 style={{
                                     position: 'absolute',
                                     width: '24em',
                                     right: '-3em',
                                     top: '-5.5em'
                                 }}
                            />
                            </div>
                        </Container>
                        }
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                            style={{marginTop:0}}
                            borderless
                        >
                            <Container>

                                <Menu.Item as='a' active>
                                    Home
                                </Menu.Item>
                                <Menu.Item as='a'>Gala</Menu.Item>
                                <Menu.Item as='a'>Events</Menu.Item>
                                <Menu.Item as='a'>Press</Menu.Item>
                                {fixed && <Menu.Item position='right'>

                                </Menu.Item>}
                                {fixed && <Menu.Item position='right' >
                                    <Button as='a' href='https://www.gofundme.com/jupcnf-avas-journey/donate' style={{marginRight:'10em'}}>
                                        Donate
                                    </Button>
                                    <img src={logo}
                                         style={{
                                             position: 'absolute',
                                             width: '11em',
                                             bottom:'-1em',
                                             left: '10em'
                                         }}
                                    />
                                </Menu.Item>}


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