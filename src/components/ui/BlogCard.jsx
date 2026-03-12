import Link from "next/link";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

export default function BlogCard({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
console.log("blog post",post);
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full"  data-aos="fade-up" data-aos-delay={post.id * 100 - 50 * post.id}>
      <div className="premium-glass  p-4 rounded-[2rem] border-white/5 group-hover:border-[#1565c0]/40 transition-all duration-500 h-full flex flex-col relative overflow-hidden" style={{background:'#ffffffb3'}}>
        {/* Visual Area */}
        <div className="relative h-56 rounded-2xl bg-[#0d1117] overflow-hidden mb-6 flex items-center justify-center border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1565c0]/10 to-transparent group-hover:opacity-40 transition-opacity" />
          <div className="absolute inset-0 hero-grid opacity-10 group-hover:opacity-20 transition-opacity" />

          {/* Animated Glow behind icon */}
          <div className="absolute w-20 h-20 bg-[#1565c0]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

          <Tag
            size={40}
            className="text-[#1565c0] relative z-10 group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1117]/80 backdrop-blur-md border border-[#1565c0]/30">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#1565c0]">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-2 mt-3">
          {/* Meta */}
          <div className="flex items-center gap-6 mb-4">
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#4f4f4f]">
              <Calendar size={14} className="text-[#1565c0]" />
              {formattedDate}
            </span>
            <div className="w-1 h-1 rounded-full bg-[#4f4f4f]/30" />
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#4f4f4f]">
              <User size={14} className="text-[#1565c0]" />
              {post.author}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-2xl font-black text-gray-900 dark:text-dark leading-[1.1] mb-4 tracking-tight group-hover:text-[#1565c0] transition-colors"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-[#4f4f4f] text-sm leading-relaxed mb-8 flex-1 line-clamp-3 italic">
            &ldquo;{post.excerpt}&rdquo;
          </p>

          {/* Read more button-like link */}
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#1565c0] pb-2 group-hover:text-dark transition-colors">
            <span>Read Analysis</span>
            <ArrowRight
              size={14}
              className="group-hover:translate-x-2 transition-transform"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
