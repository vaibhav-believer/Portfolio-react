import React from 'react'
import picture1 from '../images/pic-1.jpg';
import picture2 from '../images/pic-2.jpg';
import '../styles/content.scss';
const Content = () => {
  return (
    <>
      <div className="content-card">
        <img src={picture1} alt="me" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Hey! It's me:)</h2>
          <p className="mb-2 text-2xl tracking-tight md:tracking-normal ">
            Web-Developer, beginner at backend, intermediate at frontend,{' '}
            <span>Pretty good in DSA</span>
          </p>
        </div>
      </div>
      <div className="content-card">
        <img src={picture2} alt="me" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl mb-2">My Interests</h2>
          <p className="mb-2"> </p>
          <h3 className="text-2xl">Web-Technology/Web-3.O</h3>
          <h3 className="text-2xl">Mastery in DSA</h3>
          <h3 className="text-2xl">Blockchain Technology</h3>
          <h3 className="text-2xl">Competitive Programming</h3>
        </div>
      </div>
    </>
  );
};

export default Content;
