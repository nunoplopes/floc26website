import React, { useEffect, useState } from 'react';
import { getPageBySlug } from '../services/api';

const Home = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const data = await getPageBySlug('home');
        setPageData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!pageData) return <div>No data found</div>;

  const { hero, about, speakers, sponsors, schedule, faq, cta } = pageData.data.attributes;

  return (
    <div>
      {/* Hero Section */}
      <section>
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>
      </section>

      {/* About Section */}
      <section>
        <h2>{about.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: about.description }} />
        <img src={about.image.data.attributes.url} alt={about.title} />
      </section>

      {/* Add other sections similarly */}
    </div>
  );
};

export default Home; 