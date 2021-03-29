import React, {Component} from 'react';

// Style
import './Public.css';

class Login extends Component {
    render() {
        return (
            <form className="form-signin">
                    <div className={'text-center'}>
                        <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""
                             width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    </div>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required
                           autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                               required />
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        )
    }
}

export default Login;