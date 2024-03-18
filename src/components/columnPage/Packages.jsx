import PropTypes from 'prop-types';
const Package = ({ title, desc }) => {
  return (
    <div className='bg-dark-600 text-center px-4 py-6'>
      <div className='font-inter w-[200px] text-primary-300 uppercase text-wrap text-2xl font-medium'>
        {title}
      </div>
      <div className='w-1/3 mx-auto my-1 border-b border-light'></div>
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
