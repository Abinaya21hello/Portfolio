import React from 'react';
import './Navbar.css';
import { BsHouseDoor, BsPerson, BsBriefcase, BsFileText } from 'react-icons/bs';
import { FaLinkedin, FaGithub} from 'react-icons/fa';

function Navbar() {
  return (
    <div className="navbar">
      <a href="/" className="home-link">
        <BsHouseDoor /> HOME
      </a>
      <a href="about">
        <BsPerson /> ABOUT ME
      </a>
      <a href="project">
        <BsBriefcase /> PROJECTS
      </a>
      <a href="upload-resume">
        <BsFileText /> RESUME
      </a>
      <a href="https://www.linkedin.com/in/abinaya-m-a55310245/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin /> LINKEDIN
      </a>
      <a href="https://github.com/Abinaya21hello" target="_blank" rel="noopener noreferrer">
        <FaGithub /> GITHUB
      </a>
    </div>
  );
}

export default Navbar;
