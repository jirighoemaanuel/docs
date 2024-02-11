import PropTypes from 'prop-types';
function Skill({ children }) {
  return (
    <li className=' bg-gray-darker rounded-md p-1 w-full text-center whitespace-nowrap'>
      {children}
    </li>
  );
}

Skill.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Skill;
