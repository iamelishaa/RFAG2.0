import type { Route } from "./+types/events";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Events - Rhema Faith AG Church" },
    { name: "description", content: "Stay up to date with upcoming events at Rhema Faith AG Church." },
  ];
}

const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "2025-06-01",
    time: "10:00 AM",
    location: "Main Sanctuary",
    description: "Join us for uplifting worship and an inspiring message.",
    category: "Weekly",
    registration: false
  },
  {
    id: 2,
    title: "Midweek Bible Study",
    date: "2025-06-04",
    time: "7:00 PM",
    location: "Fellowship Hall",
    description: "Deep dive into Scripture with interactive discussion.",
    category: "Weekly",
    registration: false
  },
  {
    id: 3,
    title: "Youth Night",
    date: "2025-06-07",
    time: "6:30 PM",
    location: "Youth Center",
    description: "Fun, fellowship, and faith for teens and young adults.",
    category: "Youth",
    registration: false
  },
  {
    id: 4,
    title: "Community BBQ",
    date: "2025-06-15",
    time: "12:00 PM",
    location: "Church Grounds",
    description: "Free community BBQ with food, games, and fellowship.",
    category: "Outreach",
    registration: true
  },
  {
    id: 5,
    title: "Worship Night",
    date: "2025-06-07",
    time: "6:00 PM",
    location: "Main Sanctuary",
    description: "Extended time of worship, prayer, and spiritual refreshment.",
    category: "Special",
    registration: false
  },
  {
    id: 6,
    title: "Men's Breakfast",
    date: "2025-06-08",
    time: "8:00 AM",
    location: "Fellowship Hall",
    description: "Breakfast and fellowship for men of all ages.",
    category: "Men",
    registration: true
  }
];

export default function Events() {
  const [filter, setFilter] = useState("All");
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  const categories = ["All", "Weekly", "Youth", "Outreach", "Special", "Men"];

  const filteredEvents = filter === "All" 
    ? events 
    : events.filter(event => event.category === filter);

  const handleRegister = (event: typeof events[0]) => {
    setSelectedEvent(event);
    setShowRegistrationModal(true);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join us for worship, fellowship, and community events. There's something for everyone!
          </p>
        </div>

        {/* Filter Tabs */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  filter === category
                    ? "bg-[#4F55A1] text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Events Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#6B72C7] to-[#4F55A1] p-4">
                  <div className="flex items-center justify-between text-white">
                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                    <Calendar className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {event.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-[#4F55A1]" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-[#4F55A1]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-[#4F55A1]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  {event.registration && (
                    <button
                      onClick={() => handleRegister(event)}
                      className="w-full bg-[#4F55A1] text-white py-2 rounded-lg font-semibold hover:bg-[#3D427B] transition-colors"
                    >
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calendar Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Calendar className="h-8 w-8 text-[#4F55A1] mr-3" />
              Calendar View
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 text-center">
              <Calendar className="h-16 w-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 dark:text-gray-400">
                Interactive calendar coming soon! Check back for a full monthly view of all church events.
              </p>
            </div>
          </div>
        </section>

        {/* Subscribe to Events */}
        <section>
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
            <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our event calendar and get reminders about upcoming activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Registration Modal */}
      {showRegistrationModal && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Register for {selectedEvent.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {new Date(selectedEvent.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedEvent.time}
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F55A1] dark:bg-gray-700 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F55A1] dark:bg-gray-700 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F55A1] dark:bg-gray-700 dark:text-white"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowRegistrationModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#4F55A1] text-white rounded-lg hover:bg-[#3D427B] transition-colors"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
