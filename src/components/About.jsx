import {
  FaBook,
  FaTwitter,
  FaEnvelope,
  FaGoogle,
  FaFacebook,
  FaGlobe,
} from 'react-icons/fa';
function About() {
  return (
    <div className='bg-dark-100 w-75 px-3 py-4 rounded-2xl mx-40 my-6 text-xs border border-light-10'>
      <div className='flex flex-row flex-wrap'>
        <div className='flex justify-between w-full'>
          <img
            className='w-24 rounded-full'
            src='https://picsum.photos/200'
            alt='Placeholder'
          />
          <div className='flex'>
            <a
              href='#'
              className='mx-1 text-xl rotate-6 text-gray-300 bg-gray-darker rounded-full w-8 h-8 flex items-center justify-center'
            >
              <FaTwitter />
            </a>
            <a
              href='#'
              className='mx-1 text-xl rotate-6 text-gray-300 bg-gray-darker rounded-full w-8 h-8 flex items-center justify-center'
            >
              <FaBook />
            </a>
          </div>
        </div>
        <div className='mt-3'>
          <h1 className='font-bold text-2xl text-light-100'>
            Emmanuel Jirigho
          </h1>
          <a href='' className='flex items-center text-xs my-1 text-light-75 gap-1'>
            contact@EmmanuelJirigho.dev <FaEnvelope />
          </a>
          <a href='' className='flex items-center text-xs my-1 text-light-75 gap-1'>
            emmaweyinmi@gmail.com <FaGlobe />
          </a>
        </div>
      </div>

      <div className='w-full mt-3'>
        <ul className='flex mb-4 justify-between space-x-1'>
          <li className=' bg-gray-darker rounded-md p-1 w-full text-center whitespace-nowrap'>
            ReactJS
          </li>
          <li className=' bg-gray-darker rounded-md p-1 w-full text-center whitespace-nowrap'>
            Git
          </li>
          <li className=' bg-gray-darker rounded-md p-1 w-full text-center whitespace-nowrap'>
            NodeJS
          </li>
          <li className=' bg-gray-darker rounded-md p-1 w-full text-center whitespace-nowrap'>
            Python developer
          </li>
        </ul>
      </div>
      <div className='bg-gray-darker h-10 rounded-lg mb-4 mt-5'>
        <form
          action=''
          className='flex items-center px-1 font-normal justify-center'
        >
          <input
            className='bg-gray-darker h-10 rounded-l-lg  placeholder-light-50 focus:outline-none focus:ring-0 w-full px-2'
            type='text'
            placeholder='name@gmail.com'
          />
          <button className='bg-light-30 text-light-75 h-8 rounded-lg px-3 font-normal'>
            Subscribe
          </button>
        </form>
      </div>
      <div>
        <h4 className='text-sm mb-2'>Bio</h4>
        <p className='mb-3'>
          The world of digital design and development is constantly evolving and
          so has my role over the last 7 years.
        </p>
      </div>
      <hr className='text-light-10 my-6' />
      <div className=''>
        <h4 className='text-sm mb-2'>Work History</h4>
        <div className='flex justify-between'>
          <div className=''>
            <h4 className='flex gap-2 text-sm'>
              <i className='text-lg'>
                <FaGoogle />
              </i>
              <div className=''>
                <p>Sr. Developer</p>
                <p className='text-xxs'>Google</p>
              </div>
            </h4>
          </div>
          <p className='text-xxxs'>January 2020 - Current </p>
        </div>
        <div className='flex justify-between'>
          <div className=''>
            <h4 className='flex gap-2 text-sm'>
              <i className='text-lg'>
                <FaFacebook />
              </i>
              <div className=''>
                <p>Jr. Developer</p>
                <p className='text-xxs'>Facebook</p>
              </div>
            </h4>
          </div>
          <p className='text-xxxs'>December 2019 - 2020 </p>
        </div>
      </div>
    </div>
  );
}

export default About;
