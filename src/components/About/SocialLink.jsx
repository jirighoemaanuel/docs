import PropTypes from 'prop-types';

function SocialLink({ href, children, title }) {
  return (
    <div className='group'>
      <a
        href={href}
        className='relative mx-1 text-xl text-gray-300 bg-gray-darker rounded-full w-8 h-8 flex items-center justify-center hover:bg-light-10 transition ease-out duration-400'
      >
        {children}
      </a>
      <a href={href}>
        {title && (
          <div className='relative bottom-2 text-xxxs bg-light-75 rounded-sm opacity-0 group-hover:opacity-100 transition ease-out duration-400 w-10 px-1 flex text-gray-darker justify-center items-center'>
            {title}
          </div>
        )}
      </a>
    </div>
  );
}

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SocialLink;
