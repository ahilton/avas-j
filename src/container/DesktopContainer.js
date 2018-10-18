import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Container, Menu, Responsive, Segment, Visibility} from 'semantic-ui-react'
import AvaIntro from "../component/AvaIntro";
import {withRouter} from "react-router-dom";
import Navigation from "../component/Navigation";

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
                            style={{marginTop: 0, fontSize: '1.31em'}}
                            borderless
                        >
                            <Navigation>
                                {showFixed && <Menu.Item position='right'>
                                </Menu.Item>}

                                {showFixed && <Menu.Item position='right' as='a' href='https://www.gofundme.com/jupcnf-avas-journey/donate' style={{
                                    backgroundColor:'#F3E598',
                                    color: 'black'
                                }}>
                                    Donate
                                </Menu.Item>}
                            </Navigation>
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

const DesktopContainerWithRouter = withRouter(DesktopContainer)

export default DesktopContainerWithRouter