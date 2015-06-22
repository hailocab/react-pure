import React, { findDOMNode, Component } from 'react';
import hl from 'highlight.js';

import monokai from './monokai_sublime.css';

export default class Highlight extends Component {
    highlight() {
        hl.highlightBlock(findDOMNode(this.refs.code));
    }

    componentDidMount() {
        this.highlight();
    }

    componentDidUpdate() {
        this.highlight();
    }

    render() {
        return <pre className='hljs'><code ref='code' {...this.props} /></pre>;
    }
}
