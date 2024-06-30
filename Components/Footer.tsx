// components/Footer.js
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-4 mt-auto">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <Link href="https://facebook.com">
            <FaFacebook />
          </Link>
          <Link href="https://instagram.com">
            <FaInstagram />
          </Link>
          <Link href="https://twitter.com">
            <FaTwitter />
          </Link>
        </div>
        <div className="flex justify-center py-6">
          <p>&copy; 2050 Next JS App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
