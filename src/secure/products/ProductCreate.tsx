import React, {Component, SyntheticEvent} from 'react';
import Wrapper from "../Wrapper"
import axios from "axios";
import {Redirect} from "react-router-dom";

class ProductCreate extends Component {
    state = {
        redirect: false,
        img: ''
    }

    title = '';
    desc = '';
    img = '';
    price = 0;

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('products',{
            title: this.title,
            desc: this.desc,
            img: this.img,
            price: this.price
        });

        this.setState({
            redirect: true
        })
    }

    upload = async (files: FileList | null) => {
        if (files === null) return;

        const data = new FormData();

        data.append('img', files[0]);

        const response = await axios.post('upload',data);

        this.img = response.data;

        this.setState({
            img: this.img
        })
    }

    render() {
        if(this.state.redirect){
            return <Redirect to={'/products'}/>
        }
        return (
            <Wrapper>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            onChange={e => this.title = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            className="form-control"
                            name="description"
                            onChange={e => this.desc = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                name="img"
                                value={this.img = this.state.img}
                                onChange={e => this.img = e.target.value}
                            />
                            <div className="input-group-append">
                                <label className="btn btn-primary">
                                    Upload
                                    <input type="file"
                                           onChange={e => this.upload(e.target.files)}
                                           hidden/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input
                            type="number"
                            className="form-control"
                            name="email"
                            onChange={e => this.price = parseFloat(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-outline-secondary">Save</button>
                </form>
            </Wrapper>
        );
    }
}

export default ProductCreate;