import PropTypes from 'prop-types';
import FilterMorning from '../../assets/svg/filter_morning.svg';
import FilterLunch from '../../assets/svg/filter_lunch.svg';
import FilterDinner from '../../assets/svg/filter_dinner.svg';
import FilterSnack from '../../assets/svg/filter_snack.svg';
function FilterButton({ src, alt }) {
  return (
    <div className='h-[136px] w-[136px]'>
      <img src={src} alt={alt} className='' loading='lazy' />
    </div>
  );
}
FilterButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default function FilterButtons() {
  return (
    <div className='my-4 flex items-center items-center justify-center gap-8'>
      <FilterButton src={FilterMorning} alt='filter morning' />
      <FilterButton src={FilterLunch} alt='filter lunch' />
      <FilterButton src={FilterDinner} alt='filter dinner' />
      <FilterButton src={FilterSnack} alt='filter snack' />
    </div>
  );
}
