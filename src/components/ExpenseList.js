import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


//stateless function components 
//what we want to render to the screen 
export const ExpenseList = (props) => (
    <div>
       {
           props.expenses.length === 0 ? (
                <p>No expenses</p>
           ) : (
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />
            })
            )
       }
    </div>
);

//store state get pass in and return key value pairs 
//functions that maps store states to props 
//what we want to get off the store 
const mapStateToProps = (state) => {
    return {
        expenses : selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

