import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar,
} from 'semantic-ui-react'
import AvaIntro from "../component/AvaIntro";

var logo = require('../img/logo-t.png')


class MobileContainer extends Component {
    state = {}

    handlePusherClick = () => {
        const { sidebarOpened } = this.state

        if (sidebarOpened) this.setState({ sidebarOpened: false })
    }

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
                        <Menu.Item as='a' active>
                            Home
                        </Menu.Item>
                        <Menu.Item as='a'>Gala</Menu.Item>
                        <Menu.Item as='a'>Events</Menu.Item>
                        <Menu.Item as='a'>Press</Menu.Item>
                        <Menu.Item as='a' href='https://www.gofundme.com/jupcnf-avas-journey/donate'>Donate</Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher
                        dimmed={sidebarOpened}
                        onClick={this.handlePusherClick}
                        style={{ minHeight: '100vh' }}
                    >
                        <Segment
                            inverted
                            textAlign='center'
                            className='homeHeader'
                            // style={{ minHeight: 350, padding: '1em 0em' }}
                            vertical
                        >
                            <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                    <Menu.Item position='right' >
                                        <img src={logo}
                                             style={{
                                                 position: 'absolute',
                                                 width: '14em',
                                                 bottom:'-2em',
                                                 left: '-12em'
                                             }}
                                        />
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            <AvaIntro mobile/>

                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

export default MobileContainer