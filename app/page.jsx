import HomeContent from './HomeContent';

export const metadata = {
  title: 'Senior Living Insurance Solutions',
  description: 'ALKEME Insurance Services provides specialized insurance for senior living facilities including assisted living, skilled nursing, memory care, and continuing care retirement communities.',
  openGraph: {
    title: 'Senior Living Insurance | ALKEME Insurance Services',
    description: 'Specialized insurance for assisted living, skilled nursing, memory care, and senior care facilities across all 50 states.',
    url: 'https://alkemeins.com/senior-living/',
  },
};

export default function HomePage() {
  return (
    <>
      <meta name="author" content="ALKEME Insurance Services" />
      <meta property="article:published_time" content="2025-06-01T00:00:00Z" />
      <meta property="article:modified_time" content="2026-04-01T00:00:00Z" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceAgency',
            name: 'ALKEME Insurance Services',
            url: 'https://alkemeins.com',
            telephone: '+18559255363',
            email: 'info@alkemeins.com',
            description: 'ALKEME Insurance Services provides specialized senior living insurance solutions for assisted living, skilled nursing, memory care, and continuing care retirement communities across all 50 states.',
            areaServed: { '@type': 'Country', name: 'United States' },
            parentOrganization: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
            foundingDate: '2003',
            numberOfEmployees: { '@type': 'QuantitativeValue', value: 100 },
            knowsAbout: ['Senior Living Insurance', 'Assisted Living Insurance', 'Skilled Nursing Insurance', 'Memory Care Insurance'],
            hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional License', name: 'Licensed Insurance Brokerage' },
            serviceType: ['Senior Living Insurance', 'Assisted Living Insurance', 'Skilled Nursing Facility Insurance', 'Memory Care Insurance', 'Professional Liability', 'Abuse and Molestation Coverage', 'Workers Compensation'],
            citation: { '@type': 'CreativeWork', name: 'Insurance Information Institute', url: 'https://www.iii.org' },
            about: { '@type': 'Thing', name: 'Senior Living Insurance' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What insurance does a senior living facility need?', acceptedAnswer: { '@type': 'Answer', text: 'At minimum, most senior living facilities require general liability, professional liability, workers\' compensation, and commercial property coverage. Depending on your operation, you should also carry abuse and molestation liability, employment practices liability, commercial auto, cyber liability, and umbrella coverage.' } },
              { '@type': 'Question', name: 'Do you insure all types of senior care facilities?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work with assisted living communities, skilled nursing facilities, memory care units, independent living communities, CCRCs, home health agencies, adult day care centers, hospice providers, rehabilitation centers, and multi-service campuses.' } },
              { '@type': 'Question', name: 'How is senior living insurance different from standard commercial insurance?', acceptedAnswer: { '@type': 'Answer', text: 'Senior living insurance must address exposures unique to caring for vulnerable populations, including professional liability for care delivery, abuse and molestation coverage excluded from standard policies, regulatory defense costs, and elevated workers compensation risk from patient handling.' } },
              { '@type': 'Question', name: 'How quickly can I get a quote?', acceptedAnswer: { '@type': 'Answer', text: 'In most cases, we can provide an initial quote within 48 hours of receiving your completed information. For more complex accounts or multi-site operations, the process may take slightly longer.' } },
              { '@type': 'Question', name: 'Does professional liability cover abuse allegations?', acceptedAnswer: { '@type': 'Answer', text: 'No. Standard professional liability policies contain abuse and molestation exclusions. A separate, dedicated policy is required to cover these claims.' } },
              { '@type': 'Question', name: 'Can coverage be customized for our specific operation?', acceptedAnswer: { '@type': 'Answer', text: 'Every program we place is built around your specific operation. We consider your care model, bed count, acuity level, staffing ratios, regulatory environment, and claims history.' } },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Senior Living Insurance Solutions',
            datePublished: '2025-06-01',
            dateModified: '2026-04-01',
            author: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
            publisher: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
          }),
        }}
      />
      <HomeContent />
    </>
  );
}
