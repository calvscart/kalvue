import { motion } from 'framer-motion';

export default function Custom404() {
  return (
    <motion.div className="min-h-screen bg-black text-white flex items-center justify-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl">404 - Page Not Found</h1>
    </motion.div>
  );
}