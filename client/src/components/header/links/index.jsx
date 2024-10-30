const Links = ({ links }) => (
  links && links.length > 0 ? (
    <nav>
      <ul className="flex space-x-8">
        {links.map((link, index) => (
          <li key={index} className="relative group">
            <span className="transition duration-150 cursor-pointer text-black hover:text-red-500">
              {link.link}
            </span>
            {link.sublink && link.sublink.length > 0 && (
              <ul className="absolute left-0 hidden bg-white rounded-lg shadow-lg w-48 group-hover:block">
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
  ) : null
);

export default Links;
