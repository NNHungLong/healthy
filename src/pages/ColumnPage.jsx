import Layout from '../components/layout/Layout';
import Packages from '../components/columnPage/Packages';
import Articles from '../components/columnPage/Articles';

function ColumnPage() {
  return (
    <Layout>
      <div className='flex flex-col py-12 px-4 xl:px-32 2xl:px-[14%]'>
        <Packages />
        <Articles />
      </div>
    </Layout>
  );
}

export default ColumnPage;
