import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function ResponsiveLinks({ links }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((open) => !open);

  return (
    <>
      <div
        onClick={toggleMenu}
        className="text-2xl cursor-pointer text-gray-800"
      >
        <RxHamburgerMenu />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black z-10"
            onClick={toggleMenu}
          />
        )}

        {open && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-64 bg-[#f5f3f1] text-gray-900 shadow-xl z-20"
          >
            <button
              onClick={toggleMenu}
              className="text-gray-800 text-2xl p-4 absolute top-2 right-2 focus:outline-none"
            >
              ✕
            </button>

            <nav className="mt-16 p-6 space-y-4">
              <ul onClick={() => setOpen(false)} className="space-y-4">
                {links.map((link) => (
                  <li key={link.id || link.link} className="group">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary font-semibold"
                          : "text-gray-700"
                      }
                      to={`/${link.link}`}
                    >
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="transition duration-200 cursor-pointer hover:text-primary"
                      >
                        {link.link}
                      </motion.span>
                    </NavLink>

                    {link.sublink && link.sublink.length > 0 && (
                      <ul className="mt-2 pl-4 space-y-2">
                        {link.sublink.map((sublink, subindex) => (
                          <motion.li
                            key={subindex}
                            whileHover={{ x: 5 }}
                            className="text-sm text-gray-600 cursor-pointer hover:text-[#bc090b] transition-all duration-150"
                          >
                            {sublink}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
