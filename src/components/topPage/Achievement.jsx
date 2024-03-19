import bgImg from 'assets/imgs/achievement.jpg';
import achievementText from 'assets/svg/achievement_text.svg';
export default function Achievement() {
  return (
    <div className='relative flex h-[312px] w-[540px] min-w-[200px] shrink items-center justify-center self-center'>
      <img src={bgImg} alt='achievement' className='h-full w-full object-cover' />
      <img
        src={achievementText}
        alt='achievement text'
        className='absolute h-[181px] w-[181px] object-cover'
      />
    </div>
  );
}
