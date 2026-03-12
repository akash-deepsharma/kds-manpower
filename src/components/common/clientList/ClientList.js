"use client";

import { useState } from "react";
import { MapPin, Building2, Search, Filter, ChevronDown } from "lucide-react";



export default function ClientList({clientData}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCities, setExpandedCities] = useState({});
  const [sortBy, setSortBy] = useState("city");

  // Group clients by city
  const groupedByCity = clientData.reduce((acc, client) => {
    if (!acc[client.city]) acc[client.city] = [];
    acc[client.city].push(client);
    return acc;
  }, {});

  // Sort cities alphabetically
  const sortedCities = Object.keys(groupedByCity).sort();

  // Filter clients based on search
  const filterClients = (clients) => {
    if (!searchTerm) return clients;
    return clients.filter(client => 
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Toggle city expansion
  const toggleCity = (city) => {
    setExpandedCities(prev => ({
      ...prev,
      [city]: !prev[city]
    }));
  };

  // Calculate stats
  const governmentCount = clientData.filter(c => c.type === "Government").length;
  const publicSectorCount = clientData.filter(c => c.type === "Public Sector").length;
  const educationCount = clientData.filter(c => c.type === "Educational Institution").length;

  return (
    <section className="py-5 bg-gray-50 dark:bg-[#0a0e15]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="text-[#1565c0] font-black text-sm uppercase tracking-[0.3em] mb-4 block">
            Our Valued Clients
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Trusted By <span className="text-[#1565c0]">Government & Private</span> Sectors
          </h2>
          <p className="text-gray-600 dark:text-[#8b949e] text-lg max-w-2xl mx-auto">
            We've delivered excellence to prestigious organizations across India
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <div className="bg-white dark:bg-transparent premium-glass p-4 rounded-2xl text-center border border-gray-200 dark:border-white/5">
            <Building2 className="w-8 h-8 text-[#1565c0] mx-auto mb-3" />
            <div className="text-3xl font-black text-gray-900 dark:text-white">{clientData.length}</div>
            <p className="text-sm text-gray-600 dark:text-[#8b949e]">Total Clients</p>
          </div>
          <div className="bg-white dark:bg-transparent premium-glass p-4 rounded-2xl text-center border border-gray-200 dark:border-white/5">
            <MapPin className="w-8 h-8 text-[#1565c0] mx-auto mb-3" />
            <div className="text-3xl font-black text-gray-900 dark:text-white">{Object.keys(groupedByCity).length}</div>
            <p className="text-sm text-gray-600 dark:text-[#8b949e]">Cities Covered</p>
          </div>
          <div className="bg-white dark:bg-transparent premium-glass p-4 rounded-2xl text-center border border-gray-200 dark:border-white/5">
            <MapPin className="w-8 h-8 text-[#1565c0] mx-auto mb-3" />
            <div className="text-3xl font-black text-gray-900 dark:text-white">{governmentCount}</div>
            <p className="text-sm text-gray-600 dark:text-[#8b949e]">Government</p>
          </div>
          <div className="bg-white dark:bg-transparent premium-glass p-4 rounded-2xl text-center border border-gray-200 dark:border-white/5">
            <MapPin className="w-8 h-8 text-[#1565c0] mx-auto mb-3" />
            <div className="text-3xl font-black text-gray-900 dark:text-white">{publicSectorCount}</div>
            <p className="text-sm text-gray-600 dark:text-[#8b949e]">Public Sector</p>
          </div>
          <div className="bg-white dark:bg-transparent premium-glass p-4 rounded-2xl text-center border border-gray-200 dark:border-white/5">
            <MapPin className="w-8 h-8 text-[#1565c0] mx-auto mb-3" />
            <div className="text-3xl font-black text-gray-900 dark:text-white">{educationCount}</div>
            <p className="text-sm text-gray-600 dark:text-[#8b949e]">Educational</p>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 my-4">
          <div className="flex-1 relative my-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search clients by name, department, or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 ps-5 py-3 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-transparent premium-glass focus:outline-none focus:border-[#1565c0] transition-colors"
            />
          </div>
          
          <div className="flex gap-2 my-4">
            <button
              onClick={() => setSortBy('city')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                sortBy === 'city' 
                  ? 'bg-[#1565c0] text-white' 
                  : 'bg-white dark:bg-transparent premium-glass border border-gray-200 dark:border-white/5 text-gray-600 dark:text-[#8b949e]'
              }`}
            >
              <Filter className="w-4 h-4" />
              Sort by City
            </button>
            <button
              onClick={() => setSortBy('name')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                sortBy === 'name' 
                  ? 'bg-[#1565c0] text-white' 
                  : 'bg-white dark:bg-transparent premium-glass border border-gray-200 dark:border-white/5 text-gray-600 dark:text-[#8b949e]'
              }`}
            >
              <Filter className="w-4 h-4" />
              Sort by Name
            </button>
          </div>
        </div>

        {/* City-wise Grid */}
        <div className="my-4">
          {sortedCities.map((city) => {
            const filteredClients = filterClients(groupedByCity[city]);
            if (filteredClients.length === 0) return null;

            return (
              <div 
                key={city} 
                className="bg-white dark:bg-transparent premium-glass rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden transition-all duration-300 hover:border-[#1565c0]/30 my-4"
              >
                {/* City Header - Clickable */}
                <button
                  onClick={() => toggleCity(city)}
                  className="w-full bg-gradient-to-r from-[#1565c0]/10 to-transparent px-4 py-4 border-b border-gray-200 dark:border-white/5 hover:from-[#1565c0]/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#1565c0]" />
                    <h3 className="text-xl font-black text-gray-900 dark:text-white">{city}</h3>
                    <span className="ml-auto bg-[#1565c0] text-white px-3 py-1 rounded-full text-xs font-bold">
                      {filteredClients.length} {filteredClients.length === 1 ? 'Client' : 'Clients'}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ms-auto ${
                        expandedCities[city] ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Client List - Collapsible - Hidden by default */}
                <div 
                  className={`divide-y divide-gray-100 dark:divide-white/5 transition-all duration-300 ${
                    expandedCities[city] ? 'block' : 'hidden'
                  }`}
                >
                  {filteredClients
                    .sort((a, b) => sortBy === 'name' ? a.name.localeCompare(b.name) : 0)
                    .map((client) => (
                      <div key={client.sno} className="px-4 py-4 hover:bg-[#1565c0]/5 transition-colors group">
                        <div className="flex items-start gap-4">
                          <span className="text-sm font-bold text-[#1565c0] bg-[#1565c0]/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                            {client.sno}
                          </span>
                          <div className="flex-1">
                            <p className="text-gray-900 dark:text-white font-semibold group-hover:text-[#1565c0] transition-colors">
                              {client.name}
                            </p>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-xs px-2 py-1 rounded-full bg-[#1565c0]/10 text-[#1565c0] font-semibold">
                                {client.department}
                              </span>
                              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-[#8b949e] font-semibold">
                                {client.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Results Summary */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-[#8b949e]">
            Showing {clientData.length} clients across {Object.keys(groupedByCity).length} cities
          </p>
        </div>
      </div>
    </section>
  );
}