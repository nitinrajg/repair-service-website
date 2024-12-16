import { motion } from 'framer-motion';
import ContactInfo from './layout/ContactInfo';
import BusinessHours from './layout/BusinessHours';
import { staggerChildren } from '@/lib/animations/variants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">RepairService</h3>
            <p className="text-gray-400">
              Professional repair services for all your electronic devices.
            </p>
          </motion.div>
          <ContactInfo />
          <BusinessHours />
        </motion.div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} RepairService. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}