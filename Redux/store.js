import { createStore, applyMiddleware, compose }from 'redux'
import reducers from './Reducers'
import thunk from 'redux-thunk'

let store;

if( process.browser ){
  store = createStore( 
    reducers,
    compose(
      applyMiddleware( thunk ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  )

}

else{
  store =  createStore( 
    reducers,
    applyMiddleware( thunk ),
  )
}



export default store