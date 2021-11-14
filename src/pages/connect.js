import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/connect.scss';

const connect = () => {
  return (
    <div className="social-container  ">
      <h1 className="text-4xl text-yellow-500 font-extrabold py-4">
        Social Media Handles
      </h1>
      <p className="grid table-row justify-items-center text-white text-xl font-medium mt-2">
        Connect through my social media accounts and let's build the develper
        community to serve something for the society{' '}
      </p>
      <ul className="social-icons flex inline ">
        <li>
          <a href="https://www.instagram.com/_vaibhav_7877/" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/vaibhav-chauhan-9a70871b9"
            target="_blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/vaibhav-believer/" target = "_blank">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1AJ6fhgOlSRLUMxoTGFwqVOKRjOXzDQpu/view?usp=sharing" target = "_blank">
            <i className="fa fa-code"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default connect;
