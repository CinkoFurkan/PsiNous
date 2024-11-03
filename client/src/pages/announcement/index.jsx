import useFetch from '../../hooks/get';

const Announcement = () => {
  const { data } = useFetch('announcement');

  return data && data.announcement ? (
    <div className='min-h-screen p-10'>
      <h1 className='mb-12 text-4xl font-bold text-center text-black'>
        Duyurular
      </h1>
      <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        {data.announcement.map((item, index) => (
          <div
            key={index}
            className='relative overflow-hidden transition-transform duration-300 transform bg-white border border-gray-200 shadow-xl rounded-xl hover:-translate-y-2 hover:shadow-2xl'
          >
            <div className='relative'>
              <img
                src={item.image}
                alt={item.title}
                className='object-cover w-full h-56 transition-transform duration-500 hover:scale-105'
              />
              <div className='absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 hover:opacity-90'></div>
              <div className='absolute px-3 py-1 text-xs font-semibold text-white rounded-full bg-primary top-4 left-4'>
                Yeni
              </div>
            </div>

            <div className='relative p-6'>
              <h2 className='mb-2 text-xl font-semibold text-gray-900'>
                {item.title}
              </h2>
              <p className='mb-4 leading-relaxed text-gray-700'>
                {item.text.length > 80
                  ? `${item.text.slice(0, 80)}...`
                  : item.text}
              </p>
              <button className='flex items-center text-blue-600 hover:text-blue-800 group'>
                <span>Daha fazla</span>
                <svg
                  className='w-4 h-4 ml-1 transition-transform transform group-hover:translate-x-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 7l5 5m0 0l-5 5m5-5H6'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default Announcement;
