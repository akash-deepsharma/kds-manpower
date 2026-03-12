import { getServerData } from "@/lib/data";
import { notFound } from "next/navigation";
import {
  Calendar,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export async function generateMetadata({ params }) {

  const resolvedParams = await params;
  const data = await getServerData();
  const post = data.blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | KDS International Blog`,
      description: post.excerpt,
    },
  };
}

export async function generateStaticParams() {
  const data = await getServerData();
  return data.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const data = await getServerData();
  const post = data.blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const relatedPosts = data.blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="overflow-hidden bg-white dark:bg-[#0d1117] transition-colors duration-500">
      {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative  mt-5 pt-5 pb-5 hero-bg overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1565c0]/10 glow-blob rounded-full blur-[120px]" />

        <div className="container mx-auto mt-5 px-6 max-w-5xl relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full premium-glass border-[#1565c0]/30 mb-4 animate-fade-in-up hover:border-[#1565c0] transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform text-white"
            />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1565c0]">
              Return to Archive
            </span>
          </Link>

          <div
            className="mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ffffff]/90 mb-4 block">
              {post.category}
            </span>
            <h1
              className="text-4xl md:text-7xl font-black !text-gray-200 dark:text-white leading-[0.9] tracking-tighter transition-colors duration-500"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              {post.title}
            </h1>
          </div>

          <div
            className="flex flex-wrap items-center gap-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1565c0] to-[#0d47a1] flex items-center justify-center text-white font-black shadow-xl">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-gray-300 mb-1 dark:text-white text-sm font-black uppercase tracking-widest transition-colors duration-500">
                  {post.author}
                </p>
                <p className="text-gray-400 mb-0 dark:text-[#8b949e] text-[10px] font-bold uppercase tracking-widest transition-colors duration-500">
                  Global Analyst
                </p>
              </div>
            </div>
            <div className="h-10 w-px bg-gray-200 dark:bg-white/10 hidden sm:block transition-colors duration-500" />
            <div className="flex items-center gap-2 text-gray-300 dark:text-[#8b949e] transition-colors duration-500">
              <Calendar size={16} className="text-[#1565c0]" />
              <span className="text-xs font-bold uppercase tracking-widest transition-colors duration-500">
                {formattedDate}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ARTICLE CONTENT ─────────────────────────────────────────── */}
      <section className="section-padding relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Main Pillar */}
            <article
              className="lg:col-span-8 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className=" dark:bg-transparent !premium-glass p-4 md:p-4 rounded-[3rem] border border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#1565c0]/5 blur-3xl" />

                  {/* ADD IMAGE HERE */}
                    <div className="mb-4 relative rounded-2xl overflow-hidden">
                      <img 
                        src="https://www.kdsinternational.org/wp-content/uploads/2026/01/best-security-services-in-delhi-ncr.png" 
                        alt="Manufacturing precision technology"
                        className="w-full h-auto object-cover"
                      />
                    </div>


                <div className="prose prose-teal dark:prose-invert max-w-none relative z-10 transition-colors duration-500">
                  <p className="text-2xl leading-relaxed text-gray-800 dark:text-white/90 font-medium italic mb-4 border-l-[6px] border-[#1565c0] ps-3 py-4 bg-[#1565c0]/5 rounded-r-2xl transition-colors duration-500">
                    &ldquo;{post.excerpt}&rdquo;
                  </p>

                  <h2
                    className="text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight transition-colors duration-500"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    Executive Summary
                  </h2>
                  <p className="text-gray-600 dark:text-[#8b949e] text-lg leading-relaxed mb-4 transition-colors duration-500">
                    In the rapidly evolving landscape of global industry,
                    precision isn&apos;t just a metric—it&apos;s a survival
                    strategy. This analysis explores the critical intersections
                    of technology, supply chain resilience, and the relentless
                    pursuit of zero-defect manufacturing in the modern age.
                  </p>

                  <div className="my-4 p-4 bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-white/5 rounded-[2rem] shadow-sm dark:shadow-inner relative overflow-hidden group transition-colors duration-500">
                    <div className="absolute inset-0 hero-grid opacity-10" />
                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-8 tracking-widest uppercase relative z-10 transition-colors duration-500">
                      Strategic Takeaways
                    </h3>
                    <ul className="space-y-6 relative z-10 ps-2">
                      {[
                        "Precision sourcing is the new gold standard for supply chain resilience.",
                        "AI-augmented quality control generates 40% higher accuracy in real-time.",
                        "Sustainability audits are no longer optional in tier-one partnerships.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#1565c0]/20 flex items-center justify-center shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-[#1565c0] shadow-[0_0_10px_#1565c0]" />
                          </div>
                          <p className="text-gray-700 dark:text-[#e6edf3] font-medium transition-colors duration-500">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h2
                    className="text-3xl font-black text-gray-900 dark:text-white mb-8 tracking-tight transition-colors duration-500"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    Technological Integration
                  </h2>
                  <p className="text-gray-600 dark:text-[#8b949e] text-lg leading-relaxed mb-8 transition-colors duration-500">
                    The shift towards automated precision systems has redefined
                    the boundaries of what is possible. By integrating advanced
                    sensors and real-time data processing, global manufacturers
                    can now detect anomalies at the micron level, before they
                    escalate into systemic failures.
                  </p>
                </div>

                {/* Author Signature */}
                <div className="mt-20 pt-12 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row gap-10 items-center transition-colors duration-500">
                  <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-[#1565c0] to-[#0d47a1] flex items-center justify-center text-white text-4xl font-black shrink-0 shadow-2xl rotate-3">
                    {post.author.charAt(0)}
                  </div>
                  <div className="text-center md:text-left">
                    <h4
                      className="text-2xl font-black text-gray-900 dark:text-white mb-3 transition-colors duration-500"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      About the Analysis Team
                    </h4>
                    <p className="text-gray-600 dark:text-[#8b949e] leading-relaxed max-w-xl italic transition-colors duration-500">
                      The {post.author} division at KDS International leverages
                      43 years of forensic industrial data to provide unmatched
                      perspectives on global trade and precision engineering.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar Pillar */}
            <aside
              className="lg:col-span-4 space-y-12 "
              style={{ animationDelay: "0.4s" }}
            >
              {/* Share Hub */}
              <div className=" dark:bg-transparent !premium-glass p-4 mb-4 rounded-[2rem] border   border-gray-200 dark:border-white/5 transition-colors duration-500">
                <h3 className="text-gray-900 dark:text-white font-black text-xs uppercase tracking-[0.3em] mb-8 flex items-center gap-3 transition-colors duration-500">
                  <Share2 size={16} className="text-[#1565c0]" /> Distribute
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Linkedin, label: "In" },
                    { icon: Twitter, label: "X" },
                    { icon: Facebook, label: "Fb" },
                  ].map((social, i) => (
                    <button
                      key={i}
                      className="flex flex-col items-center justify-center gap-3 p-2 py-3 rounded-4 bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-white/5 hover:border-[#1565c0]/50 dark:hover:border-[#1565c0]/50 transition-all text-gray-600 dark:text-[#8b949e] hover:text-[#1565c0] dark:hover:text-[#1565c0] group duration-500"
                    >
                      <social.icon
                        size={22}
                        className="group-hover:scale-110 transition-transform"
                      />
                      {/* <span className="text-[10px] font-black uppercase tracking-widest">
                        {social.label}
                      </span> */}
                    </button>
                  ))}
                </div>
              </div>

              {/* Related Perspectives */}
              <div className="bg-gray-50 dark:bg-transparent !premium-glass p-4 mb-4 rounded-[2rem] border border-gray-200 dark:border-white/5 transition-colors duration-500">
                <h3 className="text-gray-900 dark:text-white font-black text-xs uppercase tracking-[0.3em] mb-8 transition-colors duration-500">
                  Related Analysis
                </h3>
                <div className="space-y-8">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.id}
                      href={`/blog/${rp.slug}`}
                      className="group block my-4"
                    >
                      <p className="text-[#1565c0] text-[10px] font-black uppercase tracking-widest mb-2 opacity-70">
                        {rp.category}
                      </p>
                      <h4
                        className="text-gray-900 dark:text-white text-lg font-black leading-tight group-hover:text-[#1565c0] dark:group-hover:text-[#1565c0] transition-colors tracking-tight duration-500"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {rp.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-3 text-gray-600 dark:text-[#8b949e] text-[10px] font-bold uppercase tracking-widest transition-colors duration-500">
                        <span>Read Analysis</span>
                        <ArrowLeft
                          size={12}
                          className="rotate-180 group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Intelligence Briefing */}
              {/* <div className="bg-gradient-to-br from-[#1565c0] to-[#0d47a1] rounded-[2rem] p-4 text-white shadow-2xl shadow-[#1565c0]/20 relative overflow-hidden group">
                <div className="absolute inset-0 hero-grid opacity-20" />
                <div className="relative z-10">
                  <h3
                    className="text-2xl font-black mb-4 tracking-tight"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    Intelligence Briefing
                  </h3>
                  <p className="text-white/80 text-sm mb-8 leading-relaxed font-medium">
                    Join our exclusive network for bi-weekly deep-dives into
                    precision electronics and global logistics.
                  </p>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Corporate Email"
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 mb-3 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all text-sm font-medium"
                    />
                    <Button
                      variant="outline"
                      className="w-full py-2 border-white rounded-4 text-white hover:bg-white hover:text-[#1565c0] shadow-xl"
                    >
                      Secure Access
                    </Button>
                  </form>
                  
                </div>
              </div> */}
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
