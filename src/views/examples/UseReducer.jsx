import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { initialState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions'

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
                        onClick={() => login(dispatch, 'João')}>Login</button>
                    <button 
                        className="btn"
                        onClick={() => numberAdd2(dispatch)}>+2</button>
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
