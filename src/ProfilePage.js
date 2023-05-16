import React, { Component } from 'react';
import axios from 'axios';
import AuthService from './services/Auth.service';

const ProfilePage=()=> {
  


    const User = AuthService.getCurrentUser()



    return (
      <div className="profile-page">
        
          <>
          {/* <img src={user.photo} alt="Profile" /> */}
        <h1>{User.username}</h1>
        <p>{User.login}</p> 
        <p>{User.phone}</p> 
        <p>{User.email}</p>
        </>
        
        
      </div>
    );
  }


export default ProfilePage;
