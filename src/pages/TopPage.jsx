import Layout from 'components/layout/Layout';

import FilterButtons from '../components/topPage/FilterButtons';
import EatingRecords from '../components/topPage/EatingRecords';

function TopPage() {
  return (
    <Layout>
      <div className='flex flex-col gap-[8px] px-4 py-12 xl:px-32 2xl:px-[14%]'>
        <FilterButtons />
        <EatingRecords />
      </div>
    </Layout>
  );
}

export default TopPage;
