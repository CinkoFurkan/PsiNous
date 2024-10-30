import { FaInstagram } from 'react-icons/fa';

const Social = () => {
  return (
    <div>
      <a
        href="https://www.instagram.com/psinouss/profilecard/?igsh=M2J3bG95czFhdWVy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-700"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default Social;
