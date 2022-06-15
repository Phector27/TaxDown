import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, rootSaga } from './store'
import TaxDownApp from './components/App.component'

/** Saga init **/
const sagaMiddleware = createSagaMiddleware()

/** Store creation **/
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

const App = () => {

  return (
    <Provider store={store}>
      <TaxDownApp />
    </Provider>
  )
}

export default App;
