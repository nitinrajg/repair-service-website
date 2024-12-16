import { motion } from 'framer-motion';
import Button from './ui/Button';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">
            Have Broken?
            <span className="block text-primary">We Can Fix Anything</span>
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            From screen repairs to battery replacements and data recovery services,
            we handle it all with expertise and care.
          </p>
          <div className="space-x-4">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}