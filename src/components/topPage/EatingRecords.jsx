import { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import MoreButton from '../buttons/MoreButton';

function formatDate(date) {
  let newDate = new Date(date); // assuming record.date is in 'YYYY.MM.DD' format
  let formattedDate = `${('0' + (newDate.getMonth() + 1)).slice(-2)}.${('0' + newDate.getDate()).slice(-2)}`;
  return formattedDate;
}
function EatingRecord({ record }) {
  return (
    <div className='relative h-[234px] w-[234px]'>
      <img
        src={record.image}
        alt={`meal photo ${record.date} ${record.mealTime}`}
        className='absolute h-full w-full object-cover object-center'
      />
      <div className='left-0, absolute bottom-0'>
        <div className='w-[120px] bg-primary-300 py-[7px] pl-[8px] font-inter text-sm text-light'>
          {`${formatDate(record.date)}.${record.mealTime}`}
        </div>
      </div>
    </div>
  );
}

EatingRecord.propTypes = {
  record: PropTypes.shape({
    image: PropTypes.string,
    date: PropTypes.string,
    mealTime: PropTypes.string
  }).isRequired
};

export default function EatingRecords() {
  const [eatingRecords, setEatingRecords] = useState([]);

  const fetchEatingRecords = async () => {
    document.body.style.cursor = 'wait';
    document.querySelector('.more-button').style.cursor = 'wait';
    fetch('/api/eatingRecord')
      .then((res) => res.json())
      .then((data) => {
        const eatingRecordsLength = eatingRecords?.length;
        let newEatingRecords = data.eatingRecords.map((record, index) => ({
          id: eatingRecordsLength + index + 1,
          image: record.image,
          date: record.date,
          mealTime: record.mealTime
        }));
        setEatingRecords((prev) => [...prev, ...newEatingRecords]);
      })
      .catch((err) => {
        console.error('Failed to load eatingRecords', err);
      })
      .finally(() => {
        document.body.style.cursor = 'default';
        document.querySelector('.more-button').style.cursor = 'pointer';
      });
  };
  useLayoutEffect(() => {
    fetchEatingRecords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className='flex flex-row flex-wrap justify-center gap-8 px-4 xl:px-32 2xl:px-[14%]'>
        {eatingRecords?.length
          ? eatingRecords.map((record, index) => <EatingRecord key={index} record={record} />)
          : null}
      </div>
      <MoreButton className='mb-10 mt-6 w-[288px] self-center' onClick={fetchEatingRecords}>
        記録をもっと見る
      </MoreButton>
    </>
  );
}
