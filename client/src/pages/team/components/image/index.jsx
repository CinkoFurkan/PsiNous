const Image = ({ member }) => {
  return (
    <img
      src={member.image}
      className='object-cover mb-4 rounded-full w-30 h-30'
      alt={`${member.first_name} ${member.last_name}`}
    />
  );
};

export default Image;
