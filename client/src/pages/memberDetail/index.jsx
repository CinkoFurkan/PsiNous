import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/get';

const MemberDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`member_info/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching member details.</div>;
  if (!data || !data.member) return <div>Member not found.</div>;

  const {
    member_id,
    first_name,
    last_name,
    team,
    title_member,
    university,
    bio,
    linked_in,
    email,
    image
  } = data.member;

  return (
    <div className="flex flex-col items-center p-10 text-center bg-gray-100 rounded-lg shadow-lg">
      {/* Profile Image */}
      {image && (
        <img
          src={image}
          alt={`${first_name} ${last_name}`}
          className="w-32 h-32 rounded-full mb-4 shadow-lg"
        />
      )}

      {/* Member Name and Title */}
      <h1 className="mb-2 text-4xl font-bold text-gray-800">
        {`${first_name} ${last_name}`}
      </h1>
      <p className="text-xl font-semibold text-gray-600">{title_member}</p>
      {team && <p className="text-gray-500 text-lg mb-4">Team: {team}</p>}

      {/* Bio Section */}
      <div className="mt-4 mb-6 px-4 py-2 bg-white rounded shadow-md text-gray-700 max-w-xl">
        <h2 className="text-2xl font-semibold mb-2">Biography</h2>
        <p>{bio}</p>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 gap-4 max-w-xl sm:grid-cols-2">
        {university && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">University</h3>
            <p className="text-gray-600">{university}</p>
          </div>
        )}
        {linked_in && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">LinkedIn</h3>
            <a
              href={linked_in}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Profile
            </a>
          </div>
        )}
        {email && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600">{email}</p>
          </div>
        )}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-gray-800">Member ID</h3>
          <p className="text-gray-600">{member_id}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
