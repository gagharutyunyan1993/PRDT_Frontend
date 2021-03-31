import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/dashboard'}>
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/users'}>
                        Users
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/roles'}>
                        Roles
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default Menu;