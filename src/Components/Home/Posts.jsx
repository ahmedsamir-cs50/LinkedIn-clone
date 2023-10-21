import React from 'react'
import profile from "../../../public/images/1696868161667.jpg"
import jop from "../../../public/images/jop_case.png"
import media from "../../../public/images/1814111_image_photograph_picture_icon.png"
import article from "../../../public/images/article-icon.svg"
import Post from './Post'
const Posts = () => {
  return (
    <div className='posts-wrapper'>
      <div className='create'>
      <div className='post'>
        <div><img src={profile} className='profile'></img></div>
        <div className="input-field "><input  type='text' placeholder='Start a post'></input></div>
      </div>
      <div className='buttons'>
        <div>
          <img src={media}></img>
          <span>Media</span>
        </div>
        <div>
        <img src={jop}></img>
          <span>Job</span>
        </div>
        <div>
        <img src={article}></img>
          <span>Write article</span>
        </div>
      </div>
      </div>
      <Post/>
    </div>
  )
}

export default Posts