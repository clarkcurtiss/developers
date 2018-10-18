import React from 'react';
import Link from 'gatsby-link';
//import { Helmet } from 'react-helmet';

import 'jquery/dist/jquery.min.js';

import '../style/global.scss';
import './layout.scss';

const Nav = (props) => (
    <nav className="nav">
        {props.children}
    </nav>
);

const NavLink = (props) => (
    <Link className='nav-link' to={props.to}>
        {props.children}
    </Link>
);


export default ({ children }) => (
    <div className='site-container container-fluid flex-column'>
        <header className='row justify-content-between align-items-center'>
            <div className='col-auto'>
                <h1>Bittrex</h1>
            </div>
            <div className='col-auto'>
                <Nav>
                    <a className='nav-link' href='/api/v1/'>API</a>
                    <NavLink to='/api/websocket'>Websocket</NavLink>
                </Nav>
            </div>
        </header>
        {children}
    </div>
);