"use client";
import { useState, useEffect } from 'react';
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const HeroBanner = () => {
  // Array of slides with image and corresponding content
  const slides = [
    {
      image: '/hero-bg.png',
      profileImage: '/Prestigious-Manpower.png', // Add profile image path
      title: 'Industrial',
      description: 'Skilled industrial workers for manufacturing, factories, and production units with technical expertise.',
      features: [
        "Certified machine operators",
        "Maintenance technicians",
        "Production line workers",
        "Quality control staff"
      ]
    },
    {
      image: '/hero-bg-2.png',
      profileImage: '/profile-2.jpg',
      title: 'Construction',
      description: 'Experienced construction workers including masons, carpenters, electricians, and site supervisors.',
      features: [
        "Site supervisors",
        "Heavy equipment operators",
        "Skilled masons & carpenters",
        "Safety compliant workforce"
      ]
    },
    {
      image: '/hero-bg-3.png',
      profileImage: '/profile-3.jpg',
      title: 'Security',
      description: 'Trained security personnel for residential, commercial, and industrial premises with PSARA certification.',
      features: [
        "PSARA certified guards",
        "Armed & unarmed security",
        "Fire safety trained",
        "24/7 monitoring staff"
      ]
    },
    {
      image: '/hero-bg-4.png',
      profileImage: '/profile-4.jpg',
      title: 'Hospitality',
      description: 'Professional hospitality staff for hotels, restaurants, and events with grooming and service training.',
      features: [
        "Chefs & kitchen staff",
        "Housekeeping personnel",
        "Front desk executives",
        "Event management crew"
      ]
    },
    {
      image: '/hero-bg-5.png',
      profileImage: '/profile-5.jpg',
      title: 'IT & Office',
      description: 'Skilled IT professionals and office staff for administrative, technical, and support roles.',
      features: [
        "System administrators",
        "Data entry operators",
        "Customer support staff",
        "Office assistants"
      ]
    },
    {
      image: '/hero-bg-6.png',
      profileImage: '/profile-6.jpg',
      title: 'Logistics',
      description: 'Efficient logistics and supply chain workforce for warehouses, transportation, and inventory management.',
      features: [
        "Warehouse supervisors",
        "Forklift operators",
        "Delivery drivers",
        "Inventory managers"
      ]
    },
    {
      image: '/hero-bg-7.png', 
      profileImage: '/profile-7.jpg',
      title: 'Healthcare',
      description: 'Qualified healthcare professionals for hospitals, clinics, and home care services with medical expertise.',
      features: [
        "Registered nurses",
        "Caregivers & attendants",
        "Lab technicians",
        "Reception & admin staff"
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const time = '2000';
  // Auto-change slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, time); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { id: 1, value: '500+', label: 'WORKERS PLACED' },
    { id: 2, value: '200+', label: 'SATISFIED CLIENTS' },
    { id: 3, value: '24-48hr', label: 'MANPOWER RESPONSE' },
    { id: 4, value: '100%', label: 'COMPLIANCE ASSURED' },
  ];
  const colorPalette = [
  { name: 'blue', value: '#0d489d', hue: 215 },
  { name: 'purple', value: '#7b1fa2', hue: 270 },
  { name: 'magenta', value: '#c2185b', hue: 330 },
  { name: 'red', value: '#d32f2f', hue: 0 },
  { name: 'orange', value: '#f57c00', hue: 30 },
  { name: 'amber', value: '#ffa000', hue: 45 },
  { name: 'yellow', value: '#fbc02d', hue: 60 }
];

useEffect(() => {
  const colorInterval = setInterval(() => {
    setColorIndex((prev) => (prev + 1) % colorPalette.length);
  }, time);

  return () => clearInterval(colorInterval);
}, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG Image with overlay - changes with fade */}
      <div 
        key={currentIndex}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out"
        style={{ 
          backgroundImage: `url('${slides[currentIndex].image}')`,
        }} 
      />
      
      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020d1f]/95 via-[#06111e]/80   to-[#06111e]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06111e] via-transparent to-transparent" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(21,101,192,1) 1px, transparent 1px), linear-gradient(90deg, rgba(21,101,192,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Glow orb */}
      <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-[#1565c0]/10 rounded-full blur-[120px] pointer-events-none" />


      {/* Slide counter */}
      <div className="absolute top-8 right-8 z-20 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-white/80 text-sm">
        {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-5 mt-5 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left — Main Content with Profile Image */}
          <div className="lg:col-span-7 space-y-7 z-10">
            
            {/* Profile Image - Dynamic Circle */}
            <div className="flex  lg:justify-start mb-4 transition-all duration-500">
              <div className="absolute top-0 left-0 rounded-full overflow-hidden border-4 border-[#1565c0]/30 shadow-2xl shadow-[#1565c0]/20 group"  style={{
              width: '350px',
              height: '350px',
              transform: 'translate(-25%,-30%)',
              borderColor: colorPalette[colorIndex].value,
              boxShadow: `0 25px 50px -12px ${colorPalette[colorIndex].value}80`,
              zIndex: '-1',
              transition: 'border-color 500ms ease-in-out, box-shadow 500ms ease-in-out'
            }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1565c0]/40 to-transparent !z-0 group-hover:opacity-0 transition-opacity duration-500" />
                <Image
                  src={slides[currentIndex].profileImage}
                  alt={slides[currentIndex].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 200px, 300px"
                  priority
                />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full ring-2 ring-[#1565c0]/50 ring-offset-2 ring-offset-[#06111e] group-hover:ring-[#90caf9] transition-all duration-500" />
              </div>
            </div>

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-[#1565c0]/15 border border-[#1565c0]/30 backdrop-blur-sm rounded-full px-5 py-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
              <span className="text-[10px] font-black text-white/90 uppercase tracking-[0.25em]">
                Delhi's Most Trusted Manpower Agency
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.04] tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
              <span style={{color:colorPalette[colorIndex].value}}>{slides[currentIndex].title}</span>
              <span className="mx-3 text-white">Manpower</span>
              Solutions.
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              {slides[currentIndex].description}
            </p>

            {/* Key features - dynamic based on slide */}
            <div className="grid grid-cols-2 gap-3 max-w-xl">
              {slides[currentIndex].features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={15} className="text-green-400 shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{feat}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
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

            {/* Stats row - static */}
            <div className="mt-4 flex flex-wrap gap-8 pt-4 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.id}>
                  <p className="text-2xl md:text-3xl font-black text-white leading-none">{stat.value}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Contact card - static */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 border border-white/10  rounded-3xl overflow-hidden shadow-2xl shadow-[#1565c0]/10" style={{ backdropFilter: 'blur(2px) ' }}>
              {/* Top accent */}
              <div className="h-1 w-full bg-gradient-to-r from-[#0d47a1] via-[#1565c0] to-[#1976d2]" />

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
                      className="flex items-center gap-4 p-4 rounded-2xl mb-3 bg-white/5 hover:bg-[#1565c0]/20 border border-white/5 hover:border-[#1565c0]/30 transition-all cursor-pointer group">
                      <div className="w-10 h-10 rounded-xl bg-[#1565c0]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1565c0] transition-all">
                        <item.icon size={17} className="text-[#90caf9] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white uppercase tracking-widest font-bold mb-1">{item.label}</p>
                        <p className="text-white text-sm font-semibold">{item.value}</p>
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
    </section>
  );
};

export default HeroBanner;



  {/* Image indicators */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-[#1565c0]' 
                : 'w-1.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}