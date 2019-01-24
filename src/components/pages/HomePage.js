import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div>
        <h1>Home Page</h1>
        {/* <Link to="/login" style={{ color:'red' }}>Login</Link> */}
        <Link to="/login" className="ui button secondary">Login</Link>
    </div>
);

export default HomePage;