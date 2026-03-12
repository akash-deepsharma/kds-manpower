import { getServerData } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { 
  Globe, 
  TrendingUp, 
  Shield, 
  Truck, 
  Factory, 
  Zap,
  ArrowRight,
  Star,
  Users,
  Award,
  Clock,
  ChevronRight,
  Building2,
  Cpu,
  Wrench,
  Package,
  Target,
  CheckCircle
} from "lucide-react";
import Testimonial from "@/components/common/testimonial/Testimonial";

export const metadata = {
  title: "Featured Projects & Case Studies | KDS International",
  description:
    "Explore KDS International's global impact through our featured projects across automotive, electronics, and logistics industries.",
};

// Statistics data
const statistics = [
  { value: "40+", label: "Years of Excellence", icon: Clock },
  { value: "25+", label: "Countries Served", icon: Globe },
  { value: "500+", label: "Projects Completed", icon: TrendingUp },
  { value: "100%", label: "Zero-Defect Delivery", icon: Shield },
];



// Success stories data
const successStories = [
  {
    title: "Automotive Supply Chain Optimization",
    category: "Automotive",
    impact: "Reduced delivery times by 40%",
    image: "/success/automotive.jpg",
    slug: "automotive-optimization"
  },
  {
    title: "Electronics Manufacturing Scale-up",
    category: "Electronics",
    impact: "Increased production capacity by 200%",
    image: "/success/electronics.jpg",
    slug: "electronics-scaleup"
  },
  {
    title: "Global Logistics Integration",
    category: "Logistics",
    impact: "Streamlined operations across 15 countries",
    image: "/success/logistics.jpg",
    slug: "global-logistics"
  }
];

export default async function IndustriesPage() {
  const data = await getServerData();
  const { projects,expertiseAreas,partners } = data;
  console.log("expertiseAreas", expertiseAreas);
  const iconMap = {
  Truck: Truck,
  Cpu: Cpu,
  Factory: Factory,
  Globe: Globe,
  Shield: Shield,
  Clock: Clock,
  TrendingUp: TrendingUp,
  Users: Users,
  Award: Award,
  Wrench: Wrench,
  Target: Target,
  CheckCircle: CheckCircle,
  Building2: Building2,
  Package: Package,
  Zap: Zap,
  ArrowRight: ArrowRight,
  ChevronRight: ChevronRight
};

  // Get unique categories for future filtering (placeholder for interactivity)
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <main className="overflow-hidden bg-white dark:bg-[#0d1117] transition-colors duration-500">
      {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative mt-5 pt-5 pb-5 hero-bg overflow-hidden text-center">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#1565c0]/15 glow-blob rounded-full" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#1565c0]/10 glow-blob rounded-full" />

        <div className="container mx-auto mt-5 px-6 max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full premium-glass border-[#1565c0]/30 mb-8 animate-fade-in-up">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1565c0]">
              Our Global Footprint
            </span>
          </div>
          <h1
            className="text-6xl md:text-8xl font-black !text-gray-100 dark:text-white mb-3 leading-[0.9] tracking-tighter animate-fade-in-up transition-colors duration-500"
            style={{ animationDelay: "0.1s" }}
          >
            Success Stories
            <span className=" ms-3 gradient-text">Precision Delivered.</span>
          </h1>
          <p
            className="text-gray-300 dark:text-[#8b949e] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up transition-colors duration-500"
            style={{ animationDelay: "0.2s" }}
          >
            A curated selection of industrial partnerships where we solved
            complex supply chain challenges with zero-defect execution.
          </p>
          
          {/* Hero CTA */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button
              href="#projects"
              size="lg"
              className="bg-[#1565c0] text-white hover:bg-[#0d47a1] border-none shadow-2xl shadow-[#1565c0]/30 px-3"
            >
              Explore Projects
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-2 border-[#1565c0] text-[#1565c0] dark:border-white dark:text-white hover:bg-[#1565c0] hover:text-white dark:hover:bg-white dark:hover:text-[#1565c0]  px-3"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* ─── STATISTICS SECTION ───────────────────────────────────────── */}
      <section className="py-4 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              
              return (
                <div
                  key={index}
                  className="relative group animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1565c0]/5 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="relative p-4 text-center">
                    <div className="inline-flex p-3 rounded-xl bg-[#1565c0]/10 mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6 text-[#1565c0]" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-sm font-semibold text-gray-600 dark:text-[#8b949e] uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE HIGHLIGHTS ─────────────────────────────────────── */}
      <section className="py-5 bg-gray-50 dark:bg-[#0a0e15] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#1565c0] font-black text-sm uppercase tracking-[0.3em] mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-gray-600 dark:text-[#8b949e] text-lg max-w-2xl mx-auto">
              Deep domain expertise across multiple industrial sectors, delivering precision engineering and supply chain excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => {
               const Icon = iconMap[area.icon] || Package;
              // const Icon = area.icon;
              console.log("icnon", Icon);
              return (
                <div
                  key={index}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  <div className="relative p-4 bg-white dark:bg-transparent premium-glass border border-gray-200 dark:border-white/5 rounded-2xl hover:border-[#1565c0]/30 transition-all duration-500">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${area.color} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-[#1565c0]" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 dark:text-[#8b949e] mb-4">
                      {area.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-2 mb-4">
                      {area.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-[#8b949e]">
                          <CheckCircle className="w-4 h-4 text-[#1565c0]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
                      <span className="text-sm font-bold text-[#1565c0]">
                        {area.stats}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1565c0] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── QUICK IMPACT STORIES ─────────────────────────────────────── */}
      <section className="py-5 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[#1565c0] font-black text-sm uppercase tracking-[0.3em] mb-4 block">
              Impact Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Transforming Industries
            </h2>
            <p className="text-gray-600 dark:text-[#8b949e] text-lg max-w-2xl mx-auto">
              Real results from our global partnerships across key industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1565c0]/90 to-transparent z-10" />
                  <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 p-4">
                    <Building2 className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <span className="text-xs font-bold text-white/80 uppercase tracking-wider bg-white/20 py-1 rounded-full">
                      {story.category}
                    </span>
                    <h3 className="text-xl font-black text-white mt-3 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-white/90 text-sm font-semibold">
                      {story.impact}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#1565c0] font-bold text-sm group-hover:gap-3 transition-all">
                  Read Case Study <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS GALLERY ────────────────────────────────────────── */}
      <section id="projects" className="section-padding relative bg-gray-50 dark:bg-[#0a0e15]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[#1565c0] font-black text-sm uppercase tracking-[0.3em] mb-4 block">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Featured Industries
            </h2>
            <p className="text-gray-600 dark:text-[#8b949e] text-lg max-w-2xl mx-auto">
              Explore our successful partnerships and transformative solutions across industries.
            </p>
          </div>

          {/* Category Filter */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <button className="px-3 py-3 rounded-4 bg-[#1565c0] text-white text-xs font-black uppercase tracking-widest shadow-2xl shadow-[#1565c0]/30 transition-all hover:scale-105">
              All Sectors
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-3 py-3 rounded-4 rounded-full bg-white dark:bg-transparent premium-glass border border-gray-200 dark:border-white/5 text-gray-600 dark:text-[#8b949e] text-xs font-black uppercase tracking-widest hover:border-[#1565c0]/40 dark:hover:border-[#1565c0]/40 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-105 duration-500"
              >
                {cat}
              </button>
            ))}
          </div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                >
                  <ProjectCard project={project} index={i} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white dark:bg-transparent premium-glass border border-gray-200 dark:border-white/5 rounded-[3rem] animate-fade-in-up transition-colors duration-500">
              <Package className="w-16 h-16 text-[#1565c0] mx-auto mb-6" />
              <h3
                className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight transition-colors duration-500"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Archive Under Maintenance
              </h3>
              <p className="text-gray-600 dark:text-[#8b949e] max-w-md mx-auto leading-relaxed transition-colors duration-500">
                We are currently documenting our latest project completions.
                Check back soon for updated case studies.
              </p>
            </div>
          )}

    
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─────────────────────────────────────────────── */}
      <section className="py-5 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="text-[#1565c0] font-black text-sm uppercase tracking-[0.3em] mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                Engineering Excellence
                <br />
                <span className="text-[#1565c0]">Since 1980</span>
              </h2>
              <p className="text-gray-600 dark:text-[#8b949e] text-lg mb-8">
                Four decades of industrial expertise combined with cutting-edge technology to deliver unparalleled supply chain solutions.
              </p>

              <div className="my-3">
                {[
                  { icon: Target, text: "Zero-defect quality guarantee" },
                  { icon: Globe, text: "Global presence with local expertise" },
                  { icon: Users, text: "Dedicated project management teams" },
                  { icon: Award, text: "ISO 9001:2015 certified processes" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-[#1565c0]/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#1565c0]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1565c0] to-[#64b5f6] rounded-[3rem] opacity-20 blur-3xl" />
              <div className="relative">
                <div className="space-y-4 my-4  grid grid-cols-2 gap-4 ">
                  <div className="bg-white dark:bg-transparent premium-glass p-3 rounded-2xl border border-gray-200 dark:border-white/5">
                    <Wrench className="w-8 h-8 text-[#1565c0] mb-3" />
                    <h4 className="font-black text-lg mb-2">Technical Expertise</h4>
                    <p className="text-sm text-gray-600 dark:text-[#8b949e] mb-0">Specialized engineering support</p>
                  </div>
                  <div className="bg-white dark:bg-transparent premium-glass p-3 rounded-2xl border border-gray-200 dark:border-white/5">
                    <Truck className="w-8 h-8 text-[#1565c0] mb-3" />
                    <h4 className="font-black text-lg mb-2">Global Logistics</h4>
                    <p className="text-sm text-gray-600 dark:text-[#8b949e] mb-0">Seamless worldwide delivery</p>
                  </div>
                  <div className="bg-white dark:bg-transparent premium-glass p-3 rounded-2xl border border-gray-200 dark:border-white/5">
                    <Shield className="w-8 h-8 text-[#1565c0] mb-3" />
                    <h4 className="font-black text-lg mb-2">Quality Assured</h4>
                    <p className="text-sm text-gray-600 dark:text-[#8b949e] mb-0">100% inspection guaranteed</p>
                  </div>
                  <div className="bg-white dark:bg-transparent premium-glass p-3  rounded-2xl border border-gray-200 dark:border-white/5">
                    <Clock className="w-8 h-8 text-[#1565c0] mb-3" />
                    <h4 className="font-black text-lg mb-2">On-Time Delivery</h4>
                    <p className="text-sm text-gray-600 dark:text-[#8b949e] mb-0">99.5% on-time performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client reviews */}
      <Testimonial data={data}/>
 
      {/* ─── PARTNERS SECTION ─────────────────────────────────────────── */}
      <section className="py-4 border-y border-gray-200 dark:border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-center text-sm font-black uppercase tracking-[0.3em] text-gray-400 dark:text-[#8b949e] mb-5">
            Trusted by Global Industry Leaders
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex justify-center opacity-100 !grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              >
                {/* <div className="w-24 h-12 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg animate-pulse" /> */}
                {/* Replace with actual logo images when available */}
                <Image src={partner.logo} alt={partner.name} width={96} height={48} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="py-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1565c0] to-[#1976d2]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Users className="w-4 h-4 text-white" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Join Our Success Stories
            </span>
          </div>
          
          <h2
            className="text-4xl md:text-6xl font-black text-white mb-8 mt-4 tracking-tighter"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Ready to Transform Your
            <br />
            <span className="text-white/80">Supply Chain?</span>
          </h2>
          
          <p className="text-white/80 text-xl mb-3 max-w-2xl mx-auto font-medium">
            Apply our four decades of industrial precision to your next global operation. 
            Let's engineer excellence together.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-[#1565c0] hover:bg-gray-100 border-none shadow-2xl shadow-black/20 hover:scale-105 transition-all duration-500 px-3 py-2"
            >
              Start Collaboration
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1565c0] hover:scale-105 transition-all duration-500  px-3 py-2"
            >
              View Capabilities
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-white" />
              <span className="text-sm 5 text-white">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-sm text-white">Zero-Defect Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-white" />
              <span className="text-sm text-white">Global Reach</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}