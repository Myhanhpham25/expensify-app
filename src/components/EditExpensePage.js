import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component{
     onSubmit=(expense) => {                  
        this.props.editExpense(this.props.expense.id, expense); //dispatch to action to edit the expense , editExpense action takes in two parameters 
        this.props.history.push('/');  //redict to the dashbaoad
    };

    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id }); //Remove expense via dispatch and then redirect to dashboard 
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
            <ExpenseForm 
                expense={this.props.expense}
                onSubmit={this.onSubmit}
            /> 
            <button onClick={this.onRemove}>Remove</button>
        </div>
        );  
    }
};

//searching the store/state for the matching props / {props.match.params.id}/ that was passed in. 
//find() search through the array for the item and return a boolean if it is found. 
const mapStateToProps = (state, props) => ({
      expense : state.expenses.find((expense) => expense.id === props.match.params.id)
    });


const mapDispatchToProps = (dispatch, props) =>  ({
    editExpense : (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense : (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);