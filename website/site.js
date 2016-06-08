import React from 'react';
import { render } from 'react-dom';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

import Layout from './components/Layout';
import Index from './components/IndexPage';

if (typeof document !== 'undefined') {
    render(<Index />, document.getElementById('app'));
}

export default (locals, cb) => {
    const app = renderToString(<Index />);
    const html = renderToStaticMarkup(<Layout app={app} />);
    cb(null, '<!DOCTYPE html>' + html);
};
