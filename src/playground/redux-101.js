import { createStore } from 'redux';

//actions generators - functions that return action objects 
//default to an empty object ({} = {}) or elseit will throw an error 
//destructing data 
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

//don't need to pass in data 
const resetCount = () => ({
    type : 'RESET'
});

//Reducers function 
//1. reducers are pure functions - output is determine by input . what was input in the parameters (state, action). things only inside of the scope
//2. Never change state or action directly. don't reassign or mutate them. only reading and return the object representing the state 
//
const countReducer = (state = { count : 0}, action) => {
    switch (action.type){
        case 'INCREMENT' : 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT' :
            return {
                count : state.count - action.decrementBy
            };
        case 'RESET' :
            return {
                count : 0
            };
        case 'SET': 
            return {
                count : action.count
            };
        default: 
            return state; 
    }
};

const store = createStore(countReducer);
      
//to watch the store data when there are changes made 
store.subscribe(() => {
    console.log(store.getState());
});

//Actions - an object that gets sent to the store 
//increment, decrement, reset 
//i'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5}));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy : 10}));

store.dispatch(setCount({count : 101}));
