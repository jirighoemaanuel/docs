import {
  FaBook,
  FaTwitter,
  FaEnvelope,
  FaGoogle,
  FaFacebook,
  FaGlobe,
} from 'react-icons/fa';
import { useState } from 'react';
import Skill from './Skill.jsx';
import ContactLink from './ContactLink.jsx';
import SocialLink from './SocialLink.jsx';
import dp from '../../assets/soul.jpg';

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    setTimeout(() => setIsOpen(false), 6000);
  };

  return (
    <div className=''>
      <div className='bg-dark-100 w-75 md:max-w-75 px-3 py-4 rounded-2xl text-xs border border-light-10'>
        <div className='flex flex-row flex-wrap'>
          <div className='relative flex justify-between w-full'>
            <div className='w-24 h-24 rounded-full overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src={dp}
                alt='Placeholder'
              />
              <div
                className='absolute w-3 h-3 bg-green-500 rounded-full animate-pulse top-20 left-20 transform -translate-x-1/3 -translate-y-1/3 cursor-pointer'
                onClick={handleClick}
              ></div>
              <div
                className={`absolute top-3/4 left-24 text-green-500 bg-dark-100 text-xxs rounded-full p-1 border border-green-500 transition-opacity ease-out duration-1000 ${
                  isOpen ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ visibility: isOpen ? 'visible' : 'hidden' }}
              >
                Open to freelancing
              </div>
            </div>
            <div className='flex h-0'>
              <SocialLink href='#' title='Twitter'>
                <FaTwitter />
              </SocialLink>
              <SocialLink href='#' title='Read.CV'>
                <FaBook />
              </SocialLink>
            </div>
          </div>
          <div className='mt-3'>
            <h1 className='font-bold text-2xl text-light-100'>
              Emmanuel Jirigho
            </h1>
            <ContactLink href=''>
              contact@EmmanuelJirigho.dev <FaEnvelope />
            </ContactLink>
            <ContactLink href=''>
              emmaweyinmi@gmail.com <FaGlobe />
            </ContactLink>
          </div>
        </div>

        <div className='w-full mt-3'>
          <ul className='flex mb-4 justify-between space-x-1'>
            <Skill>ReactJS</Skill>
            <Skill>Git</Skill>
            <Skill>NodeJS</Skill>
            <Skill>Python developer</Skill>
          </ul>
        </div>
        <div className='bg-gray-darker h-8 rounded-lg mb-4 mt-5'>
          <form
            action=''
            className='flex items-center px-1 font-normal justify-center'
          >
            <input
              className='bg-gray-darker h-8 rounded-l-lg  placeholder-light-50 focus:outline-none focus:ring-0 w-full px-2'
              type='text'
              placeholder='name@gmail.com'
            />
            <button className='bg-light-30 text-light-100 h-6 rounded-lg px-3 font-normal'>
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h4 className='text-sm mb-2'>Bio</h4>
          <p className='mb-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sint
            voluptatibus illo tempore quis expedita culpa? Rem a doloribus
            dolorem!
          </p>
        </div>
        <hr className='text-light-10 my-6' />
        <div className=''>
          <h4 className='text-sm mb-3'>Work History</h4>
          <div className='flex justify-between'>
            <div className=''>
              <h4 className='flex gap-2 text-sm '>
                <i className='text-lg relative top-1'>
                  <FaGoogle />
                </i>
                <div className=''>
                  <p>Sr. Lorem ipsum</p>
                  <p className='text-xxs'>Google</p>
                </div>
              </h4>
            </div>
            <p className='text-xxxs'>January 2020 - Current </p>
          </div>
          <div className='flex justify-between'>
            <div className=''>
              <h4 className='flex gap-2 text-sm'>
                <i className='text-lg relative top-1'>
                  <FaFacebook />
                </i>
                <div className=''>
                  <p>Jr. Lorem, ipsum.</p>
                  <p className='text-xxs'>Facebook</p>
                </div>
              </h4>
            </div>
            <p className='text-xxxs'>December 2019 - 2020 </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
