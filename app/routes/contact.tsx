import type { FormEvent } from "react";
import type { Route } from "./+types/contact";
import { Link, useSearchParams } from "react-router";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { createMailto, siteConfig } from "../config/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - Rhema Faith AG Church" },
    { name: "description", content: "Get in touch with Rhema Faith AG Church - contact information, prayer requests, and more." },
  ];
}

const subjects = ["General Inquiry", "Prayer Request", "Join a Small Group", "Volunteer Opportunity", "Pastoral Care", "Other"];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const requestedSubject = searchParams.get("subject") ?? "General Inquiry";
  const defaultSubject = subjects.includes(requestedSubject) ? requestedSubject : "General Inquiry";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = String(form.get("subject"));
    const body = [
      `Name: ${form.get("firstName")} ${form.get("lastName")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone") || "Not provided"}`,
      "",
      String(form.get("message")),
    ].join("\n");
    window.location.href = createMailto(subject, body);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We'd love to hear from you. Send us an email with questions, prayer requests, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section aria-labelledby="contact-form-heading">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 id="contact-form-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send Us a Message</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Submitting this form opens your email app so you can review the message before sending it.</p>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                    <input id="firstName" name="firstName" type="text" autoComplete="given-name" required className="form-input" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                    <input id="lastName" name="lastName" type="text" autoComplete="family-name" required className="form-input" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required className="form-input" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone (optional)</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" className="form-input" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <select key={defaultSubject} id="subject" name="subject" defaultValue={defaultSubject} className="form-input">
                    {subjects.map((subject) => <option key={subject}>{subject}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea id="message" name="message" rows={5} required className="form-input resize-none" placeholder="How can we help you?" />
                </div>
                <button type="submit" className="w-full bg-[#4F55A1] text-white py-3 rounded-lg font-semibold hover:bg-[#3D427B] transition-colors flex items-center justify-center">
                  <Send className="h-5 w-5 mr-2" aria-hidden="true" /> Open Email App
                </button>
              </form>
            </div>
          </section>

          <section className="space-y-8" aria-labelledby="contact-info-heading">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 id="contact-info-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <ContactRow icon={<MapPin />} title="Address"><p>{siteConfig.addressLines[0]}<br />{siteConfig.addressLines[1]}</p></ContactRow>
                <ContactRow icon={<Phone />} title="Phone"><a className="hover:text-[#4F55A1]" href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a></ContactRow>
                <ContactRow icon={<Mail />} title="Email"><a className="hover:text-[#4F55A1]" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></ContactRow>
                <ContactRow icon={<Clock />} title="Office Hours"><p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: Closed</p></ContactRow>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#4F55A1] to-[#3D427B] rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Need Prayer?</h2>
              <p className="text-[#EEF0FF] mb-6">Our prayer team is ready to pray for you. Share your request and we'll join you in prayer.</p>
              <Link to="/contact?subject=Prayer%20Request" className="inline-block bg-white text-[#4F55A1] px-6 py-3 rounded-lg font-semibold hover:bg-[#EEF0FF] transition-colors">Submit Prayer Request</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ContactRow({ icon, title, children }: { icon: React.ReactElement; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-[#EEF0FF] dark:bg-[#3D427B] p-3 rounded-lg text-[#4F55A1] dark:text-[#7B82FF] [&>svg]:h-6 [&>svg]:w-6" aria-hidden="true">{icon}</div>
      <div><h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3><div className="text-gray-600 dark:text-gray-400">{children}</div></div>
    </div>
  );
}
