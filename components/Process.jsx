'use client';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  { num: '01', title: 'Tell Us About Your Facility', desc: 'Share details about your care model, bed count, acuity mix, and current coverage so we can understand your unique needs.' },
  { num: '02', title: 'Review Your Risks & Requirements', desc: 'Our specialists analyze your exposure areas, regulatory requirements, and operational objectives to identify optimal coverage strategies.' },
  { num: '03', title: 'Receive a Tailored Quote', desc: 'We present a comprehensive proposal with coverage options, pricing, and clear recommendations. No surprises, no hidden gaps.' },
  { num: '04', title: 'Bind Coverage With Ongoing Support', desc: 'Once you approve, we bind your policies and remain your advocate through renewals, claims, and as your operations evolve.' },
];

export default function Process() {
  const headerRef = useScrollAnimation();
  const stepsRef = useScrollAnimation(0.1);

  return (
    <section className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>How It Works</p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>A Straightforward Path to the Right Coverage</h2>
          <p className="text-brand" style={{ fontSize: '1rem', lineHeight: '1.6' }}>Our process is designed to be efficient, transparent, and tailored to your timeline.</p>
        </div>
        <div ref={stepsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-gold font-bold text-xl">{step.num}</span>
              </div>
              <h3 className="text-brand font-bold mb-3" style={{ fontSize: '1.25rem', lineHeight: '1.5' }}>{step.title}</h3>
              <p className="text-brand/70" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
