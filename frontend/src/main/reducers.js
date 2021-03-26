import { combineReducers } from 'redux';
import DashboardReducer from '../billingCycle/dashboard/dashboardReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
});

export default rootReducer;
