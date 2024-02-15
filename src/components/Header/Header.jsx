import robot from '../../assets/robot-svgrepo-com.svg';

function Header() {
  return (
    <div className='flex w-3/4 border-b p-4 relative'>
      <img className='w-20' src={robot} alt='' />
      <div>
        <div className='flex gap-2'>
          <h1 className='text-xl text-light-100'>Kaleidoscope,</h1>
          <h3 className='text-lg'>A Dev Blog</h3>
        </div>
        <div>
          <p>
            I design and code beautiful simple things, and occasionally I write
            about them.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
