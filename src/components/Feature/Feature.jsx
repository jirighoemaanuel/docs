import { FaGit } from 'react-icons/fa';

function Feature() {
  return (
    <div className='bg-dark-100 w-60 px-4 py-4 rounded-2xl mx-40 my-6 text-xs border border-light-10 fixed'>
      <div>
        <h1 className='text-xlg mt-1 mb-2 text-light-100'>
          90+ Framer Shadows
        </h1>
        <p>
          Stop worrying about perfectng the shadows, just Copy & Paste from the
          90+ Shadows collection!
        </p>
        <button className='bg-light-30 text-light-100 h-8 rounded-lg px-3 font-normal w-full text-sm my-3'>
          Download
        </button>
      </div>
      <div>
        <h3 className='text-xlg mt-1 mb-4 text-light-100'>Featured In</h3>
        <ul className='px-2'>
          <div className='flex justify-between hover:bg-light-10 rounded-sm w-full py-2'>
            <div className=''>
              <h4 className='flex gap-2 text-sm '>
                <i className='text-lg relative top-1'>
                  <FaGit />
                </i>
                <div className='flex gap-2 justify-center items-center'>
                  <p className='text-xs'>7 essential Javascript Functions</p>
                </div>
              </h4>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Feature;
