const About = () => {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-primary fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Agape Tech Kenya</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">Connecting Kenya with care, one community at a time</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-20 fade-in">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded in 2016, <span className="font-bold text-primary">Agape Tech Kenya</span> began with a simple mission: to provide reliable, affordable internet to underserved communities in Nairobi. What started as a small operation with just three technicians has grown into a trusted provider serving thousands of homes and businesses across multiple counties.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                The name "Agape" comes from the Greek word for unconditional love and goodwill. We believe in connecting with care—treating every customer as family and every community as our own.
              </p>
              <div className="flex items-center space-x-6 mt-8">
                <div>
                  <div className="text-3xl font-bold text-secondary">8+</div>
                  <div className="text-sm text-slate-600">Years in Kenya</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-slate-600">Local Employees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">2,500+</div>
                  <div className="text-sm text-slate-600">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                   alt="Agape Tech team" className="rounded-2xl shadow-xl" />
            </div>
          </div>
          
          {/* Our Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="h-14 w-14 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-6">
                <i className="fa-solid fa-bullseye text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To bridge the digital divide in Kenya by providing reliable, affordable internet and technology solutions to every home and business, while maintaining the highest standards of customer care and technical excellence.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="h-14 w-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                <i className="fa-solid fa-eye text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600">
                To be Kenya's most trusted internet service provider, known for connecting communities with care and empowering digital transformation across the nation.
              </p>
            </div>
          </div>
          
          {/* Our Values */}
          <div className="mb-20 fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center text-secondary mx-auto mb-6">
                  <i className="fa-solid fa-heart text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Care & Community</h3>
                <p className="text-slate-600">We treat every customer with the care and respect they deserve, building lasting relationships within our communities.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center text-secondary mx-auto mb-6">
                  <i className="fa-solid fa-shield-alt text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Reliability</h3>
                <p className="text-slate-600">We deliver consistent, dependable service with 99.9% uptime and 24/7 Kenyan-based technical support.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center text-secondary mx-auto mb-6">
                  <i className="fa-solid fa-lightbulb text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
                <p className="text-slate-600">We continuously invest in new technologies and training to provide cutting-edge solutions for Kenya's evolving digital needs.</p>
              </div>
            </div>
          </div>
          
          {/* Team */}
          <div className="fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Meet Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="team-member bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                     alt="David Kariuki" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">David Kariuki</h3>
                  <p className="text-secondary font-medium mb-3">Founder & CEO</p>
                  <p className="text-slate-600 text-sm">With 15+ years in telecommunications, David founded Agape Tech to make reliable internet accessible to all Kenyans.</p>
                </div>
              </div>
              
              <div className="team-member bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                     alt="Sarah Mwangi" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">Sarah Mwangi</h3>
                  <p className="text-secondary font-medium mb-3">Technical Director</p>
                  <p className="text-slate-600 text-sm">Sarah leads our technical team with expertise in network architecture and cybersecurity solutions.</p>
                </div>
              </div>
              
              <div className="team-member bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                     alt="James Ochieng" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">James Ochieng</h3>
                  <p className="text-secondary font-medium mb-3">Customer Experience Manager</p>
                  <p className="text-slate-600 text-sm">James ensures every customer receives the exceptional service that defines the Agape Tech experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
