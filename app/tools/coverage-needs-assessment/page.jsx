import CoverageNeedsContent from './CoverageNeedsContent';

export const metadata = {
  title: 'Senior Living Coverage Needs Assessment',
  description: 'Find out exactly what insurance coverage your senior living facility needs. Select your facility type and services to see recommended coverages, typical limits, and compliance requirements.',
  alternates: {
    canonical: 'https://alkemeins.com/senior-living/tools/coverage-needs-assessment/',
  },
  openGraph: {
    title: 'Senior Living Coverage Needs Assessment | ALKEME Insurance Services',
    description: 'Interactive tool to determine your senior living insurance requirements based on facility type and services.',
    url: 'https://alkemeins.com/senior-living/tools/coverage-needs-assessment/',
    type: 'website',
  },
};

export default function CoverageNeedsPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Senior Living Coverage Needs Assessment',
      url: 'https://alkemeins.com/senior-living/tools/coverage-needs-assessment/',
      applicationCategory: 'BusinessApplication',
      provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
      description: 'Interactive tool to determine your senior living facility insurance requirements by facility type and services.',
    },
  ];

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <CoverageNeedsContent />
    </>
  );
}
