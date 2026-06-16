import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Coverage', path: '/coverage' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 backdrop-blur-md border-b border-slate-200 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-lg' : 'bg-white/90 shadow-sm'
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <div className="bg-primary text-white p-2 rounded-lg mr-2">
              <i className="fa-solid fa-wifi text-xl"></i>
            </div>
            <span className="font-bold text-2xl text-primary tracking-tight">
              AGAPE<span className="text-secondary">TECH</span>
            </span>
            <span className="ml-2 text-sm font-medium text-slate-600">KENYA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition ${
                  location.pathname === link.path
                    ? 'text-secondary'
                    : 'text-slate-600 hover:text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-full font-medium transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Connected
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-slate-600 hover:text-primary focus:outline-none"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden bg-white border-t border-slate-100 absolute w-full transition-all ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-3 text-base font-medium rounded-md hover:bg-slate-50 ${
                location.pathname === link.path
                  ? 'text-secondary'
                  : 'text-slate-600 hover:text-secondary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block px-3 py-3 text-base font-medium text-white bg-primary rounded-md text-center mt-4"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
