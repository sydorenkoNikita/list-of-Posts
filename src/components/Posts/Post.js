import React, {useState} from 'react';
import './Post.css'
import {connect} from 'react-redux';
import {deletePost} from "../actions/actions";

const Post = ({post, deletePost, idx}) => {
    const [count, setCount] = useState(0);
    return (
        <div className="card">
            <div className='header'>
                <span className="PostDelete" onClick={() => deletePost(idx)}>&times;</span>
                <img src={post.img} alt="Avatar"/>
            </div>

            <div className="container">
                <h3 className='postName'>
                    {post.title}
                </h3>

                <div>
                    <b>post description: </b> {post.description}
                </div>

            </div>
            <div className='likeContainer'>
                <span> {count} </span>
                <img onClick={() => setCount(count + 1)} alt="like"
                     src="https://img.icons8.com/small/16/fa314a/filled-like.png"/>

            </div>
        </div>


    )
}
const mapDispatchToProps = dispatch => ({
    deletePost: id => dispatch(deletePost(id))
})

export default connect(null, mapDispatchToProps)(Post)
