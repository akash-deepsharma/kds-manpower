// app/services/[slug]/page.jsx
import { getServerData } from "@/lib/data";
import { notFound } from "next/navigation";
import {
  CheckCircle,
  ArrowRight,
  Info,
  Shield,
  Zap,
  Award,
  User,
  Mail,
  Phone,
  Globe,
  MessageSquare,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";
import SubServiceCard from "@/components/ui/SubServiceCard";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  console.log("generateMetadata - slug:", resolvedParams?.slug);
  
  const data = await getServerData();
  console.log("generateMetadata - available slugs:", data.services.map(s => s.slug));
  
  const service = data.services.find((s) => s.slug === resolvedParams.slug);
  console.log("generateMetadata - found service:", service?.title);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found."
    };
  }

  return {
    title: `${service.title} | KDS International`,
    description: service.shortDesc,
  };
}

export async function generateStaticParams() {
  try {
    const data = await getServerData();
    console.log("generateStaticParams - generating for slugs:", data.services.map(s => s.slug));
    return data.services.map((service) => ({
      slug: service.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function ServiceDetailPage({ params }) {
  try {
    const resolvedParams = await params;
    // console.log("ServiceDetailPage - slug:", resolvedParams?.slug);
    
    const data = await getServerData();
    // console.log("ServiceDetailPage - all slugs:", data.services.map(s => s.slug));
    
    const service = data.services.find((s) => s.slug === resolvedParams.slug);
    // console.log("ServiceDetailPage - found service:", service?.title);

    if (!service) {
      // console.log("ServiceDetailPage - service not found, triggering 404");
      notFound();
    }

    const otherServices = data.services
      .filter((s) => s.id !== service.id)
      .slice(0, 3);

    return (
      <main className="overflow-hidden bg-white dark:bg-[#0d1117] transition-colors duration-500">
        {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
        {/* <section className="relative  mt-5 pt-5 pb-5 hero-bg overflow-hidden">
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1565c0]/10 glow-blob rounded-full blur-[120px]" />

          <div className="container mx-auto mt-5 px-6 max-w-7xl relative z-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full premium-glass border-[#1565c0]/70 mb-8 animate-fade-in-up hover:border-[#1565c0] transition-colors group"
            >
              <ArrowRight
                size={14}
                className="group-hover:-translate-x-1 transition-transform rotate-180 text-white"
              />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1565c0]">
                Back to All Services
              </span>
            </Link>

            <div
              className="max-w-4xl animate-fade-in-up transition-colors duration-500"
              style={{ animationDelay: "0.1s" }}
            >
              <h1
                className="text-5xl md:text-7xl font-black !text-gray-200 dark:text-white mb-8 leading-[1.1] tracking-tighter transition-colors duration-500"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {service.title}
              </h1>
              <p className="text-gray-300 dark:text-[#8b949e] text-lg md:text-2xl leading-relaxed max-w-3xl italic transition-colors duration-500">
                {service.shortDesc}
              </p>
            </div>
          </div>
        </section> */}


        <section className="relative mt-5 pt-5 pb-5 hero-bg overflow-hidden">
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1565c0]/10 glow-blob rounded-full blur-[120px]" />

          <div className="container mx-auto mt-5 px-6 max-w-7xl relative z-10">
            

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Service Info */}
              <div
                className="animate-fade-in-up transition-colors duration-500"
                style={{ animationDelay: "0.1s" }}
              >
                <Link
              href="/services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full premium-glass border-[#1565c0]/70 mb-2 animate-fade-in-up hover:border-[#1565c0] transition-colors group w-fit"
            >
              <ArrowRight
                size={14}
                className="group-hover:-translate-x-1 transition-transform rotate-180 text-white"
              />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1565c0]">
                Back to All Services
              </span>
            </Link>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black !text-gray-200 dark:text-white mb-6 leading-[1.1] tracking-tighter transition-colors duration-500"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {service.title}
                </h1>
                <p className="text-gray-300 dark:text-[#8b949e] text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl italic transition-colors duration-500">
                  {service.shortDesc}
                </p>
                
                {/* Quick Features Preview */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {service.features?.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white dark:bg-white/5 backdrop-blur-sm px-3 py-2 rounded-full border border-[#1565c0]/20">
                      <CheckCircle size={14} className="text-[#1565c0]" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">{feature.substring(0, 20)}...</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Enquiry Form */}
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="bg-white dark:bg-[#0d1117]/90 backdrop-blur-xl rounded-[2rem] p-4 md:p-8 border border-gray-200 dark:border-white/5 shadow-2xl">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                      Enquire About This Service
                    </h3>
                    <p className="text-gray-600 dark:text-[#8b949e] text-sm">
                      Fill in your details and we'll get back to you within 24 hours
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-700 dark:text-gray-300  mb-2">
                        Full Name <span className="text-[#1565c0]">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="John Doe"
                          className="w-full ps-5 py-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1565c0]/20 focus:border-[#1565c0] text-gray-900 dark:text-white text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-700 dark:text-gray-300  mb-2">
                        Email Address <span className="text-[#1565c0]">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="john@company.com"
                          className="w-full  ps-5 py-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1565c0]/20 focus:border-[#1565c0] text-gray-900 dark:text-white text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-gray-700 dark:text-gray-300  mb-2">
                        Phone Number <span className="text-[#1565c0]">*</span>
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="+1 (555) 000-0000"
                          className="w-full ps-5 py-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1565c0]/20 focus:border-[#1565c0] text-gray-900 dark:text-white text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Website Field */}
                    <div>
                      <label htmlFor="website" className="block text-xs font-medium text-gray-700 dark:text-gray-300  mb-2">
                        Website (Optional)
                      </label>
                      <div className="relative">
                        <Globe size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="url"
                          id="website"
                          name="website"
                          placeholder="https://yourcompany.com"
                          className="w-full ps-5 py-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1565c0]/20 focus:border-[#1565c0] text-gray-900 dark:text-white text-sm transition-all"
                        />
                      </div>
                    </div>

                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Message <span className="text-[#1565c0]">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare size={16} className="absolute left-4 top-4 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          placeholder="Tell us about your requirements..."
                          className="w-full ps-5 py-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1565c0]/20 focus:border-[#1565c0] text-gray-900 dark:text-white text-sm transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Hidden field for service name */}
                    <input type="hidden" name="service" value={service.title} />

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#1565c0] to-[#0d47a1] text-white font-bold py-2 px-6 rounded-xl hover:from-[#1976d2] hover:to-[#1565c0] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#1565c0]/50 flex items-center justify-center gap-2 group"
                    >
                      <span>Send Enquiry</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTENT SECTION ─────────────────────────────────────────── */}
        <section className="section-padding relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div
                className="lg:col-span-2 space-y-12 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                {/* Description */}
                <div className="bg-white dark:bg-transparent premium-glass p-4 md:p-3 rounded-[2rem] border border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                    Overview
                  </h2>
                  <p className="text-gray-600 dark:text-[#8b949e] text-lg leading-relaxed transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className=" my-4">
                  <h3
                    className="text-2xl font-black text-gray-900 dark:text-white tracking-tight transition-colors duration-500 mb-2"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features?.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-white dark:bg-transparent premium-glass border border-gray-200 dark:border-white/5 rounded-xl hover:border-[#1565c0]/40 transition-all group"
                      >
                        <CheckCircle size={20} className="text-[#1565c0] shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                {service.benefits && (
                  <div className="my-4">
                    <h3
                      className="text-2xl font-black text-gray-900 dark:text-white tracking-tight transition-colors duration-500"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      Benefits
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.benefits?.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#161b22] rounded-xl"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1565c0] mt-2" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Content Sections from the service.content array */}
                {service.content && service.content.length > 0 && (
                  <div className="my-4 pt-3 border-t border-gray-200 dark:border-white/5">
                    {service.content.map((item, idx) => {
                      if (item.type === "heading") {
                        return (
                          <h3 key={idx} className="text-2xl font-black text-gray-900 dark:text-white">
                            {item.text}
                          </h3>
                        );
                      } else if (item.type === "paragraph") {
                        return (
                          <p key={idx} className="text-gray-600  dark:text-[#8b949e] leading-relaxed">
                            {item.text}
                          </p>
                        );
                      } else if (item.type === "takeaways") {
                        return (
                          <div key={idx} className="bg-[#1565c0]/5 p-4 mb-3 rounded-2xl border border-[#1565c0]/10">
                            <h4 className="font-black text-gray-900 dark:text-white mb-4">
                              {item.heading}
                            </h4>
                            <ul className="my-3 ps-1">
                              {item.items.map((takeaway, tidx) => (
                                <li key={tidx} className="flex items-start gap-3 my-3">
                                  <CheckCircle size={18} className="text-[#1565c0] shrink-0 mt-0.5" />
                                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                                    {takeaway}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}

                
              </div>

              {/* Sidebar */}
              <aside
                className="space-y-8 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                {/* Related Services */}
                {otherServices.length > 0 && (
                  <div className="bg-white dark:bg-transparent premium-glass p-4 rounded-[2rem] border border-gray-200 dark:border-white/5">
                    <h3 className="text-gray-900 dark:text-white font-black text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                      <Info size={16} className="text-[#1565c0]" />
                      Related Services
                    </h3>
                    <div className="my-3">
                      {otherServices.map((s) => (
                        <Link
                          key={s.id}
                          href={`/services/${s.slug}`}
                          className="flex items-center justify-between group p-3 mb-3  rounded-xl border border-transparent hover:border-[#1565c0]/20 hover:bg-[#1565c0]/5 transition-all"
                        >
                          <span className="text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:text-gray-900 dark:group-hover:text-white">
                            {s.title}
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

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-[#1565c0] to-[#0d47a1] rounded-[2rem] p-4 text-white mt-4">
                  <h3 className="text-xl font-black mb-4">Why Choose Us</h3>
                  <div className="space-y-4">
                    {data.stats?.slice(0, 3).map((stat) => (
                      <div key={stat.id} className="flex justify-between items-center border-b border-white/20 py-3 last:border-0">
                        <span className="text-white/80 text-sm">{stat.label}</span>
                        <span className="font-black text-lg">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gray-900 dark:bg-[#0d1117] rounded-[2rem] p-4 text-center border border-gray-200 dark:border-white/5 mt-4">
                  <h3 className="text-xl font-black text-white mb-3">
                    Need This Service?
                  </h3>
                  <p className="text-gray-200 text-sm mb-3">
                    Get in touch with our team for a customized solution.
                  </p>
                  <Button
                    href="/contact"
                    className="w-full bg-[#1565c0] text-white hover:bg-[#0d47a1] border-none"
                  >
                    Request Quote
                  </Button>
                </div>
              </aside>
            </div>

               {/* ─── SERVICES GRID ────────────────────────────────────────── */}
                      <section className="section-padding relative bg-white dark:bg-[#0d1117] transition-colors duration-500">
                        <div className="container mx-auto px-6 max-w-7xl">
                          <div className="text-center mb-4">
                            <SectionTitle
                              label="Our Services"
                              title="End-to-End Industrial Excellence"
                              subtitle="We provide a comprehensive ecosystem of services designed to optimize speed, quality, and cost across your global operations."
                              align="center"
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {data.subServices.map((service) => (
                              <SubServiceCard key={service.id} service={service} />
                            ))}
                          </div>
                        </div>
                      </section>


          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error loading service:", error);
    notFound();
  }
}