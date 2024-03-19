import PropTypes from 'prop-types';

// components
import BodyRecord from '../../assets/imgs/MyRecommend-1.jpg';
import MyExercise from '../../assets/imgs/MyRecommend-2.jpg';
import MyDiary from '../../assets/imgs/MyRecommend-3.jpg';

function ThumbNail({ href, src, alt, title, description, imgClassName }) {
  return (
    <a
      href={href}
      className='relative flex h-[288px] w-[288px] flex-col items-center justify-center overflow-hidden border-[24px] border-primary-300'
    >
      <div className='z-1 absolute flex h-[240px] w-[240px]'>
        <img src={src} alt={alt} className={`object-cover object-left grayscale ${imgClassName}`} />
      </div>
      <div className='z-1 absolute flex h-[240px] w-[240px] bg-dark-600 opacity-70'></div>
      <div className='z-2 absolute flex flex-col items-center'>
        <div className='text-center font-inter text-2xl font-semibold text-primary-300'>
          {title}
        </div>
        <div className='mt-2 bg-primary-400 px-4 py-[2px] text-center text-sm text-light'>
          {description}
        </div>
      </div>
    </a>
  );
}

ThumbNail.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  imgClassName: PropTypes.string
};

export default function RecordSections() {
  return (
    <div className='flex items-center justify-center gap-8'>
      <ThumbNail
        href='#body-record'
        src={BodyRecord}
        alt='Body Record'
        title='BODY RECORD'
        description='自分のカラダの記録'
      />
      <ThumbNail
        href='#my-exercise'
        src={MyExercise}
        alt='My exercise'
        title='MY EXERCISE'
        description='自分の運動の記録'
      />
      <ThumbNail
        href='#my-diary'
        src={MyDiary}
        alt='My Diary'
        title='MY DIARY'
        description='自分の日記'
        imgClassName='object-center'
      />
    </div>
  );
}
