import { states, getStateBySlug } from '../../../data/states';
import StatePageContent from './StatePageContent';

export function generateStaticParams() {
  return states.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return {};
  return {
    title: state.metaTitle,
    description: state.metaDescription,
    alternates: {
      canonical: `https://alkemeins.com/senior-living/states/${state.slug}/`,
    },
    openGraph: {
      title: `${state.metaTitle} | ALKEME Insurance Services`,
      description: state.metaDescription,
      url: `https://alkemeins.com/senior-living/states/${state.slug}/`,
      type: 'website',
    },
  };
}

export default async function StatePage({ params }) {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return <div>State not found</div>;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Senior Living Insurance in ${state.name}`,
      provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
      description: state.metaDescription,
      url: `https://alkemeins.com/senior-living/states/${state.slug}/`,
      serviceType: 'Senior Living Insurance',
      areaServed: { '@type': 'State', name: state.name, containedIn: { '@type': 'Country', name: 'United States' } },
      citation: { '@type': 'CreativeWork', name: 'Insurance Information Institute', url: 'https://www.iii.org' },
      about: { '@type': 'Thing', name: state.name },
    },
    ...(state.faqs?.length ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: state.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    }] : []),
  ];

  return (
    <>
      <meta name="author" content="ALKEME Insurance Services" />
      <meta property="article:published_time" content="2025-06-01T00:00:00Z" />
      <meta property="article:modified_time" content="2026-04-01T00:00:00Z" />
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: state.name, datePublished: '2025-06-01', dateModified: '2026-04-01', author: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' }, publisher: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', '@id': `https://alkemeins.com/senior-living/states/${state.slug}/`, name: 'ALKEME Insurance Services', url: 'https://alkemeins.com', telephone: '+18559255363', email: 'info@alkemeins.com', areaServed: { '@type': 'State', name: state.name }, priceRange: '$$' }) }} />
      <StatePageContent state={state} />
    </>
  );
}
