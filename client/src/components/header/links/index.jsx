const Links = ({ links }) => (
  links && links.length > 0 ? (
    <nav>
      <ul className='flex space-x-6'>
        {links.map((link, index) => (
          <li key={index} className='relative group'>
            <span className='transition duration-75 cursor-pointer hover:text-[#bc090b]'>
              {link.link}
            </span>
            {link.sublink && link.sublink.length > 0 && (
              <ul className='absolute left-0 hidden bg-white rounded shadow-lg w-52 group-hover:block'>
                {link.sublink.map((sublink, subindex) => (
                  <li key={subindex} className='px-4 py-2 hover:text-[#bc090b]'>
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
