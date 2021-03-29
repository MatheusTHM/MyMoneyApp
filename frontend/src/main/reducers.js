import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import billingCycleReducer from '../billingCycle/billingCycleReducer';
import DashboardReducer from '../dashboard/dashboardReducer';
import tabReducer from '../common/tab/tabReducer';
const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: tabReducer,
  billingCycle: billingCycleReducer,
  form: formReducer,
  toastr: toastrReducer,
});

export default rootReducer;
