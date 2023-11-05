import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            page not found back to <Link to={"/"}>home</Link>? 
        </div>
    );
}

export default ErrorPage;
