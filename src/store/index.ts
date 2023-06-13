import { createStore, compose } from "redux"
import Foods from './Food/reducer'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  Foods,
  composeEnhancers()
)

export default store