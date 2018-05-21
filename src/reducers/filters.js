//filter Reducter 
//filter object start with set default values 
import moment from 'moment';

const filtersReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : moment().startOf('month'), //set up default dates 
    endDate : moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
        return { //return a new object
            ...state,  //all value of current object
            text : action.text //set new action 
        };
        case 'SORT_BY_DATE': 
        return {
            ...state,
            sortBy: 'date'
        }
        case 'SORT_BY_AMOUNT': //return a new object represent the new filter object
        return {
            ...state,
            sortBy: 'amount'
        }
        case 'SET_START_DATE' :
        return {
            ...state,
            startDate : action.startDate
        }
        case 'SET_END_DATE' : 
        return {
            ...state, 
            endDate : action.endDate
        }
        default: 
        return state;
    }
};