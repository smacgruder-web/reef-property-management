import { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { stitchScreens } from '@/data/stitchScreens';

export default function StitchRenderer({ slug }) {
  const navigate = useNavigate();
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

  return (
    <div className="w-full h-full">
      <iframe
        src={screenConfig.codeUrl}
        title={`Stitch screen ${screenConfig.title}`}
        className="w-full h-[100vh] border-0"
      />
    </div>
  );
}