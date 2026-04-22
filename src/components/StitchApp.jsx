import { useLocation } from 'react-router-dom';
import StitchRenderer from './StitchRenderer';
import { routeMapping } from '../data/routeMapping';

export default function StitchApp() {
  const location = useLocation();
  const slug = routeMapping[location.pathname];

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-semibold text-slate-900">Route not mapped</div>
      </div>
    );
  }

  return <StitchRenderer slug={slug} />;
}