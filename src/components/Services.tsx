import { motion } from 'framer-motion';
import { services } from '@/lib/constants/services';
import ServiceCard from '@/components/home/ServiceCard';
import { staggerChildren } from '@/lib/animations/variants';

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          We offer a wide variety of gadget services
        </motion.h2>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.2}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}