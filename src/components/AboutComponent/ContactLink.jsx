import PropTypes from 'prop-types';

function ContactLink({ href, children }) {
  return (
    <a
      href={href}
      className='flex items-center text-xs my-1 text-light-75 gap-1 hover:text-light-100 transition ease-out duration-500'
    >
      {children}
    </a>
  );
}

ContactLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ContactLink;
