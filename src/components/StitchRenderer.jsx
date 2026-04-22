import { useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { stitchScreens } from '@/data/stitchScreens';

export default function StitchRenderer({ slug }) {
  const navigate = useNavigate();
  const location = useLocation();
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
    <div className="w-full h-full flex flex-col">
      {/* Navigation Tabs */}
      {navItems.length > 0 && (
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="flex overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  location.pathname === item.path
                    ? 'text-primary border-primary'
                    : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate('/')}
              className="flex-shrink-0 px-4 py-3 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap"
            >
              Home
            </button>
          </div>
        </div>
      )}

      {/* Back Button - now positioned relative to the iframe */}
      <div className="relative flex-1">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:bg-white transition-colors"
          title="Go Back"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <iframe
          src={screenConfig.codeUrl}
          title={`Stitch screen ${screenConfig.title}`}
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
}