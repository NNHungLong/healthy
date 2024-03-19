import { useState } from 'react';
import PropTypes from 'prop-types';
import LineChart from './LineChart';
import BodyRecordBtn from './BodyRecordBtn';
export default function BodyRecord({ isMyRecordPage = false }) {
  const [recordOption, setRecordOption] = useState(isMyRecordPage ? 'year' : 'month');

  const handleBtnClick = (btnText) => {
    setRecordOption(btnText);
  };

  return (
    <div
      id='body-record'
      className={`flex flex-col bg-dark-500 px-6 pt-4 font-inter text-light ${isMyRecordPage ? 'h-[304px] pb-2' : 'flex-1'}`}
    >
      {isMyRecordPage ? (
        <div className='flex items-center'>
          <h2 className='mr-4 w-[96px] font-light leading-snug'>BODY RECORD</h2>
          <h2 className='text-xl'>2021.05.21</h2>
        </div>
      ) : null}
      <div className='mt-2 flex-1 pb-2'>
        <LineChart recordOption={recordOption} />
      </div>
      {isMyRecordPage ? (
        <div className='flex gap-4'>
          <BodyRecordBtn active={recordOption === 'day'} onClick={() => handleBtnClick('day')}>
            日
          </BodyRecordBtn>
          <BodyRecordBtn active={recordOption === 'week'} onClick={() => handleBtnClick('week')}>
            週
          </BodyRecordBtn>
          <BodyRecordBtn active={recordOption === 'month'} onClick={() => handleBtnClick('month')}>
            月
          </BodyRecordBtn>
          <BodyRecordBtn active={recordOption === 'year'} onClick={() => handleBtnClick('year')}>
            年
          </BodyRecordBtn>
        </div>
      ) : null}
    </div>
  );
}

BodyRecord.propTypes = {
  isMyRecordPage: PropTypes.bool
};
