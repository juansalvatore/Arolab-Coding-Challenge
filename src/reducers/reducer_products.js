import _ from 'lodash'
import { FETCH_PRODUCTS } from '../actions/index'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return _.mapKeys(action.payload.data, '_id')
  }
  return state
}
