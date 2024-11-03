import { useParams } from "react-router-dom";
import useFetch from "../../hooks/get";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const MemberDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`member/${id}`);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error)
    return (
      <div className="p-8 text-center">Error fetching member details.</div>
    );
  if (!data || !data.member)
    return <div className="p-8 text-center">Member not found.</div>;

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
    <div className="min-h-screen p-8 ">
      <div className="p-8 bg-[#f1f1e9] shadow-lg rounded-lg mt-24">
        {/* Profile Image Centered */}
        <div className="flex justify-center mb-4">
          {image ? (
            <img
              src={image}
              alt={`${first_name} ${last_name}`}
              className="w-64 h-64 border-4 border-white rounded-full shadow-xl"
            />
          ) : (
            <div className="flex items-center justify-center w-64 h-64 text-indigo-500 bg-indigo-100 border-4 border-white rounded-full shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24"
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
        <div className="pb-4 mb-4 text-center border-b">
          {" "}
          {/* Added margin below */}
          <h1 className="text-5xl font-bold text-gray-800">{`${first_name} ${last_name}`}</h1>
          {team && <p className="mt-1 text-lg text-gray-500">{team}</p>}
          {title_member && (
            <p className="mt-1 text-lg text-gray-600">{title_member}</p>
          )}
          {university && (
            <p className="mt-1 text-lg text-gray-600">{university}</p>
          )}
        </div>

        {/* Biography Section */}
        <div className="flex flex-col items-center mb-6">
          <p className="max-w-3xl font-light text-center text-gray-700 lg:px-16">
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
              className="p-2 text-white transition duration-300 transform bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-10 h-10" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-2 text-white transition duration-300 transform bg-gray-700 rounded-full hover:bg-gray-800 hover:scale-110"
              aria-label="Email"
            >
              <IoMail className="w-10 h-10" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
