'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="space-y-16">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] flex items-center"
      >
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative container mx-auto px-4">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-5xl font-light mb-4">Minimal Elegance</h1>
            <p className="text-xl mb-8">Discover our curated collection of timeless pieces.</p>
            <Link
              href="/shop"
              className="inline-flex items-center bg-black text-white px-8 py-3 hover:bg-gray-800 transition-all hover:scale-105"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Women's Collection",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
          },
          {
            title: "Men's Collection",
            image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800",
          },
          {
            title: "Accessories",
            image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=800",
          },
        ].map((category, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="group relative h-96 overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <h3 className="text-white text-2xl font-light">{category.title}</h3>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}