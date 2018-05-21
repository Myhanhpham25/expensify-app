//install ->import - use 
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //can access the store 
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'; //since it has a default value, you can call it whatever. theres no
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { addExpense } from './actions/expenses'; //when using certain actions by name 
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'; // since its set as defualt and call whatever name to import the whole file

const store = configureStore();

const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


// store.dispatch(addExpense({description : 'Water Bill', amount : 4500, createdAt: 900 })); //addExpense - > water bill
// store.dispatch(addExpense({description: 'Gas Bill', amount : 1000, createdAt: 1000})); //addExpense -> gas bill 
// store.dispatch(addExpense({description : 'Rent', amount : 195000 })); //addExpense - > water bill
// store.dispatch(setTextFilter('water'));


//set time out will change text 
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

//getvisible expenses function and print to screen 
// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); //pass in two objects to the method 

// console.log(visibleExpenses);

//all components can connect to the store 