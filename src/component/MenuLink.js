import React from 'react'

import {Menu} from 'semantic-ui-react'
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

export default MenuLink