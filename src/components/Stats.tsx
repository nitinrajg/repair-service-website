import { motion } from 'framer-motion';
import { stats } from '@/lib/constants/stats';
import StatCard from '@/components/home/StatCard';
import { staggerChildren } from '@/lib/animations/variants';

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}