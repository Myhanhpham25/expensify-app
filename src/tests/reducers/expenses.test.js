import moment from 'moment';
import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducers(undefined, { type : '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id action object', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id : expenses[1].id
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});


test('should NOT remove expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id : -1
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expenses', () => {
    const expense = {
        id: '4',
        description: 'Something new',
        note: '',
        createdAt : 200000,
        amount: 29500
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([...expenses, expense]);
}); 

test('should edit an expense', () => {
    const amount = 12000;
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates : {
            amount
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should NOT edit an expense if id is not found', () => {
    const amount = 12000;
    const action = {
        type: "EDIT_EXPENSE",
        id: -1,
        updates : {
            amount
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
})
