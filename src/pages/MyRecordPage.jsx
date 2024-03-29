import Layout from 'components/layout/Layout';
import RecordSections from '../components/myRecordPage/RecordSections';
import MyExercise from '../components/myRecordPage/MyExercise';
import MyDiary from '../components/myRecordPage/MyDiary';
import BodyRecord from '../components/common/BodyRecord';

function MyRecordPage() {
  return (
    <Layout>
      <div className='flex flex-col gap-[56px] px-4 py-12 xl:px-32 2xl:px-[14%]'>
        <RecordSections />
        <BodyRecord isMyRecordPage />
        <MyExercise />
        <MyDiary />
      </div>
    </Layout>
  );
}

export default MyRecordPage;
