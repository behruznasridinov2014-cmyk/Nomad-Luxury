import React from 'react';
import { RouterProvider, RouteConfig } from './router/Router';
import { LanguageProvider } from './i18n/LanguageContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { BookingProvider } from './context/BookingContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { ResortsPage } from './pages/ResortsPage';
import { ResortDetailPage } from './pages/ResortDetailPage';
import { ToursPage } from './pages/ToursPage';
import { TourDetailPage } from './pages/TourDetailPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { PlannerPage } from './pages/PlannerPage';
import { BookingPage } from './pages/BookingPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { JournalPage } from './pages/JournalPage';
import { JournalDetailPage } from './pages/JournalDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Shared Layout Wrapper
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F0] text-[#26332F]">
      <Navbar />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const routes: RouteConfig[] = [
  { path: '/', element: <Layout><HomePage /></Layout> },
  { path: '/destinations', element: <Layout><DestinationsPage /></Layout> },
  { path: '/destinations/:id', element: <Layout><DestinationDetailPage /></Layout> },
  { path: '/resorts', element: <Layout><ResortsPage /></Layout> },
  { path: '/resorts/:id', element: <Layout><ResortDetailPage /></Layout> },
  { path: '/tours', element: <Layout><ToursPage /></Layout> },
  { path: '/tours/:id', element: <Layout><TourDetailPage /></Layout> },
  { path: '/experiences', element: <Layout><ExperiencesPage /></Layout> },
  { path: '/planner', element: <Layout><PlannerPage /></Layout> },
  { path: '/booking', element: <Layout><BookingPage /></Layout> },
  { path: '/favorites', element: <Layout><FavoritesPage /></Layout> },
  { path: '/journal', element: <Layout><JournalPage /></Layout> },
  { path: '/journal/:slug', element: <Layout><JournalDetailPage /></Layout> },
  { path: '/about', element: <Layout><AboutPage /></Layout> },
  { path: '/contact', element: <Layout><ContactPage /></Layout> },
  { path: '/faq', element: <Layout><FAQPage /></Layout> },
  { path: '/privacy', element: <Layout><PrivacyPage /></Layout> },
  { path: '/terms', element: <Layout><TermsPage /></Layout> },
  { path: '/not-found', element: <Layout><NotFoundPage /></Layout> },
  { path: '*', element: <Layout><NotFoundPage /></Layout> }
];

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <FavoritesProvider>
        <BookingProvider>
          <RouterProvider routes={routes} />
        </BookingProvider>
      </FavoritesProvider>
    </LanguageProvider>
  );
};

export default App;
