import logo from '../../assets/htmltag.webp';

function Header() {
  return (
    <div className=''>
      <div className='flex justify-center items-center mt-2 '>
        <div className=''>
          <div className='flex gap-6 mb-8 px-4'>
            <img className='hidden lg:block w-20' src={logo} alt='' />
            <div className='pr-20'>
              <div className='gap-2 mb-2'>
                <h1 className='text-xl text-light-100 font-bold inline'>
                  Semicolon
                </h1>
                <h3 className='text-lg inline'>
                  , <p className='inline mx-1'>A Dev Blog</p>
                </h3>
              </div>
              <div>
                <p className='font-medium'>
                  I design and code beautifully simple things, and occasionally
                  I write about them.
                </p>
              </div>
            </div>
          </div>
          <hr className='text-light-10 my-1 mb-10 mx-2' />
        </div>
      </div>
      
    </div>
  );
}

export default Header;
