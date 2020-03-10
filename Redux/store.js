import { createStore, applyMiddleware, compose }from 'redux'
import reducers from './Reducers'
import thunk from 'redux-thunk'

let store;
const isFirefox = typeof InstallTrigger !== 'undefined';

if( process.browser && !isFirefox ){
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