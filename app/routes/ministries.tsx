import type { Route } from "./+types/ministries";
import { Heart, Users, BookOpen, Music, HelpingHand, Baby, GraduationCap, Coffee } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ministries - Rhema Faith AG Church" },
    { name: "description", content: "Explore our ministries and find your place to serve and grow at Rhema Faith AG Church." },
  ];
}

const ministries = [
  {
    icon: Heart,
    title: "Worship Ministry",
    description: "Join our worship team and help lead others into God's presence through music and praise.",
    color: "blue",
    schedule: "Thursday rehearsals at 7:00 PM"
  },
  {
    icon: Users,
    title: "Community Outreach",
    description: "Serve our local community through food drives, shelter support, and neighborhood events.",
    color: "green",
    schedule: "Various times throughout the month"
  },
  {
    icon: BookOpen,
    title: "Bible Study Groups",
    description: "Small groups that meet weekly to study Scripture and grow together in faith.",
    color: "purple",
    schedule: "Multiple days and times available"
  },
  {
    icon: Music,
    title: "Youth Ministry",
    description: "Dynamic programs for teens and young adults to grow in faith and build friendships.",
    color: "orange",
    schedule: "Fridays at 6:30 PM"
  },
  {
    icon: Baby,
    title: "Children's Ministry",
    description: "Fun, safe, and engaging programs for children to learn about God's love.",
    color: "pink",
    schedule: "Sundays during service"
  },
  {
    icon: HelpingHand,
    title: "Volunteer Team",
    description: "Use your gifts to serve the church through greeting, hospitality, and practical support.",
    color: "teal",
    schedule: "Flexible scheduling"
  },
  {
    icon: GraduationCap,
    title: "Young Adults",
    description: "Connect with other young adults navigating faith, career, and relationships.",
    color: "indigo",
    schedule: "Tuesdays at 7:00 PM"
  },
  {
    icon: Coffee,
    title: "Senior Fellowship",
    description: "Community and support for seniors to stay connected and continue growing in faith.",
    color: "amber",
    schedule: "Second Thursday of the month"
  }
];

export default function Ministries() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Ministries
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find your place to serve, grow, and connect. There's a ministry for everyone!
          </p>
        </div>

        {/* Ministries Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              const colorClasses = {
                blue: "bg-[#EEF0FF] dark:bg-[#3D427B] text-[#4F55A1] dark:text-[#7B82FF]",
                green: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
                purple: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
                orange: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
                pink: "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400",
                teal: "bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400",
                indigo: "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400",
                amber: "bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400"
              };

              return (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className={`${colorClasses[ministry.color as keyof typeof colorClasses]} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {ministry.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {ministry.description}
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    <span className="font-medium">Schedule:</span> {ministry.schedule}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Get Involved */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl shadow-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <p className="text-lg text-green-100 mb-6">
              Ready to join a ministry? We'd love to help you find the perfect fit for your gifts and interests.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold mb-2">Discover Your Gifts</h3>
                <p className="text-green-100 text-sm">
                  Take our spiritual gifts assessment to find where you're best suited to serve.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold mb-2">Try It Out</h3>
                <p className="text-green-100 text-sm">
                  Visit any ministry group to see if it's a good fit before committing.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold mb-2">Start Serving</h3>
                <p className="text-green-100 text-sm">
                  Complete our volunteer form and a ministry leader will connect with you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Form CTA */}
        <section>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Serve?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Whether you're gifted in music, teaching, hospitality, or just have a heart to help, there's a place for you on our team.
            </p>
            <button className="bg-[#4F55A1] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3D427B] transition-colors">
              Become a Volunteer
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
