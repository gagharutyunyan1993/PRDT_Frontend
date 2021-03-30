import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";

// Components
import Dashboard from "./secure/dashboard/Dashboard";
import Users from "./secure/users/Users";

// Router
import Login from "./public/Login";
import Register from "./public/Register";

// APP
function App() {
    return (
        <div className="App">
            <Router>
                <Route path={'/'} exact component={Dashboard} />
                <Route path={'/users'} component={Users} />
                <Route path={'/login'} component={Login}/>
                <Route path={'/register'} component={Register}/>
            </Router>
        </div>
    );
}

export default App;
