import { Target, Users, Globe, Award } from "lucide-react";

export default function StatCard({ stat }) {
  // Determine icon based on the label text
  const getIcon = (label) => {
    const text = label.toUpperCase();
    if (text.includes("YEAR")) return Target;
    if (text.includes("TEAM") || text.includes("CLIENT")) return Users;
    if (text.includes("COUNTR")) return Globe;
    if (text.includes("SATISF")) return Award;
    return Target;
  };

  const Icon = getIcon(stat.label);

  return (
    <div className="flex items-center gap-3 bg-white dark:bg-[#161b22] rounded-2xl p-3 border border-gray-200 dark:border-white/10 shadow-xl transition-all duration-500 hover:bg-gray-50 dark:hover:bg-[#1c2126]"  data-aos="fade-up" data-aos-delay={ stat.id * 200} >
      <div className="flex-shrink-0 bg-gray-100 dark:bg-[#0d1117] p-3 rounded-xl border border-gray-200 dark:border-white/5 transition-colors duration-500">
        <Icon size={28} className="text-gray-500 dark:text-gray-300 transition-colors duration-500" />
      </div>
      <div>
        <h4 className="text-3xl font-black text-gray-900 dark:text-white leading-none tracking-tighter transition-colors duration-500">
          {stat.value}
        </h4>
        <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest mt-1 mb-0 transition-colors duration-500">
          {stat.label}
        </p>
      </div>
    </div>
  );
}
