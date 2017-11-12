import { combineReducers } from 'redux';

import { authentication } from './authentication.reducers';
import { alerting } from './alert.reducers';

const rootReducer = combineReducers({
    authentication,
    alerting
});

export default rootReducer;