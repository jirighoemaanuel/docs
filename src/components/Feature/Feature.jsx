import {
  FaCodepen,
  FaCss3,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPython,
  FaRedditAlien,
  FaYoutube,
} from 'react-icons/fa';
import IconWithText from './IconWithText';
import SocialLink from '../About/SocialLink';

function Feature() {
  return (
    <div className='sticky top-[34px]'>
      <div className='bg-dark-100 min-w-60 max-w-60 px-4 pt-3 pb-1 rounded-2xl text-xs border border-light-10'>
        <div>
          <h1 className='text-xlg mt-1 mb-2 text-light-100'>
            90+ Framer Shadows
          </h1>
          <p className=''>
            Stop worrying about perfectng the shadows, just Copy & Paste from
            the 90+ Shadows collection!
          </p>

          <button className='bg-light-30 text-light-100 h-8 rounded-sm px-3 font-normal w-full text-sm my-3'>
            Download
          </button>
          <hr className='text-light-10 my-1' />
        </div>
        <div className='mt-3 mb-6'>
          <h3 className='text-xlg  mb-4 text-light-100'>Featured In</h3>
          <ul className=''>
            <IconWithText
              IconComponent={FaGithub}
              text='7 essential Javascript Functions'
            />
            <IconWithText IconComponent={FaCss3} text='Tailwind CSS tips' />
            <IconWithText
              IconComponent={FaPython}
              text='5 Python list methods to know about'
            />
          </ul>
        </div>
        <hr className='text-light-10 my-1' />
        <div className='flex justify-around mt-6'>
          <SocialLink href='#' title='Reddit'>
            <FaRedditAlien />
          </SocialLink>
          <SocialLink href='#' title='Codepen'>
            <FaCodepen />
          </SocialLink>
          <SocialLink href='#' title='Instagram'>
            <FaInstagram />
          </SocialLink>
          <SocialLink href='#' title='Linkend'>
            <FaLinkedin />
          </SocialLink>
          <SocialLink href='#' title='Youtube'>
            <FaYoutube />
          </SocialLink>
        </div>
      </div>
    </div>
  );
}

export default Feature;
