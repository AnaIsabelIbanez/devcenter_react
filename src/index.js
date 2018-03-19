import './style/default.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { IntlProvider } from 'react-intl';

import App from './containers/App';
import configureStore from './configureStore';
import { translationMessages } from './transaltions/messages';

const history = createHistory();
const store = configureStore({}, history);

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale={'es'} key={'es'} messages={translationMessages.es}>
            <Router history={history}>
                <App />
            </Router>
        </IntlProvider>
    </Provider>, document.getElementById('root')
);
