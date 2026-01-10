import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { SEO } from './components/ui/SEO';

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <Layout>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </Layout>
    </HelmetProvider>
  );
}

export default App;
