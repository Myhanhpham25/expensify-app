//expense reducer 

const expensesReducerDefaultState =[];
export default (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': //can also use concat which is the same thing , create a new array and create a new one. 
           return [
               ...state, //grab item from existence array 
               action.expense
           ];
        case 'REMOVE_EXPENSE':
           return state.filter(({ id }) => id !== action.id); //.filter doesn't change the array, if theres a match it fill be filter out.  it returns a newstate of the array. if true it will be remove. 
        case 'EDIT_EXPENSE' : //action type 
           return state.map((expense) => { //iterate through every single item in the arraylist 
            if(expense.id === action.id){  //condition logic- if the item in the expense list match the action id 
                return {
                    ...expense, //spread out all the proporties  of the exisit one. 
                    ...action.updates //override what was passed in 
                }
            }else{
                return expense; //no change unless there is a match / same affect if we don't do anything at all
            };
           });
        default: 
        return state;
    }
};

