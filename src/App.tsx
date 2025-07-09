import { memo, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout/Layout';
import { routes } from './routes/config';
import { EnterpriseSessionProvider } from './Context/EnterpriseSessionContext';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse text-primary-600">Loading...</div>
  </div>
);

const App = memo(() => {
  return (
    <ErrorBoundary>
      <EnterpriseSessionProvider>
        <Router>
          <Routes>
            {/* Admin routes - outside of main layout */}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
            
            {/* Main application routes */}
            <Route path="/*" element={
              <Layout>
                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    {routes.map(({ path, component: Component }) => (
                      <Route
                        key={path}
                        path={path}
                        element={<Component />}
                      />
                    ))}
                  </Routes>
                </Suspense>
              </Layout>
            } />
          </Routes>
        </Router>
      </EnterpriseSessionProvider>
    </ErrorBoundary>
  );
});

App.displayName = 'App';

export default App;
