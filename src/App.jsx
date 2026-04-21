import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Bookings from './pages/Bookings';
import Leasing from './pages/Leasing';
import Maintenance from './pages/Maintenance';
import Hoa from './pages/Hoa';
import PaymentsPage from './pages/Payments';
import Owners from './pages/Owners';
import Compliance from './pages/Compliance';
import Reports from './pages/Reports';
import Admin from './pages/Admin';
import StitchGallery from './pages/StitchGallery';
import StitchScreen from './pages/StitchScreen';
import PaymentSuccessful from './pages/PaymentSuccessful';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/leasing" element={<Leasing />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/hoa" element={<Hoa />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/payment-successful" element={<PaymentSuccessful />} />
        <Route path="/stitch" element={<StitchGallery />} />
        <Route path="/stitch/:screen" element={<StitchScreen />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App