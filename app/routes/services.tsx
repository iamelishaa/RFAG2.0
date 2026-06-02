import type { Route } from "./+types/services";
import { Clock, MapPin, Calendar, Music, Users, Baby } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services - Rhema Faith AG Church" },
    { name: "description", content: "Find service times, locations, and what to expect at Rhema Faith AG Church." },
  ];
}

export default function Services() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join us for worship, fellowship, and spiritual growth. Everyone is welcome!
          </p>
        </div>

        {/* Main Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Weekly Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-l-4 border-[#4F55A1]">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-[#EEF0FF] dark:bg-[#3D427B] p-3 rounded-lg">
                  <Calendar className="h-8 w-8 text-[#4F55A1] dark:text-[#7B82FF]" />
                </div>
                <span className="bg-[#EEF0FF] dark:bg-[#3D427B] text-[#4F55A1] dark:text-[#7B82FF] px-3 py-1 rounded-full text-sm font-semibold">
                  Primary
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Sunday Worship</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-[#4F55A1]" />
                  <span className="text-lg">10:00 AM - 11:30 AM</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-[#4F55A1]" />
                  <span>Main Sanctuary</span>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Join us for uplifting worship, inspiring messages, and community fellowship. Kids programs available.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                  <Calendar className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Midweek
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Wednesday Bible Study</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-green-600" />
                  <span className="text-lg">7:00 PM - 8:30 PM</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-green-600" />
                  <span>Fellowship Hall</span>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Deep dive into Scripture with interactive discussion and practical application for daily life.
              </p>
            </div>
          </div>
        </section>

        {/* Special Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Special Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Baby className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Kids Church</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Sundays during service
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Fun, age-appropriate Bible teaching for children ages 3-12
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Youth Group</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Fridays at 6:30 PM
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Dynamic worship and fellowship for teens and young adults
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="bg-pink-100 dark:bg-pink-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="h-8 w-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Worship Night</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                First Sunday of month
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Extended time of worship, prayer, and spiritual refreshment
              </p>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#4F55A1] to-[#3D427B] rounded-2xl shadow-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold mb-2">Casual Atmosphere</h3>
                <p className="text-[#EEF0FF] text-sm">
                  Come as you are! We're a casual church where you can feel comfortable in jeans or your Sunday best.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold mb-2">Contemporary Worship</h3>
                <p className="text-[#EEF0FF] text-sm">
                  Our worship team leads modern songs mixed with timeless hymns, creating an engaging experience.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold mb-2">Practical Messages</h3>
                <p className="text-[#EEF0FF] text-sm">
                  Sermons are Bible-based and relevant to everyday life, helping you grow in your faith journey.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold mb-2">Friendly Community</h3>
                <p className="text-[#EEF0FF] text-sm">
                  Our church family is warm and welcoming. We'd love to get to know you!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Location & Directions
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-[#EEF0FF] dark:bg-[#3D427B] p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-[#4F55A1] dark:text-[#7B82FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Rhema Faith AG Church
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Church Street<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Office Hours
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: Closed
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Parking
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Free parking available on-site. Accessible parking spaces near the main entrance.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 h-64 flex items-center justify-center">
              <div className="text-center text-gray-500 dark:text-gray-400">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p>Interactive Map</p>
                <p className="text-sm">(Google Maps integration coming soon)</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
