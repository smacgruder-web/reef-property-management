import { useNavigate } from 'react-router-dom';

const roles = [
  {
    id: 'resident',
    title: 'Resident',
    description: 'Manage your rental, pay bills, submit maintenance requests, and connect with your community.',
    route: '/resident/dashboard',
    icon: '🏠',
    color: 'bg-primary/10 text-primary border-primary/20'
  },
  {
    id: 'guest',
    title: 'Guest',
    description: 'Discover and book premium coastal properties for your next vacation.',
    route: '/guest/search',
    icon: '🏖️',
    color: 'bg-secondary/10 text-secondary border-secondary/20'
  },
  {
    id: 'owner',
    title: 'Owner',
    description: 'Monitor your portfolio, track performance, and optimize rental income.',
    route: '/owner/dashboard',
    icon: '🏢',
    color: 'bg-tertiary/10 text-tertiary border-tertiary/20'
  },
  {
    id: 'manager',
    title: 'Property Manager',
    description: 'Oversee multiple properties, manage operations, and ensure tenant satisfaction.',
    route: '/manager/unified',
    icon: '📊',
    color: 'bg-accent/10 text-accent border-accent/20'
  }
];

export default function RolePicker() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-on-background font-headline mb-4">
            Welcome to Reef Property
          </h1>
          <p className="text-lg text-on-surface-variant font-body max-w-2xl mx-auto">
            The premier ecosystem for coastal living and property management.
            Choose your role to explore the platform.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => navigate(role.route)}
              className={`p-8 rounded-xl border-2 transition-all hover:scale-105 hover:shadow-xl text-left ${role.color}`}
            >
              <div className="text-4xl mb-4">{role.icon}</div>
              <h3 className="text-2xl font-bold font-headline mb-2">{role.title}</h3>
              <p className="text-sm font-body leading-relaxed opacity-90">
                {role.description}
              </p>
              <div className="mt-4 text-sm font-semibold">
                Explore →
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-on-surface-variant">
            This is a working prototype showcasing the Reef Property ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
}