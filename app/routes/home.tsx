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

      {/* Latest Sermons Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Video Thumbnail */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
                <img
                  src="/images/pastor.png"
                  alt="Latest Sermon Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                    <Play className="h-10 w-10 text-[#4F55A1] ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Sermon Details */}
            <div>
              <span className="text-sm font-semibold text-[#4F55A1] dark:text-[#7B82FF] tracking-wider uppercase">
                Latest Sermon
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
                How to Survive Financial Stress
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Discover biblical principles for managing your finances and finding peace in times of economic uncertainty. Learn practical wisdom from scripture that can transform your approach to money.
              </p>
              <Link
                to="/sermons"
                className="bg-[#4F55A1] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#3D427B] transition-colors inline-flex items-center"
              >
                Watch Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Welcome Message */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Welcome to Our Family
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                We're so glad you're here. At Rhema Faith AG Church, you'll find a community of people who are passionate about following Jesus and making a difference in the world.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Whether you're new to faith or have been walking with God for years, there's a place for you here. Come as you are and experience the love and grace of God in a real and tangible way.
              </p>
              <Link
                to="/about"
                className="bg-[#4F55A1] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#3D427B] transition-colors inline-flex items-center"
              >
                Meet Our Pastor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Right Side - Pastor Photo */}
            <div className="relative">
              <img
                src="/images/pastor.png"
                alt="Pastor"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">Upcoming <span className="italic font-normal">Events</span></h2>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-[400px] h-[225px] rounded-2xl overflow-hidden flex-shrink-0 shadow-xl">
                <img
                  src="/images/pastor.png"
                  alt="Sunday Worship Service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-lg font-semibold text-[#4F55A1] dark:text-[#7B82FF]">Sunday, June 8</span>
                  <h3 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">Sunday Worship Service</h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mt-3">10:00 AM - Main Sanctuary</p>
                </div>
                <Link to="/events" className="inline-block mt-6 text-[#4F55A1] dark:text-[#7B82FF] font-bold text-lg hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-[400px] h-[225px] rounded-2xl overflow-hidden flex-shrink-0 shadow-xl">
                <img
                  src="/images/pastor.png"
                  alt="Midweek Bible Study"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-lg font-semibold text-green-600 dark:text-green-400">Wednesday, June 11</span>
                  <h3 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">Midweek Bible Study</h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mt-3">7:00 PM - Fellowship Hall</p>
                </div>
                <Link to="/events" className="inline-block mt-6 text-green-600 dark:text-green-400 font-bold text-lg hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-[400px] h-[225px] rounded-2xl overflow-hidden flex-shrink-0 shadow-xl">
                <img
                  src="/images/pastor.png"
                  alt="Youth Night"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-lg font-semibold text-purple-600 dark:text-purple-400">Friday, June 13</span>
                  <h3 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">Youth Night</h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mt-3">6:30 PM - Youth Center</p>
                </div>
                <Link to="/events" className="inline-block mt-6 text-purple-600 dark:text-purple-400 font-bold text-lg hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Link
              to="/events"
              className="bg-[#4F55A1] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#3D427B] transition-colors inline-flex items-center"
            >
              View All Events
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#4F55A1] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider opacity-80 mb-3">Join Us This Sunday</p>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              YOU'RE <span className="italic font-normal">Invited</span>
            </h2>
            <p className="text-lg lg:text-xl mb-10 opacity-90">
              Whether you are just exploring your faith, looking for a new church home, or have been a believer for many years, we have a place for you.
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#4F55A1] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Plan Your Visit
            </Link>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/pastor.png"
                alt="People gathering at church"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
