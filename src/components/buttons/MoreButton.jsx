import PropTypes from 'prop-types';
import './MoreButton.css';

const MoreButton = ({ className, onClick, children }) => {
  return (
    <button className={`more-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
MoreButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default MoreButton;
