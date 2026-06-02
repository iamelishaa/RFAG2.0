import { Church, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";
import { siteConfig } from "../config/site";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-8 w-8 text-blue-400" aria-hidden="true" />
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </div>
            <p className="text-gray-400">
              A welcoming community of faith dedicated to spreading God's love and serving our neighbors.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/ministries" className="hover:text-white transition-colors">Ministries</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0" aria-hidden="true" />
                <span>{siteConfig.addressLines.join(", ")}</span>
              </li>
              <li>
                <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center space-x-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center space-x-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
