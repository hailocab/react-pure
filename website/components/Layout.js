import React, { Component } from 'react';
import { RouteHandler } from 'react-router';

import { Menu, MenuItem } from '../../lib';
import { navbar, navbarMenu } from './style.css';

export default class Layout extends Component {
    render() {
        const { title, ...props } = this.props;

        return (
            <html>
                <head>
                    <title>{title}</title>
                    <link rel='stylesheet' href='http://yui.yahooapis.com/pure/0.6.0/pure-min.css' />
                    <link rel='stylesheet' href='allstyles.css' />
                </head>
                <body>
                    <div className='navbar'>
                        <Menu horizontal className='navbarMenu'>
                            <a href='#title' className='pure-menu-heading pure-menu-link'>React-Pure</a>
                            <MenuItem>
                                <a className='pure-menu-link' href='#installation'>Installation</a>
                            </MenuItem>
                            <MenuItem>
                                <a className='pure-menu-link' href='#usage'>Usage</a>
                            </MenuItem>
                            <MenuItem hasChildren allowHover>
                                <a className='pure-menu-link' href='#components'>Components</a>
                                <ul className='pure-menu-children'>
                                    <MenuItem>
                                        <a className='pure-menu-link' href='#button'>Button</a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a className='pure-menu-link' href='#cell'>Cell</a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a className='pure-menu-link' href='#menu'>Menu</a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a className='pure-menu-link' href='#menuitem'>MenuItem</a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a className='pure-menu-link' href='#table'>Table</a>
                                    </MenuItem>
                                </ul>
                            </MenuItem>
                            <MenuItem style={{float: 'right'}}>
                                <a className='pure-menu-link' href='https://github.com/hailocab/react-pure'>GitHub</a>
                            </MenuItem>
                        </Menu>
                    </div>
                    <RouteHandler {...props} />
                    <script src='bundle.js' />
                </body>
            </html>
        );
    }
}
