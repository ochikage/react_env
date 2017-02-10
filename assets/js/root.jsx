import React from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import ReduxSample from './container'
import reducer from './reducer'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <ReduxSample />
    </Provider>
    ,document.getElementById('root')
);


