'use client';
import { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  { q: 'What insurance does a senior living facility need?', a: 'At minimum, most senior living facilities require general liability, professional liability, workers\' compensation, and commercial property coverage. Depending on your operation, you should also carry abuse and molestation liability, employment practices liability, directors and officers coverage, commercial auto, cyber liability, and umbrella or excess coverage. We help you identify exactly what your facility requires based on your care model, bed count, and state licensing requirements.' },
  { q: 'Do you insure all types of senior care facilities?', a: 'Yes. We work with assisted living communities, skilled nursing facilities, memory care units, independent living communities, continuing care retirement communities, home health agencies, adult day care centers, hospice providers, rehabilitation centers, and multi-service senior living campuses. Our coverage programs are scaled and customized to match each facility type.' },
  { q: 'How is senior living insurance different from standard commercial insurance?', a: 'Senior living insurance must address exposures unique to caring for vulnerable populations, including professional liability for care delivery, abuse and molestation coverage that is excluded from standard policies, regulatory defense costs, and the elevated workers compensation risk from patient handling. A generalist commercial insurance program will leave critical gaps.' },
  { q: 'How quickly can I get a quote?', a: 'In most cases, we can provide an initial quote within 48 hours of receiving your completed information. For more complex accounts or multi-site operations, the process may take slightly longer to ensure we explore the best options across our carrier network.' },
  { q: 'Does professional liability cover abuse allegations?', a: 'No. Standard professional liability policies contain abuse and molestation exclusions. A separate, dedicated abuse and molestation liability policy is required to cover these claims. This is one of the most common and dangerous coverage gaps in senior living insurance programs.' },
  { q: 'Can coverage be customized for our specific operation?', a: 'Every program we place is built around your specific operation. We consider your care model, bed count, acuity level, staffing ratios, regulatory environment, and claims history to design coverage that fits your actual risk profile rather than applying a generic package.' },
];

function FaqItem({ faq, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) setHeight(contentRef.current.scrollHeight);
    else setHeight(0);
  }, [isOpen]);

  return (
    <div className="border-2 border-ash rounded-[2rem] overflow-hidden" style={{ background: isOpen ? 'rgba(255,255,255,0.5)' : 'transparent', transition: 'background 0.5s ease' }}>
      <button onClick={onClick} className="w-full flex items-center justify-between p-6 text-left group cursor-pointer">
        <span className="text-brand font-bold pr-8 group-hover:text-blue-dark" style={{ fontSize: '1rem', transition: 'color 0.2s' }}>{faq.q}</span>
        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: isOpen ? '#ffbf3b' : '#25475e', transition: 'all 0.5s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
          <svg className="w-4 h-4" style={{ color: isOpen ? '#25475e' : '#f4f4ec' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div ref={contentRef} style={{ height: isOpen ? height + 'px' : '0px', overflow: 'hidden', transition: 'height 0.5s ease' }}>
        <p className="text-brand/70 px-6 pb-6" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const headerRef = useScrollAnimation();
  const listRef = useScrollAnimation(0.05);

  return (
    <section id="faq" className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[900px] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center mb-14 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Frequently Asked Questions</p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Common Questions About Senior Living Insurance</h2>
        </div>
        <div ref={listRef} className="space-y-4 stagger-children">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
