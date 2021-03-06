import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Container,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar,
} from 'semantic-ui-react'
import AvaIntro from "../component/AvaIntro";
import {withRouter} from "react-router-dom";
import Navigation from "../component/Navigation";

var logo = require('../img/logo-t.png')


class MobileContainer extends Component {
    state = {}

    handlePusherClick = () => {
        const { sidebarOpened } = this.state

        if (sidebarOpened) this.setState({ sidebarOpened: false })
    }

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

    render() {
        const { children, match } = this.props
        const { sidebarOpened } = this.state

        const isHome = match.path === "/"

        return (
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>

                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='push'
                        inverted
                        vertical
                        width='thin'
                        style={{
                            fontSize:'1.33em'
                        }}
                        visible={sidebarOpened}>
                        <Navigation>
                            <Menu.Item as='a' href='https://www.gofundme.com/jupcnf-avas-journey/donate'>Donate</Menu.Item>
                        </Navigation>
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
                            vertical
                        >
                            <Container stlye={{

                            }}>

                                <Menu inverted pointing secondary>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' size='big'/>
                                        <span style={{fontSize:'1.5em'}}>MENU</span>
                                    </Menu.Item>
                                    <Responsive minWidth={500}>
                                    <Menu.Item as='a' href='https://www.gofundme.com/jupcnf-avas-journey/donate' style={{
                                        backgroundColor:'#F3E598',
                                        //color: 'black',
                                        fontSize:'1.4em',
                                        borderRadius:'1em',
                                        marginLeft: '0.5em'
                                    }}>
                                        <span style={{color:'black'}}>Donate</span>
                                    </Menu.Item>
                                    </Responsive>


                                    <Menu.Item position='right' >
                                        <img src={logo}
                                             style={{
                                                 position: 'absolute',
                                                 width: '16em',
                                                 bottom:'-3.8em',
                                                 left: '-13em',
                                                 zIndex:100
                                             }}
                                        />
                                    </Menu.Item>
                                </Menu>


                            </Container>


                            {isHome && <AvaIntro mobile/>}
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

const MobileContainerWithRouter = withRouter(MobileContainer)

export default MobileContainerWithRouter