import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//REDUX ACTIONS methods to pass to reducer 
//ADD_EXPENSE
//const name = ({} = {}) => {()} - when using destructing an item and grabbing and setting default values 
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount, 
        createdAt
    }
});

//REMOVE_EXPENSE
//passing an object in and destructing it and grabbing it by id and if it doesn't exisit then destructing an empty object
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id, 
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type : 'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE 
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'

});
//SET_START_DATE
const setStartDate = (startDate) => ({
    type : 'SET_START_DATE',
    startDate
});

//SET_END_DATE
const setEndDate = (endDate) => ({
    type : 'SET_END_DATE',
    endDate
});

//Expense Reducer 
const expenseReducerDefaultState =[];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': //can also use concat which is the same thing , create a new array and create a new one. 
           return [
               ...state, //grab item from existence array 
               action.expense
           ];
        case 'REMOVE_EXPENSE':
           return state.filter(({ id }) => id !== action.id); //.filter doesn't change the array, if theres a match it fill be filter out.  it returns a newstate of the array. if true it will be remove. 
        case 'EDIT_EXPENSE' : //action type 
           return state.map((expense) => { //iterate through every single item in the arraylist 
            if(expense.id === action.id){  //condition logic- if the item in the expense list match the action id 
                return {
                    ...expense, //spread out all the proporties  of the exisit one. 
                    ...action.updates //override what was passed in 
                }
            }else{
                return expense; //no change unless there is a match / same affect if we don't do anything at all
            };
           });
        default: 
        return state;
    }
};

//filter object start with set default values 
const filtersReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
        return { //return a new object
            ...state,  //all value of current object
            text : action.text //set new action 
        };
        case 'SORT_BY_DATE': 
        return {
            ...state,
            sortBy: 'date'
        }
        case 'SORT_BY_AMOUNT': //return a new object represent the new filter object
        return {
            ...state,
            sortBy: 'amount'
        }
        case 'SET_START_DATE' :
        return {
            ...state,
            startDate : action.startDate
        }
        case 'SET_END_DATE' : 
        return {
            ...state, 
            endDate : action.endDate
        }
        default: 
        return state;
    }
};

//TIMESTAMPS - positive or negative integers value , counting in miliseconds 
//January 1st, 1970 (unix epoch) 
//33400 , 10 , -203 

//GET VISIBLE EXPENSES 
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >=startDate;
        const endDateMatch = typeof endDate !== 'number'  || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());  //figure out if expense.description has the text variable string inside of it. 

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => { //string.sort(compareFunction) to determine which one comes first 
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;  //highest item in place 
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1; //highest item first 
        }
    })
}
//Store creation 
//combine reducers 
const store = createStore(
    combineReducers({
        expenses : expenseReducer,
        filters : filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description : 'Rent', amount: 100, createdAt : -21000}));
const expenseTwo = store.dispatch(addExpense({description : 'Coffee', amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense({id : expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount : 500})); //grab id of what we need to edit and what we are updating
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());  //amount
// store.dispatch(sortByDate()); //proporities sort by date 

// store.dispatch(setStartDate(0)); //start date 125
// store.dispatch(setStartDate()); //start date undefined 
// store.dispatch(setEndDate(1250)); //end date of 1250 

const demoState = {
   expenses : [{
        id: 'dfadfadf',
        description: 'January Rent',
        note: 'This is the final payment for that address',
        amount : 54500,
        createdAt : 0
   }],
   filters: {
       text: 'rent', 
       sortBy : 'amount', //date or amount 
       startDate : undefined,
       endDate : undefined
   }
};




