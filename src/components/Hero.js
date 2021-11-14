import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
	return (
		<div className=' h-screen flex flex-col justify-center items-center'>
			<h1 className='lg:text-7xl md:text-3xl sm:text-3xl text-3xl font-black mb-14 text-yellow-500'>
				Vaibhav Chauhan{' '}
			</h1>
			<Link
				to='/connect'
				className='py-6 px-10 bg-yellow-500 text-white rounded-full  hover:bg-yellow-400 hover:border-opacity-10 transition duration-400 ease-in-out flex items-center animate-bounce '>
				Make a connection
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-5 ml-4 mt-1 '
					fill='none'
					viewBox='0 0 24 24'
					stroke='white'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
					/>
				</svg>
			</Link>
		</div>
	);
};

export default Hero;
