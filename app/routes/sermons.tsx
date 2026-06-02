import type { Route } from "./+types/sermons";
import { Play, Search, Calendar, Clock, Filter, Video, Music } from "lucide-react";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sermons - Rhema Faith AG Church" },
    { name: "description", content: "Watch or listen to past sermons from Rhema Faith AG Church." },
  ];
}

const sermons = [
  {
    id: 1,
    title: "Walking in Faith",
    speaker: "Pastor John Smith",
    date: "2025-05-25",
    duration: "45:00",
    thumbnail: "faith",
    description: "Learn how to walk in faith and trust God through every season of life.",
    series: "Faith Foundations",
    type: "video"
  },
  {
    id: 2,
    title: "The Power of Community",
    speaker: "Pastor Sarah Johnson",
    date: "2025-05-18",
    duration: "42:00",
    thumbnail: "community",
    description: "Discover the importance of authentic community and how it transforms our faith.",
    series: "Community Matters",
    type: "video"
  },
  {
    id: 3,
    title: "Finding Peace in Chaos",
    speaker: "Pastor John Smith",
    date: "2025-05-11",
    duration: "38:00",
    thumbnail: "peace",
    description: "How to find God's peace in the midst of life's storms and challenges.",
    series: "Peace Series",
    type: "audio"
  },
  {
    id: 4,
    title: "Called to Serve",
    speaker: "Pastor Michael Davis",
    date: "2025-05-04",
    duration: "40:00",
    thumbnail: "serve",
    description: "Understanding our calling to serve others and make a difference in our world.",
    series: "Service & Purpose",
    type: "video"
  },
  {
    id: 5,
    title: "The Joy of Salvation",
    speaker: "Pastor Sarah Johnson",
    date: "2025-04-27",
    duration: "44:00",
    thumbnail: "joy",
    description: "Celebrating the gift of salvation and the joy it brings to our lives.",
    series: "Easter Series",
    type: "video"
  },
  {
    id: 6,
    title: "Building Strong Families",
    speaker: "Pastor John Smith",
    date: "2025-04-20",
    duration: "46:00",
    thumbnail: "family",
    description: "Biblical principles for building strong, healthy families that honor God.",
    series: "Family Matters",
    type: "audio"
  }
];

export default function Sermons() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedSermon, setSelectedSermon] = useState<typeof sermons[0] | null>(null);

  const series = ["All", ...Array.from(new Set(sermons.map(s => s.series)))];
  const types = ["All", "video", "audio"];

  const filteredSermons = sermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeries = selectedSeries === "All" || sermon.series === selectedSeries;
    const matchesType = selectedType === "All" || sermon.type === selectedType;
    return matchesSearch && matchesSeries && matchesType;
  });

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sermon Archive
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Watch or listen to past sermons anytime, anywhere. Never miss a message.
          </p>
        </div>

        {/* Search and Filters */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search sermons..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F55A1] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="flex gap-4">
                <select
                  value={selectedSeries}
                  onChange={(e) => setSelectedSeries(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F55A1] dark:bg-gray-700 dark:text-white"
                >
                  {series.map(series => (
                    <option key={series} value={series}>{series}</option>
                  ))}
                </select>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F55A1] dark:bg-gray-700 dark:text-white"
                >
                  <option value="All">All Types</option>
                  <option value="video">Video</option>
                  <option value="audio">Audio</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Sermons Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSermons.map((sermon) => (
              <div key={sermon.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setSelectedSermon(sermon)}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#6B72C7] to-[#4F55A1] h-48 flex items-center justify-center">
                    {sermon.type === "video" ? (
                      <Video className="h-16 w-16 text-white/80" />
                    ) : (
                      <Music className="h-16 w-16 text-white/80" />
                    )}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {sermon.duration}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#4F55A1] dark:text-[#7B82FF] uppercase tracking-wide">
                    {sermon.series}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2 mb-2">
                    {sermon.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {sermon.speaker}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(sermon.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Player Modal */}
        {selectedSermon && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="max-w-4xl w-full">
              <button
                onClick={() => setSelectedSermon(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="aspect-video bg-black flex items-center justify-center">
                  {selectedSermon.type === "video" ? (
                    <div className="text-center text-white">
                      <Video className="h-24 w-24 mx-auto mb-4" />
                      <p className="text-xl">Video Player</p>
                      <p className="text-gray-400">Video integration coming soon</p>
                    </div>
                  ) : (
                    <div className="text-center text-white">
                      <Music className="h-24 w-24 mx-auto mb-4" />
                      <p className="text-xl">Audio Player</p>
                      <p className="text-gray-400">Audio integration coming soon</p>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedSermon.title}</h2>
                  <p className="text-gray-400 mb-4">{selectedSermon.speaker}</p>
                  <p className="text-gray-300">{selectedSermon.description}</p>
                  <div className="flex items-center gap-4 mt-4 text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(selectedSermon.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {selectedSermon.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
