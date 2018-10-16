const INITIAL_STATE = { list: [], modal: [], version: {} }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload, version: action.version }
        case 'OPEN_MODAL':
            return { ...state, modal: action.payload, open: action.open_modal }
        default:
            return state
    }
}