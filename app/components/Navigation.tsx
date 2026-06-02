import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, Moon, Sun, Search, X as CloseIcon } from "lucide-react";
import { useState } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleDarkMode } = useDarkMode();

  const submitSearch = () => {
    const query = searchQuery.trim();
    if (!query) return;
    setIsSearchOpen(false);
    navigate(`/sermons?q=${encodeURIComponent(query)}`);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/ministries", label: "Ministries" },
    { path: "/events", label: "Events" },
    { path: "/sermons", label: "Sermons" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <AnimatePresence mode="wait">
            {!isSearchOpen && (
              <motion.div
                initial={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/" className="flex items-center">
                  <img src="/images/120.png" alt="Rhema Faith AG Church" className="h-10 w-auto" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="hidden md:flex items-center space-x-8">
            {!isSearchOpen ? (
              <>
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.path}
                      className={`${
                        location.pathname === item.path
                          ? "text-[#4F55A1] dark:text-[#7B82FF]"
                          : "text-gray-700 dark:text-gray-300 hover:text-[#4F55A1] dark:hover:text-[#7B82FF]"
                      } transition-colors duration-200 font-medium`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </motion.button>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? (
                    <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  )}
                </button>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-4 flex-1"
              >
                <div className="relative flex-1 max-w-3xl">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search sermons..."
                    aria-label="Search sermons"
                    onKeyDown={(event) => {
                      if (event.key === "Enter") submitSearch();
                    }}
                    className="w-full pl-12 pr-16 py-4 text-lg rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F55A1] focus:border-transparent shadow-lg"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-12 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                      aria-label="Clear search"
                    >
                      <CloseIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    </button>
                  )}
                </div>
                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  onClick={() => setIsSearchOpen(false)}
                  className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close search"
                >
                  <CloseIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </motion.button>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? (
                    <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  )}
                </button>
              </motion.div>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 px-4 ${
                  location.pathname === item.path
                    ? "text-[#4F55A1] dark:text-[#7B82FF] bg-[#EEF0FF] dark:bg-gray-800"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                } transition-colors duration-200 font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/sermons"
              className="flex items-center space-x-2 py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 font-medium w-full"
              onClick={() => setIsOpen(false)}
            >
              <Search className="h-5 w-5" />
              <span>Search Sermons</span>
            </Link>
            <button
              onClick={toggleDarkMode}
              className="flex items-center space-x-2 py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 font-medium w-full"
            >
              {isDark ? (
                <>
                  <Sun className="h-5 w-5" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
