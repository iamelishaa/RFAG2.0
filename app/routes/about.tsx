import type { Route } from "./+types/about";
import { Heart, Users, Target, Award } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - Rhema Faith AG Church" },
    { name: "description", content: "Learn about Rhema Faith AG Church - our beliefs, history, and leadership team." },
  ];
}

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Welcome to our church family. Learn more about who we are, what we believe, and our mission to serve God and our community.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Heart className="h-8 w-8 text-[#4F55A1] mr-3" />
              Our Story
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
              Rhema Faith AG Church was founded with a simple vision: to create a welcoming community where people can encounter God, grow in faith, and serve others. Over the years, we've grown from a small gathering to a vibrant church family, but our core mission remains the same.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              We believe that everyone has a place in God's family, and we're committed to creating an environment where you can explore faith, ask questions, and experience the love of Jesus Christ.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <div className="bg-[#EEF0FF] dark:bg-[#3D427B] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-7 w-7 text-[#4F55A1] dark:text-[#7B82FF]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Love</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We love God and love people, creating a culture of acceptance and grace.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <div className="bg-green-100 dark:bg-green-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We build authentic relationships and support one another in faith and life.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-7 w-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Purpose</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We live with intention, pursuing God's calling for our lives individually and collectively.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <div className="bg-orange-100 dark:bg-orange-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-7 w-7 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We strive for excellence in all we do, honoring God with our best efforts.
              </p>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#4F55A1] to-[#3D427B] rounded-2xl shadow-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">What We Believe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h3 className="font-semibold mb-2">The Bible</h3>
                  <p className="text-[#EEF0FF] text-sm">
                    We believe the Bible is God's inspired Word, authoritative and trustworthy for faith and life.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h3 className="font-semibold mb-2">God</h3>
                  <p className="text-[#EEF0FF] text-sm">
                    We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Jesus Christ</h3>
                  <p className="text-[#EEF0FF] text-sm">
                    We believe Jesus is the Son of God, fully divine and fully human, who died and rose for our salvation.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Salvation</h3>
                  <p className="text-[#EEF0FF] text-sm">
                    We believe salvation is by grace through faith in Jesus Christ, not by works.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h3 className="font-semibold mb-2">The Holy Spirit</h3>
                  <p className="text-[#EEF0FF] text-sm">
                    We believe the Holy Spirit empowers believers for service and spiritual growth.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h3 className="font-semibold mb-2">The Church</h3>
                  <p className="text-[#EEF0FF] text-sm">
                    We believe the Church is the body of Christ, called to worship, serve, and make disciples.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-[#6B72C7] to-[#4F55A1] h-48 flex items-center justify-center">
                <Users className="h-20 w-20 text-white/80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Pastor John Smith</h3>
                <p className="text-[#4F55A1] dark:text-[#7B82FF] mb-3">Senior Pastor</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Leading our church with vision and passion for over 15 years.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-green-500 to-green-600 h-48 flex items-center justify-center">
                <Users className="h-20 w-20 text-white/80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Pastor Sarah Johnson</h3>
                <p className="text-green-600 dark:text-green-400 mb-3">Associate Pastor</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Overseeing our ministries and community outreach programs.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 h-48 flex items-center justify-center">
                <Users className="h-20 w-20 text-white/80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Pastor Michael Davis</h3>
                <p className="text-purple-600 dark:text-purple-400 mb-3">Youth Pastor</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Guiding the next generation in faith and discipleship.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
