
import { combineReducers } from 'redux';

import { countState } from './counter';

const rootReducer = combineReducers({
  countState,
});

export default rootReducer;
