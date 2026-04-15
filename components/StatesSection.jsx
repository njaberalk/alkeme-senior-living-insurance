'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cities } from '../data/cities';

const featuredStates = [
  { name: 'California', slug: 'california', abbr: 'CA' },
  { name: 'Florida', slug: 'florida', abbr: 'FL' },
  { name: 'Texas', slug: 'texas', abbr: 'TX' },
  { name: 'New York', slug: 'new-york', abbr: 'NY' },
  { name: 'Pennsylvania', slug: 'pennsylvania', abbr: 'PA' },
  { name: 'Ohio', slug: 'ohio', abbr: 'OH' },
  { name: 'Illinois', slug: 'illinois', abbr: 'IL' },
  { name: 'Michigan', slug: 'michigan', abbr: 'MI' },
  { name: 'North Carolina', slug: 'north-carolina', abbr: 'NC' },
  { name: 'Georgia', slug: 'georgia', abbr: 'GA' },
];

const allStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
  'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
  'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming',
];

export default function StatesSection() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);
  const allRef = useScrollAnimation();

  return (
    <section id="states" className="bg-brand" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Nationwide Coverage</p>
          <h2 className="text-stone font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Senior Living Insurance Across All 50 States</h2>
          <p className="text-cream font-light" style={{ lineHeight: '22px' }}>State-specific licensing requirements, staffing regulations, and coverage guidance wherever your facilities operate.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10 stagger-children">
          {featuredStates.map((state) => (
            <Link key={state.slug} href={`/states/${state.slug}/`} className="group border-2 border-ash/20 rounded-[2rem] p-5 text-center no-underline hover:border-gold/40" style={{ transition: 'all 0.24s' }}>
              <span className="text-gold font-extrabold block mb-1" style={{ fontSize: '1.5rem' }}>{state.abbr}</span>
              <span className="text-stone font-semibold block" style={{ fontSize: '0.85rem' }}>{state.name}</span>
            </Link>
          ))}
        </div>
        <div ref={allRef} className="fade-in-view">
          <div className="flex flex-wrap justify-center gap-2">
            {allStates.map((state) => {
              const slug = state.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link key={slug} href={`/states/${slug}/`} className="text-cream/60 hover:text-gold no-underline" style={{ fontSize: '0.8rem', transition: 'color 0.2s', padding: '0.2rem 0.4rem' }}>
                  {state}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-14 text-center">
          <h3 className="text-stone font-bold mb-6" style={{ fontSize: '1.3rem' }}>Major Senior Living Markets</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {cities.map((c) => (
              <Link key={c.slug} href={`/cities/${c.slug}/`} className="border border-ash/20 rounded-[2rem] px-4 py-1.5 text-cream/60 hover:text-gold hover:border-gold/30 no-underline" style={{ fontSize: '0.75rem', transition: 'all 0.24s' }}>
                {c.city}, {c.abbreviation}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
