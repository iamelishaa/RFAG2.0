import type { Route } from "./+types/home";
import { Link } from "react-router";
import { ArrowRight, Calendar, Play, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rhema Faith AG Church - Welcome Home" },
    { name: "description", content: "Welcome to Rhema Faith AG Church - A welcoming community of faith dedicated to spreading God's love." },
  ];
}

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/pastor.png",
    "/path/to/your/image2.jpg",
    "/path/to/your/image3.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden min-h-[600px]">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={images[currentImage]}
                alt="Hero background"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative">
            {/* Ministries Button - Top Right */}
            <Link
              to="/ministries"
              className="absolute top-0 right-0 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold hover:bg-white/30 transition-colors"
            >
              Ministries
            </Link>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto text-center pt-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                MAKING JESUS KNOWN TO
                <span className="block text-[#EEF0FF]">EVERYONE, EVERYWHERE</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Everyone is welcome. Everyone has a next best step. Everyone can make a difference.
              </p>
              <Link
                to="/services"
                className="inline-block bg-white text-[#4F55A1] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#EEF0FF] transition-colors shadow-lg hover:shadow-xl"
              >
                VISIT
              </Link>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-16">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentImage === index
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center">
              <div className="bg-[#EEF0FF] dark:bg-[#3D427B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-[#4F55A1] dark:text-[#7B82FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Sunday Services</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join us every Sunday at 10:00 AM for worship, fellowship, and inspiring messages.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Community Groups</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with others through small groups, Bible studies, and ministry teams.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Sermon Archive</h3>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-sm text-[#4F55A1] dark:text-[#7B82FF] font-semibold">Sunday</span>
                  <h3 className="text-xl font-semibold mt-1 text-gray-900 dark:text-white">Sunday Worship Service</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">10:00 AM - Main Sanctuary</p>
                </div>
                <Calendar className="h-6 w-6 text-gray-400" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
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
