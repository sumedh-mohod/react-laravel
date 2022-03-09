import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark">
                <div class="container-fluid">
                    {
                        localStorage.getItem("user-info") ?
                            <>
                                <Link to="/add">Add Products</Link>
                                <Link to="/update">Update</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Header
