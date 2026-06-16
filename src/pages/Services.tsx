import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handlePackageSelect = (packageName: string, packageSpeed: string) => {
    sessionStorage.setItem('selectedPackage', packageName);
    sessionStorage.setItem('selectedSpeed', packageSpeed);
    navigate('/contact');
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-primary fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">Comprehensive technology solutions tailored for Kenya's unique digital landscape</p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Fiber Internet */}
          <div id="fiber" className="mb-20 service-card fade-in">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Fiber Optic Internet</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Experience lightning-fast internet with our fiber optic connections. Perfect for streaming, gaming, remote work, and smart homes.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i> Unlimited data with no throttling</li>
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i> Symmetrical upload/download speeds</li>
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i> 99.9% uptime guarantee</li>
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i> Free professional installation</li>
                </ul>
                <div className="flex gap-4">
                  <button 
                    onClick={() => handlePackageSelect('Home Fiber', 'Standard')}
                    className="inline-flex items-center px-6 py-3 bg-secondary text-white font-medium rounded-full hover:bg-sky-600 transition">
                    Get Fiber Internet <i className="fa-solid fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Fiber optic installation" className="rounded-2xl shadow-xl" />
              </div>
            </div>
          </div>

          {/* Business Solutions */}
          <div id="business" className="mb-20 service-card fade-in">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-12">
              <div className="order-2 lg:order-1">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Business solutions" className="rounded-2xl shadow-xl" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Business Solutions</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Keep your business connected with our reliable enterprise-grade solutions. We understand that downtime costs money.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i> Dedicated business fiber lines</li>
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i> Service Level Agreements (SLAs)</li>
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i> Static IP addresses available</li>
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i> Priority 24/7 technical support</li>
                </ul>
                <button 
                  onClick={() => handlePackageSelect('Business Internet', 'Enterprise')}
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-slate-800 transition">
                  Business Inquiry <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Security Systems */}
          <div id="security" className="mb-20 service-card fade-in">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Security & CCTV Systems</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Protect what matters most with our advanced surveillance solutions. From homes to large commercial properties.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i> HD and 4K camera systems</li>
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i> Remote viewing via mobile app</li>
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i> Night vision and motion detection</li>
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i> Professional installation and maintenance</li>
                </ul>
                <button 
                  onClick={() => handlePackageSelect('CCTV & Security', 'Custom')}
                  className="inline-flex items-center px-6 py-3 bg-secondary text-white font-medium rounded-full hover:bg-sky-600 transition">
                  Security Consultation <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
              <div className="mt-8 lg:mt-0">
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="CCTV Security" className="rounded-2xl shadow-xl" />
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div id="additional" className="service-card fade-in">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition">
                <div className="h-14 w-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-4">
                  <i className="fa-solid fa-network-wired text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Networking Solutions</h3>
                <p className="text-slate-600">Structured cabling, Wi-Fi optimization, LAN/WAN setup for offices and campuses.</p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition">
                <div className="h-14 w-14 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-4">
                  <i className="fa-solid fa-laptop-code text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Web Design & Hosting</h3>
                <p className="text-slate-600">Professional website development and reliable hosting services for Kenyan businesses.</p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition">
                <div className="h-14 w-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-4">
                  <i className="fa-solid fa-screwdriver-wrench text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">IT Support</h3>
                <p className="text-slate-600">Hardware repair, software installation, and IT troubleshooting for home and office.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
