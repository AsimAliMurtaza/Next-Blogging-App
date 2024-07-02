import React from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import Link from "next/link";
import { useDisclosure, Center, Container } from "@chakra-ui/react";
import DrawerExample from "./Drawer";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header className="bg-white text-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-200 rounded-lg">
          <input
            type="text"
            className="px-4 py-2 bg-gray-200 text-gray-800 focus:outline-none rounded-lg"
            placeholder="Search..."
          />
          <button className="px-4 py-2">
            <FaSearch />
          </button>
        </div>
        {/* Title */}
        <div className="text-2xl font-thin">
          <Link href="/">NextJS App</Link>
        </div>
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
        
        {/* Burger Menu (visible on mobile) */}
        <div className="md:hidden">
          <button onClick={onOpen} className="text-2xl">
            <FaBars />
          </button>
        </div>
        {/* Navigation Drawer Button (visible on desktop) */}
        <div className="hidden md:flex">
          <button
            onClick={onOpen}
            className="text-2xl"
            style={{ paddingLeft: 10 }}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Drawer for Navigation */}
      <DrawerExample isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

export default Header;
