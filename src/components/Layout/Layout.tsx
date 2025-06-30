import { ReactNode, memo } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16"> {/* Add padding-top to account for fixed navigation */}
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default memo(Layout);
