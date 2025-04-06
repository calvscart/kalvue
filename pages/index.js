import Head from 'next/head';
import MainEffect from '@/components/MainEffect';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kalrex - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kalrex — your digital hub for creations, status, and more." />
      </Head>
      <motion.main className="min-h-screen bg-gray-950 text-white p-8"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <MainEffect />
        <h1 className="text-4xl font-bold mb-4">Welcome to Kalrex</h1>
        <p>This is the modernized version of your homepage.</p>
      </motion.main>
    </>
  );
}