import Button from '../../../button';

const Description = ({ data }) => {
  return (
    <div className='flex flex-col w-1/2 p-4 space-y-4'>
      <h3 className='text-2xl font-bold text-center'>{data.about[0].title}</h3>
      <div className='w-full text-black'>
        <p className='leading-relaxed text-center text-md'>
          {data.about[0].text}
        </p>
      </div>
      <div>
        <div className='flex items-center justify-center'>
          <Button as='a' variant='primary' size='normal'>
            Daha Fazla
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Description;
