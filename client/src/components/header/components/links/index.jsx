import { NavLink } from "react-router-dom";
import useMedia from "../../../../hooks/use-media";
import ResponsiveLinks from "../responsive-links";

const Links = ({ links }) => {
  const isMobile = useMedia(600);

  if (isMobile) {
    return <ResponsiveLinks links={links} />;
  }

  return links && links.length > 0 ? (
    <nav>
      <ul className="flex space-x-8">
        {links.map((link) => (
          <li className="relative group" key={link.id || link.link}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "relative text-primary" : "relative"
              }
              to={`/${link.link}`}
            >
              <span className="transition duration-150 cursor-pointer hover:text-primary">
                {link.link}
              </span>
            </NavLink>
            {link.sublink && link.sublink.length > 0 && (
              <ul className="absolute left-0 hidden w-48 bg-white rounded-lg shadow-lg group-hover:block">
                {link.sublink.map((sublink, subindex) => (
                  <li
                    key={subindex}
                    className="px-4 py-2 text-black hover:text-[#bc090b] cursor-pointer rounded"
                  >
                    {sublink}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  ) : null;
};

export default Links;
