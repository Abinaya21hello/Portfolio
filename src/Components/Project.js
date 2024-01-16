import React, { useState } from 'react';
import './Project.css';

function Project() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  const handleClick1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleClick2 = () => {
    setIsFlipped2(!isFlipped2);
    
  };

  return (
    <div className="card-container">
      <div className={`card ${isFlipped1 ? 'flipped' : ''}`} onClick={handleClick1}>
        <div className="card-inner">
          <div className="card-front">
            <h2>META KING</h2>
            <div className="card-image">
              {/* Add an image or icon here */}
            </div>
          </div>
          <div className="card-back">
            <p>
              In the realm of blockchain development, I have successfully integrated MetaMask into web applications using Web3.js, showcasing my ability to facilitate secure and seamless interactions with blockchain networks. This combination of skills enables me to contribute effectively to projects that demand a blend of traditional blockchain technologies.
            </p>
          </div>
        </div>
      </div>

      <div className={`card ${isFlipped2 ? 'flipped' : ''}`} onClick={handleClick2}>
        <div className="card-inner">
          <div className="card-front">
            <h2>FIBIT-PRO</h2>
            <div className="card-image">
              {/* Add an image or icon here */}
            </div>
          </div>
          <div className="card-back">
            <p>
            In this Fibit-pro my Part is Adminpanel and Backend. For Adminpanel I used ReactJS, Backend i used NodeJS.With a focus on performance, security, and user-friendly design, this project aims to deliver a powerful backend  alongside a feature-rich admin panel
        
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
