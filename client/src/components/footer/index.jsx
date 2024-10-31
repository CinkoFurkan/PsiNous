import React from 'react';
import WLogo from '../../assets/img/WLogo.png';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // React Icons kütüphanesinden ikonlar

const Footer = () => {
  return (
    <footer className='py-4 text-white bg-[#2C2A22]'>
      <div className='container flex items-center justify-between mx-auto'>
        <div className='flex items-center'>
          <img src={WLogo} alt='Logo' className='h-20 mr-2' />
        </div>

        <div className='mt-4 text-sm text-center'>
          <p className='mb-2'>
            &copy; {new Date().getFullYear()} Tüm Hakları Saklıdır.
          </p>
          <div className='flex justify-center space-x-4'>
            <a href='#' className='hover:text-gray-400'>
              Hakkında
            </a>
            <a href='#' className='hover:text-gray-400'>
              İletişim
            </a>
            <a href='#' className='hover:text-gray-400'>
              Gizlilik Politikası
            </a>
            <a href='#' className='hover:text-gray-400'>
              Kullanım Şartları
            </a>
          </div>
        </div>

        <div className='flex flex-col items-center space-y-3'>
          <a
            href='mailto:info@yourdomain.com'
            className='text-sm hover:text-gray-400'
          >
            PsinNous@yourdomain.com
          </a>
          {/* Sosyal Medya İkonları */}
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
      </div>
    </footer>
  );
};

export default Footer;
