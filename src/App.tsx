import { Suspense, lazy } from 'react';
import { I18nProvider } from './lib/i18n';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollIndicator } from './components/shared/ScrollIndicator';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/sections/Hero').then(m => ({ default: m.Hero })));
const About = lazy(() => import('./components/sections/About').then(m => ({ default: m.About })));
const Experience = lazy(() => import('./components/sections/Experience').then(m => ({ default: m.Experience })));
const Projects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })));
const Research = lazy(() => import('./components/sections/Research').then(m => ({ default: m.Research })));
const Skills = lazy(() => import('./components/sections/Skills').then(m => ({ default: m.Skills })));
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));

// Loading fallback component
const SectionLoader = () => (
  <div className="section-chrome section-anchor mt-32 min-h-[200px] flex items-center justify-center">
    <div className="text-body text-muted">Loading...</div>
  </div>
);

/**
 * Main application component
 * Wraps all sections with error boundaries and individual Suspense boundaries
 * for better loading UX
 */
function App() {
  return (
    <ErrorBoundary>
      <I18nProvider>
        <ScrollIndicator />
        <Header />
        <main id="main-content" className="relative z-10 mx-auto w-full max-w-7xl px-8 pb-32 pt-32" role="main">
          <ErrorBoundary>
            <Suspense fallback={<SectionLoader />}>
              <Hero />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<SectionLoader />}>
              <About />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<SectionLoader />}>
              <Experience />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<SectionLoader />}>
              <Projects />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<SectionLoader />}>
              <Research />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<SectionLoader />}>
              <Skills />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<SectionLoader />}>
              <Contact />
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </I18nProvider>
    </ErrorBoundary>
  );
}

export default App;
