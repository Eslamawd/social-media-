import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'

const InfoCard = () => {
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
          <div> <UilPen with='2.4rem' height='2rem' /></div> 
        </div>
        <div className="info">
            <span>
                <b>status</b>
            </span>
            <span>in Releationship</span>
        </div>
        <div className="info">
            <span>
                <b>lives in</b>
            </span>
            <span>cairo</span>
        </div>
        <div className="info">
            <span>
                <b>Works</b>
            </span>
            <span>Developer</span>
        </div>
        <button className="button logout-button">
            Logout
        </button>
    </div>
  );
}

export default InfoCard;