import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses'; 
import filtersReducer from '../reducers/filters';


//since its export default, we can just call it and use it when we import it from another file. 
// only one thing taken out 
export default () => {
    //Store creation 
    //combine reducers 
    const store = createStore(
        combineReducers({
            expenses : expensesReducer,
            filters : filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

