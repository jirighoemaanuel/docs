import PropTypes from 'prop-types';

function IconWithText({ IconComponent, text }) {
  return (
    <div className='flex justify-between hover:bg-light-5 rounded-lg w-full py-2 px-1 text-sm'>
      <div className='flex gap-2'>
        <div className='text-lg bg-gray-darker rounded-full flex items-center w-6
        h-6 justify-center p-1'>
          <IconComponent />
        </div>
        <div className='flex gap-2 justify-center items-center text-xs'>
          {text}
        </div>
      </div>
    </div>
  );
}

IconWithText.propTypes = {
  IconComponent: PropTypes.icon,
  text: PropTypes.string.isRequired,
};

export default IconWithText
// Usage
