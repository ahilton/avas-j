import React from 'react'

import {Container, Menu} from 'semantic-ui-react'
import {Link, Route} from "react-router-dom";

const MenuLink = ({label, to, activeOnlyWhenExact}) => (

    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
            <Link to={to}>
                <Menu.Item as='a' className={match ? "active" : ""}>
                    {label}
                </Menu.Item>
            </Link>
        )}
    />
)

const Navigation = ({children}) => (

    <Container>
        <MenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
        {/*<MenuLink to="/gala" label="Gala"/>*/}
        <MenuLink to="/events" label="Events"/>
        <MenuLink to="/press" label="Press"/>
        <MenuLink to="/faq" label="FAQ"/>
        <MenuLink to="/friends" label="Friends of Ava"/>
        {children}
    </Container>
)


export default Navigation