import React, { createContext, useContext, useState, useEffect } from 'react';
import { config } from '../config';

// Utility functions for token management
const getTokenFromCookie = (): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${config.auth.cookieName}=`);
  if (parts.length === 2) return parts.pop()!.split(';').shift() || null;
  return null;
};

const getTokenFromStorage = (): string | null => {
  return localStorage.getItem(config.auth.tokenKey);
};

const setTokenInStorage = (token: string): void => {
  localStorage.setItem(config.auth.tokenKey, token);
};

const removeTokenFromStorage = (): void => {
  localStorage.removeItem(config.auth.tokenKey);
};

const clearAuthCookie = (): void => {
  document.cookie = `${config.auth.cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=; secure=true; samesite=none;`;
};

// Admin user interface
interface AdminUser {
  id: number;
  email: string;
  name: string;
  role: string;
}

// Session context interface
interface SessionContext {
  user: AdminUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (userData: AdminUser, accessToken: string, refreshToken?: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  getAuthHeaders: () => { [key: string]: string };
}

const EnterpriseSessionContext = createContext<SessionContext | undefined>(undefined);

export const EnterpriseSessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isAuthenticated = !!user && !!token;

  // Initialize session on mount
  useEffect(() => {
    const initializeSession = () => {
      // Try to get token from localStorage first, then cookie
      let storedToken = getTokenFromStorage() || getTokenFromCookie();
      
      if (storedToken) {
        setToken(storedToken);
        // In a real app, you might want to validate the token and get user info
        // For now, we'll assume the token is valid if it exists
        console.log('[SessionContext] Token found, user needs to be validated');
      }
      
      setIsLoading(false);
    };

    initializeSession();
  }, []);

  const login = async (userData: AdminUser, accessToken: string, _refreshToken?: string): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      // Store token in localStorage for persistence
      setTokenInStorage(accessToken);
      
      // Update state
      setUser(userData);
      setToken(accessToken);
      
      console.log('[SessionContext] Login successful:', userData);
    } catch (err: any) {
      console.error('[SessionContext] Login error:', err);
      setError(err.message || 'Login failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = (): void => {
    try {
      // Clear stored token
      removeTokenFromStorage();
      clearAuthCookie();
      
      // Reset state
      setUser(null);
      setToken(null);
      setError(null);
      
      console.log('[SessionContext] Logout successful');
    } catch (err: any) {
      console.error('[SessionContext] Logout error:', err);
      setError(err.message || 'Logout failed');
    }
  };

  const clearError = (): void => {
    setError(null);
  };

  const getAuthHeaders = (): { [key: string]: string } => {
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  };

  const value: SessionContext = {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    clearError,
    getAuthHeaders,
  };

  return (
    <EnterpriseSessionContext.Provider value={value}>
      {children}
    </EnterpriseSessionContext.Provider>
  );
};

export const useEnterpriseSession = (): SessionContext => {
  const context = useContext(EnterpriseSessionContext);
  if (context === undefined) {
    throw new Error('useEnterpriseSession must be used within an EnterpriseSessionProvider');
  }
  return context;
};
