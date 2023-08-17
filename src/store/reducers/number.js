export default function numberReducer(state, action) {
    switch(action.type) {
        case 'multiplyBy7':
            return { ...state, number2: state.number2 + 7 }
        case 'divideBy25':
            return { ...state, number2: state.number2 / 25 }
        case 'transformToInteger':
            return { ...state, number2: parseInt(state.number2) }
        case 'numberAddN':
            return { ...state, number2: state.number2 + action.payload }
        case 'numberAdd2': 
            return { ...state, number: state.number + 2 }
        default:
            return state
    }
}