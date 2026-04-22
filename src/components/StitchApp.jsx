import { useLocation, useNavigate } from 'react-router-dom';
import StitchRenderer from './StitchRenderer';
import MaintenanceRequestForm from './forms/MaintenanceRequestForm';
import { routeMapping } from '../data/routeMapping';
import { useAuth } from '@/lib/AuthContext';

export default function StitchApp() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const slug = routeMapping[location.pathname];

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-semibold text-slate-900">Route not mapped</div>
      </div>
    );
  }

  // Role-based access control
  const roleFromPath = location.pathname.split('/')[1];
  if (roleFromPath === 'resident' || roleFromPath === 'owner' || roleFromPath === 'manager') {
    if (!isAuthenticated) {
      navigate('/login?role=' + roleFromPath);
      return null;
    }
    if (user?.role !== roleFromPath && !(user?.role === 'owner' && roleFromPath === 'manager')) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-2xl font-semibold text-slate-900">Access denied: incorrect role</div>
        </div>
      );
    }
  }

  // Render functional components for specific screens
  if (slug === 'new_request_category_1') {
    return <MaintenanceRequestForm />;
  }

  return <StitchRenderer slug={slug} />;
}