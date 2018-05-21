//TIMESTAMPS - positive or negative integers value , counting in miliseconds 
//January 1st, 1970 (unix epoch) 
//33400 , 10 , -203 
import moment from 'moment';

//GET VISIBLE EXPENSES 
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ?  startDate.isSameOrBefore(createdAtMoment, 'day'): true ;
        const endDateMatch = endDate ?  endDate.isSameOrAfter(createdAtMoment, 'day'): true ;
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