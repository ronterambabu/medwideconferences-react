import { config } from '../config';
import { useEnterpriseSession } from '../Context/EnterpriseSessionContext';

// Admin API service with JWT authentication
class AdminApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = config.apiBaseUrl;
  }

  // Helper method to get authorization headers
  private getAuthHeaders(): { [key: string]: string } {
    const token = localStorage.getItem(config.auth.tokenKey) || this.getCookie(config.auth.cookieName);
    
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  // Utility to get cookie by name
  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()!.split(';').shift() || null;
    return null;
  }

  // Generic fetch method with authentication
  private async authenticatedFetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      credentials: 'include', // Include cookies
      headers: this.getAuthHeaders(),
    };

    const mergedOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    console.log(`[AdminApiService] Making ${mergedOptions.method || 'GET'} request to:`, url);
    console.log('[AdminApiService] Auth headers:', mergedOptions.headers);

    const response = await fetch(url, mergedOptions);
    
    if (!response.ok) {
      if (response.status === 401) {
        console.error('[AdminApiService] Unauthorized - redirecting to login');
        // Handle unauthorized - redirect to login
        window.location.href = '/admin-login';
        throw new Error('Unauthorized access');
      }
      
      let errorMsg = `Request failed with status ${response.status}`;
      try {
        const errorData = await response.json();
        errorMsg = errorData.message || errorMsg;
      } catch {
        // Ignore JSON parsing errors
      }
      throw new Error(errorMsg);
    }

    return response;
  }

  // Public admin login (no auth required)
  async adminLogin(email: string, password: string) {
    const response = await fetch(`${this.baseUrl}/admin/api/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      let errorMsg = 'Login failed';
      try {
        const errorData = await response.json();
        errorMsg = errorData.message || errorMsg;
      } catch {}
      throw new Error(errorMsg);
    }

    return await response.json();
  }

  // Admin logout (auth required)
  async adminLogout() {
    return await this.authenticatedFetch('/admin/api/admin/logout', {
      method: 'POST',
    });
  }

  // Payment-related APIs (auth required)
  async getPaymentStats() {
    const response = await this.authenticatedFetch('/admin/payments/stats');
    return await response.json();
  }

  async getAllPayments(page: number = 0, size: number = 10) {
    const response = await this.authenticatedFetch(`/admin/payments?page=${page}&size=${size}`);
    return await response.json();
  }

  async getPaymentById(id: string) {
    const response = await this.authenticatedFetch(`/admin/payments/${id}`);
    return await response.json();
  }

  async getPaymentsByStatus(status: string, page: number = 0, size: number = 10) {
    const response = await this.authenticatedFetch(`/admin/payments/status/${status}?page=${page}&size=${size}`);
    return await response.json();
  }

  async getPaymentsByDateRange(startDate: string, endDate: string, page: number = 0, size: number = 10) {
    const response = await this.authenticatedFetch(`/admin/payments/date-range?startDate=${startDate}&endDate=${endDate}&page=${page}&size=${size}`);
    return await response.json();
  }

  async searchPaymentsByEmail(email: string, page: number = 0, size: number = 10) {
    const response = await this.authenticatedFetch(`/admin/payments/search?email=${email}&page=${page}&size=${size}`);
    return await response.json();
  }

  // Registration-related APIs (auth required)
  async getAllRegistrations(page: number = 0, size: number = 10) {
    const response = await this.authenticatedFetch(`/admin/registrations?page=${page}&size=${size}`);
    return await response.json();
  }

  async getRegistrationById(id: string) {
    const response = await this.authenticatedFetch(`/admin/registrations/${id}`);
    return await response.json();
  }

  // Event management APIs (auth required)
  async createSession(sessionData: any) {
    const response = await this.authenticatedFetch('/admin/sessions', {
      method: 'POST',
      body: JSON.stringify(sessionData),
    });
    return await response.json();
  }

  async getAllSessions() {
    const response = await this.authenticatedFetch('/admin/sessions');
    return await response.json();
  }

  async updateSession(id: string, sessionData: any) {
    const response = await this.authenticatedFetch(`/admin/sessions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(sessionData),
    });
    return await response.json();
  }

  async deleteSession(id: string) {
    const response = await this.authenticatedFetch(`/admin/sessions/${id}`, {
      method: 'DELETE',
    });
    return await response.json();
  }

  // Interests management APIs (auth required)
  async createInterest(interestData: any) {
    const response = await this.authenticatedFetch('/admin/interests', {
      method: 'POST',
      body: JSON.stringify(interestData),
    });
    return await response.json();
  }

  async getAllInterests() {
    const response = await this.authenticatedFetch('/admin/interests');
    return await response.json();
  }

  async updateInterest(id: string, interestData: any) {
    const response = await this.authenticatedFetch(`/admin/interests/${id}`, {
      method: 'PUT',
      body: JSON.stringify(interestData),
    });
    return await response.json();
  }

  async deleteInterest(id: string) {
    const response = await this.authenticatedFetch(`/admin/interests/${id}`, {
      method: 'DELETE',
    });
    return await response.json();
  }

  // Accommodation management APIs (auth required)
  async createAccommodation(accommodationData: any) {
    const response = await this.authenticatedFetch('/admin/accommodations', {
      method: 'POST',
      body: JSON.stringify(accommodationData),
    });
    return await response.json();
  }

  async getAllAccommodations() {
    const response = await this.authenticatedFetch('/admin/accommodations');
    return await response.json();
  }

  async updateAccommodation(id: string, accommodationData: any) {
    const response = await this.authenticatedFetch(`/admin/accommodations/${id}`, {
      method: 'PUT',
      body: JSON.stringify(accommodationData),
    });
    return await response.json();
  }

  async deleteAccommodation(id: string) {
    const response = await this.authenticatedFetch(`/admin/accommodations/${id}`, {
      method: 'DELETE',
    });
    return await response.json();
  }

  // Abstract submission management APIs (auth required)
  async getAllAbstractSubmissions(page: number = 0, size: number = 10) {
    const response = await this.authenticatedFetch(`/admin/abstracts?page=${page}&size=${size}`);
    return await response.json();
  }

  async getAbstractSubmissionById(id: string) {
    const response = await this.authenticatedFetch(`/admin/abstracts/${id}`);
    return await response.json();
  }

  async updateAbstractStatus(id: string, status: string) {
    const response = await this.authenticatedFetch(`/admin/abstracts/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
    return await response.json();
  }
}

// Create a singleton instance
export const adminApiService = new AdminApiService();

// Hook to use the admin API service with session context
export const useAdminApi = () => {
  const { getAuthHeaders, token } = useEnterpriseSession();
  
  // Return service instance with all methods and current auth info
  return {
    // Auth info
    isAuthenticated: !!token,
    authHeaders: getAuthHeaders(),
    
    // All service methods
    ...adminApiService,
  };
};
