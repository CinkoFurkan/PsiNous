import { NavLink } from 'react-router-dom';

const Links = ({ links }) =>
  links && links.length > 0 ? (
    <nav>
      <ul className='flex space-x-8'>
        {links.map((link, index) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'relative group text-primary' : 'relative group'
            }
            to={`/${link.link}`}
            key={index}
          >
            <span className='transition duration-150 cursor-pointer hover:text-primary'>
              {link.link}
            </span>
            {link.sublink && link.sublink.length > 0 && (
              <ul className='absolute left-0 hidden w-48 bg-white rounded-lg shadow-lg group-hover:block'>
                {link.sublink.map((sublink, subindex) => (
                  <li
                    key={subindex}
                    className='px-4 py-2 text-black hover:text-[#bc090b] cursor-pointer rounded'
                  >
                    {sublink}
                  </li>
                ))}
              </ul>
            )}
          </NavLink>
        ))}
      </ul>
    </nav>
  ) : null;

export default Links;
