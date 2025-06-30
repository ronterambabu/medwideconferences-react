import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Sessions from './pages/Sessions';
import AbstractSubmission from './pages/AbstractSubmission';
import Registration from './pages/Registration';
import Speakers from './pages/Speakers';
import OCM from './pages/OCM';
import Venue from './pages/Venue';
import Brochure from './pages/Brochure';
import AboutUs from './pages/AboutUs';
import TentativeProgram from './pages/TentativeProgram';
import ContactUs from './pages/ContactUs';
import Sponsorship from './pages/Sponsorship';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/abstract-submission" element={<AbstractSubmission />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/ocm" element={<OCM />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/tentative-program" element={<TentativeProgram />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
