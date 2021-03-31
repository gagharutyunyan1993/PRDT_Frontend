import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

// Classes
import {Role} from '../../classes/role';

// Header
import Wrapper from "../Wrapper";


class Roles extends Component {
    state = {
        roles: []
    }
    page = 1;
    last_page = 0;

    componentDidMount = async () => {
        const response = await axios.get(`roles?page=${this.page}`)

        this.setState({
            roles: response.data.data
        })

        this.last_page = response.data.lastPage
    }

    next = async () => {
        if (this.page === this.last_page) return;

        this.page++;

        await this.componentDidMount()
    }

    previous = async () => {
        if (this.page === 1) return;

        this.page--;

        await this.componentDidMount();
    }

    delete = async (id: number) => {
        if (window.confirm('Are you sure?')) {
            await axios.delete(`roles/${id}`);

            this.setState({
                roles: this.state.roles.filter((r: Role) => r.id !== id)
            })
        }
    }

    render() {
        return (
            <Wrapper>
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-item-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link to={'/roles/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.roles.map(
                            (role: Role) => {
                                return (
                                    <tr>
                                        <td>{role.id}</td>
                                        <td>{role.name}</td>
                                        <td>
                                            <div>
                                                <Link to={`roles/${role.id}/edit`}
                                                      className="btn btn-outline-secondary">Edit</Link>
                                                <a href="/#"
                                                   className="btn btn-outline-secondary"
                                                   onClick={() => this.delete(role.id)}>
                                                    Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        )}

                        </tbody>
                    </table>
                </div>
            </Wrapper>
        );
    }
}

export default Roles;