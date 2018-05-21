import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


//to initiate dates and how to format the dates 
// const now = moment();
// console.log(now);
// console.log(now.format("MMM Do, YYYY"));

export default class ExpenseForm extends React.Component {

    //by putting it in the constructor method we are passing the data to the edit page.
    //when rendering the edit page, you will see the existing input from the store  
    constructor(props){
        super(props);
        this.state={
            description: props.expense ? props.expense.description :  '',
            note: props.expense ? props.expense.note : '',
            amount : props.expense ? (props.expense.amount / 100).toString() :  '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused : false,
            error : '' 
        };
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

        //regex101.com 
    onAmountChange =(e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}));
        }
    };

        //momentjs.com - for date picker 
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() =>({ createdAt }));
        } 
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused : focused }))
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            //set error state equal to "Please provide description or amount"
            this.setState(()=> ({error: "Please provide description and amount"}));
        }else{
            //Clear error 
            console.log('submitted');
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description : this.state.description,
                amount : parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>  
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        autoFocus 
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        />
                    <input 
                        type="number" 
                        placeholder="Amount" 
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange} 
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1} //show how many calendar at a time 
                        isOutsideRange={(date) => false}    // allow to pick days in the past  
                    />
                    <textarea 
                        placeholder="Add a note for your Expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
};