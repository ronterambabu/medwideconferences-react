import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEnterpriseSession } from '../../Context/EnterpriseSessionContext';
import { adminApiService } from '../../services/AdminApiService';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login, error: sessionError, clearError } = useEnterpriseSession();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    clearError();
    setIsLoading(true);

    try {
      console.log('[AdminLogin] Attempting login...');
      
      const responseData = await adminApiService.adminLogin(email, password);
      console.log('[AdminLogin] Login responseData:', responseData);

      // Handle different response formats
      const adminData = responseData.user || responseData;
      const accessToken = responseData.token || responseData.accessToken;
      const refreshToken = responseData.refreshToken;

      if (!adminData || !adminData.role) {
        throw new Error('Invalid user data returned from server');
      }

      if (!accessToken) {
        throw new Error('No authentication token received');
      }

      // Use enterprise session manager to set the session
      await login(adminData, accessToken, refreshToken);

      console.log('[AdminLogin] Enterprise session established, redirecting to dashboard');
      navigate('/admin-dashboard');

    } catch (err: any) {
      console.error('[AdminLogin] Login error:', err);
      setError(err.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-[#111111] rounded-2xl shadow-lg p-8 border border-green-600">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-6">Admin Login</h2>
        
        {(error || sessionError) && (
          <div className="bg-red-600 text-white p-3 rounded-md mb-4 text-center">
            {error || sessionError}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-3 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="admin@renewablemeet.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-3 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-black font-semibold py-3 rounded-lg transition-all"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
