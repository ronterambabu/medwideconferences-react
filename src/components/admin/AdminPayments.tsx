import React, { useState, useEffect } from 'react';
import { useEnterpriseSession } from '../../Context/EnterpriseSessionContext';
import { useAdminApi } from '../../services/AdminApiService';

// Types for payment data
interface PaymentRecord {
  id: string;
  stripePaymentIntentId: string;
  amount: number;
  currency: string;
  status: string;
  customerEmail: string;
  customerName?: string;
  paymentDate: string;
  metadata?: { [key: string]: any };
}

interface PaymentStats {
  totalPayments: number;
  totalAmount: number;
  successfulPayments: number;
  pendingPayments: number;
  failedPayments: number;
}

interface PaymentDetailsModalProps {
  payment: PaymentRecord | null;
  onClose: () => void;
}

const PaymentDetailsModal: React.FC<PaymentDetailsModalProps> = ({ payment, onClose }) => {
  if (!payment) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Payment Details</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-600">Payment ID:</label>
            <p className="text-sm text-gray-900">{payment.id}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-600">Stripe Payment Intent:</label>
            <p className="text-sm text-gray-900">{payment.stripePaymentIntentId}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-600">Amount:</label>
            <p className="text-sm text-gray-900">
              {payment.currency.toUpperCase()} {(payment.amount / 100).toFixed(2)}
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-600">Status:</label>
            <p className={`text-sm font-medium ${
              payment.status === 'succeeded' ? 'text-green-600' :
              payment.status === 'pending' ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {payment.status.toUpperCase()}
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-600">Customer Email:</label>
            <p className="text-sm text-gray-900">{payment.customerEmail}</p>
          </div>
          
          {payment.customerName && (
            <div>
              <label className="block text-sm font-medium text-gray-600">Customer Name:</label>
              <p className="text-sm text-gray-900">{payment.customerName}</p>
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-600">Payment Date:</label>
            <p className="text-sm text-gray-900">
              {new Date(payment.paymentDate).toLocaleString()}
            </p>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminPayments: React.FC = () => {
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [stats, setStats] = useState<PaymentStats | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<PaymentRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchEmail, setSearchEmail] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const { isAuthenticated } = useEnterpriseSession();
  const adminApi = useAdminApi();

  // Load payment statistics
  const loadStats = async () => {
    try {
      console.log('[AdminPayments] Loading payment stats...');
      const statsData = await adminApi.getPaymentStats();
      setStats(statsData);
      console.log('[AdminPayments] Stats loaded:', statsData);
    } catch (err: any) {
      console.error('[AdminPayments] Error loading stats:', err);
      setError(`Failed to load statistics: ${err.message}`);
    }
  };

  // Load payments with filtering
  const loadPayments = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('[AdminPayments] Loading payments...');

      let response;
      
      if (searchEmail.trim()) {
        response = await adminApi.searchPaymentsByEmail(searchEmail.trim(), currentPage, 10);
      } else if (filterStatus !== 'all') {
        response = await adminApi.getPaymentsByStatus(filterStatus, currentPage, 10);
      } else {
        response = await adminApi.getAllPayments(currentPage, 10);
      }

      setPayments(response.content || response);
      setTotalPages(response.totalPages || 0);
      console.log('[AdminPayments] Payments loaded:', response);
    } catch (err: any) {
      console.error('[AdminPayments] Error loading payments:', err);
      setError(`Failed to load payments: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    if (isAuthenticated) {
      loadStats();
      loadPayments();
    }
  }, [isAuthenticated, currentPage, filterStatus]);

  // Search by email
  const handleEmailSearch = () => {
    setCurrentPage(0);
    loadPayments();
  };

  // Reset filters
  const resetFilters = () => {
    setFilterStatus('all');
    setSearchEmail('');
    setCurrentPage(0);
    loadPayments();
  };

  if (!isAuthenticated) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-600">Please log in to access payment management.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Payment Management</h1>

      {/* Statistics Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-600">Total Payments</h3>
            <p className="text-2xl font-bold text-blue-900">{stats.totalPayments}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-green-600">Total Amount</h3>
            <p className="text-2xl font-bold text-green-900">${(stats.totalAmount / 100).toFixed(2)}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-green-600">Successful</h3>
            <p className="text-2xl font-bold text-green-900">{stats.successfulPayments}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-yellow-600">Pending</h3>
            <p className="text-2xl font-bold text-yellow-900">{stats.pendingPayments}</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-red-600">Failed</h3>
            <p className="text-2xl font-bold text-red-900">{stats.failedPayments}</p>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status Filter:</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Statuses</option>
              <option value="succeeded">Succeeded</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search by Email:</label>
            <div className="flex gap-2">
              <input
                type="email"
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
                placeholder="customer@example.com"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleEmailSearch}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Search
              </button>
            </div>
          </div>
          
          <div className="flex items-end">
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">Payment Records</h2>
        </div>
        
        {loading ? (
          <div className="p-6 text-center">
            <p>Loading payments...</p>
          </div>
        ) : payments.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-gray-500">No payments found.</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {payments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {payment.id.substring(0, 8)}...
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{payment.customerEmail}</div>
                        {payment.customerName && (
                          <div className="text-sm text-gray-500">{payment.customerName}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {payment.currency.toUpperCase()} {(payment.amount / 100).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          payment.status === 'succeeded' ? 'bg-green-100 text-green-800' :
                          payment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(payment.paymentDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => setSelectedPayment(payment)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Page {currentPage + 1} of {totalPages}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                    disabled={currentPage === 0}
                    className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                    disabled={currentPage >= totalPages - 1}
                    className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Payment Details Modal */}
      <PaymentDetailsModal
        payment={selectedPayment}
        onClose={() => setSelectedPayment(null)}
      />
    </div>
  );
};

export default AdminPayments;
