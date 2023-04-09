import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Main.css'

const MainPage = () => {
  return (
    <div className='main-main-container'>
      <h1 className='main-title'>Welcome to the Job Portal!</h1>
      <div className='main-subheading'>
      <p>Here are some available jobs:</p>
      <ul>
        <li>Job 1</li>
        <li>Job 2</li>
        <li>Job 3</li>
      </ul>
      </div>
      <Button type="submit" className='login-btn'> Login out</Button>
    </div>
  );
}

export default MainPage;
