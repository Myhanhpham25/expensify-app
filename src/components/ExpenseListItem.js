//Export a stateless functional components 
//render the description, amount, createdAt 
//just map() method to iterate through the individual item 

import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>    
    </div>
);

export default ExpenseListItem;
