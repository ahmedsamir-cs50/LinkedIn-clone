// import React from 'react';
import someone from '../../../public/images/someone.jpg'

const Post = () => {
  return (
    <div className="linkedin-post">
      <div className="post-header">
        <img className="profile-picture" src={someone} alt="" />
        <div className="user-info">
          <h3 className="name">John Doe</h3>
          <p className="headline">Software Engineer</p>
        </div>
      </div>
      <div className="post-content">
        <p className="text">Excited to share that I just completed a challenging project! 🚀</p>
        <img className="post-image" src="project.jpg" alt="" />
      </div>
      <hr></hr>
      <div className="post-footer">

        <button className="like-button">Like</button>
        <button className="comment-button">Comment</button>
        <button className="share-button">Share</button>
      </div>
    </div>
  );
};

export default Post;