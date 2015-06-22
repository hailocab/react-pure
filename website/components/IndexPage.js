import React, { Component, PropTypes } from 'react';

import Highlight from './Highlight';
import { page } from './style.css';

class Property extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        defaults: PropTypes.string
    };

    render() {
        const { value, defaults, children, ...props } = this.props;
        const details = defaults
            ? <span> (optional, defaults to <em>{defaults}</em>): </span>
            : <span> (optional): </span>;

        return (
            <li {...props}><code className='inline'>{value}</code>{details}{children}</li>
        );
    }
}

class ClassProperty extends Component {
    static propTypes = {
        cls: PropTypes.string.isRequired
    };

    render() {
        const { cls, ...props } = this.props;

        return (
            <Property {...props}>
                adds the <code className='inline'>{cls}</code> class.
            </Property>
        );
    }
}

class BoolClassProperty extends Component {
    render() {
        const { value, ...props } = this.props;
        return <ClassProperty value={value + ': bool'} defaults='false' {...props} />;
    }
}

class Anchor extends Component {
    render() {
        const { name, ...props } = this.props;
        return <a id={name} href={'#' + name} {...props} />;
    }
}

export default class IndexPage extends Component {
    render() {
        return (
            <div className='page'>
                <header>
                    <h1><Anchor name='title'>react-pure</Anchor></h1>
                    <p>
                        <a href='http://facebook.github.io/react/'>React</a> components using <a href='http://purecss.io/'>Pure CSS</a>.
                    </p>
                </header>

                <h2><Anchor name='installation'>Installation</Anchor></h2>

                <h3>npm + browserify/webpack</h3>
                <Highlight className='bash'>npm install react-pure</Highlight>
                <p>React is also required as a peer dependency.</p>

                <h3>Others</h3>
                You can download UMD builds from the <a href='https://github.com/hailocab/react-pure/tree/master/dist'>GitHub repository</a>.<br />
                The components are accessible in the <code className='inline'>window.ReactPure</code> object.

                <h2><Anchor name='usage'>Usage</Anchor></h2>

                <p>The components documented below are exposed as CommonJS modules and can be accessed in the following ways:</p>

                <Highlight className='js'>{`// ES6
import { Button, Cell } from 'react-pure';

// CommonJS
var Button = require('react-pure').Button;
// or
var Pure = require('react-pure');
var Button = Pure.Button;

// Direct access to the module
var Button = require('react-pure/lib/Button');`}</Highlight>

                <h2><Anchor name='components'>Components</Anchor></h2>

                <h3><Anchor name='button'>Button</Anchor></h3>
                <p><a href='http://purecss.io/buttons/'>Pure CSS reference</a></p>
                <h4>Properties</h4>
                <ul>
                    <BoolClassProperty value='active' cls='pure-button-active' />
                    <BoolClassProperty value='disabled' cls='pure-button-disabled' />
                    <BoolClassProperty value='primary' cls='pure-button-primary' />
                    <Property value='href: string' defaults='false'>
                        if set, renders a <code className='inline'>{'<a>'}</code> element instead of <code className='inline'>{'<button>'}</code>.
                    </Property>
                </ul>

                <h3><Anchor name='cell'>Cell</Anchor></h3>
                <p>A Cell is an element of a <a href='http://purecss.io/grids/'>Pure CSS Grid</a>.</p>
                <h4>Properties</h4>
                <ul>
                    <Property value='size: string' defaults='1'>
                        adds the <code className='inline'>{'pure-u-{size}'}</code> class.<br />
                        You can use the <code className='inline'>/</code> separator instead of <code className='inline'>-</code>, ex: <code className='inline'>{`<Cell size='1/3'>`}</code>.
                    </Property>
                    <ClassProperty value='sm: string' cls='pure-u-sm-{sm}' />
                    <ClassProperty value='md: string' cls='pure-u-md-{md}' />
                    <ClassProperty value='lg: string' cls='pure-u-lg-{lg}' />
                    <ClassProperty value='xl: string' cls='pure-u-xl-{xl}' />
                </ul>

                <h3><Anchor name='menu'>Menu</Anchor></h3>
                <p><a href='http://purecss.io/menus/'>Pure CSS reference</a></p>
                <h4>Properties</h4>
                <ul>
                    <BoolClassProperty value='horizontal' cls='pure-menu-horizontal' />
                    <BoolClassProperty value='scrollable' cls='pure-menu-scrollable' />
                </ul>

                <h3><Anchor name='menuitem'>MenuItem</Anchor></h3>
                <p>Renders a <code className='inline'>{'<li>'}</code> node with the <code className='inline'>pure-menu-item</code> class by default.</p>
                <h4>Properties</h4>
                <ul>
                    <BoolClassProperty value='allowHover' cls='pure-menu-allow-hover' />
                    <BoolClassProperty value='disabled' cls='pure-menu-disabled' />
                    <BoolClassProperty value='hasChildren' cls='pure-menu-has-children' />
                    <BoolClassProperty value='selected' cls='pure-menu-selected' />
                </ul>

                <h3><Anchor name='table'>Table</Anchor></h3>
                <p><a href='http://purecss.io/tables/'>Pure CSS reference</a></p>
                <h4>Properties</h4>
                <ul>
                    <BoolClassProperty value='bordered' cls='pure-menu-bordered' />
                    <BoolClassProperty value='horizontal' cls='pure-menu-horizontal' />
                    <BoolClassProperty value='striped' cls='pure-menu-striped' />
                </ul>
            </div>
        );
    }
}
