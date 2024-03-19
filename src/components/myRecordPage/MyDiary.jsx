import PropsTypes from 'prop-types';
import { useState, useLayoutEffect } from 'react';

import MoreButton from '../buttons/MoreButton';

const DiarySingleRecord = ({ date, time, title, content }) => {
  return (
    <div className='flex h-[231px] w-[231px] flex-col border-2 border-gray-400 p-4'>
      <div className='font-inter text-lg leading-snug'>{date}</div>
      <div className='font-inter text-lg leading-snug'>{time}</div>
      <div className='mt-1 text-xs font-light'>{title}</div>
      <div className=' text-xs font-light'>{content}</div>
    </div>
  );
};
DiarySingleRecord.propTypes = {
  date: PropsTypes.string,
  time: PropsTypes.string,
  title: PropsTypes.string,
  content: PropsTypes.string
};

export default function MyDiary() {
  const [diary, setDiary] = useState([]);
  const fetchDiary = async () => {
    fetch('/api/diary')
      .then((response) => response.json())
      .then((data) => {
        if (data?.diaries?.length) {
          setDiary((prev) => {
            let diaryLength = prev?.length;
            let newData = data.diaries.map(({ date, time, title, content }, index) => ({
              id: diaryLength + index + 1,
              date,
              time,
              title,
              content
            }));
            return [...prev, ...newData];
          });
        }
      });
  };
  useLayoutEffect(() => {
    fetchDiary();
  }, []);
  return (
    <div className='flex flex-col text-dark-500'>
      <h2 className='font-inter text-xl font-light'>MY DIARY</h2>
      <div className='flex flex-wrap items-center justify-start gap-8'>
        {diary?.length &&
          diary.map(({ id, date, time, title, content }) => {
            return (
              <DiarySingleRecord key={id} date={date} time={time} title={title} content={content} />
            );
          })}
      </div>
      <MoreButton className='mt-6 w-[288px] self-center' onClick={fetchDiary}>
        記録をもっと見る
      </MoreButton>
    </div>
  );
}
