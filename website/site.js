import React from 'react';
import Router from 'react-router';

import data from './data';
import routes from './routes';

if (typeof document !== 'undefined') {
    Router.run(routes, Router.HistoryLocation, Handler => {
        React.render(React.createElement(Handler, data), document);
    });
}

export default (locals, cb) => {
    Router.run(routes, locals.path, Handler => {
        const html = React.renderToString(React.createElement(Handler, locals));
        cb(null, '<!DOCTYPE html>' + html);
    });
};
