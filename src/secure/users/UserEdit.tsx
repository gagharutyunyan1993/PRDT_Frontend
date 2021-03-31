import React, {Component, PropsWithRef, SyntheticEvent} from 'react';
import Wrapper from "../Wrapper";
import {Role} from "../../classes/role";
import axios from "axios";
import {Redirect} from "react-router-dom";
import {User} from "../../classes/user";

class UserEdit extends Component<{ match: PropsWithRef<any> }> {
    first_name = '';
    last_name = '';
    email = '';
    role_id = 0
    id = 0;

    state = {
        first_name: '',
        last_name: '',
        email: '',
        roles: [],
        role_id: 0,
        redirect: false
    }

    componentDidMount = async () => {
        this.id = this.props.match.params.id;

        // Calls
        const rolesCall = await axios.get('roles');
        const userCall = await axios.get(`users/${this.id}`);

        // get user
        const user: User = userCall.data.data;

        this.setState({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            role_id: user.role.id,
            roles: rolesCall.data.data,
        })
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`users/${this.id}`,{
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            role_id: this.role_id,
        })

        this.setState({
            redirect: true
        })
    }

    render() {
        if(this.state.redirect){
            return <Redirect to={'/users'} />
        }
        return (
            <Wrapper>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={event => this.first_name = event.target.value} type="text"
                               className="form-control"
                               name="first_name"
                               defaultValue={this.first_name = this.state.first_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={event => this.last_name = event.target.value}
                               type="text"
                               className="form-control"
                               name="last_name"
                               defaultValue={this.last_name = this.state.last_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={event => this.email = event.target.value}
                               type="text"
                               className="form-control"
                               name="email"
                               defaultValue={this.email = this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <select name="role_id"
                                className="form-control"
                                onChange={event => {
                                    this.role_id = parseInt(event.target.value);
                                    this.setState({
                                        role_id: this.role_id
                                    })
                                }}
                                value={this.role_id = this.state.role_id}
                        >
                            <option>Select Role</option>
                            {this.state.roles.map(
                                (role: Role) => {
                                    return (
                                        <option key={role.id} value={role.id}>{role.name}</option>
                                    )
                                }
                            )}

                        </select>
                    </div>
                    <button className="btn btn-outline-secondary" type="submit">Save</button>
                </form>
            </Wrapper>
        );
    }
}

export default UserEdit;