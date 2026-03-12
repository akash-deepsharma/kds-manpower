import Button from '@/components/ui/Button';
import Image from 'next/image';
import React from 'react';
import { getServerData } from "@/lib/data";
import ClientList from '@/components/common/clientList/ClientList';

// const  async Clients = () => {
export default async function Clients(){
const data = await getServerData();
  const { partners, clientData } = data;
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
                className="flex justify-center opacity-100  transition-all duration-500"
              >
                {/* Replace with actual logo images when available */}
                <Image src={partner.logo} alt={partner.name} width={96} height={48} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Cleint lists */}

              <ClientList clientData={clientData}/>

                </main>
    );
}

