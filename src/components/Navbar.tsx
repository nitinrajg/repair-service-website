import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              RepairService
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/services" className="hover:text-primary">Services</Link>
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-red-700">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}