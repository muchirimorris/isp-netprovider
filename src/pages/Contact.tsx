import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    message: ''
  });
  
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const selectedPackage = sessionStorage.getItem('selectedPackage');
    const selectedSpeed = sessionStorage.getItem('selectedSpeed');
    
    const params = new URLSearchParams(location.search);
    const area = params.get('area');

    setFormData(prev => {
      const newData = { ...prev };
      
      if (selectedPackage && selectedSpeed) {
        newData.message = `I'm interested in the ${selectedPackage} package (${selectedSpeed}). Please contact me with more information.`;
        sessionStorage.removeItem('selectedPackage');
        sessionStorage.removeItem('selectedSpeed');
      }
      
      if (area) {
        newData.location = area;
      }
      
      return newData;
    });
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We have received your message and will contact you shortly.`);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      location: '',
      message: ''
    });
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does installation take?",
      answer: "Installation typically takes 1-3 business days after survey, depending on your location and specific requirements. We'll provide you with a specific timeline after assessing your property."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa, bank transfers, credit/debit cards, and cash payments. For businesses, we can arrange invoice-based billing with payment terms."
    },
    {
      question: "Do you offer free installation?",
      answer: "Yes! We offer free standard installation for all our fiber internet packages. Additional charges may apply for complex setups or special requirements."
    },
    {
      question: "What happens during an outage?",
      answer: "Our 24/7 technical support team is immediately notified of any outages. We aim to resolve issues within 4 hours for business customers and 12 hours for residential customers, as per our SLA."
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-primary fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">Ready to get connected or have questions? We're here to help!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 fade-in">
              <div className="bg-slate-50 rounded-2xl p-8 sticky top-32">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary mr-4">
                      <i className="fa-solid fa-phone text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                      <p className="text-slate-600">+254 700 123 456</p>
                      <p className="text-slate-600">+254 711 987 654</p>
                      <p className="text-sm text-slate-500 mt-1">Mon-Sun, 24/7 Support</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary mr-4">
                      <i className="fa-solid fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                      <p className="text-slate-600">info@agapetech.co.ke</p>
                      <p className="text-slate-600">support@agapetech.co.ke</p>
                      <p className="text-sm text-slate-500 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary mr-4">
                      <i className="fa-solid fa-location-dot text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                      <p className="text-slate-600">Agape Tech House</p>
                      <p className="text-slate-600">Westlands, Nairobi</p>
                      <p className="text-slate-600">Kenya</p>
                      <p className="text-sm text-slate-500 mt-1">Mon-Fri, 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 hover:bg-secondary hover:text-white transition">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 hover:bg-secondary hover:text-white transition">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 hover:bg-secondary hover:text-white transition">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 hover:bg-secondary hover:text-white transition">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form & FAQ */}
            <div className="lg:col-span-2">
              {/* Contact Form */}
              <div className="mb-16 fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                      <input type="text" id="name" name="name" required 
                             className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition" 
                             placeholder="John Kamau"
                             value={formData.name} onChange={handleChange} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" required 
                             className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition" 
                             placeholder="+254 700 123 456"
                             value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required 
                           className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition" 
                           placeholder="john@example.com"
                           value={formData.email} onChange={handleChange} />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Interested Service *</label>
                    <select id="service" name="service" required 
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                            value={formData.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option value="home-fiber">Home Fiber Internet</option>
                      <option value="business">Business Internet Solutions</option>
                      <option value="cctv">CCTV & Security Systems</option>
                      <option value="networking">Networking Solutions</option>
                      <option value="web">Web Design & Hosting</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">Your Location *</label>
                    <input type="text" id="location" name="location" required 
                           className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition" 
                           placeholder="e.g., Westlands, Nairobi"
                           value={formData.location} onChange={handleChange} />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Message *</label>
                    <textarea id="message" name="message" rows={5} required 
                              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition" 
                              placeholder="Tell us how we can help you..."
                              value={formData.message} onChange={handleChange}></textarea>
                  </div>
                  
                  <button type="submit" 
                          className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* FAQ Section */}
              <div className="fade-in" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                      <button 
                        onClick={() => toggleFaq(index)}
                        className="faq-question w-full text-left p-6 bg-slate-50 hover:bg-slate-100 transition font-medium">
                        {faq.question}
                      </button>
                      <div className={`faq-answer p-6 border-t border-slate-200 ${activeFaq === index ? 'block' : 'hidden'}`}>
                        <p className="text-slate-600">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-slate-800 fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Call our 24/7 support line for urgent technical issues</p>
          <a href="tel:+254700123456" className="inline-flex items-center px-8 py-4 bg-secondary hover:bg-sky-600 text-white font-bold rounded-full text-lg transition shadow-lg">
            <i className="fa-solid fa-phone mr-3"></i> Call Now: +254 700 123 456
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
