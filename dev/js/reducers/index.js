import {combineReducers} from 'redux';
import CompanyReducer from './reducer-company';

const allReducers = combineReducers({
    companies: CompanyReducer
});

export default allReducers
