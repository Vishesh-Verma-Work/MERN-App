import React from 'react';
import '../styles/landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="content">
        <h1 className="title">NoteHub</h1>
        <p className="description">
          A place to manage all your notes efficiently. Stay organized and keep track of your thoughts.
        </p>
        <div className="button-container">
          <a href="/login"><button className="btn login-btn">Login</button></a>
          <a href="/signup"><button className="btn signup-btn">Signup</button></a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
