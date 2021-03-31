import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";

// Router Components
import Dashboard from "./secure/dashboard/Dashboard";
import RedirectToDashboard from "./secure/RedirectToDashboard";
import Login from "./public/Login";
import Register from "./public/Register";
import Users from "./secure/users/Users";
import UserCreate from './secure/users/UserCreate';
import UserEdit from './secure/users/UserEdit';
import Roles from "./secure/roles/Roles";
import RoleCreate from "./secure/roles/RoleCreate";

// APP
function App() {
    return (
        <div className="App">
            <Router>
                <Route path={'/'} exact component={RedirectToDashboard}/>
                <Route path={'/dashboard'} component={Dashboard} />

                {/* Login | Registration */}
                <Route path={'/login'} component={Login}/>
                <Route path={'/register'} component={Register}/>

                {/* Users Routes */}
                <Route path={'/users'} component={Users} exact/>
                <Route path={'/users/create'} component={UserCreate} />
                <Route path={'/users/:id/edit'} component={UserEdit} />

                {/* Roles Routes */}
                <Route path={'/roles'} component={Roles} exact/>
                <Route path={'/roles/create'} component={RoleCreate}/>
            </Router>
        </div>
    );
}

export default App;
