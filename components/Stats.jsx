'use client';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { value: '20+', label: 'Years of Senior Living Insurance Experience' },
  { value: '2,000+', label: 'Facilities Insured Nationwide' },
  { value: '50', label: 'States with Coverage Solutions' },
  { value: '98%', label: 'Client Retention Rate' },
];

export default function Stats() {
  const ref = useScrollAnimation(0.1);

  return (
    <section className="bg-stone" style={{ padding: '6rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {stats.map((stat) => (
            <div key={stat.label} className="border-2 border-ash rounded-[2rem] p-8 text-center">
              <div className="text-brand font-extrabold tracking-tight mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: '1.25' }}>
                {stat.value}
              </div>
              <div className="text-brand/70 font-medium" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
