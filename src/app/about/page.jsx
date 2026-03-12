import { getServerData } from "@/lib/data";
import { CheckCircle, Target, Eye, History } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import StatCard from "@/components/ui/StatCard";
import Certification from "@/components/common/certification/Certification";

export const metadata = {
  title: "About Us",
  description:
    "Learn about KDS International — our 43+ year history, mission, values, leadership team, and commitment to precision global solutions.",
};

export default async function AboutPage() {
  const data = await getServerData();
  const { aboutPage, stats, team, certificate, testimonials } = data;

  return (
    <main className="overflow-hidden bg-white dark:bg-[#0d1117] transition-colors duration-500">
      {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative mt-5 pt-5 pb-5 hero-bg overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#1565c0]/15 glow-blob rounded-full" />

        <div className="container mx-auto mt-5 px-6 max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full premium-glass border-[#1565c0]/30 mb-8 animate-fade-in-up">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1565c0]">
              Our Legacy & Future
            </span>
          </div>
          <h1
            className="text-6xl md:text-8xl font-black !text-gray-200 dark:text-white mb-3 mt-2 leading-[0.9] tracking-tighter animate-fade-in-up transition-colors duration-500"
            style={{ animationDelay: "0.1s" }}
          >
            Built on Trust.
            {/* <br /> */}
            <span className=" ms-3 gradient-text">Driven by Precision.</span>
          </h1>
          <p
            className="text-gray-300 dark:text-[#8b949e] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-3 animate-fade-in-up transition-colors duration-500"
            style={{ animationDelay: "0.2s" }}
          >
            Over four decades of clinical precision in global sourcing, quality
            inspection, and supply chain management.
          </p>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              href="/contact"
              size="lg"
              className="shadow-2xl shadow-[#1565c0]/20 px-4 py-3"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ──────────────────────────────────────────────── */}
      <section className="py-5 bg-gray-50 dark:bg-[#161b22] border-y border-gray-200 dark:border-white/5 relative z-10 transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((stat , i) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─────────────────────────────────────────── */}
      <section className="section-padding relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Mission */}
            <div className="bg-white dark:bg-transparent premium-glass p-4 rounded-3xl border border-gray-200 dark:border-[#1565c0]/20 hover:border-[#1565c0]/40 dark:hover:border-[#1565c0]/40 transition-all duration-500 group relative overflow-hidden"  data-aos="fade-up" data-aos-delay={ 200}>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#1565c0]/5 rounded-full group-hover:bg-[#1565c0]/10 transition-colors" />
              <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-[#1565c0]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                <Target className="text-[#1565c0]" size={32} />
              </div>
              <h2
                className="text-3xl font-black text-gray-900 dark:text-white mb-6 tracking-tight transition-colors duration-500"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-[#8b949e] text-lg leading-relaxed transition-colors duration-500">
                {aboutPage.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-transparent premium-glass p-4 rounded-3xl border border-gray-200 dark:border-[#0d47a1]/20 hover:border-[#0d47a1]/40 dark:hover:border-[#0d47a1]/40 transition-all duration-500 group relative overflow-hidden" data-aos="fade-up" data-aos-delay={ 300}>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0d47a1]/5 rounded-full group-hover:bg-[#0d47a1]/10 transition-colors" />
              <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-[#0d47a1]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                <Eye className="text-[#0d47a1]" size={32} />
              </div>
              <h2
                className="text-3xl font-black text-gray-900 dark:text-white mb-6 tracking-tight transition-colors duration-500"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-[#8b949e] text-lg leading-relaxed transition-colors duration-500">
                {aboutPage.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE KDS ───────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50 dark:bg-[#161b22]/30 relative transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionTitle
                label="Why KDS"
                title="Uncompromising Standards"
                subtitle="Decades of industrial experience, a certified global network, and a relentless focus on zero-defect quality."
              />

              <div className="mt-12 space-y-8">
                {aboutPage.whyUs.map((item, idx) => (
                  <div key={item.title} className="flex gap-3 group mb-3"  data-aos="fade-up" data-aos-delay={idx * 200}>
                    <div className="w-12 h-12 rounded-xl bg-gray-200 dark:bg-[#1565c0]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1565c0] group-hover:text-white transition-all duration-300">
                      <CheckCircle size={24} className="text-[#1565c0] group-hover:text-white" />
                    </div>
                    <div>
                      <h3
                        className="text-gray-900 dark:text-white font-bold text-xl mb-2 transition-colors duration-500"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-[#8b949e] leading-relaxed transition-colors duration-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative"   data-aos="fade-up" data-aos-delay={200}>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1565c0]/20 to-[#0d47a1]/20 blur-2xl rounded-full opacity-50" />
              <div className="relative bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-white/5 p-5 rounded-3xl overflow-hidden transition-colors duration-500">
                <History className="text-[#1565c0] mb-3" size={48} />
                <h3
                  className="text-3xl font-black text-gray-900 dark:text-white mb-3 tracking-tighter transition-colors duration-500"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Since 1983
                </h3>
                <p className="text-gray-600 dark:text-[#8b949e] text-lg leading-relaxed mb-3 transition-colors duration-500">
                  {aboutPage.history}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat) => (
                    <div
                      key={stat.id}
                      className="bg-gray-50 dark:bg-transparent premium-glass p-2 rounded-2xl text-center border border-gray-100 dark:border-white/5 transition-colors duration-500"
                    >
                      <p
                        className="text-3xl font-black text-[#1565c0] mb-1"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-gray-200 dark:text-[#8b949e] transition-colors duration-500 mb-0">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOARD OF DIRECTORS / LEADERSHIP ─────────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto px-3 max-w-7xl">
          <SectionTitle
            label="Leadership"
            title="The Minds Behind KDS"
            subtitle="A global team of experts committed to delivering industrial excellence."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {team.map((member ,i ) => (
              <div key={member.id} className="group relative"  data-aos="fade-up" data-aos-delay={i * 400}>
                <div className="bg-white dark:bg-transparent premium-glass p-3 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-[#1565c0]/30 dark:hover:border-[#1565c0]/30 transition-all duration-500 overflow-hidden text-center h-full flex flex-col items-center">
                  <div
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1565c0] to-[#0d47a1] flex items-center justify-center text-white font-black text-3xl mb-3 shadow-xl group-hover:scale-110 transition-transform duration-500"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[#1565c0] text-sm font-bold uppercase tracking-widest mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-[#8b949e] text-sm leading-relaxed transition-colors duration-500">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="py-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1565c0]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h2
            className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tighter"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Ready to Build the <br />
            <span className="text-gray-900 dark:text-[#0d1117] transition-colors duration-500">Next Generation?</span>
          </h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto font-medium transition-colors duration-500">
            Join the hundreds of industry leaders who rely on KDS International
            for mission-critical precision.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              href="/contact"
              size="lg"
              className="bg-gray-900 dark:bg-[#0d1117] text-white hover:bg-black border-none shadow-2xl transition-colors duration-500"
            >
              Contact Us Today
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#1565c0]"
            >
              Our Services
            </Button>
          </div>
        </div>
      </section>

      
        {/* ─── certifications ─────────────────────────── */}

      <Certification data={certificate}/>

    </main>
  );
}
