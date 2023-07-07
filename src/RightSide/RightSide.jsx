import React from 'react'
import './RightSide.css'
import { UilHouseUser } from '@iconscout/react-unicons'
import { UilBoltAlt } from '@iconscout/react-unicons'
import { UilSetting } from '@iconscout/react-unicons'
import { UilShoppingBag } from '@iconscout/react-unicons'
import { UilCommentAlt } from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import { Link } from 'react-router-dom'

const RightSide = () => {
  return (
    <div className="RightSid">
        <div className="navIcons">
           <div>
            <Link to = '../home'>
            <UilHouseUser />
            </Link>
            </div> 
           <div><UilBoltAlt /></div>
           <div><UilShoppingBag /></div>
           <div><UilCommentAlt /></div>
           <div><UilSetting /></div>
        </div>
        <TrendCard />
        <button className="button r-button">
            share
        </button>

    </div>
  );
}

export default RightSide;