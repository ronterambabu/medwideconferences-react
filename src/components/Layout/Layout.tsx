import { ReactNode, memo } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = memo(({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Fixed navigation wrapper */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Navigation />
      </div>
      
      {/* Content wrapper with correct spacing */}
      <div className="pt-16 relative">
        <Header />
        <main className="relative flex-1 z-0">
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
});

Layout.displayName = 'Layout';

export default Layout;
