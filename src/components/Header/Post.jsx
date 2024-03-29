import PropTypes from 'prop-types';

const Post = ({ img, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };
  return (
    <div className=' hover:bg-light-10 hover:rounded-none px-5 py-4 rounded-lg'>
      <div className='flex items-center gap-3'>
        <img
          className='w-24 h-24 rounded-lg border border-light-10'
          src={img}
          alt=''
        />
        <div className='w-64 flex flex-col gap-3 font-semibold'>
          <p className='text-light-75 text-xs'>July 30, 2023</p>
          <p className='text-light-100'>
            <a href='' onClick={handleClick}>
              Smooth Animations With React and TailwindCSS
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  img: PropTypes.elementType,
};

export default Post;
