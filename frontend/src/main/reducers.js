import { combineReducers } from 'redux';
import DashboardReducer from '../billingCycle/dashboard/dashboardReducer';
import tabReducer from '../common/tab/tabReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: tabReducer,
});

export default rootReducer;
