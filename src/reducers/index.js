import { combineReducers } from 'redux'
import UserReducer from './reducer_user'
import ProductsReducer from './reducer_products'

const rootReducer = combineReducers({
  user: UserReducer,
  products: ProductsReducer,
})

export default rootReducer
