import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="font-body-md text-body-md" style={{ backgroundColor: '#faf8ff', color: '#1a1b20' }}>
      {/* TopAppBar Component */}
      <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-teal-50 dark:border-teal-900/30 shadow-sm dark:shadow-none">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-8 py-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-teal-700 dark:text-teal-400">waves</span>
            <span className="text-2xl font-semibold tracking-tighter text-teal-800 dark:text-teal-50" style={{ fontFamily: 'Manrope' }}>Reef Property Management</span>
          </div>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-xl font-label-lg text-label-lg transition-all hover:opacity-90 active:scale-95">
            Contact Concierge
          </button>
        </div>
      </header>
      <main className="pt-24 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[530px] flex items-center justify-center overflow-hidden mx-8 mt-4 rounded-full">
          <div className="absolute inset-0 z-0">
            <img alt="Serene coastal beachfront" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAxLy3uyZVEd6DBluGdVW57QxLKmL21wR2yBPP3DTU-T8ioCxPYrPZMpayw0txghQPXtzaaqMRByovtAw_2PEkewQZpFt_To-kSLXNeVR8wD0VKX4xakDsSfCwndeZK7kXcui0w8kpZ2TI886q1OPMg7NdPAZUniW0bFAxZCQhSxbZDk2XPRs5jfjzTMhHVI2w_tMp7ubfTvN6ADkfEA7InFlDTa-aTa4vcueS7keHNIu3VjNlZGq-CEoWurq9CmBWlJ8OLLv_I6cH" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent"></div>
          </div>
          <div className="relative z-10 text-center max-w-4xl px-6">
            <h1 className="text-6xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'Manrope', lineHeight: '64px', letterSpacing: '-0.25px' }}>Coastal Living, Reimagined.</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'Inter', lineHeight: '24px', letterSpacing: '0.5px' }}>Experience the intersection of luxury and precision. Seamlessly manage your residency, explore exclusive stays, or oversee your property portfolio with ease.</p>
          </div>
        </section>
        {/* Role Selection Section */}
        <section className="max-w-7xl mx-auto px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-primary mb-2" style={{ fontFamily: 'Manrope', lineHeight: '40px' }}>Welcome to Reef</h2>
            <p className="text-lg text-secondary" style={{ fontFamily: 'Inter', lineHeight: '20px', letterSpacing: '0.25px' }}>Select your portal to continue your journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Resident Card */}
            <div className="group relative bg-surface-container-lowest p-8 rounded-full border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between items-center text-center overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-container/5 rounded-full blur-2xl group-hover:bg-primary-container/10 transition-colors"></div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">home</span>
                </div>
                <h3 className="text-3xl font-semibold text-primary mb-3" style={{ fontFamily: 'Manrope', lineHeight: '36px' }}>Resident Portal</h3>
                <p className="text-lg text-on-surface-variant px-4" style={{ fontFamily: 'Inter', lineHeight: '20px', letterSpacing: '0.25px' }}>Access your building services, schedule maintenance, and view community updates.</p>
              </div>
              <button onClick={() => navigate('/login?role=resident')} className="w-full mt-8 bg-primary text-on-primary py-4 rounded-xl font-medium text-lg group-hover:bg-primary-container transition-colors" style={{ fontFamily: 'Inter', lineHeight: '20px', letterSpacing: '0.1px' }}>
                Sign in to your home
              </button>
            </div>
            {/* Guest Card */}
            <div className="group relative bg-surface-container-lowest p-8 rounded-full border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between items-center text-center overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary-container/5 rounded-full blur-2xl group-hover:bg-secondary-container/10 transition-colors"></div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-secondary-container/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary text-3xl">beach_access</span>
                </div>
                <h3 className="text-3xl font-semibold text-secondary mb-3" style={{ fontFamily: 'Manrope', lineHeight: '36px' }}>Guest Stays</h3>
                <p className="text-lg text-on-surface-variant px-4" style={{ fontFamily: 'Inter', lineHeight: '20px', letterSpacing: '0.25px' }}>Browse our curated collection of beachfront escapes and premium vacation rentals.</p>
              </div>
              <button onClick={() => navigate('/guest/search')} className="w-full mt-8 bg-secondary text-on-secondary py-4 rounded-xl font-medium text-lg group-hover:bg-on-secondary-fixed-variant transition-colors" style={{ fontFamily: 'Inter', lineHeight: '20px', letterSpacing: '0.1px' }}>
                Discover your next getaway
              </button>
            </div>
            {/* Owner Card */}
            <div className="group relative bg-surface-container-lowest p-8 rounded-full border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between items-center text-center overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-tertiary-container/5 rounded-full blur-2xl group-hover:bg-tertiary-container/10 transition-colors"></div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-tertiary-container/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-tertiary text-3xl">dashboard</span>
                </div>
                <h3 className="text-3xl font-semibold text-tertiary mb-3" style={{ fontFamily: 'Manrope', lineHeight: '36px' }}>Owner Suite</h3>
                <p className="text-lg text-on-surface-variant px-4" style={{ fontFamily: 'Inter', lineHeight: '20px', letterSpacing: '0.25px' }}>Track performance, manage listings, and oversee your portfolio analytics in real-time.</p>
              </div>
              <button onClick={() => navigate('/login?role=owner')} className="w-full mt-8 bg-tertiary text-on-tertiary py-4 rounded-xl font-medium text-lg group-hover:bg-tertiary-container transition-colors" style={{ fontFamily: 'Inter', lineHeight: '20px', letterSpacing: '0.1px' }}>
                Manage your property portfolio
              </button>
            </div>
          </div>
        </section>
        {/* Trust & Aesthetics Section (Bento Style) */}
        <section className="max-w-7xl mx-auto px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 bg-surface-container-low p-10 rounded-full flex flex-col justify-center">
              <span className="material-symbols-outlined text-primary mb-4">verified_user</span>
              <h4 className="text-3xl font-semibold text-primary mb-4" style={{ fontFamily: 'Manrope', lineHeight: '36px' }}>Unmatched Precision</h4>
              <p className="text-lg text-on-surface-variant" style={{ fontFamily: 'Inter', lineHeight: '20px', letterSpacing: '0.25px' }}>Our management philosophy combines rigorous maintenance standards with the art of coastal hospitality.</p>
            </div>
            <div className="md:col-span-1 rounded-full overflow-hidden h-64 relative">
              <img alt="Coastal architecture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzoX1RJsN14iljkEHAM1mTUomRy8skQKlG_ZnpiQ1XEOJggwWiUdGq7WeteSFim1pzE29nRj2SNqJ_1bQiDTjFAs6jBDRFc11eJt4JDBpLrjDbfahOJPAHZgvCanePq0DK3CWCBcW_vzAPk-9FC7mwcIBHcKkBuAL2BAxhxSIY5LpCjTItcZ9DgVLDmt6MvTvgCZLYECso7OavDLn7VPpAVoaPIQmuD7GjALMboLtuQrh_jBpIjKig2mugZAEcCFBvdGSDF9HDIOgm" />
            </div>
            <div className="md:col-span-1 bg-primary text-on-primary p-10 rounded-full flex flex-col items-center justify-center text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-80 uppercase tracking-widest" style={{ fontFamily: 'Inter', lineHeight: '20px', letterSpacing: '0.1px' }}>Concierge Support</div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer Component */}
      <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold text-teal-900 dark:text-teal-100" style={{ fontFamily: 'Manrope' }}>Reef Property Management</span>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400" style={{ fontFamily: 'Manrope' }}>© 2024 Reef Property Management. Precision in Coastal Living.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-200 transition-colors text-sm" style={{ fontFamily: 'Manrope' }} href="#">Privacy Policy</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-200 transition-colors text-sm" style={{ fontFamily: 'Manrope' }} href="#">Terms of Service</a>
            <a onClick={() => navigate('/login?role=owner')} className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-200 transition-colors text-sm cursor-pointer" style={{ fontFamily: 'Manrope' }}>Owner Login</a>
            <a onClick={() => navigate('/login?role=resident')} className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-200 transition-colors text-sm cursor-pointer" style={{ fontFamily: 'Manrope' }}>Resident Portal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}