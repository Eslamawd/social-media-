import React from 'react'

import ProfileSide from '../../components/profileSide/profileSide'
import PostSide from '../../components/PostSide/PostSide'
import './home.css'
import RightSide from '../../RightSide/RightSide'



const Home = () => {
return (
    <div className="Home">
        <ProfileSide />
        <PostSide />
        <RightSide />
    </div>
  ) 
}

export default Home;