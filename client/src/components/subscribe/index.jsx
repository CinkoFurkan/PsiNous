import { useState } from 'react';
import Button from '../button';

const Subscription = () => {
  const [email, setEmail] = useState('');

  return (
    <div className='flex flex-col items-center justify-center py-32'>
      <h1 className='mb-6 text-4xl font-bold text-center text-black'>
        Bizden Haberdar Olun
      </h1>
      <form className='flex items-center justify-center mt-8 space-x-6'>
        <div className=''>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='w-[400px] px-4 py-2 border border-primary outline-none focus:border-[1.5px]'
            placeholder='E-mail adresiniz'
          />
        </div>

        <Button
          as='a'
          href={'#'}
          target='_blank'
          rel='noopener noreferrer'
          variant='primary'
          size='normal'
        >
          Abone Ol
        </Button>
      </form>
    </div>
  );
};

export default Subscription;
