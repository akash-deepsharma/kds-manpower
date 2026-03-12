
import { getServerData } from "@/lib/data";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Globe,
  Shield,
  TrendingUp,
  Users,
  Award,
  Clock,
  CheckCircle,
  ChevronRight,
  Building2,
  Package,
  Truck,
  Factory,
  Zap,
  Target,
  BarChart3,
  Star,
  ThumbsUp,
  Briefcase,
  HardHat,
  Wrench,
  Cpu,
  Settings,
  PenTool,
  Ruler,
  Thermometer,
  Droplets,
  Wind,
  Gauge,
  AlertCircle,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Play,
  Pause,
  Quote,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Testimonial from "@/components/common/testimonial/Testimonial";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const data = await getServerData();
  const industry = data.industries?.find((i) => i.slug === resolvedParams.slug);

  if (!industry) return { title: "Industry Not Found" };

  return {
    title: `${industry.title} Industry Solutions | KDS International`,
    description: industry.fullDescription || industry.description,
    keywords: `${industry.title}, industrial solutions, manufacturing, supply chain, ${industry.title} industry`,
    openGraph: {
      title: `${industry.title} Industry Solutions | KDS International`,
      description: industry.fullDescription || industry.description,
      images: [industry.ogImage || industry.image || "/industries/og-default.jpg"],
    },
  };
}

export async function generateStaticParams() {
  const data = await getServerData();
  return data.industries?.map((industry) => ({
    slug: industry.slug,
  })) || [];
}

// Industry-specific icon mapping
const getIndustryIcon = (industryTitle) => {
  const iconMap = {
    'Automotive': Truck,
    'Electronics': Cpu,
    'Industrial': Factory,
    'Logistics': Package,
    'Healthcare': Building2,
    'Construction': HardHat,
    'Aerospace': Settings,
    'Food & Beverage': Thermometer,
    'Chemical': Droplets,
    'Pharmaceutical': AlertCircle,
    'Textile': PenTool,
    'Energy': Zap,
    'Marine': Wind,
    'Mining': Gauge
  };
  return iconMap[industryTitle] || Building2;
};

// Get industry-specific color scheme
const getIndustryColors = (industryTitle) => {
  const colorMap = {
    'Automotive': { primary: '#1565c0', secondary: '#64b5f6', gradient: 'from-blue-600 to-blue-400' },
    'Electronics': { primary: '#7b1fa2', secondary: '#ba68c8', gradient: 'from-purple-600 to-purple-400' },
    'Industrial': { primary: '#2e7d32', secondary: '#81c784', gradient: 'from-green-600 to-green-400' },
    'Logistics': { primary: '#ed6c02', secondary: '#ffb74d', gradient: 'from-orange-600 to-orange-400' },
    'Healthcare': { primary: '#d32f2f', secondary: '#ef5350', gradient: 'from-red-600 to-red-400' },
    'Construction': { primary: '#8d6e63', secondary: '#bcaaa4', gradient: 'from-brown-600 to-brown-400' }
  };
  return colorMap[industryTitle] || { primary: '#1565c0', secondary: '#64b5f6', gradient: 'from-blue-600 to-blue-400' };
};

export default async function IndustryDetailPage({ params }) {
  const resolvedParams = await params;
  const data = await getServerData();
  const industry = data.industries?.find((i) => i.slug === resolvedParams.slug);
  console.log("industry", industry);
  
  if (!industry) notFound();

  const IndustryIcon = getIndustryIcon(industry.title);
  const colors = getIndustryColors(industry.title);
  
  // Filter projects related to this industry
  const relatedProjects = data.projects?.filter(p => 
    p.category?.toLowerCase() === industry.title?.toLowerCase()
  ) || [];

  // Related industries (excluding current)
  const relatedIndustries = data.industries?.filter(i => i.slug !== industry.slug).slice(0, 3) || [];

  // Industry-specific statistics (can be customized per industry)
  const industryStats = industry.stats || [
    { label: "Projects Completed", value: "150+", icon: BarChart3 },
    { label: "Countries Served", value: "25+", icon: Globe },
    { label: "Client Satisfaction", value: "98%", icon: TrendingUp },
    { label: "Years of Expertise", value: "20+", icon: Clock },
    { label: "Skilled Workers", value: "5000+", icon: Users },
    { label: "Quality Rate", value: "99.9%", icon: Shield }
  ];

  // Industry capabilities (can be customized per industry)
  const capabilities = industry.capabilities || [
    {
      title: "Strategic Sourcing",
      description: "Global procurement network for quality materials",
      icon: Globe,
      features: ["Vendor Selection", "Cost Optimization", "Quality Assurance"]
    },
    {
      title: "Manufacturing Support",
      description: "End-to-end production assistance",
      icon: Factory,
      features: ["Process Optimization", "Quality Control", "Lean Manufacturing"]
    },
    {
      title: "Supply Chain Management",
      description: "Integrated logistics solutions",
      icon: Package,
      features: ["Inventory Management", "Warehousing", "Distribution"]
    },
    {
      title: "Technical Expertise",
      description: "Specialized engineering support",
      icon: Wrench,
      features: ["Installation", "Maintenance", "Training"]
    },
    {
      title: "Regulatory Compliance",
      description: "Industry standards and certifications",
      icon: Shield,
      features: ["ISO Standards", "Safety Compliance", "Documentation"]
    },
    {
      title: "Workforce Solutions",
      description: "Skilled labor deployment",
      icon: Users,
      features: ["Recruitment", "Training", "Payroll Management"]
    }
  ];

  // Success metrics (can be customized per industry)
  const successMetrics = industry.metrics || [
    { value: "40%", label: "Cost Reduction", description: "Average operational cost savings" },
    { value: "50%", label: "Faster Delivery", description: "Reduced lead times" },
    { value: "99.9%", label: "Quality Rate", description: "Zero-defect delivery" },
    { value: "100%", label: "Compliance", description: "Regulatory adherence" }
  ];

  // Client testimonials (can be customized per industry)
  const testimonials = industry.testimonials || [
    {
      quote: "Their expertise in our industry transformed our supply chain completely.",
      author: "John Smith",
      position: "Operations Director",
      company: "Global Manufacturing Inc.",
      rating: 5
    },
    {
      quote: "Outstanding quality and reliability. They understand our needs perfectly.",
      author: "Sarah Johnson",
      position: "Procurement Manager",
      company: "Tech Industries Ltd.",
      rating: 5
    },
    {
      quote: "The best partner we've worked with. Highly recommended for any industrial project.",
      author: "Michael Chen",
      position: "CEO",
      company: "Precision Parts Co.",
      rating: 5
    }
  ];

  // Partners/certifications
  const partners = industry.partners || [
    { name: "ISO 9001:2015", logo: "/cert/iso.png", type: "certification" },
    { name: "OHSAS 18001", logo: "/cert/ohsas.png", type: "certification" },
    { name: "API", logo: "/cert/api.png", type: "certification" },
    { name: "UL", logo: "/cert/ul.png", type: "certification" }
  ];

  // Timeline/milestones
  const milestones = industry.milestones || [
    { year: "2010", title: "Industry Entry", description: "Started operations in this sector" },
    { year: "2015", title: "Major Expansion", description: "Opened dedicated facility" },
    { year: "2018", title: "ISO Certification", description: "Achieved quality standards" },
    { year: "2020", title: "Global Reach", description: "Expanded to 15+ countries" },
    { year: "2023", title: "Innovation Award", description: "Recognized for excellence" }
  ];

  return (
    <main className="overflow-hidden bg-white dark:bg-[#0d1117] transition-colors duration-500">
      
      {/* ─── HERO SECTION WITH VIDEO/PARALLAX ─────────────────────────── */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden py-5">
        {/* Background Image/Video */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90 z-10" />
          {industry.heroImage ? (
            <Image
              src={industry.img}
              alt={industry.name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1565c0] to-[#0d47a1]" />
          )}
          {/* Animated overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-grid-pattern animate-pulse" />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-5 pt-5 mt-5 max-w-7xl relative z-20">
          {/* Breadcrumb */}
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-4 py-2 mb-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hover:bg-white/20 transition-all group animate-fade-in-up"
          >
            <ArrowLeft size={16} className="text-white group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium text-white">Back to Industries</span>
          </Link>

          <div className="max-w-4xl">
            {/* Industry Label */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-3 animate-fade-in-up">
              <IndustryIcon className="w-5 h-5 text-white" />
              <span className="text-sm font-bold uppercase tracking-wider text-white">{industry.name} Industry</span>
            </div>

            {/* Title */}
            <h1 className="text-7xl md:text-9xl font-black text-white mb-3 leading-[0.9] tracking-tighter animate-fade-in-up" 
                style={{ animationDelay: "0.1s" }}>
              {industry.name}
              <br />
              <span className="text-white/50">Solutions</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-xl text-white/80 mb-3 max-w-3xl leading-relaxed animate-fade-in-up"
               style={{ animationDelay: "0.2s" }}>
              {industry.desc}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button
                href="/contact"
                size="xl"
                className="bg-white text-[#1565c0] hover:bg-gray-100 border-none shadow-2xl shadow-black/30  px-3 py-2 text-lg font-bold hover:scale-105 transition-all"
              >
                Start Your Project
              </Button>
              <Button
                href="#capabilities"
                variant="outline"
                size="xl"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1565c0] px-3 py-2 text-lg font-bold hover:scale-105 transition-all"
              >
                Explore Capabilities
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 animate-fade-in-up " style={{ animationDelay: "0.4s" }}>
              {industryStats.slice(0, 4).map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">{stat.value}</div>
                      <div className="text-s text-white">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW SECTION WITH IMAGE GRID ─────────────────────────── */}
      <section className="py-5 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="animate-fade-in-up">
              <span className="text-[#1565c0] font-black text-sm uppercase tracking-[0.3em] mb-4 block">
                Industry Overview
              </span>
              <h2 className="text-7xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
                Leading the Way in
                <br />
                <span className="text-[#1565c0]">{industry.title}</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-[#8b949e] leading-relaxed">
                <p>{industry.fullDescription || industry.description}</p>
                <p>With decades of experience in the {industry.title} sector, we've developed specialized expertise that sets us apart. Our team understands the unique challenges and requirements of this industry, delivering solutions that drive real results.</p>
              </div>

              {/* Key Focus Areas */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                {[
                  "Quality Excellence",
                  "Cost Optimization",
                  "Supply Chain Resilience",
                  "Technology Integration",
                  "Regulatory Compliance",
                  "Sustainable Practices"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#1565c0]/10 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-[#1565c0]" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Company Stats */}
              <div className="mt-4 flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-black text-[#1565c0]">40+</div>
                  <div className="text-sm text-gray-600 dark:text-[#8b949e]">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#1565c0]">500+</div>
                  <div className="text-sm text-gray-600 dark:text-[#8b949e]">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#1565c0]">25+</div>
                  <div className="text-sm text-gray-600 dark:text-[#8b949e]">Countries Served</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image Grid */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {/* Main Image */}
              <div className="relative h-[600px] rounded-[2rem] overflow-hidden">
                {industry.img ? (
                  <img
                    src={industry.img}
                    alt={industry.title}
                    fill 
                    className="object-cover h-100"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1565c0] to-[#64b5f6] flex items-center justify-center">
                    <IndustryIcon className="w-32 h-32 text-white/30" />
                  </div>
                )}
                
                {/* Overlay with stats */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="grid grid-cols-3 gap-4">
                    {successMetrics.slice(0, 3).map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-black text-white">{metric.value}</div>
                        <div className="text-s text-white">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute top-0 left-8 bg-white dark:bg-[#0d1117] premium-glass p-3 rounded-2xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-4 mb-0">
                  <Award className="w-10 h-10 text-[#1565c0]" />
                  <div>
                    <div className="font-black">Industry Leader</div>
                    <div className="text-sm text-gray-600 dark:text-[#8b949e]">ISO 9001 Certified</div>
                  </div>
                </div>
                {/* <div className="flex items-center gap-2">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm font-bold">5.0 (500+ reviews)</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATISTICS COUNTER SECTION ───────────────────────────────── */}
      <section className="py-5 bg-[#1565c0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }} />
        </div>
        
        <div className="container max-w-7xl relative z-10">
          <div className="text-center mb-5">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
              By The Numbers
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Our impact in the {industry.title} industry speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industryStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES GRID ────────────────────────────────────────── */}
      <section id="capabilities" className="py-5 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-5">
            <span className="text-[#1565c0] font-black text-sm uppercase tracking-[0.3em] mb-4 block">
              What We Offer
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-2">
              Comprehensive <span className="text-[#1565c0]">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#8b949e] max-w-3xl mx-auto">
              End-to-end solutions tailored to the unique needs of the {industry.title} industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, idx) => {
              const Icon = capability.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white dark:bg-transparent premium-glass p-4 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-[#1565c0]/30 transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="inline-flex p-4 rounded-xl bg-[#1565c0]/10 mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-[#1565c0]" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 dark:text-[#8b949e] mb-3">
                    {capability.description}
                  </p>
                  <div className="space-y-3">
                    {capability.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#1565c0]" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SUCCESS METRICS SHOWCASE ─────────────────────────────────── */}
      <section className="py-5 bg-gray-50 dark:bg-[#0a0e15]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-up">
              <span className="text-[#1565c0] font-black text-sm uppercase tracking-[0.3em] mb-4 block">
                Proven Results
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-3">
                Transforming the
                <br />
                <span className="text-[#1565c0]">{industry.title}</span> Industry
              </h2>
              <p className="text-lg text-gray-600 dark:text-[#8b949e] mb-3 leading-relaxed">
                Our solutions have helped clients achieve remarkable improvements in efficiency, quality, and profitability.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {successMetrics.map((metric, idx) => (
                  <div key={idx} className="flex items-start flex-column gap-6">
                    <div className="text-4xl font-black text-[#1565c0] min-w-[100px]">{metric.value}</div>
                    <div>
                      <h4 className="text-xl font-black text-gray-900 dark:text-white mb-2">{metric.label}</h4>
                      <p className="text-gray-600 dark:text-[#8b949e]">{metric.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {/* Chart/Visual Representation */}
              <div className="bg-white dark:bg-transparent premium-glass overflow-hidden rounded-2xl border border-gray-200 dark:border-white/5">
                <div className="space-y-4">
                    <img src={industry.img}></img>                  
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#1565c0]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1565c0]/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <Testimonial data={data}/>

      {/* ─── TIMELINE/MILESTONES SECTION ──────────────────────────────── */}
      <section className="py-5 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-5">
            <span className="text-[#1565c0] font-black text-sm uppercase tracking-[0.3em] mb-4 block">
              Our Journey
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-3">
              Industry <span className="text-[#1565c0]">Milestones</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#8b949e] max-w-3xl mx-auto">
              Key achievements in our {industry.title} industry journey
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#1565c0]/20 via-[#1565c0]/40 to-[#1565c0]/20" />

            <div className="space-y-12 md:space-y-16">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
                >
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} px-4 md:px-0`}>
                    <div 
                      className="bg-white dark:bg-transparent premium-glass p-4 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-[#1565c0]/30 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
                      data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                    >
                      {/* Year Badge */}
                      <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-[#1565c0]/10 rounded-full text-[#1565c0] font-black text-sm">
                          {milestone.year}
                        </span>
                      </div>
                      
                      <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
                        {milestone.title}
                      </h4>
                      
                      <p className="text-gray-600 dark:text-[#8b949e] leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Optional icon or indicator */}
                      <div className="mt-4 flex items-center gap-2 text-[#1565c0]">
                        <div className="w-2 h-2 rounded-full bg-[#1565c0]" />
                        <span className="text-xs font-bold uppercase tracking-wider">Industry Milestone</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot - Visible on desktop only */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      {/* Outer pulse ring */}
                      <div className="absolute inset-0 w-6 h-6 bg-[#1565c0]/20 rounded-full animate-ping" />
                      {/* Inner dot */}
                      <div className="relative w-6 h-6 bg-[#1565c0] rounded-full border-4 border-white dark:border-[#0d1117] shadow-lg" />
                    </div>
                  </div>

                  {/* Mobile Timeline Dot - Visible on mobile only */}
                  <div className="md:hidden flex justify-center my-2">
                    <div className="w-4 h-4 bg-[#1565c0] rounded-full border-2 border-white dark:border-[#0d1117]" />
                  </div>

                  {/* Empty space for alignment on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#1565c0]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1565c0]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
      </section>
      


      

      {/* ─── PARTNERS & CERTIFICATIONS ────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-[#0a0e15]">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-center text-sm font-black uppercase tracking-[0.3em] text-gray-400 dark:text-[#8b949e] mb-12">
            Trusted By Industry Leaders & Certified By
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex justify-center grayscale hover:grayscale-0 transition-all duration-500"
              >
                {partner.logo ? (
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    width={120} 
                    height={60} 
                    className="object-contain"
                  />
                ) : (
                  <div className="w-24 h-16 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-500">{partner.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION WITH FORM ────────────────────────────────────── */}
      <section className="relative py-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1565c0] to-[#1976d2]" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <Users className="w-4 h-4 text-white" />
              <span className="text-sm font-black uppercase tracking-[0.2em] text-white">
                Ready to Transform Your Operations?
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Partner With Us in
              <br />
              <span className="text-white/80">{industry.title}</span>
            </h2>
            
            <p className="text-white/80 text-xl mb-4 max-w-3xl mx-auto font-medium">
              Let's discuss how our expertise can help you achieve your goals in the {industry.title} industry.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                href="/contact"
                size="xl"
                className="bg-white text-[#1565c0] hover:bg-gray-100 border-none shadow-2xl shadow-black/20 px-4 py-2 text-xl font-bold hover:scale-105 transition-all"
              >
                Schedule a Consultation
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="xl"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1565c0] px-4 py-2 text-xl font-bold hover:scale-105 transition-all"
              >
                Download Capability Brochure
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-white/80">industry@kdsinternational.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white/80">Global Offices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED INDUSTRIES ───────────────────────────────────────── */}
      {relatedIndustries.length > 0 && (
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <span className="text-[#1565c0] font-black text-sm uppercase tracking-[0.3em] mb-4 block">
                Explore More
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
                Related <span className="text-[#1565c0]">Industries</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-[#8b949e] max-w-3xl mx-auto">
                Discover our expertise in other industrial sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedIndustries.map((relIndustry, idx) => {
                const RelatedIcon = getIndustryIcon(relIndustry.title);
                return (
                  <Link
                    key={relIndustry.slug}
                    href={`/industries/${relIndustry.slug}`}
                    className="group bg-white dark:bg-transparent premium-glass p-8 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-[#1565c0]/30 transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-[#1565c0]/10 group-hover:scale-110 transition-transform">
                        <RelatedIcon className="w-8 h-8 text-[#1565c0]" />
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-[#1565c0] transition-colors">
                        {relIndustry.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-[#8b949e] mb-6 line-clamp-2">
                      {relIndustry.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#1565c0] font-bold group-hover:gap-3 transition-all">
                      Learn More <ChevronRight className="w-5 h-5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}


    </main>
  );
}