import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';

export default function ContactInfo() {
  return (
    <motion.div
      variants={fadeInUp}
      className="space-y-2"
    >
      <h3 className="text-xl font-bold mb-4">Contact Info</h3>
      <div className="flex items-center">
        <FaPhone className="mr-2" />
        <span>+1 234 567 890</span>
      </div>
      <div className="flex items-center">
        <FaEnvelope className="mr-2" />
        <span>contact@repairservice.com</span>
      </div>
      <div className="flex items-center">
        <FaMapMarkerAlt className="mr-2" />
        <span>123 Repair Street, Fix City</span>
      </div>
    </motion.div>
  );
}