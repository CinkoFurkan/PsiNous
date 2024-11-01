import useFetch from '../../hooks/get';
import Image from './components/image';
import Info from './components/info';

const Team = () => {
  const { data } = useFetch('/member');

  return data && data.members ? (
    <div className='p-10 text-center'>
      <h1 className='mb-8 text-3xl font-bold'>Ekibimiz/Birimlerimiz</h1>
      <div className='grid grid-cols-4 gap-5'>
        {data.members.map((member, index) => (
          <div
            key={index}
            className='p-5 transition-transform duration-300 bg-white border rounded-lg shadow hover:translate-y-1 hover:shadow-lg'
          >
            <Image member={member} />
            <Info member={member} />
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default Team;
