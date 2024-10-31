import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Links = () => {
  return (
    <div className='flex flex-col items-center space-y-3'>
      <a
        href='mailto:info@yourdomain.com'
        className='text-sm hover:text-gray-400'
      >
        PsinNous@yourdomain.com
      </a>
      <div className='flex space-x-4'>
        <a
          href='https://www.linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin className='w-6 h-6 hover:text-gray-400' />
        </a>
        <a
          href='https://www.instagram.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram className='w-6 h-6 hover:text-gray-400' />
        </a>
      </div>
    </div>
  );
};

export default Links;
