import { getServerData } from "@/lib/data";
import Link from "next/link";
import {
  ArrowRight, CheckCircle, Phone, Mail, MapPin,
  Clock, Shield, Users, Award, ChevronRight,
  Briefcase, HardHat, Settings, FileText, Factory, Wrench,
  Star, Quote,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Testimonial from "@/components/common/testimonial/Testimonial";
import HeroBanner from "@/components/ui/heroBanner";

export const metadata = {
  title: "KDS International Pvt. Ltd. | Most Trusted Manpower Services in Delhi",
  description:
    "KDS International Pvt. Ltd. — Delhi's most trusted manpower staffing partner providing skilled, semi-skilled, unskilled, contract, industrial & labour manpower services across all industries.",
  keywords: ["manpower services delhi", "staffing agency delhi", "skilled manpower delhi", "labour supply delhi", "KDS International"],
};

const serviceIconMap = {
  "skilled-manpower": Wrench,
  "unskilled-manpower": Users,
  "contract-manpower": FileText,
  "semi-skilled-manpower": Settings,
  "industrial-manpower": Factory,
  "labour-manpower": HardHat,
};

export default async function HomePage() {
  const data = await getServerData();

  return (
    <main className="overflow-hidden bg-white dark:bg-[#06111e] transition-colors duration-500">

      {/* ══════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════ */}
      {/* <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 "
          style={{ backgroundImage: "url('/hero-bg.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020d1f]/95 via-[#06111e]/85 to-[#06111e]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06111e] via-transparent to-transparent" />

        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(21,101,192,1) 1px, transparent 1px), linear-gradient(90deg, rgba(21,101,192,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-[#1565c0]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-5 mt-5 pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ">

            <div className="lg:col-span-7 space-y-7 " data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-[#1565c0]/15 border border-[#1565c0]/30 backdrop-blur-sm rounded-full px-5 py-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                <span className="text-[10px] font-black text-white/90 uppercase tracking-[0.25em]">
                  Delhi's Most Trusted Manpower Agency
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.04] tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                Reliable 
                <span className="mx-3  text-[#90caf9]">Manpower</span>
                Solutions.
              </h1>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                KDS International Pvt. Ltd. provides skilled, semi-skilled, unskilled, contract, industrial, and labour manpower services across all industries in Delhi NCR — with full compliance and zero hassle.
              </p>

              <div className="grid grid-cols-2 gap-3 max-w-xl">
                {[
                  "Workers deployed within 24-48 hrs",
                  "PF, ESIC & labour law compliant",
                  "All skill levels covered",
                  "Backup teams always on standby",
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={15} className="text-green-400 shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-3">
                <Button href="/contact" size="lg"
                  className="bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white hover:from-[#1565c0] hover:to-[#1976d2] border-none shadow-2xl shadow-[#1565c0]/30 font-black uppercase tracking-wider px-3 py-3"> 
                  Get Hiring Consultation
                </Button>
                <a href="tel:+919899184918"
                  className="inline-flex items-center gap-2 px-3 py-3 bg-white/5 border border-white/20 text-white text-sm font-bold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm">
                  <Phone size={16} className="text-[#90caf9]" />
                  +91 9899184918
                </a>
              </div>

              <div className=" mt-4 flex flex-wrap gap-8 pt-4 border-t border-white/10">
                {data.stats.map((stat) => (
                  <div key={stat.id}>
                    <p className="text-2xl md:text-3xl font-black text-white leading-none">{stat.value}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="200">
              <div className=" bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl shadow-[#1565c0]/10">
                
                <div className="h-1 w-full bg-gradient-to-r from-[#0d47a1] via-[#1565c0] to-[#1976d2] rounded-full mb-8 mt-0" />

                <div className="p-4">
                  <h3 className="text-white font-black text-xl mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                  Get a Free Consultation
                </h3>
                <p className="text-gray-400 text-sm mb-6">Tell us your manpower requirements and we'll respond within 2 hours.</p>

                <div className="space-y-3">
                  {[
                    { icon: Phone, label: "Call Us Directly", value: "+91 9899184918", href: "tel:+919899184918" },
                    { icon: Mail, label: "Email Us", value: "info@kdsinternational.org", href: "mailto:info@kdsinternational.org" },
                    { icon: MapPin, label: "Our Office", value: "Laxmi Nagar, Delhi - 110092", href: "#" },
                  ].map((item, i) => (
                    <a key={i} href={item.href}
                      className="flex items-center gap-4 p-4 rounded-2xl mb-3 bg-white/5 hover:bg-[#1565c0]/20 border border-white/5 hover:border-[#1565c0]/30 transition-all cursor-pointer group d-flex align-items-center">
                      <div className="w-10 h-10 rounded-xl bg-[#1565c0]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1565c0] transition-all">
                        <item.icon size={17} className="text-[#90caf9] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white uppercase tracking-widest font-bold mb-1">{item.label}</p>
                        <p className="text-white text-sm font-semibold mb-0">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <Link href="/contact"
                  className="block mt-2 w-full py-4 text-center bg-gradient-to-r from-[#0d47a1] to-[#1565c0] hover:from-[#1565c0] hover:to-[#1976d2] text-white text-sm font-black uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-[#1565c0]/20">
                  Request Manpower Today →
                </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-[#06111e] to-transparent" />
      </section> */}



      <HeroBanner/>

      {/* ══════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════ */}
      <section className="bg-white dark:bg-[#06111e] py-5 md:py-16 transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {data.stats.map((stat, i) => {
              const icons = [Clock, Users, Award, Shield];
              const Icon = icons[i] || Award;
              return (
                <div key={stat.id}   data-aos="fade-up" data-aos-delay={i * 200}
                  className="flex flex-col md:flex-row items-center md:items-start gap-4 bg-gray-50 dark:bg-[#0a1628] border border-gray-200 dark:border-[#1565c0]/10 rounded-2xl p-4 md:p-4 transition-colors duration-500 hover:border-[#1565c0]/30 group">
                  <div className="w-12 h-12 rounded-xl bg-[#1565c0]/10 border border-[#1565c0]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1565c0] group-hover:border-[#1565c0] transition-all">
                    <Icon size={20} className="text-[#1565c0] dark:text-[#90caf9] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white leading-none transition-colors duration-500 mb-0">{stat.value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold mt-1 mb-0 transition-colors duration-500">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════════════ */}
      <section className="bg-gray-50 dark:bg-[#0a1628] py-5 md:py-5 transition-colors duration-500">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left: Text */}
            <div className="space-y-7">
              <div className="space-y-3">
                <span className="inline-block text-[11px] font-black text-[#1565c0] dark:text-[#90caf9] uppercase tracking-[0.3em] border border-[#1565c0]/30 bg-[#1565c0]/5 px-4 py-2 rounded-full">
                  About KDS International
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tight transition-colors duration-500 mt-2" style={{ fontFamily: "Outfit, sans-serif" }} data-aos="fade-up">
                  Delhi's Premier<br />
                  <span className="text-[#1565c0] dark:text-[#90caf9]">Manpower Partner</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-500">
                  KDS International Pvt. Ltd. is an established manpower provider in Delhi, delivering complete workforce solutions across industries with a commitment to quality, compliance, and reliability.
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">
                Our model is built on understanding each client's unique work profiles and industry challenges. From temporary manpower to full staff outsourcing, we deliver everything under one roof — prompt deployment, compliance assurance, and ongoing efficiency evaluation.
              </p>

              <div className="space-y-3.5">
                {[
                  "Workers mobilised within 24-48 hours from our extensive database",
                  "All statutory compliance — PF, ESIC, wage documentation — fully managed",
                  "Covering skilled, semi-skilled, unskilled, industrial, and labour supply",
                  "Dedicated backup teams to ensure zero operational disruption",
                ].map((point, i) => (
                  <div key={i}  data-aos="fade-up" data-aos-delay={i * 100} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1565c0]/10 flex items-center justify-center shrink-0 mt-0.5 border border-[#1565c0]/20">
                      <CheckCircle size={13} className="text-[#1565c0] dark:text-[#90caf9]" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-relaxed transition-colors duration-500">{point}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button href="/about"
                  className="bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white border-none hover:from-[#1565c0] hover:to-[#1976d2] font-bold uppercase tracking-wider shadow-lg shadow-[#1565c0]/20 px-3 py-3">
                  About Our Company
                </Button>
                <a href="tel:+919899184918"
                  className="inline-flex items-center gap-2 px-3 py-3 border-2 border-[#1565c0]/30 text-[#1565c0] dark:text-[#90caf9] text-sm font-bold rounded-xl hover:bg-[#1565c0]/5 transition-all">
                  <Phone size={15} />
                  Call Us Now
                </a>
              </div>
            </div>

            {/* Right: Why Choose Us cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.whyChooseUs.map((item, i) => {
                const icons = [Clock, Users, Shield, Award, Briefcase, Award];
                const Icon = icons[i % icons.length];
                return (
                  <div key={i}
                    className="bg-white dark:bg-[#0d1a2d] rounded-2xl p-4 border border-gray-200 dark:border-[#1565c0]/10 hover:border-[#1565c0]/30 dark:hover:border-[#1565c0]/30 transition-all duration-300 group hover:shadow-md dark:hover:shadow-none">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0d47a1] to-[#1565c0] flex items-center justify-center mb-3 shadow-md">
                      <Icon size={18} className="text-white" />
                    </div>
                    <h4 className="font-black text-gray-900 dark:text-white text-sm mb-1.5 group-hover:text-[#1565c0] dark:group-hover:text-[#90caf9] transition-colors">{item.title}</h4>
                    <p className="text-gray-500 text-[14px] dark:text-gray-400 text-xs leading-relaxed transition-colors duration-300">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          OUR SERVICES
      ══════════════════════════════════════════════ */}
      <section className="bg-white dark:bg-[#06111e] py-5 md:py-28 transition-colors duration-500">
        <div className="container mx-auto px-2 max-w-7xl">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
            <div className="space-y-3">
              <span className="inline-block text-[11px] font-black text-[#1565c0] dark:text-[#90caf9] uppercase tracking-[0.3em] border border-[#1565c0]/30 bg-[#1565c0]/5 px-4 py-2 rounded-full">
                Our Services
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tight transition-colors duration-500 mt-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                Complete Manpower<br />
                <span className="text-[#1565c0] dark:text-[#90caf9]">Solutions</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed transition-colors duration-500">
                From skilled technicians to general labour supply — all workforce categories covered under one roof with full compliance management.
              </p>
            </div>
            <Link href="/services" className="shrink-0 inline-flex items-center gap-2 text-[#1565c0] dark:text-[#90caf9] font-bold text-sm hover:gap-3 transition-all group">
              All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.services.map((service, i) => {
              const Icon = serviceIconMap[service.slug] || Briefcase;
              const gradients = [
                "from-[#0d47a1] to-[#1565c0]",
                "from-[#1565c0] to-[#1976d2]",
                "from-[#1976d2] to-[#1e88e5]",
                "from-[#0d47a1] to-[#1976d2]",
                "from-[#1565c0] to-[#0d47a1]",
                "from-[#1e88e5] to-[#1565c0]",
              ];
              return (
                <Link key={service.id} href={`/services/${service.slug}`} data-aos="fade-up" data-aos-delay={i * 100}
                  className="group relative bg-gray-50 dark:bg-[#0a1628] rounded-2xl p-4 border border-gray-200 dark:border-[#1565c0]/10 hover:border-[#1565c0]/40 dark:hover:border-[#1565c0]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#1565c0]/5 hover:-translate-y-1 overflow-hidden">
                  {/* Top colour accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`} />

                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={20} className="text-white" />
                    </div>

                    <h3 className="font-black text-gray-900 dark:text-white text-lg mb-3 group-hover:text-[#1565c0] dark:group-hover:text-[#90caf9] transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3 transition-colors duration-300">{service.shortDesc}</p>

                    <div className="flex items-center gap-1.5 text-[#1565c0] dark:text-[#90caf9] text-xs font-black uppercase tracking-widest">
                      Know More <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          INDUSTRIES WE SERVE
      ══════════════════════════════════════════════ */}
      <section className="bg-[#0a1628] dark:bg-[#020c18] py-5 md:py-28 relative overflow-hidden transition-colors duration-500">
        {/* Pattern BG */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(21,101,192,1) 1px, transparent 0)",
          backgroundSize: "44px 44px"
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1565c0]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-black text-[#90caf9] uppercase tracking-[0.3em] border border-[#1565c0]/30 bg-[#1565c0]/10 px-4 py-2 rounded-full mb-4">
              Industries We Serve
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
              Manpower Across<br />
              <span className="text-[#90caf9]">Every Sector</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We supply trained, compliance-ready workers to businesses across a wide range of industries in Delhi NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.industries.map((ind, i) => (
              <div key={ind.id} data-aos="fade-up" data-aos-delay={i * 100}
                className="group relative rounded-2xl overflow-hidden h-120 border border-[#1565c0]/20 hover:border-[#1565c0]/50 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${ind.img}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020c18]/90 via-[#020c18]/50 to-[#1565c0]/10" />

                {/* Stat badge */}
                <div className="absolute top-4 right-4 bg-[#1565c0]/90 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest px-3 py-2 rounded-full">
                  {ind.stat}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-black text-lg mb-1 leading-tight">{ind.name}</h3>
                  <p className="text-gray-400 text-[14px] leading-relaxed opacity-1 group-hover:opacity-100 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                    {ind.desc.substring(0, 150)}...
                  </p>
                  <div className="flex items-center gap-1.5 text-[#90caf9] text-[10px] font-black uppercase tracking-widest mt-2 opacity-1 group-hover:opacity-100 transition-opacity">
                    Learn More <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          WHY CHOOSE KDS
      ══════════════════════════════════════════════ */}
      <section className="bg-white dark:bg-[#06111e] py-5 md:py-28 transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-black text-[#1565c0] dark:text-[#90caf9] uppercase tracking-[0.3em] border border-[#1565c0]/30 bg-[#1565c0]/5 px-4 py-2 rounded-full mb-4">
              Why KDS International
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-4 transition-colors duration-500" style={{ fontFamily: "Outfit, sans-serif" }}>
              The KDS Advantage
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-colors duration-500">
              Hundreds of businesses across Delhi NCR trust KDS International for reliable, compliant, and performance-based manpower solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.whyChooseUs.map((item, i) => {
              const icons = [Clock, Users, Shield, Award, Briefcase, Award];
              const Icon = icons[i % icons.length];
              const gradients = [
                "from-[#0d47a1] to-[#1565c0]",
                "from-[#1565c0] to-[#1976d2]",
                "from-[#1976d2] to-[#1e88e5]",
                "from-[#0d47a1] to-[#1976d2]",
                "from-[#1565c0] to-[#0d47a1]",
                "from-[#1e88e5] to-[#1565c0]",
              ];
              return (
                <div key={i} data-aos="fade-up" data-aos-delay={i * 100}
                  className="bg-gray-50 dark:bg-[#0a1628] rounded-2xl p-4 border border-gray-200 dark:border-[#1565c0]/10 hover:border-[#1565c0]/30 dark:hover:border-[#1565c0]/30 transition-all duration-300 group hover:shadow-lg hover:shadow-[#1565c0]/5 hover:-translate-y-0.5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-black text-gray-900 dark:text-white text-base mb-2 group-hover:text-[#1565c0] dark:group-hover:text-[#90caf9] transition-colors">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PROCESS — HOW WE WORK
      ══════════════════════════════════════════════ */}
      <section className="bg-gray-50 dark:bg-[#0a1628] py-5 md:py-28 transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-[11px] font-black text-[#1565c0] dark:text-[#90caf9] uppercase tracking-[0.3em] border border-[#1565c0]/30 bg-[#1565c0]/5 px-4 py-2 rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-4 transition-colors duration-500" style={{ fontFamily: "Outfit, sans-serif" }}>
              How We Deliver
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-colors duration-500">
              A simple, proven process that gets your workforce in place fast — with full legal compliance and zero headaches.
            </p>
          </div>

          <div className="relative">
            {/* Connector */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#1565c0]/40 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { num: "01", title: "Share Requirements", desc: "Tell us your manpower needs — skill type, quantity, duration, and location." },
                { num: "02", title: "Worker Matching", desc: "We shortlist workers from our database within hours, background-verified and ready." },
                { num: "03", title: "Rapid Deployment", desc: "Workers are mobilised and deployed within 24-48 hours to your site." },
                { num: "04", title: "Ongoing Support", desc: "We handle all payroll, compliance, replacement, and performance monitoring." },
              ].map((step, i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={i * 300} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full bg-white dark:bg-[#0d1a2d] border-2 border-[#1565c0] flex items-center justify-center mb-6 shadow-xl shadow-[#1565c0]/10 group-hover:bg-gradient-to-br group-hover:from-[#0d47a1] group-hover:to-[#1565c0] transition-all duration-300">
                    <span className="text-xl font-black text-[#1565c0] dark:text-[#90caf9] group-hover:text-white transition-colors">{step.num}</span>
                  </div>
                  <h4 className="font-black text-gray-900 dark:text-white text-sm mb-2 mt-2 leading-tight transition-colors duration-500">{step.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════ */}
      {/* <section className="bg-white dark:bg-[#06111e] py-5 md:py-28 transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-black text-[#1565c0] dark:text-[#90caf9] uppercase tracking-[0.3em] border border-[#1565c0]/30 bg-[#1565c0]/5 px-4 py-2 rounded-full mb-4">
              Client Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-4 transition-colors duration-500" style={{ fontFamily: "Outfit, sans-serif" }}>
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.testimonials.map((t, i) => (
              <div key={t.id}
                className="bg-gray-50 dark:bg-[#0a1628] rounded-2xl p-4 border border-gray-200 dark:border-[#1565c0]/10 hover:border-[#1565c0]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#1565c0]/5 relative group">
               
                <div className="absolute top-6 right-6 text-[#1565c0]/10 dark:text-[#1565c0]/20">
                  <Quote size={40} />
                </div>

               
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 italic transition-colors duration-300">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0d47a1] to-[#1565c0] flex items-center justify-center text-white font-black text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-gray-900 dark:text-white text-sm transition-colors duration-300">{t.name}</p>
                    <p className="text-gray-500 text-xs transition-colors duration-300">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}



      <Testimonial data={data}/>
      

      {/* ══════════════════════════════════════════════
          BLOG / NEWS
      ══════════════════════════════════════════════ */}
      <section className="bg-gray-50 dark:bg-[#0a1628] py-5 md:py-28 transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-4">
            <div className="space-y-3">
              <span className="inline-block text-[11px] font-black text-[#1565c0] dark:text-[#90caf9] uppercase tracking-[0.3em] border border-[#1565c0]/30 bg-[#1565c0]/5 px-4 py-2 rounded-full">
                Insights & News
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight transition-colors duration-500 mt-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                Latest Articles
              </h2>
            </div>
            <Link href="/blog" className="shrink-0 inline-flex items-center gap-2 text-[#1565c0] dark:text-[#90caf9] font-bold text-sm hover:gap-3 transition-all group">
              View All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.blogPosts.slice(0, 3).map((post,i) => (
              <Link key={post.id} href={`/blog/${post.slug}`} data-aos="fade-up" data-aos-delay={i * 200}
                className="group bg-white dark:bg-[#0d1a2d] rounded-2xl overflow-hidden border border-gray-200 dark:border-[#1565c0]/10 hover:border-[#1565c0]/40 dark:hover:border-[#1565c0]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#1565c0]/5 hover:-translate-y-1 block">
                {/* Image */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${post.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#1565c0] text-white text-[9px] font-black uppercase tracking-widest px-3 py-2 rounded-full">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-semibold mb-2 transition-colors duration-300">{post.date}</p>
                  <h3 className="text-base font-black text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-[#1565c0] dark:group-hover:text-[#90caf9] transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2 transition-colors duration-300">{post.excerpt}</p>
                  <div className="flex items-center gap-1.5 text-[#1565c0] dark:text-[#90caf9] text-xs font-black uppercase tracking-widest">
                    Read Article <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════ */}
      <section className="relative py-5 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d47a1] via-[#1565c0] to-[#1976d2]" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "36px 36px"
        }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#1976d2]/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0d47a1]/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-5 max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-black text-white/90 uppercase tracking-[0.3em]">Delhi NCR • Immediate Availability</span>
          </div>

          <h2 className="text-4xl md:text-6xl xl:text-7xl font-black text-white mb-3 mt-3 leading-[1.05] tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
            Need Manpower?<br />
            <span className="text-[#bde0ff]">We Deliver in 24-48 Hours.</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact KDS International today. We'll understand your requirements and place the right workers at your site — fully compliant, ready to work.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg"
              className="bg-white text-[#1565c0] hover:bg-gray-50 border-none shadow-2xl font-black uppercase tracking-wider">
              Get Hiring Consultation
            </Button>
            <a href="tel:+919899184918" className="inline-flex items-center gap-3 px-3 py-3 border-2 border-white/30 text-white text-sm font-bold rounded-xl hover:bg-white/10 hover:border-white/60 transition-all">
              <Phone size={18} />
              +91 9899184918
            </a>
          </div>

          {/* Bottom contact strip */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 pt-4 border-t border-white/10">
            {[
              { icon: Mail, text: "info@kdsinternational.org" },
              { icon: MapPin, text: "Laxmi Nagar, Delhi - 110092" },
              { icon: Clock, text: "Mon–Sat · 9am to 7pm" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                <item.icon size={14} className="text-white/50" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
