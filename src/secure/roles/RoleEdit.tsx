import React, {Component, PropsWithRef, SyntheticEvent} from 'react';
import {Redirect} from "react-router-dom";
import Wrapper from "../Wrapper";
import axios from "axios";
import {Permission} from "../../classes/permission";
import {Role} from "../../classes/role";


class RoleCreate extends Component<{ match: PropsWithRef<any>}> {
    state = {
        permissions: [],
        selected: [],
        redirect: false,
        name: ''
    }
    selected: number[] = [];
    name = '';
    id = 0

    componentDidMount = async () => {
        this.id = this.props.match.params.id;

        // Calls
        const permissionCall = await axios.get('/permissions');
        const roleCall = await axios.get(`roles/${this.id}`);

        // Get Roles
        const role: Role = roleCall.data.data;

        this.selected = role.permissions.map(
            (p: Permission) => p.id
        );

        this.setState({
            permissions: permissionCall.data.data,
            name: role.name,
            selected: this.selected
        })

    }

    isChecked = (id: number) => {
        return this.state.selected.filter(s => s === id).length > 0;
    }

    check = (id: number) => {
        if (this.isChecked(id)) {
            this.selected = this.selected.filter(s => s !== id);
            return;
        }
        this.selected.push(id);
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`roles/${this.id}`,{
            name: this.name,
            permissions: this.selected
        })

        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/roles'}/>
        }
        return (
            <Wrapper>
                <form onSubmit={this.submit}>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control"
                                   name="name"
                                   id="name"
                                   onChange={e => this.name = e.target.value}
                                   defaultValue = {this.name = this.state.name}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Permission</label>
                        <div className="col-sm-10">
                            {this.state.permissions.map(
                                (p: Permission) => {
                                    return (
                                        <div className="form-check form-check-inline col-3" key={p.id}>
                                            <input className="form-check-input" type="checkbox" value={p.id}
                                                   onChange={event => this.check(p.id)}
                                                   defaultChecked={this.isChecked(p.id)}
                                            />
                                            <label className="form-check-label">{p.name}</label>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                    <button className="btn btn-outline-secondary" type="submit">Save</button>
                </form>
            </Wrapper>
        );
    }
}

export default RoleCreate;