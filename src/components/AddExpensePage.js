import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };

    render(){
        return (
            <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
                onSubmit={(expense) => {
                    //props.dispatch(addExpense(expense)); //add the expense data to the redux store 
                    props.onSubmit(expense); //more testable component 
                    props.history.push('/') //after submit it will load to the / page 
                }}
            />
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>  ({
    addExpense : (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps )(AddExpensePage);