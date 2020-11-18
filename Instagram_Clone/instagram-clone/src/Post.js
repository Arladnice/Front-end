import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" src={imageUrl} alt="den"/>
        <h3>{username}</h3>
      </div>
      <img className="post__image" src="https://media.cakeresume.com/image/upload/s--ictHchFe--/c_pad,fl_png8,h_900,w_1200/v1554112166/quycee8zp5db3m24r51h.png" alt=""/>
      <h4 className="post__text"><strong>{username}: </strong>{caption}</h4>
    </div>
  )
}

export default Post
