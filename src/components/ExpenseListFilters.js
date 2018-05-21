import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';


//write to the store and filter base on the text. enable user to interact with the application 
//onChange is consider control input 
//select drop down to sort by 

export class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused : null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);           
    };

    onSortChange = (e) => {
        if(e.target.value === 'date'){
            this.props.sortByDate(); 
        }else if(e.target.value === 'amount'){
            this.props.sortByAmount();
        }    
    }; 

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange} 
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }

};

//create a const of what we want to grab from the state 
// by using this function, expenselistfilters has access to the states so we pass in props 
const mapStateToProps = (state) => ({
    filters : state.filters 
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter : (text) => dispatch(setTextFilter(text)),
    sortByDate : () => dispatch(SortByDate()),
    setByAmount : () => dispatch(sortByAmount()),
    setStartDate : (startDate) => dispatch(setStartDate(startDate)),
    setEndDate : (endDate) => dispatch(setEndDate(endDate))
});

//connect takes in two argument, connect(mapStateToProps)(component)
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
