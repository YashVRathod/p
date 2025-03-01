import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a202c] text-white py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div>
            <h2 className="text-2xl font-bold">Farmvest</h2>
            <p className="text-sm text-gray-400 mt-2">
              Invest in the future of farming with confidence.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-gray-300 hover:text-white transition">
              Why Farmvest?
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Investment
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Products
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Company
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Farmvest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
