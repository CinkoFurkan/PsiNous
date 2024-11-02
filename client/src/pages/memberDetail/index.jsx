import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/get';
import { FaLinkedin } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

const MemberDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`member_info/${id}`);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error) return <div className="text-center p-8">Error fetching member details.</div>;
  if (!data || !data.member) return <div className="text-center p-8">Member not found.</div>;

  const {
    first_name,
    last_name,
    team,
    title_member,
    university,
    bio,
    linked_in,
    email,
    image,
  } = data.member;

  return (
    <div className="p-8 min-h-screen ">
      <div className="p-8 bg-[#f1f1e9] shadow-lg rounded-lg mt-24">
        {/* Profile Image Centered */}
        <div className="flex justify-center mb-4">
          {image ? (
            <img
              src={image}
              alt={`${first_name} ${last_name}`}
              className="w-64 h-64 rounded-full shadow-xl border-4 border-white"
            />
          ) : (
            <div className="w-64 h-64 bg-indigo-100 rounded-full shadow-xl flex items-center justify-center text-indigo-500 border-4 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Member Info Section Below Image */}
        <div className="text-center border-b pb-4 mb-4"> {/* Added margin below */}
          <h1 className="text-5xl font-bold text-gray-800">{`${first_name} ${last_name}`}</h1>
          {team && <p className="text-gray-500 mt-1 text-lg">{team}</p>}
          {title_member && <p className="text-gray-600 mt-1 text-lg">{title_member}</p>}
          {university && <p className="text-gray-600 mt-1 text-lg">{university}</p>}
        </div>

        {/* Biography Section */}
        <div className="flex flex-col items-center mb-6">
          <p className="text-gray-700 text-center font-light lg:px-16 max-w-3xl">
            {bio}
          </p>
        </div>

        {/* Contact Icons Section */}
        <div className="flex justify-center space-x-6">
          {linked_in && (
            <a
              href={linked_in}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-10 w-10" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-800 transition duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <IoMail className="h-10 w-10" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
