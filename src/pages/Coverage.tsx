import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Coverage = () => {
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });
  const navigate = useNavigate();

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>, areaName: string) => {
    setTooltip({
      visible: true,
      text: areaName,
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleMouseOut = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  const handleClick = (areaName: string) => {
    navigate(`/contact?area=${encodeURIComponent(areaName)}`);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (tooltip.visible) {
      setTooltip({ ...tooltip, x: e.clientX, y: e.clientY });
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-primary fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Coverage Areas</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">We're expanding across Kenya to bring reliable internet to more communities</p>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 fade-in">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Our Current Coverage</h2>
            
            {/* Simple Kenya Map Visualization */}
            <div 
              className="relative h-96 bg-slate-100 rounded-xl overflow-hidden border border-slate-300"
              onMouseMove={handleMouseMove}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block relative">
                    {/* Nairobi */}
                    <div 
                      className="coverage-area absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full cursor-pointer"
                      onMouseOver={(e) => handleMouseOver(e, 'Nairobi County')}
                      onMouseOut={handleMouseOut}
                      onClick={() => handleClick('Nairobi County')}
                    >
                      <div className="absolute inset-0 bg-secondary/30 rounded-full border-2 border-secondary"></div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium">Nairobi</div>
                    </div>
                    
                    {/* Kiambu */}
                    <div 
                      className="coverage-area absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full cursor-pointer"
                      onMouseOver={(e) => handleMouseOver(e, 'Kiambu County')}
                      onMouseOut={handleMouseOut}
                      onClick={() => handleClick('Kiambu County')}
                    >
                      <div className="absolute inset-0 bg-secondary/30 rounded-full border-2 border-secondary"></div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium">Kiambu</div>
                    </div>
                    
                    {/* Thika */}
                    <div 
                      className="coverage-area absolute top-2/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full cursor-pointer"
                      onMouseOver={(e) => handleMouseOver(e, 'Thika Region')}
                      onMouseOut={handleMouseOut}
                      onClick={() => handleClick('Thika Region')}
                    >
                      <div className="absolute inset-0 bg-secondary/30 rounded-full border-2 border-secondary"></div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium">Thika</div>
                    </div>
                    
                    {/* Runda */}
                    <div 
                      className="coverage-area absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full cursor-pointer"
                      onMouseOver={(e) => handleMouseOver(e, 'Runda')}
                      onMouseOut={handleMouseOut}
                      onClick={() => handleClick('Runda')}
                    >
                      <div className="absolute inset-0 bg-secondary/30 rounded-full border-2 border-secondary"></div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium">Runda</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tooltip */}
              {tooltip.visible && (
                <div 
                  className="fixed bg-slate-900 text-white px-3 py-2 rounded-lg text-sm shadow-lg pointer-events-none z-50"
                  style={{ top: tooltip.y + 15, left: tooltip.x + 15 }}
                >
                  {tooltip.text}
                </div>
              )}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-slate-600">Click on any coverage area to check availability or request service</p>
            </div>
          </div>
          
          {/* Coverage List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <i className="fa-solid fa-city text-secondary mr-3"></i> Nairobi County
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600"><i className="fa-solid fa-check-circle text-green-500 mr-2"></i> Westlands</li>
                <li className="flex items-center text-slate-600"><i className="fa-solid fa-check-circle text-green-500 mr-2"></i> Kilimani</li>
                <li className="flex items-center text-slate-600"><i className="fa-solid fa-check-circle text-green-500 mr-2"></i> Karen</li>
                <li className="flex items-center text-slate-600"><i className="fa-solid fa-check-circle text-green-500 mr-2"></i> Lavington</li>
                <li className="flex items-center text-slate-600"><i className="fa-solid fa-check-circle text-green-500 mr-2"></i> Parklands</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <i className="fa-solid fa-tree-city text-secondary mr-3"></i> Kiambu County
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600"><i className="fa-solid fa-check-circle text-green-500 mr-2"></i> Thika</li>
                <li className="flex items-center text-slate-600"><i className="fa-solid fa-check-circle text-green-500 mr-2"></i> Ruaka</li>
                <li className="flex items-center text-slate-600"><i className="fa-solid fa-check-circle text-green-500 mr-2"></i> Runda</li>
                <li className="flex items-center text-slate-600"><i className="fa-solid fa-check-circle text-green-500 mr-2"></i> Kiambu Town</li>
                <li className="flex items-center text-slate-600"><i className="fa-solid fa-clock text-orange-500 mr-2"></i> Coming Soon: Limuru</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <i className="fa-solid fa-road text-secondary mr-3"></i> Expansion Areas
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600"><i className="fa-solid fa-clock text-orange-500 mr-2"></i> Nakuru</li>
                <li className="flex items-center text-slate-600"><i className="fa-solid fa-clock text-orange-500 mr-2"></i> Mombasa</li>
                <li className="flex items-center text-slate-600"><i className="fa-solid fa-clock text-orange-500 mr-2"></i> Kisumu</li>
                <li className="flex items-center text-slate-600"><i className="fa-solid fa-clock text-orange-500 mr-2"></i> Eldoret</li>
                <li className="flex items-center text-slate-600"><i className="fa-solid fa-lightbulb text-blue-500 mr-2"></i> Request your area</li>
              </ul>
            </div>
          </div>
          
          {/* Check Availability Form */}
          <div className="bg-gradient-to-r from-primary to-slate-800 rounded-2xl p-8 text-white fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Not in Our Coverage Area?</h2>
                <p className="mb-6">Let us know where you are! We're constantly expanding our network and your request helps us prioritize new areas.</p>
                <p className="text-sm opacity-80">We'll notify you as soon as we expand to your location.</p>
              </div>
              
              <div className="mt-6 lg:mt-0">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Coverage request submitted successfully!'); }}>
                  <div>
                    <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-secondary" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-secondary" />
                  </div>
                  <div>
                    <input type="text" placeholder="Your Area/Location" required className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-secondary" />
                  </div>
                  <button type="submit" className="w-full bg-secondary hover:bg-sky-600 text-white font-bold py-3 rounded-lg transition">
                    Request Coverage Expansion
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coverage;
