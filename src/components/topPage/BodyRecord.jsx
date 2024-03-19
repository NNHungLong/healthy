export default function BodyCount() {
  return (
    <div
      id='body-record'
      className='flex flex-1 flex-col bg-dark-500 px-6 py-4 font-inter text-light'>
      <div className='flex items-center'>
        <h2 className='mr-4 w-[96px] font-light leading-snug'>BODY RECORD</h2>
        <h2 className='text-xl'>2021.05.21</h2>
      </div>
      <div className='scrollbar mt-2 flex h-[192px] flex-wrap gap-2 overflow-auto pr-3'>
        <div />
      </div>
    </div>
  );
}
