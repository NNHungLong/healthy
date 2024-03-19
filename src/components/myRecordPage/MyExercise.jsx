import { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

const MyExerciseSingleRecord = ({ exercise }) => {
  return (
    <div className='mr-[13px] flex h-[42px] w-1/2 flex-[40%] gap-2 border-b-2 border-gray-400 pr-[13px]'>
      <div className='flex flex-col items-center justify-center'>
        <p className='flex flex-1 items-center justify-center text-[7px]'>●</p>
        <p className='flex-1'></p>
      </div>
      <div className='flex flex-1 flex-col'>
        <p className='font-hiragino font-light leading-tight'>{exercise?.exercise}</p>
        <p className='leading-none text-primary-300'>{exercise?.energySpent}</p>
      </div>
      <div className='flex flex-col'>
        <p className='flex flex-1 items-center justify-center text-lg leading-tight text-primary-300'>
          {exercise?.duration}
        </p>
        <p className='flex-1'></p>
      </div>
    </div>
  );
};

MyExerciseSingleRecord.propTypes = {
  exercise: PropTypes.shape({
    id: PropTypes.string,
    exercise: PropTypes.string,
    energySpent: PropTypes.string,
    duration: PropTypes.string
  }).isRequired
};

export default function MyExercise() {
  const [exercises, setExercises] = useState([]);

  const fetchExercises = async () => {
    try {
      const response = await fetch('/api/exercise');
      const data = await response.json();
      setExercises(data.exercises);
    } catch (error) {
      console.error(error);
    }
  };
  useLayoutEffect(() => {
    fetchExercises();
  }, []);

  return (
    <div id='my-exercise' className='flex flex-col bg-dark-500 px-6 py-4 font-inter text-light'>
      <div className='flex items-center'>
        <h2 className='mr-4 w-[96px] text-lg font-light leading-snug'>MY EXERCISE</h2>
        <h2 className='text-xl'>2021.05.21</h2>
      </div>
      <div className='scrollbar mt-2 flex h-[192px] flex-wrap gap-2 overflow-auto pr-3'>
        {exercises.map((exercise) => (
          <MyExerciseSingleRecord key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
