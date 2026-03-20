import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppShell } from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ApproachPage from './pages/ApproachPage';
import PathwaysPage from './pages/PathwaysPage';
import ResearchPage from './pages/ResearchPage';
import CommunityPage from './pages/CommunityPage';
import UpdatesPage from './pages/UpdatesPage';
import SupportPage from './pages/SupportPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function useHashRoute() {
  const getRoute = () => window.location.hash.replace('#/', '') || 'home';
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    if (!window.location.hash) {
      window.location.hash = '#/home';
    }
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}

export default function App() {
  const route = useHashRoute();

  const CurrentPage = useMemo(() => {
    switch (route) {
      case 'home':
        return HomePage;
      case 'about':
        return AboutPage;
      case 'approach':
        return ApproachPage;
      case 'pathways':
        return PathwaysPage;
      case 'research':
        return ResearchPage;
      case 'community':
        return CommunityPage;
      case 'updates':
        return UpdatesPage;
      case 'support':
        return SupportPage;
      case 'contact':
        return ContactPage;
      default:
        return NotFoundPage;
    }
  }, [route]);

  return (
    <AppShell route={route}>
      <AnimatePresence mode="wait">
        <motion.div
          key={route}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22 }}
        >
          <CurrentPage />
        </motion.div>
      </AnimatePresence>
    </AppShell>
  );
}
