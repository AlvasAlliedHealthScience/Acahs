import { useState, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  const navItems = [
    { path: '/', label: 'Home' },
    {
      label: 'About',
      subItems: [
        { path: '/about', label: 'About ACHAS' },
        { path: '/messages', label: 'Messages' },
        { path: '/vm', label: 'Vission Mission' }
      ]
    },
    
    {
      label: 'Acadamics',
      subItems: [
        { path: '/courses', label: 'Courses' },
        { path: '/faculty', label: 'Faculty' },
      ]
    },
    { path: '/event', label: 'Activities' },
    { path: '/seminar', label: 'Events' },
    
  
        {
      label: 'Facilities',
      subItems: [
        { path: '/library', label: 'Facility' },
        { path: '/internships', label: 'Internships' },
      ]
    },
    { path: '/moot-court', label: 'Alumini' },
      
    
    { path: '/research', label: 'Contact' },
    
  ];

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100); // Fast dropdown close time
  };

  return (
    <nav className="w-full bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-[2000px] mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Mobile Menu Button */}
          <div className="flex-shrink-0 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:justify-center w-full space-x-6 relative">
            {navItems.map((item, index) =>
              item.subItems ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="text-gray-700 hover:text-blue-900 hover:bg-gray-100 px-4 py-3 rounded-md text-lg font-semibold flex items-center gap-1 transition-colors duration-200"
                  >
                    {item.label}
                    <ChevronDown size={16} />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md py-2 w-48 z-50">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-900"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-700 hover:text-blue-900 hover:bg-gray-100 px-4 py-3 rounded-md text-lg font-semibold transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden w-full">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) =>
                item.subItems ? (
                  <div key={index}>
                    <p className="text-gray-700 font-semibold px-3 py-2">{item.label}</p>
                    <div className="pl-4">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-gray-700 hover:text-blue-900 hover:bg-gray-100 block px-3 py-3 rounded-md text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
