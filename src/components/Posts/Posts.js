import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';

const Posts = ({syncPosts}) => {
    return syncPosts.map((post, index) => <Post post={post} key={index} idx={index}/>)
}

const mapStateToProps = (state) => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts)