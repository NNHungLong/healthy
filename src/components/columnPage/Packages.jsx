import PropTypes from 'prop-types';
const Package = ({ title, desc }) => {
  return (
    <div className='bg-dark-600 px-4 py-6 text-center'>
      <div className='w-[200px] text-wrap font-inter text-2xl font-medium uppercase text-primary-300'>
        {title}
      </div>
      <div className='mx-auto my-1 w-1/3 border-b border-light'></div>
      <div className='text-light'>{desc}</div>
    </div>
  );
};

Package.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};

const Packages = () => {
  return (
    <div className='flex flex-wrap justify-center gap-8 '>
      <Package title='RECOMMENDED COLUMN' desc='オススメ' />
      <Package title='RECOMMENDED DIET' desc='ダイエット' />
      <Package title='RECOMMENDED BEAUTY' desc='美容' />
      <Package title='RECOMMENDED HEALTH' desc='健康' />
    </div>
  );
};

export default Packages;
