const initialState = {
    value: 9,
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {value: state.value + 1}
        default:
            return state;
    }
}
