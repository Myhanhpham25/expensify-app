import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'; //browswer once to create the new router and route for every single page


const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go home</Link>
    </div>
); 

export default NotFoundPage;