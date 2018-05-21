import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'; //browswer once to create the new router and route for every single page

//navLink 
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    </header>
);

export default Header;
// <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>