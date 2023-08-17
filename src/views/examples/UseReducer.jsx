import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    //foco...
    number: 0,
    number2: 0
}

function reducer(state, action) {
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
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                {state.user ? 
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem Usuário</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Maria' })}>Login</button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'numberAdd2' })}>+2</button>
                </div>
            </div>
            <SectionTitle title="Desafio #01"/>
            <div className="center">
                <span className="text">{state.number2}</span>
                <div>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'multiplyBy7' })}>* 7</button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'divideBy25' })}>/ 25</button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'transformToInteger' })}>Inteiro</button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'numberAddN', payload: parseInt(Math.random() * 20)})}>Add N</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
