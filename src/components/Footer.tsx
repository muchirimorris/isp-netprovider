import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="font-bold text-2xl text-white tracking-tight mb-4 inline-block">
              AGAPE<span className="text-secondary">TECH</span> <span className="text-sm">KENYA</span>
            </Link>
            <p className="text-sm mt-2">
              Bridging the digital divide in Kenya with reliable, affordable internet solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/coverage" className="hover:text-white transition">Coverage Areas</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#fiber" className="hover:text-white transition">Fiber Internet</Link></li>
              <li><Link to="/services#business" className="hover:text-white transition">Business Solutions</Link></li>
              <li><Link to="/services#security" className="hover:text-white transition">CCTV Security</Link></li>
              <li><Link to="/services#networking" className="hover:text-white transition">Networking</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fa-solid fa-phone mt-1 mr-3 text-secondary"></i> 
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-envelope mt-1 mr-3 text-secondary"></i> 
                <span>info@agapetech.co.ke</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1 mr-3 text-secondary"></i> 
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Agape Tech Internet Solutions Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
