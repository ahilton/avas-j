import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Button, Container, Menu, Responsive, Segment, Visibility,} from 'semantic-ui-react'
import AvaIntro from "../component/AvaIntro";
import {withRouter} from "react-router-dom";
import MenuLink from "../component/MenuLink";

var logo = require('../img/logo-t.png')

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({fixed: false})
    showFixedMenu = () => this.setState({fixed: true})

    render() {

        const {match} = this.props

        const {children} = this.props
        const {fixed} = this.state

        const isHome = match.path === "/"
        const showFixed = fixed || !isHome

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment inverted className='homeHeader' vertical>
                        {!showFixed &&
                        <Container
                            style={{}}
                        >
                            <div style={{
                                position: 'absolute',
                                width: 'inherit'
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
                            fixed={showFixed ? 'top' : null}
                            inverted={!showFixed}
                            pointing={!showFixed}
                            secondary={!showFixed}
                            size='large'
                            style={{marginTop: 0}}
                            borderless
                        >
                            <Container>
                                <MenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
                                <MenuLink to="/gala" label="Gala"/>
                                <MenuLink to="/events" label="Events"/>
                                <MenuLink to="/press" label="Press"/>
                                <MenuLink to="/faq" label="FAQ"/>
                                {showFixed && <Menu.Item position='right'>

                                </Menu.Item>}
                                {/*{showFixed && <Menu.Item position='right'>*/}
                                    {/*<img src={logoBalloon}*/}
                                         {/*style={{*/}
                                             {/*position: 'absolute',*/}
                                             {/*width: '8em',*/}
                                             {/*bottom: '-0.9em',*/}
                                             {/*left: '18em'*/}
                                         {/*}}*/}
                                    {/*/>*/}
                                    {/*<Button as='a' href='https://www.gofundme.com/jupcnf-avas-journey/donate'>*/}
                                        {/*Donate*/}
                                    {/*</Button>*/}
                                {/*</Menu.Item>}*/}
                                {showFixed && <Menu.Item position='right' as='a' href='https://www.gofundme.com/jupcnf-avas-journey/donate' style={{
                                    backgroundColor:'#F3E598',
                                    color: 'black'
                                }}>
                                    Donate
                                </Menu.Item>}

                            </Container>
                        </Menu>
                        {isHome && <AvaIntro/>}
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

const ShowTheLocationWithRouter = withRouter(DesktopContainer)

export default ShowTheLocationWithRouter