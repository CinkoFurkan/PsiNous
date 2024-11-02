import { useNavigate } from 'react-router-dom';
import Image from '../image';
import Info from '../info';

const SingleTeam = ({ title, members }) => {
  const navigate = useNavigate();

  const handleMemberClick = (id) => {
    console.log("Navigating to member with ID:", id); 
    navigate(`/member/${id}`);
  };
  

  return (
    <div className='p-10 text-center'>
      <h1 className='mb-8 text-4xl font-bold text-gray-800'>{title}</h1>
      <div className='flex flex-wrap justify-center gap-8'>
        {members.map((member, index) => (
          <div
          key={index}
          className='p-5 bg-[#f1f1e9] border border-gray-200 rounded-lg shadow-lg w-72 cursor-pointer'
          onClick={() => handleMemberClick(member.member_id)} // Ensure member.id is not undefined
        >
        
            <div className='flex flex-col items-center'>
              <Image member={member} />
              <Info member={member} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleTeam;
