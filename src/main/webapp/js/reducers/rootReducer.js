import { combineReducers } from 'redux';
import CompaniesListReducer from './companiesListReducer';

const rootReducer = combineReducers({
    companiesList: CompaniesListReducer
});

export default rootReducer;
