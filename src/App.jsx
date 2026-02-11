import React from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Sections/Hero';
import CategorySection from './components/Sections/CategorySection';
import { categories } from './data/resources';

function App() {
  return (
    <Layout>
      <Hero />
      <div id="resources" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category, index) => (
          <CategorySection key={index} title={category.title} items={category.items} />
        ))}
      </div>
    </Layout>
  );
}

export default App;
