import React, {Component, SyntheticEvent} from 'react';
import axios from 'axios';

// Style
import './Public.css';

class Register extends Component {
    // Form values
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    passwordConfirm = '';

    // Form submit function
    // Method 1

    submit = (e: SyntheticEvent) => {
        e.preventDefault();

        axios.post('http://prdt-b.loc/api/register', {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.passwordConfirm
        }) .then((response) => { console.log(response); }) .catch((error) => { console.log(error); });

    }


    render() {
        return (
            <form className="form-signin" onSubmit={this.submit}>
                <div className={'text-center'}>
                    <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                         alt=""
                         width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
                </div>
                {/* First name*/}
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input type="text" id="firstName" className="form-control" placeholder="First Name"
                       onChange={e => this.first_name = e.target.value} required/>
                {/* Last name*/}
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input type="text" id="lastName" className="form-control" placeholder="Last Name"
                       onChange={e => this.last_name = e.target.value} required/>

                {/* Email */}
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                       onChange={e => this.email = e.target.value} required/>

                {/* Password */}
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                       onChange={e => this.password = e.target.value} required/>

                {/* Password Confirm */}
                <label htmlFor="passwordConfirm" className="sr-only">Password Confirm</label>
                <input type="password" id="passwordConfirm" className="form-control" placeholder="Password Confirm"
                       onChange={e => this.passwordConfirm = e.target.value} required/>

                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
            </form>
        );
    }
}

export default Register;