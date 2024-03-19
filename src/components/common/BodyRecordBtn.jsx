import PropTypes from 'prop-types';
export default function BodyRecordBtn({ active, onClick, children, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`flex h-[24px] items-center justify-center rounded-full px-6 py-4 text-sm text-light ${className} ${active ? 'bg-primary-300 text-light' : 'bg-light text-primary-300'}`}
    >
      {children}
    </button>
  );
}
BodyRecordBtn.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
};
