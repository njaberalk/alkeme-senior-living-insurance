'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const coverages = [
  { title: 'General Liability', slug: 'general-liability', desc: 'Covers third-party bodily injury and property damage claims arising from your facility premises and operations.' },
  { title: 'Professional Liability', slug: 'professional-liability', desc: 'Protects against claims of negligent care delivery, medication errors, and clinical decision-making failures.' },
  { title: 'Workers\' Compensation', slug: 'workers-compensation', desc: 'Mandatory coverage for employee injuries from patient handling, slips, and workplace incidents in care settings.' },
  { title: 'Commercial Property', slug: 'commercial-property', desc: 'Covers buildings, medical equipment, furniture, and business income against fire, storms, and other perils.' },
  { title: 'Abuse & Molestation', slug: 'abuse-molestation', desc: 'Dedicated coverage for allegations of physical, emotional, or sexual abuse of vulnerable residents in your care.' },
  { title: 'Resident Elopement', slug: 'resident-elopement', desc: 'Wandering and elopement coverage for memory care door alarm failures, unsupervised exits, and resident injuries.' },
  { title: 'Medication Management', slug: 'medication-management-liability', desc: 'Wrong dosage incidents, missed medications, pharmacy coordination failures, and adverse drug events.' },
  { title: 'Directors & Officers', slug: 'directors-officers', desc: 'Shields facility leadership from claims arising from management decisions, regulatory actions, and fiduciary disputes.' },
  { title: 'Umbrella / Excess', slug: 'umbrella-excess', desc: 'Extends the limits of your underlying liability policies for catastrophic claims that exceed primary coverage.' },
  { title: 'Staffing Shortage Liability', slug: 'staffing-shortage-liability', desc: 'Understaffing claims, mandatory overtime violations, agency staff risks, and care failures from staffing gaps.' },
];

export default function CoverageSolutions() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="coverage" className="bg-brand" style={{ padding: '8rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Coverage Solutions</p>
          <h2 className="text-stone font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Comprehensive Coverage for Every Facility</h2>
          <p className="text-cream font-light" style={{ lineHeight: '22px' }}>From professional liability to abuse and molestation protection, we provide the coverage lines that keep your senior care operation compliant and protected.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {coverages.map((item) => (
            <Link key={item.title} href={`/coverage/${item.slug}/`} className="block border-2 border-ash/30 rounded-[2rem] p-8 group no-underline" style={{ background: 'rgba(255,255,255,0.04)', transition: 'all 0.24s' }}>
              <h3 className="text-stone font-bold mb-3 group-hover:text-gold" style={{ fontSize: '1.25rem', lineHeight: '1.5', transition: 'color 0.24s' }}>{item.title}</h3>
              <p className="text-cream font-light" style={{ fontSize: '0.85rem', lineHeight: '22px' }}>{item.desc}</p>
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.16em] mt-4 inline-block opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.24s' }}>Learn More</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/#contact" className="inline-flex items-center justify-center border-2 border-gold bg-gold text-brand text-center uppercase tracking-[0.16em] rounded-[2rem] font-semibold hover:border-stone hover:bg-stone hover:text-brand no-underline" style={{ padding: '0.8rem 1.8rem 0.7rem', fontSize: '0.75rem', lineHeight: '2', transition: 'all 0.24s' }}>
            Discuss Your Coverage Needs
          </Link>
        </div>
      </div>
    </section>
  );
}
