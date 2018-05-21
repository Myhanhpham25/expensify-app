import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';


let addExpense , history, wrapper ; 

beforeEach(() => {
    addExpense = jest.fn();
    history = {push: jest.fn()}
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
}); 

//to test it render to the right page
test('should render AddExpense Page', () => {
    expect(wrapper).toMatchSnapshot(); 
});

test('should handle onsubmit ', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});

