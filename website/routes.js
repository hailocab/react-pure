import React from 'react';
import { DefaultRoute, Route } from 'react-router';

import Layout from './components/Layout';
import Index from './components/IndexPage';

export default (
    <Route handler={Layout} path='/'>
        <DefaultRoute handler={Index} />
    </Route>
);
