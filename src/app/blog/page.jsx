// import { Tag } from "lucide-react";
// import { getServerData } from "@/lib/data";
// import BlogCard from "@/components/ui/BlogCard";
// import Button from "@/components/ui/Button";

// export const metadata = {
//   title: "Industry Insights & Blog",
//   description:
//     "Latest news, industry trends, and expert perspectives from the KDS International team.",
// };

// export default async function BlogListingPage() {
//   const data = await getServerData();
//   const { blogPosts } = data;

//   return (
//     <main className="overflow-hidden bg-white dark:bg-[#0d1117] transition-colors duration-500">
//       {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
//       <section className="relative  mt-5 pt-5 pb-5 hero-bg overflow-hidden text-center">
//         <div className="absolute inset-0 hero-grid opacity-30" />
//         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1565c0]/10 glow-blob rounded-full blur-[120px]" />

//         <div className="container mx-auto  mt-5 px-6 max-w-7xl relative z-10">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full premium-glass border-[#1565c0]/30 mb-8 animate-fade-in-up">
//             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1565c0]">
//               Industry Intelligence
//             </span>
//           </div>
//           <h1
//             className="text-6xl md:text-8xl font-black !text-gray-200 dark:text-white mb-8 leading-[0.9] tracking-tighter animate-fade-in-up transition-colors duration-500"
//             style={{ animationDelay: "0.1s" }}
//           >
//             The Global
//             <br />
//             <span className="gradient-text">Insight Archive.</span>
//           </h1>
//           <p
//             className="text-gray-300 dark:text-[#8b949e] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up transition-colors duration-500"
//             style={{ animationDelay: "0.2s" }}
//           >
//             Strategic analysis, industrial trends, and technical perspectives
//             from the frontline of global supply chain management.
//           </p>
//         </div>
//       </section>

//       {/* ─── BLOG FEED ────────────────────────────────────────────────── */}
//       <section className="section-padding relative">
//         <div className="container mx-auto px-6 max-w-7xl">
//           {blogPosts.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {blogPosts.map((post, idx) => (
//                 <div
//                   key={post.id}
//                   className="animate-fade-in-up"
//                   style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
//                 >
//                   <BlogCard post={post} />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-5 bg-white dark:bg-transparent premium-glass border border-gray-200 dark:border-white/5 rounded-[3rem] animate-fade-in-up transition-colors duration-500">
//               <div className="w-20 h-20 rounded-2xl bg-gray-100 dark:bg-[#161b22] flex items-center justify-center mx-auto mb-8 border border-gray-200 dark:border-white/5 transition-colors duration-500">
//                 <Tag className="text-[#1565c0]/40" size={40} />
//               </div>
//               <h3
//                 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight transition-colors duration-500"
//                 style={{ fontFamily: "Outfit, sans-serif" }}
//               >
//                 No Analysis Published Yet
//               </h3>
//               <p className="text-gray-600 dark:text-[#8b949e] max-w-md mx-auto leading-relaxed transition-colors duration-500">
//                 Our engineers and analysts are currently compiling new industry
//                 reports. Check back shortly for fresh insights.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* ─── FINAL CTA ────────────────────────────────────────────────── */}
//       <section className="py-5 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[#0d1117] border-t border-white/5" />
//         <div className="absolute inset-0 hero-grid opacity-20" />
//         <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
//           <h2
//             className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter"
//             style={{ fontFamily: "Outfit, sans-serif" }}
//           >
//             Stay Infomed. <br />
//             <span className="text-[#1565c0]">Stay Precise.</span>
//           </h2>
//           <p className="text-[#8b949e] text-xl mb-3 italic">
//             &ldquo;In a world of noise, data-driven precision is the only
//             competitive advantage that lasts.&rdquo;
//           </p>
//           <div className="flex justify-center">
//             <Button
//               href="/contact"
//               size="lg"
//               className="shadow-2xl shadow-[#1565c0]/20"
//             >
//               Partner With KDS
//             </Button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




import { Tag, Info, ArrowRight } from "lucide-react";
import { getServerData } from "@/lib/data";
import BlogCard from "@/components/ui/BlogCard";
import Button from "@/components/ui/Button";
import Pagination from "@/components/ui/Pagination";
import Link from "next/link";

export const metadata = {
  title: "Industry Insights & Blog",
  description:
    "Latest news, industry trends, and expert perspectives from the KDS International team.",
};

export default async function BlogListingPage({ searchParams }) {
  const data = await getServerData();
  const { blogPosts, services, stats } = data;
  
  // Pagination logic
  const page = Number(searchParams?.page) || 1;
  const postsPerPage = 10;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const paginatedPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  // Filter other services (excluding current if any)
  const otherServices = services?.filter(s => s.id !== 'current-service-id') || [];

  return (
    <main className="overflow-hidden bg-white transition-colors duration-500">
      {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative mt-5 pt-5 pb-5 hero-bg overflow-hidden text-center">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1565c0]/10 glow-blob rounded-full blur-[120px]" />

        <div className="container mx-auto mt-5 px-6 max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full premium-glass border-[#1565c0]/30 mb-8 animate-fade-in-up">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1565c0]">
              Industry Intelligence
            </span>
          </div>
          <h1
            className="text-6xl md:text-8xl font-black !text-gray-200 dark:text-white mb-8 leading-[0.9] tracking-tighter animate-fade-in-up transition-colors duration-500"
            style={{ animationDelay: "0.1s" }}
          >
            The Global
            <br />
            <span className="gradient-text">Insight Archive.</span>
          </h1>
          <p
            className="text-gray-300 dark:text-[#8b949e] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up transition-colors duration-500"
            style={{ animationDelay: "0.2s" }}
          >
            Strategic analysis, industrial trends, and technical perspectives
            from the frontline of global supply chain management.
          </p>
        </div>
      </section>

      {/* ─── BLOG FEED WITH SIDEBAR ────────────────────────────────────── */}
      <section className="section-padding relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content - Blog Posts (3 columns) */}
            <div className="lg:col-span-3">
              {blogPosts.length > 0 ? (
                 <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                {paginatedPosts.map((post, idx) => (
                  <div
                    key={post.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-5 animate-fade-in-up">
                  <Pagination 
                    currentPage={page} 
                    totalPages={totalPages} 
                    baseUrl="/blog"
                  />
                </div>
              )}
            </>
              ) : (
                <div className="text-center py-5 bg-gray-50 border border-gray-200 rounded-[3rem] animate-fade-in-up transition-colors duration-500">
                  <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-8 border border-gray-200 shadow-sm">
                    <Tag className="text-gray-400" size={40} />
                  </div>
                  <h3
                    className="text-2xl font-black text-gray-900 mb-4 tracking-tight"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    No Analysis Published Yet
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                    Our engineers and analysts are currently compiling new industry
                    reports. Check back shortly for fresh insights.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar (1 column) */}
            <aside className="space-y-8 animate-fade-in-up lg:col-span-1">
              {/* Related Services */}
              {blogPosts.length > 0 && (
                <div className=" bg-white dark:bg-transparent premium-glass p-4 rounded-[2rem] border border-gray-200 dark:border-white/5">
                  <h3 className="text-gray-900 dark:text-white font-black text-sm  tracking-wider mb-2 flex items-center gap-2">
                    {/* <Info size={16} className="text-[#1565c0]" /> */}
                    Categories
                  </h3>
                  <div className="my-3">
                    {blogPosts.slice(0, 5).map((s) => (
                      <Link
                        key={s.id}
                       href={`/blog?category=${s.category}`}
                        className="flex items-center justify-between group p-3 mb-3 rounded-xl border border-transparent hover:border-[#1565c0]/20 hover:bg-[#1565c0]/5 transition-all"
                      >
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:text-gray-900 dark:group-hover:text-white">
                          {s.category}
                        </span>
                        <ArrowRight
                          size={16}
                          className="text-[#1565c0] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="py-5 relative overflow-hidden bg-gradient-to-br from-[#f8fafc] to-white border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2
            className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Stay Informed. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565c0] to-[#1e88e5]">Stay Precise.</span>
          </h2>
          <p className="text-gray-600 text-xl mb-8 italic">
            &ldquo;In a world of noise, data-driven precision is the only
            competitive advantage that lasts.&rdquo;
          </p>
          <div className="flex justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-gradient-to-r from-[#1565c0] to-[#1e88e5] text-white border-0 shadow-lg shadow-[#1565c0]/20 hover:shadow-xl hover:shadow-[#1565c0]/30 transition-all"
            >
              Partner With KDS
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}