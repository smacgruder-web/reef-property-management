import { useMemo, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { stitchScreens } from '@/data/stitchScreens';

export default function StitchRenderer({ slug }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const screenConfig = useMemo(
    () => stitchScreens.find((item) => item.slug === slug),
    [slug],
  );

  useEffect(() => {
    const handleMessage = (event) => {
      // Allow messages from the same origin
      if (event.origin !== window.location.origin) return;

      if (event.data && event.data.path) {
        navigate(event.data.path);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [navigate]);

  if (!screenConfig) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-xl rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg">
          <div className="text-2xl font-semibold text-slate-900">Screen not found</div>
          <div className="mt-3 text-sm text-slate-600">The requested Stitch screen does not exist.</div>
        </div>
      </div>
    );
  }

  // Navigation menu items based on role
  const getNavItems = (role) => {
    switch (role) {
      case 'resident':
        return [
          { label: 'Dashboard', path: '/resident/dashboard' },
          { label: 'Billing', path: '/resident/billing' },
          { label: 'Maintenance', path: '/resident/maintenance' },
        ];
      case 'guest':
        return [
          { label: 'Search', path: '/guest/search' },
          { label: 'Guide', path: '/guest/guide' },
        ];
      case 'owner':
        return [
          { label: 'Dashboard', path: '/owner/dashboard' },
          { label: 'Reports', path: '/owner/reports' },
          { label: 'Radar', path: '/owner/radar' },
        ];
      case 'manager':
        return [
          { label: 'Dashboard', path: '/manager/unified' },
          { label: 'Predictor', path: '/manager/predictor' },
        ];
      default:
        return [];
    }
  };

  const role = location.pathname.split('/')[1];
  const navItems = getNavItems(role);

  return (
    <div className="w-full h-full relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:bg-white transition-colors"
        title="Go Back"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Hamburger Menu */}
      {navItems.length > 0 && (
        <div className="fixed top-4 right-4 z-50">
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:bg-white transition-colors"
              title="Menu"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="border-t border-gray-200 my-1"></div>
                <button
                  onClick={() => navigate('/')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Home
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <iframe
        src={screenConfig.codeUrl}
        title={`Stitch screen ${screenConfig.title}`}
        className="w-full h-[100vh] border-0"
      />
    </div>
  );
}