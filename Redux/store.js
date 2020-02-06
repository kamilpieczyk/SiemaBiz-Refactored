import { createStore, applyMiddleware }from 'redux'
import reducers from './Reducers'
import thunk from 'redux-thunk'

export default createStore( 
  reducers,
  applyMiddleware( thunk ),
)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 