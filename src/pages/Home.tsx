import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 hero-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left fade-in">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-semibold mb-6">
                <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                Now Available in Nairobi & Kiambu Counties
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                High Speed Internet <br />
                <span className="text-secondary">Kenya's Digital Future.</span>
              </h1>
              <p className="mt-4 text-lg text-slate-300 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Experience reliable fiber internet, cutting-edge networking, and security solutions for homes and businesses across Kenya. Connecting communities with care.
              </p>
              <div className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start gap-4">
                <Link to="/coverage" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-secondary hover:bg-sky-600 md:py-4 md:text-lg md:px-10 transition shadow-lg hover:shadow-secondary/50">
                  Check Coverage
                </Link>
                <Link to="/services" className="mt-3 w-full flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-full text-slate-200 hover:bg-slate-800 md:mt-0 md:py-4 md:text-lg md:px-10 transition">
                  View Packages
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden transform rotate-2 hover:rotate-0 transition duration-500">
                <img className="w-full" src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Server room technology" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-4 lg:bottom-10 lg:-left-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <i className="fa-solid fa-headset text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Support</p>
                  <p className="text-lg font-bold text-slate-900">24/7 Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Solutions</h2>
            <p className="mt-4 text-xl text-slate-600">Comprehensive technology solutions for Kenya's growing digital needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="h-12 w-12 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary mb-4">
                <i className="fa-solid fa-house-signal text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fiber Internet</h3>
              <p className="text-slate-600">Ultra-fast fiber optic internet for homes and businesses</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4">
                <i className="fa-solid fa-video text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Security Systems</h3>
              <p className="text-slate-600">CCTV and security solutions for enhanced protection</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="h-12 w-12 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary mb-4">
                <i className="fa-solid fa-network-wired text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Networking</h3>
              <p className="text-slate-600">Structured cabling and Wi-Fi optimization</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-secondary font-medium hover:text-sky-600">
              View All Services <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-in">
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-1">2,500+</div>
              <div className="text-secondary text-sm font-medium">Happy Clients</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-1">99.9%</div>
              <div className="text-secondary text-sm font-medium">Uptime Guarantee</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-secondary text-sm font-medium">Kenyan Support</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-1">8+</div>
              <div className="text-secondary text-sm font-medium">Years in Kenya</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-3xl font-extrabold text-white mb-6">Ready to Get Connected?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers across Kenya enjoying reliable, high-speed internet</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-3 bg-secondary hover:bg-sky-600 text-white font-medium rounded-full transition shadow-lg">Get Started Now</Link>
            <a href="tel:+254700123456" className="px-8 py-3 bg-white hover:bg-slate-100 text-primary font-medium rounded-full transition">Call: +254 700 123 456</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
