import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeInUp}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
}