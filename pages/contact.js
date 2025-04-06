import Head from 'next/head';
import Lanyard from '@/components/Lanyard';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Kalrex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main className="min-h-screen bg-gray-900 text-white p-8"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <p className="mb-4">You can reach out to Kalrex through this page.</p>
        <Lanyard />
      </motion.main>
    </>
  );
}