import type { Route } from "./+types/home";
import { Link } from "react-router";
import { ArrowRight, Calendar, Play, Users } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rhema Faith AG Church - Welcome Home" },
    { name: "description", content: "Welcome to Rhema Faith AG Church - A welcoming community of faith dedicated to spreading God's love." },
  ];
}

export default function Home() {

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="public/images/Hero-Section-Video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
          <div className="relative min-h-screen flex items-end pb-22">
            {/* Main Content - Bottom Left */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
                Welcome to Rhema Faith AG Church
                <span className="block text-lg">A mission with a big vision</span>
              </h1>
              <p className="text-base md:text-lg mb-4 text-white/90 leading-relaxed">
                See what God can do through you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Get connected
                </Link>
                <Link
                  to="/about"
                  className="bg-gray-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-700 transition-colors text-center"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Join us in worship
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Whether you're joining us in person or online, there's a place for you in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Sunday Services</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Experience powerful worship and inspiring messages every Sunday morning.
              </p>
              <Link to="/services" className="text-[#4F55A1] dark:text-[#7B82FF] font-semibold hover:underline inline-flex items-center">
                Service times
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Online Church</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Stream our services live from anywhere in the world.
              </p>
              <Link to="/live" className="text-[#4F55A1] dark:text-[#7B82FF] font-semibold hover:underline inline-flex items-center">
                Watch online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Small Groups</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Connect with others in small groups for fellowship and growth.
              </p>
              <Link to="/ministries" className="text-[#4F55A1] dark:text-[#7B82FF] font-semibold hover:underline inline-flex items-center">
                Find a group
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ministries</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get involved in ministries that match your gifts and passions.
              </p>
              <Link to="/ministries" className="text-[#4F55A1] dark:text-[#7B82FF] font-semibold hover:underline inline-flex items-center">
                Explore ministries
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/about"
              className="bg-[#4F55A1] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#3D427B] transition-colors inline-flex items-center"
            >
              Learn more about us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img src="/images/120.png" alt="Sunday Services" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Sunday Services</h3>
                <Link to="/services" className="text-[#4F55A1] dark:text-[#7B82FF] hover:underline">
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Join us every Sunday at 10:00 AM for worship, fellowship, and inspiring messages.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img src="/images/120.png" alt="Community Groups" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Community Groups</h3>
                <Link to="/ministries" className="text-green-600 dark:text-green-400 hover:underline">
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with others through small groups, Bible studies, and ministry teams.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img src="/images/120.png" alt="Sermon Archive" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Sermon Archive</h3>
                <Link to="/sermons" className="text-purple-600 dark:text-purple-400 hover:underline">
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Watch or listen to past sermons anytime, anywhere. Never miss a message.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Upcoming Events
            </h2>
            <Link to="/events" className="text-[#4F55A1] dark:text-[#7B82FF] hover:underline">
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-2xl hover:shadow-3xl transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-sm text-[#4F55A1] dark:text-[#7B82FF] font-semibold">Sunday</span>
                  <h3 className="text-xl font-semibold mt-1 text-gray-900 dark:text-white">Sunday Worship Service</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">10:00 AM - Main Sanctuary</p>
                </div>
                <Calendar className="h-6 w-6 text-gray-400" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-2xl hover:shadow-3xl transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-sm text-green-600 dark:text-green-400 font-semibold">Wednesday</span>
                  <h3 className="text-xl font-semibold mt-1 text-gray-900 dark:text-white">Midweek Bible Study</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">7:00 PM - Fellowship Hall</p>
                </div>
                <Calendar className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/events"
              className="text-[#4F55A1] dark:text-[#7B82FF] font-semibold hover:text-[#3D427B] dark:hover:text-[#EEF0FF] inline-flex items-center"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#4F55A1] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 text-[#EEF0FF]">
            We'd love to meet you this Sunday. Come as you are!
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#4F55A1] px-8 py-3 rounded-lg font-semibold hover:bg-[#EEF0FF] transition-colors inline-flex items-center justify-center"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
