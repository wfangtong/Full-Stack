import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'

import history from './history'
import routes from './routes'

ReactDOM.render((
  <Router history={history} routes={routes} />
), document.body)
