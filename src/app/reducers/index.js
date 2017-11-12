import { combineReducers } from 'redux';

import { authenticate } from './authentication.reducers';
import { alerting } from 'alert.reducers';

const rootReducer = combineReducers(
  authenticate,
  alerting
);

export default rootReducer;