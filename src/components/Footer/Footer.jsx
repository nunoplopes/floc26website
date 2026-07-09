import STRIP from "../../assets/images/strip-small.webp";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import VISIT_PORTUGAL from "../../assets/images/sponsors/visit-portugal.svg";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div
        className="h-24 bg-repeat-x z-0"
        style={{ backgroundImage: `url(${STRIP})`, backgroundSize: "auto 100%" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* About Section */}
          <div className="w-full md:w-[250px]">
            <h3 className="text-3xl font-bold text-neutral-900">About FLoC 2026</h3>
            <p className="text-neutral-600 text-xl">
              The Federated Logic Conference (FLoC) brings together the world's leading researchers
              in logic and computer science.
            </p>
            <p className="mt-2 text-sm text-gray-600">Hosted in Lisbon, Portugal — July 2026.</p>
          </div>

          {/* Sponsor */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Supported By</h3>

            <a href="https://www.visitportugal.com/en" aria-label="Visit Portugal">
              <img
                src={VISIT_PORTUGAL}
                alt="Visit Portugal"
                className="h-20 w-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-900">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/groups/13323055/"
                aria-label="LinkedIn"
                className="text-neutral-600 hover:text-red-500 transition-colors duration-300"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/FLoC2026"
                aria-label="X (Twitter)"
                className="text-neutral-600 hover:text-red-500 transition-colors duration-300"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578290047447"
                aria-label="Facebook"
                className="text-neutral-600 hover:text-red-500 transition-colors duration-300"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://bsky.app/profile/floc2026.bsky.social"
                aria-label="Bluesky"
                className="text-neutral-600 hover:text-red-500 transition-colors duration-300"
              >
                <FaBluesky className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600 text-sm">© FLoC 2026. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                to="/policies"
                className="text-neutral-600 hover:text-red-500 transition-colors duration-300 text-sm"
              >
                Policies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
