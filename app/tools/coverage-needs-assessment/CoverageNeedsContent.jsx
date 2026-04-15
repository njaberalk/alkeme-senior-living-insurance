'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Breadcrumbs from '../../../components/Breadcrumbs';
import QuoteForm from '../../../components/QuoteForm';
import Footer from '../../../components/Footer';

const facilityTypes = [
  { id: 'assisted-living', label: 'Assisted Living', description: 'Residential care with ADL assistance and medication management',
    coverages: [
      { coverage: 'General Liability', minimum: '$1M / $2M', slug: 'general-liability', notes: 'Required for licensing in most states' },
      { coverage: 'Professional Liability', minimum: '$1M / $3M', slug: 'professional-liability', notes: 'Covers care delivery, medication errors, and supervision claims' },
      { coverage: 'Abuse & Molestation', minimum: '$1M / $3M', slug: 'abuse-molestation', notes: 'Excluded from GL — separate policy required for vulnerable adults' },
      { coverage: 'Workers\' Compensation', minimum: 'Per state law', slug: 'workers-compensation', notes: 'Required in virtually every state for all employees' },
      { coverage: 'Commercial Property', minimum: 'Replacement cost', slug: 'commercial-property', notes: 'Buildings, equipment, business income protection' },
      { coverage: 'Umbrella / Excess', minimum: '$2M–$5M', slug: 'umbrella-excess', notes: 'Recommended above primary GL, PL, and auto limits' },
      { coverage: 'Employment Practices', minimum: '$1M', slug: 'employment-practices', notes: 'High turnover makes EPLI essential in senior care' },
    ],
    additionalNotes: 'Assisted living facilities face significant professional liability from medication management, falls, and elopement. Ensure your program addresses all three.',
  },
  { id: 'skilled-nursing', label: 'Skilled Nursing Facility', description: '24-hour licensed nursing care with Medicare/Medicaid participation',
    coverages: [
      { coverage: 'Professional Liability', minimum: '$1M–$3M / $3M–$5M', slug: 'professional-liability', notes: 'Highest severity claims in senior care — adequate limits critical' },
      { coverage: 'General Liability', minimum: '$1M / $2M', slug: 'general-liability', notes: 'Required for licensing and CMS participation' },
      { coverage: 'Abuse & Molestation', minimum: '$1M / $3M', slug: 'abuse-molestation', notes: 'Mandatory separate policy — GL and PL exclude these claims' },
      { coverage: 'Workers\' Compensation', minimum: 'Per state law', slug: 'workers-compensation', notes: 'Highest injury rates in senior care from patient handling' },
      { coverage: 'Directors & Officers', minimum: '$1M–$2M', slug: 'directors-officers', notes: 'Regulatory enforcement and CMS compliance exposure' },
      { coverage: 'Cyber Liability', minimum: '$1M–$2M', slug: 'cyber-liability', notes: 'HIPAA-protected EHR systems create significant data breach exposure' },
      { coverage: 'Umbrella / Excess', minimum: '$5M–$10M', slug: 'umbrella-excess', notes: 'Higher limits needed due to claim severity in SNF settings' },
    ],
    additionalNotes: 'SNFs face the most complex insurance requirements in senior care. Professional liability claim severity justifies higher limits and robust umbrella coverage.',
  },
  { id: 'memory-care', label: 'Memory Care Community', description: 'Specialized dementia and Alzheimer\'s care in secured environments',
    coverages: [
      { coverage: 'Professional Liability', minimum: '$1M / $3M', slug: 'professional-liability', notes: 'Must cover elopement, behavioral incidents, and restraint claims' },
      { coverage: 'Abuse & Molestation', minimum: '$1M / $3M', slug: 'abuse-molestation', notes: 'Critical for cognitively impaired residents who cannot self-advocate' },
      { coverage: 'General Liability', minimum: '$1M / $2M', slug: 'general-liability', notes: 'Secured environment creates unique premises exposures' },
      { coverage: 'Workers\' Compensation', minimum: 'Per state law', slug: 'workers-compensation', notes: 'Staff injuries from combative residents are common' },
      { coverage: 'Umbrella / Excess', minimum: '$3M–$5M', slug: 'umbrella-excess', notes: 'Elopement claims generate some of the largest verdicts in senior care' },
    ],
    additionalNotes: 'Memory care facilities should invest in wander prevention technology and ensure professional liability specifically covers elopement incidents.',
  },
  { id: 'independent-living', label: 'Independent Living Community', description: 'Active adult housing with amenities and optional services',
    coverages: [
      { coverage: 'General Liability', minimum: '$1M / $2M', slug: 'general-liability', notes: 'Primary exposure from amenities: pools, fitness, dining' },
      { coverage: 'Commercial Property', minimum: 'Replacement cost', slug: 'commercial-property', notes: 'Multi-building campus with amenities requires adequate coverage' },
      { coverage: 'Commercial Auto', minimum: '$1M CSL', slug: 'commercial-auto', notes: 'Resident transportation services create auto liability exposure' },
      { coverage: 'Workers\' Compensation', minimum: 'Per state law', slug: 'workers-compensation', notes: 'Required for maintenance, dining, and hospitality staff' },
      { coverage: 'Umbrella / Excess', minimum: '$2M–$5M', slug: 'umbrella-excess', notes: 'Pool and amenity incidents can generate substantial claims' },
    ],
    additionalNotes: 'If your community provides any health-related services, even medication reminders, you should consider adding professional liability coverage.',
  },
  { id: 'home-health', label: 'Home Health Agency', description: 'In-home nursing, therapy, and personal care services',
    coverages: [
      { coverage: 'Professional Liability', minimum: '$1M / $3M', slug: 'professional-liability', notes: 'Covers care delivered in private homes without facility infrastructure' },
      { coverage: 'General Liability', minimum: '$1M / $2M', slug: 'general-liability', notes: 'Covers damage to client property and premises claims' },
      { coverage: 'Commercial Auto', minimum: '$1M CSL', slug: 'commercial-auto', notes: 'Caregivers drive between client homes — hired/non-owned auto critical' },
      { coverage: 'Workers\' Compensation', minimum: 'Per state law', slug: 'workers-compensation', notes: 'Driving exposure adds to standard caregiving injury risk' },
      { coverage: 'Cyber Liability', minimum: '$1M', slug: 'cyber-liability', notes: 'Patient health records on mobile devices increase data breach risk' },
    ],
    additionalNotes: 'Home health agencies should add employee dishonesty coverage given staff access to client homes and personal belongings.',
  },
  { id: 'ccrc', label: 'Continuing Care Retirement Community', description: 'Full continuum from independent living through skilled nursing',
    coverages: [
      { coverage: 'General Liability', minimum: '$1M / $2M', slug: 'general-liability', notes: 'Campus-wide operations across all care levels' },
      { coverage: 'Professional Liability', minimum: '$1M–$3M / $3M–$5M', slug: 'professional-liability', notes: 'Must cover all care levels: AL, MC, and SNF' },
      { coverage: 'Abuse & Molestation', minimum: '$1M / $3M', slug: 'abuse-molestation', notes: 'Exposure across all care settings on campus' },
      { coverage: 'Workers\' Compensation', minimum: 'Per state law', slug: 'workers-compensation', notes: 'Diverse workforce from hospitality to clinical staff' },
      { coverage: 'Commercial Property', minimum: 'Replacement cost', slug: 'commercial-property', notes: 'Multi-building campus with specialized medical equipment' },
      { coverage: 'Directors & Officers', minimum: '$2M–$5M', slug: 'directors-officers', notes: 'Entrance fee disputes and contractual obligations exposure' },
      { coverage: 'Umbrella / Excess', minimum: '$5M–$25M', slug: 'umbrella-excess', notes: 'Compounded exposure across care levels demands higher limits' },
      { coverage: 'EPLI', minimum: '$1M–$2M', slug: 'employment-practices', notes: 'Large multi-department workforce' },
      { coverage: 'Cyber Liability', minimum: '$1M–$2M', slug: 'cyber-liability', notes: 'Integrated health information systems across campus' },
    ],
    additionalNotes: 'CCRCs face the most complex insurance requirements in senior living. Programs must coordinate coverage across all care levels while addressing campus-wide exposures.',
  },
];

export default function CoverageNeedsContent() {
  const [selected, setSelected] = useState(null);
  const result = facilityTypes.find(f => f.id === selected);

  return (
    <div className="min-h-screen bg-stone">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Tools' }, { label: 'Coverage Needs Assessment' }]} />
      <section className="relative overflow-hidden bg-brand" style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <div className="absolute inset-0 bg-brand" style={{ opacity: 0.9 }} />
        <div className="relative max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4 text-center">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Free Tool</p>
          <h1 className="text-stone font-extrabold tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1' }}>
            Senior Living Coverage Needs Assessment
          </h1>
          <p className="text-cream font-light mx-auto" style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px' }}>
            Select your facility type below to see recommended coverage lines, typical limits, and compliance requirements for your operation.
          </p>
        </div>
      </section>
      <section className="bg-stone" style={{ padding: '4rem 0' }}>
        <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <label className="block text-brand font-bold mb-4" style={{ fontSize: '1rem' }}>What type of facility do you operate?</label>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {facilityTypes.map((ft) => (
                <button key={ft.id} onClick={() => setSelected(ft.id)} className={`border-2 rounded-[1.5rem] p-4 text-left cursor-pointer ${selected === ft.id ? 'border-gold bg-gold/10' : 'border-ash bg-white/40 hover:border-blue-dark'}`} style={{ transition: 'all 0.24s' }}>
                  <span className="block text-brand font-bold mb-1" style={{ fontSize: '0.85rem' }}>{ft.label}</span>
                  <span className="block text-brand/50" style={{ fontSize: '0.7rem', lineHeight: '1.3' }}>{ft.description}</span>
                </button>
              ))}
            </div>
          </div>
          {result && (
            <div className="max-w-3xl mx-auto">
              <div className="border-2 border-ash rounded-[2rem] p-8 mb-6 bg-white/40">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <p className="text-blue-dark uppercase tracking-[0.12em] font-bold mb-1" style={{ fontSize: '0.7rem' }}>Recommended Coverage Program</p>
                    <p className="text-brand font-extrabold" style={{ fontSize: '2rem', lineHeight: '1.1' }}>{result.label}</p>
                  </div>
                  <a href="https://alkemeins.com/form" className="inline-flex items-center justify-center border-2 border-gold bg-gold text-brand uppercase tracking-[0.16em] rounded-[2rem] font-semibold hover:border-brand hover:bg-brand hover:text-stone no-underline" style={{ padding: '0.6rem 1.5rem', fontSize: '0.7rem', lineHeight: '2', transition: 'all 0.24s' }}>Get a Quote</a>
                </div>
                <h3 className="text-brand font-bold mb-4" style={{ fontSize: '1rem' }}>Coverage Requirements</h3>
                <div className="space-y-4">
                  {result.coverages.map((cov, i) => (
                    <div key={i} className="border border-ash rounded-[1rem] p-4">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex-1">
                          {cov.slug ? (
                            <Link href={`/coverage/${cov.slug}/`} className="text-brand font-bold hover:text-blue-dark no-underline" style={{ fontSize: '0.95rem', transition: 'color 0.2s' }}>{cov.coverage}</Link>
                          ) : (
                            <span className="text-brand font-bold" style={{ fontSize: '0.95rem' }}>{cov.coverage}</span>
                          )}
                          <p className="text-brand/60 mt-1" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>{cov.notes}</p>
                        </div>
                        <span className="shrink-0 rounded-[2rem] px-3 py-1 font-bold uppercase tracking-[0.1em] bg-gold/20 text-brand" style={{ fontSize: '0.65rem' }}>{cov.minimum}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {result.additionalNotes && (
                  <div className="mt-6 border-t border-ash pt-4">
                    <p className="text-blue-dark font-bold mb-2" style={{ fontSize: '0.8rem' }}>Important Note</p>
                    <p className="text-brand/70" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>{result.additionalNotes}</p>
                  </div>
                )}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/resources/senior-living-insurance-cost/" className="block border-2 border-ash rounded-[2rem] p-5 hover:border-blue-dark no-underline" style={{ transition: 'all 0.24s' }}>
                  <span className="text-blue-dark uppercase tracking-[0.12em] font-bold block mb-1" style={{ fontSize: '0.65rem' }}>Guide</span>
                  <span className="text-brand font-bold block" style={{ fontSize: '0.9rem' }}>How Much Does Senior Living Insurance Cost?</span>
                </Link>
                <Link href="/resources/professional-liability-guide/" className="block border-2 border-ash rounded-[2rem] p-5 hover:border-blue-dark no-underline" style={{ transition: 'all 0.24s' }}>
                  <span className="text-blue-dark uppercase tracking-[0.12em] font-bold block mb-1" style={{ fontSize: '0.65rem' }}>Guide</span>
                  <span className="text-brand font-bold block" style={{ fontSize: '0.9rem' }}>Professional Liability Coverage Guide</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
      <QuoteForm />
      <Footer />
    </div>
  );
}
