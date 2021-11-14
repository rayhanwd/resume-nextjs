import React, { Component, Fragment } from 'react';
import Navs from './navs/Navs';


class Header extends Component {
    render() {
        return (
            <Fragment>
                <Navs />
            </Fragment>
        );
    }
}

export default Header;