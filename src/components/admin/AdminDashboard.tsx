import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { useEnterpriseSession } from '../../Context/EnterpriseSessionContext';
import AdminPayments from './AdminPayments';
import { adminApiService } from '../../services/AdminApiService';

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen">
      <div className="p-4">
        <h2 className="text-xl font-bold text-green-400">Admin Panel</h2>
      </div>
      
      <nav className="mt-6">
        <Link
          to="/admin-dashboard"
          className={`block px-4 py-2 text-sm hover:bg-gray-700 ${
            isActive('/admin-dashboard') ? 'bg-gray-700 border-r-2 border-green-400' : ''
          }`}
        >
          Dashboard
        </Link>
        
        <Link
          to="/admin-dashboard/payments"
          className={`block px-4 py-2 text-sm hover:bg-gray-700 ${
            isActive('/admin-dashboard/payments') ? 'bg-gray-700 border-r-2 border-green-400' : ''
          }`}
        >
          Payments
        </Link>
        
        <Link
          to="/admin-dashboard/registrations"
          className={`block px-4 py-2 text-sm hover:bg-gray-700 ${
            isActive('/admin-dashboard/registrations') ? 'bg-gray-700 border-r-2 border-green-400' : ''
          }`}
        >
          Registrations
        </Link>
        
        <Link
          to="/admin-dashboard/sessions"
          className={`block px-4 py-2 text-sm hover:bg-gray-700 ${
            isActive('/admin-dashboard/sessions') ? 'bg-gray-700 border-r-2 border-green-400' : ''
          }`}
        >
          Sessions
        </Link>
        
        <Link
          to="/admin-dashboard/interests"
          className={`block px-4 py-2 text-sm hover:bg-gray-700 ${
            isActive('/admin-dashboard/interests') ? 'bg-gray-700 border-r-2 border-green-400' : ''
          }`}
        >
          Interests
        </Link>
        
        <Link
          to="/admin-dashboard/accommodations"
          className={`block px-4 py-2 text-sm hover:bg-gray-700 ${
            isActive('/admin-dashboard/accommodations') ? 'bg-gray-700 border-r-2 border-green-400' : ''
          }`}
        >
          Accommodations
        </Link>
        
        <Link
          to="/admin-dashboard/abstracts"
          className={`block px-4 py-2 text-sm hover:bg-gray-700 ${
            isActive('/admin-dashboard/abstracts') ? 'bg-gray-700 border-r-2 border-green-400' : ''
          }`}
        >
          Abstract Submissions
        </Link>
      </nav>
    </div>
  );
};

const AdminHeader: React.FC = () => {
  const { user, logout } = useEnterpriseSession();
  
  const handleLogout = async () => {
    try {
      // Call backend logout endpoint
      await adminApiService.adminLogout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Always clear local session
      logout();
    }
  };
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Administration</h1>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Welcome, {user?.name || user?.email}
          </span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

const DashboardHome: React.FC = () => {
  const { user } = useEnterpriseSession();
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome to the Admin Panel</h2>
        <p className="text-gray-600 mb-4">
          You are logged in as: <strong>{user?.email}</strong> ({user?.role})
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/admin-dashboard/payments"
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-blue-600">Payment Management</h3>
            <p className="text-sm text-gray-600 mt-1">
              View and manage payment records, statistics, and transactions.
            </p>
          </Link>
          
          <Link
            to="/admin-dashboard/registrations"
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-green-600">Registrations</h3>
            <p className="text-sm text-gray-600 mt-1">
              Manage user registrations and conference attendees.
            </p>
          </Link>
          
          <Link
            to="/admin-dashboard/sessions"
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-purple-600">Sessions</h3>
            <p className="text-sm text-gray-600 mt-1">
              Configure conference sessions and presentations.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const PlaceholderComponent: React.FC<{ title: string }> = ({ title }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-6">{title}</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-600">This section is under development.</p>
      <p className="text-sm text-gray-500 mt-2">
        The API integration is ready, but the UI components need to be implemented.
      </p>
    </div>
  </div>
);

const AdminDashboard: React.FC = () => {
  const { isAuthenticated, isLoading } = useEnterpriseSession();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }
  
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/payments" element={<AdminPayments />} />
            <Route path="/registrations" element={<PlaceholderComponent title="Registrations" />} />
            <Route path="/sessions" element={<PlaceholderComponent title="Sessions" />} />
            <Route path="/interests" element={<PlaceholderComponent title="Interests" />} />
            <Route path="/accommodations" element={<PlaceholderComponent title="Accommodations" />} />
            <Route path="/abstracts" element={<PlaceholderComponent title="Abstract Submissions" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
