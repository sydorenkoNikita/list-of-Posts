import React from 'react';
import {connect} from 'react-redux';
import './PostForm.css'
import {postActionCreator} from "../actions/actions";

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            img: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState(prev => ({
            [event.target.name]: event.target.value
        }));
    }

    handleSubmit(event) {
        const {description, title, img} = this.state;
        event.preventDefault();
        this.props.postActionCreator(description, title, img);
        this.props.changeModal()
        this.setState({title: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input placeholder="введите img:"
                           type="text"
                           name="img"
                           value={this.state.img}
                           onChange={this.handleChange}/>

                    <input placeholder="введите название поста:"
                           type="text"
                           name="title"
                           value={this.state.title}
                           onChange={this.handleChange}/>

                    <textarea placeholder="description"
                              name="description"
                              className='textareaa'
                              value={this.state.description}
                              onChange={this.handleChange}
                    ></textarea>
                </label>
                <input type="submit" value="Отправить"/>
            </form>
        )
    }
}

const mapDispatchToProps = {
    postActionCreator
}

export default connect(null, mapDispatchToProps)(PostForm);