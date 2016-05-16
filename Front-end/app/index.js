// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Router, Route, Link } from 'react-router'
import { createStore } from 'redux'
// import { Provider } from 'react-redux'
//
// import reducers from './reducers'
// let store = createStore(reducers)
//
// import history from './history'
// import routes from './routes'
//
// ReactDOM.render((
//   <Router history={history} routes={routes} />
// ), document.body)

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.text ])
    default:
      return state
  }
}

let store = createStore(todos, [ 'Use Redux' ])

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})

console.log(store.getState())
