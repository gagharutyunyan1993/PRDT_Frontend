import React, {Component} from 'react';
import axios from "axios";

class Deleter extends Component<{ id: number, endpoint: string, handleDelete: any }> {

    delete = async () => {
        if (window.confirm('Are you sure?')) {
            await axios.delete(`${this.props.endpoint}/${this.props.id}`);

            this.props.handleDelete(this.props.id);
        }
    }

    render() {
        return (
            <button
                className="btn btn-outline-secondary"
                onClick={() => this.delete()}>
                Delete
            </button>
        );
    }
}

export default Deleter;