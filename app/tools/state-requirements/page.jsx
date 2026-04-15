import StateRequirementsContent from './StateRequirementsContent';

export const metadata = {
  title: 'State Senior Living Insurance Requirements Lookup',
  description: 'Look up senior living insurance requirements by state. See minimum liability limits, workers comp rules, filing deadlines, and state-specific regulations for all 50 states.',
  alternates: {
    canonical: 'https://alkemeins.com/senior-living/tools/state-requirements/',
  },
  openGraph: {
    title: 'State Senior Living Insurance Requirements Lookup | ALKEME Insurance Services',
    description: 'Interactive tool to look up senior living insurance requirements for any US state.',
    url: 'https://alkemeins.com/senior-living/tools/state-requirements/',
    type: 'website',
  },
};

export default function StateRequirementsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'State Senior Living Insurance Requirements Lookup',
    url: 'https://alkemeins.com/senior-living/tools/state-requirements/',
    applicationCategory: 'BusinessApplication',
    provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
    description: 'Look up senior living insurance requirements for any US state including minimums, workers comp, and filings.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StateRequirementsContent />
    </>
  );
}
