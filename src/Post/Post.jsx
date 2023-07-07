import React from 'react'
import './Post.css'
import { UilHeartAlt } from '@iconscout/react-unicons'
import { UilCommentAlt } from '@iconscout/react-unicons'
import { UilBoltAlt } from '@iconscout/react-unicons'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { likePost } from '../api/PostRequest'

const Post = ({data}) => {

    const {user} = useSelector((state)=>state.authReducer.authData)

    const [liked, setLiked] = useState(data.likes.includes(user._id))
    const [likes, setLikes] = useState(data.likes.length)

    const handleLike = () => {
      setLiked((prev)=>!prev)
      likePost(data._id, user._id)
      liked? setLikes((prev)=>prev-1) : setLikes((prev)=>prev+1)

    }

  return (
   <div className="Post">
    <img src={data.image? process.env.REACT_APP_PUPLIC + data.image :""} alt="" />
    
        <div className="postReact">
           <div>
             <UilBoltAlt/>
             </div>
           <div  style={{cursor: "pointer"}} onClick={handleLike}>
            {liked? <UilHeartAlt style={{borderRadius: "85%",
          background: "rgba(151, 82, 207, 0.705)",
          color: "#f3f3f3",
          border: "1px solid"}}/>:  <UilHeartAlt/> }
             </div>
           <div>
             <UilCommentAlt/>
             </div>

        </div>
        <span style={{color:"black"}}>{likes}likes</span>
        <div className="datail">
          <span><b>{data.username}</b></span>
          <span>{data.desc}</span>
        </div>
   </div>
  )
}

export default Post;