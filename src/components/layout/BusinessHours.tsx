import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';

export default function BusinessHours() {
  return (
    <motion.div
      variants={fadeInUp}
      className="space-y-2"
    >
      <h3 className="text-xl font-bold mb-4">Business Hours</h3>
      <div className="space-y-2 text-gray-400">
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </motion.div>
  );
}