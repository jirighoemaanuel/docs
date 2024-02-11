import PropTypes from 'prop-types';

function SocialLink({ href, children }) {
  return (
    <a
      href={href}
      className='mx-1 text-xl rotate-6 text-gray-300 bg-gray-darker rounded-full w-8 h-8 flex items-center justify-center hover:bg-light-10 transition ease-out duration-400'
    >
      {children}
    </a>
  );
}

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SocialLink;
