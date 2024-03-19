import Layout from 'components/layout/Layout';

import Achievement from '../components/topPage/Achievement';
import BodyRecord from '../components/common/BodyRecord';
import FilterButtons from '../components/topPage/FilterButtons';
import EatingRecords from '../components/topPage/EatingRecords';

function TopPage() {
  return (
    <Layout>
      <div className='flex flex-col gap-[8px]'>
        <div className='flex flex-col md:flex-row'>
          <Achievement />
          <BodyRecord />
        </div>
        <FilterButtons />
        <EatingRecords />
      </div>
    </Layout>
  );
}

export default TopPage;
