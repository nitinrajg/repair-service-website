import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';
import Card from '@/components/ui/Card';

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <Card delay={delay}>
      <motion.div
        variants={fadeInUp}
        className="text-center"
      >
        <Icon className="h-12 w-12 mx-auto text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </Card>
  );
}