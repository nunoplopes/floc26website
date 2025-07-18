import STRIP from "../../assets/images/strip-small.webp";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div
        className="h-24 bg-repeat-x z-0"
        style={{ backgroundImage: `url(${STRIP})`, backgroundSize: "auto 100%" }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-start">
          {/* About Section */}
          <div className="w-[250px]">
            <h3 className="text-3xl font-bold text-neutral-900">About FLoC 2026</h3>
            <p className="text-neutral-600 text-xl">
              The Federated Logic Conference (FLoC) brings together the world&apos;s leading
              researchers in logic and computer science.
            </p>
            <p className="mt-2 text-sm text-gray-600">Hosted in Lisbon, Portugal — July 2026.</p>
          </div>

          {/* Quick Links
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-neutral-800">Quick Links</h3>
            <ul className="space-y-2 text-xl">
              <li>
                <Link to="/" className="text-neutral-600 hover:text-red-500 transition-colors duration-300 text-xl">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/committees" className="text-neutral-600 hover:text-red-500 transition-colors duration-300 text-xl">
                  Committees
                </Link>
              </li>
              <li>
                <Link to="/program" className="text-neutral-600 hover:text-red-500 transition-colors duration-300 text-xl">
                  Program
                </Link>
              </li>
            </ul>
          </div>  */}

          {/* Contact Info
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-neutral-800">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-neutral-600 text-xl">
                <FiMail className="w-4 h-4 text-red-500" />
                <a href="mailto:webmaster@floc26.org" className="hover:text-red-500 transition-colors duration-300">
                  webmaster@floc26.org
                </a>
              </li>
              <li className="text-neutral-600 text-xl">
                FLoC 2026 Organizing Committee
              </li>
            </ul>
          </div> */}

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-900">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/groups/13323055/"
                className="text-neutral-600 hover:text-red-500 transition-colors duration-300"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/FLoC2026"
                className="text-neutral-600 hover:text-red-500 transition-colors duration-300"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578290047447"
                className="text-neutral-600 hover:text-red-500 transition-colors duration-300"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://bsky.app/profile/floc2026.bsky.social"
                className="text-neutral-600 hover:text-red-500 transition-colors duration-300"
              >
                <FaBluesky className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Bottom Bar 
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600 text-sm">
              © {new Date().getFullYear()} FLoC 2026. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/" className="text-neutral-600 hover:text-red-500 transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="/" className="text-neutral-600 hover:text-red-500 transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <Link to="/" className="text-neutral-600 hover:text-red-500 transition-colors duration-300 text-sm">
                Code of Conduct
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
