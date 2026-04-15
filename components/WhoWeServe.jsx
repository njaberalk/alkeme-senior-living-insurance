'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const segments = [
  { name: 'Assisted Living', slug: 'assisted-living', desc: 'Personal care and daily living assistance' },
  { name: 'Skilled Nursing', slug: 'skilled-nursing', desc: 'Licensed nursing and medical care facilities' },
  { name: 'Memory Care', slug: 'memory-care', desc: 'Alzheimer\'s and dementia specialized care' },
  { name: 'Independent Living', slug: 'independent-living', desc: 'Active adult and retirement communities' },
  { name: 'Continuing Care', slug: 'continuing-care', desc: 'Full continuum life plan communities' },
  { name: 'Home Health', slug: 'home-health-agencies', desc: 'In-home nursing and personal care' },
  { name: 'Adult Day Care', slug: 'adult-day-care', desc: 'Daytime supervision and health programs' },
  { name: 'Hospice', slug: 'hospice', desc: 'End-of-life and palliative care services' },
  { name: 'Rehabilitation', slug: 'rehabilitation-centers', desc: 'Post-acute therapy and recovery' },
  { name: 'Dementia & Alzheimer\'s', slug: 'dementia-alzheimers-care', desc: 'Specialized dementia and memory care' },
];

export default function WhoWeServe() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="who-we-serve" className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Industries Served</p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Coverage for Every Type of Senior Care</h2>
          <p className="text-brand" style={{ fontSize: '1rem', lineHeight: '1.6' }}>We serve senior living and aging services organizations across all care models from independent living communities to skilled nursing facilities.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 stagger-children">
          {segments.map((seg) => (
            <Link key={seg.name} href={`/industries/${seg.slug}/`} className="group border-2 border-ash rounded-[2rem] p-6 text-center bg-white/40 no-underline block" style={{ transition: 'all 0.24s' }}>
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold" style={{ transition: 'all 0.24s' }}>
                <svg className="w-6 h-6 text-stone group-hover:text-brand" style={{ transition: 'color 0.24s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="text-brand font-bold mb-1" style={{ fontSize: '0.9rem' }}>{seg.name}</h3>
              <p className="text-brand/60" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>{seg.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
