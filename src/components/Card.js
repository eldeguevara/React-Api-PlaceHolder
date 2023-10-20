import React from 'react'
import '../assets/styles/Card.css'
import userDefault from '../assets/img/userDefault.jpeg'

export default function Card({name,username,email,street,suite,city,zipcode}) {
  return (
    <div className='carta'>
        <div className='imgContainer'>
            <img src={userDefault} alt='user'/>
        </div>
        <div className='textContainer'>
            <div className='textMain'>
                <h4>Name: <span>{name}</span></h4>
                <h4>Username: <span>{username}</span></h4>
                <h4>Email: <span>{email}</span></h4>
            </div>
            <div className='textAdd'>
                <h6>Street: <span>{street}</span></h6>
                <h6>Suite: <span>{suite}</span></h6>
                <h6>City: <span>{city}</span></h6>
                <h6>Zipcode: <span>{zipcode}</span></h6>
            </div>
        </div>
    </div>
  )
}
