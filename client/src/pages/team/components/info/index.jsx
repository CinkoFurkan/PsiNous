const Info = ({ member }) => {
  return (
    <>
      <h2 className='my-2 text-2xl text-gray-700'>
        {member.first_name} {member.last_name}
      </h2>
      <p className='text-lg text-gray-600'>{member.title}</p>
      {member.bio && <p className='my-2 text-sm text-gray-500'>{member.bio}</p>}
      {member.linked_in && (
        <a
          href={member.linked_in}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block mt-2 text-blue-600'
        >
          LinkedIn Profili
        </a>
      )}
      {member.email && <p className='text-sm text-gray-500'>{member.email}</p>}
    </>
  );
};

export default Info;
