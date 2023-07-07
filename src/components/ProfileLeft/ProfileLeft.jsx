import React from 'react'
import FollowersCard from '../followersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearsh/LogoSearch'
import '../profileSide/profileSide.css'

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch />
        <InfoCard />
        <FollowersCard />
    </div>
  );
}

export default ProfileLeft;