import useFetch from '../../hooks/get';

const Announcement = () => {
  const { data } = useFetch('psinous_app/api/announcement');

  return data && data.announcement ? (
    <div className='flex flex-col items-center w-full p-8 mt-20 space-y-8'>
      <h1 className='mb-8 text-4xl font-bold'>Duyurular</h1>

      <div className='grid w-5/6 max-w-6xl grid-cols-2 gap-8'>
        {data.announcement.map((announcement, index) => (
          <div
            key={index}
            className='flex items-center bg-[#f3f0e6] rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105'
          >
            {announcement.image && (
              <img
                src={announcement.image}
                alt='Announcement Image'
                className='w-1/3 h-auto mr-6 rounded-lg shadow-md'
              />
            )}
            <div className='flex flex-col w-2/3 space-y-4'>
              <h2 className='text-xl font-semibold text-gray-800'>
                {announcement.title}
              </h2>
              <p className='leading-relaxed text-gray-700 text-md'>
                {announcement.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default Announcement;
