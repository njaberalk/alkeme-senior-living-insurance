'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const featuredPosts = [
  { slug: 'senior-living-insurance-trends-2026', title: 'Senior Living Insurance Trends: What Operators Need to Know', category: 'Industry Insights' },
  { slug: 'insurance-mistakes-senior-living', title: '5 Insurance Mistakes Senior Living Operators Make', category: 'Tips & Advice' },
  { slug: 'abuse-liability-senior-care', title: 'Understanding Abuse Liability in Senior Care', category: 'Industry Insights' },
  { slug: 'staffing-risks-insurance-impact', title: 'How Staffing Risks Impact Your Insurance Costs', category: 'Tips & Advice' },
  { slug: 'medication-management-liability', title: 'Medication Management and Liability Exposure', category: 'Risk Management' },
  { slug: 'fall-prevention-insurance', title: 'Fall Prevention Programs and Their Insurance Impact', category: 'Risk Management' },
];

export default function BlogSection() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="blog" className="bg-brand" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Insights</p>
          <h2 className="text-stone font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Senior Living Insurance Insights & Advice</h2>
          <p className="text-cream font-light" style={{ lineHeight: '22px' }}>Expert perspectives on coverage, compliance, and cost management for senior care operations.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`} className="block border-2 border-ash/20 rounded-[2rem] p-7 group no-underline hover:border-gold/30" style={{ transition: 'all 0.24s' }}>
              <span className="text-blue uppercase tracking-[0.12em] font-bold mb-3 block" style={{ fontSize: '0.65rem' }}>{post.category}</span>
              <h3 className="text-stone font-bold group-hover:text-gold" style={{ fontSize: '1.05rem', lineHeight: '1.4', transition: 'color 0.24s' }}>{post.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
