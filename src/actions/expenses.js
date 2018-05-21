import uuid from 'uuid';

//REDUX ACTIONS methods to pass to reducer 
//ADD_EXPENSE
//const name = ({} = {}) => {()} - when using destructing an item and grabbing and setting default values 
export const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
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
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id, 
    updates
});