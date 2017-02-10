import React from 'react'
import {connect} from 'react-redux'

import ReduxSample from './ReduxSample'
import increment from './action'

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {dispatch(increment())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxSample);

