import Layout from 'components/layout/Layout';
import RecordSections from '../components/myRecordPage/RecordSections';

function MyRecordPage() {
  return (
    <Layout>
      <div className='flex flex-col px-4 py-12 xl:px-32 2xl:px-[14%]'>
        <RecordSections />
      </div>
    </Layout>
  );
}

export default MyRecordPage;
