import { combineReducers } from 'redux';
import pagereducer from './pagereducer';




const reducers =combineReducers({
    page:pagereducer,
  })

export default reducers