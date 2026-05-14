/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, CreditCard, ShieldCheck, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CATEGORIES, PRODUCTS } from '@/constants';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';
import { useRef } from 'react';

import Hero from '@/components/sections/Hero';
import CategoryShowcase from '@/components/sections/CategoryShowcase';

const CATEGORY_LINKS: Record<string, string> = {
  industrial: '/catalog/industrial',
  home: '/catalog/home',
  embroidery: '/catalog/embroidery',
  overlock: '/catalog/overlock',
  'long-arm-quilting-machines': '/catalog/long-arm-quilting-machines',
  'coverstitch-machines': '/catalog/coverstitch-machines',
  'presser-feet': '/catalog/presser-feet',
  'serger-feet': '/catalog/serger-feet',
  bobbins: '/catalog/bobbins',
  'bobbin-cases': '/catalog/bobbin-cases',
  'foot-controls': '/catalog/foot-controls',
  'power-cords': '/catalog/power-cords',
};

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="space-y-0">
      <Helmet>
        <title>TRACE Sewing | Industrial Precision Machinery for Modern Business</title>
        <meta name="description" content="Equip your sewing business with premium industrial machinery. We provide high-speed systems, embroidery units, and global technical support." />
      </Helmet>
      
      <Hero />

{/* JUKI Machines Showcase - Display immediately on page load */}
       <section className="py-24 bg-[#fef3e8] border-b border-sky-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div>
                <div className="max-w-xl mb-6">
                  <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-3 text-[#00539E]">
                    JUKI Sewing Machines
                  </h2>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    Premium industrial and professional sewing machines built for precision and reliability.
                  </p>
                </div>
                <div>
                  <Link
                    to="/catalog"
                    className="inline-flex items-center gap-2 text-3xl md:text-4xl font-display font-bold tracking-tight uppercase text-black hover:text-black transition-colors"
                    style={{ textDecorationColor: 'currentColor' }}
                  >
                    <span>products</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

{/* Best Sellers Carousel */}
             <p className="text-slate-500 text-sm tracking-wide mb-4">All products in one place</p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  if (carouselRef.current) {
                    carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
                  }
                }}
                className="w-10 h-10 flex items-center justify-center border-2 border-zinc-200 hover:border-[#00539E] hover:bg-[#00539E]/5 transition-all duration-300 rounded-none flex-shrink-0"
                aria-label="Scroll left"
              >
                <ArrowLeft size={18} className="text-zinc-700" />
              </button>

              <div
                ref={carouselRef}
                className="flex gap-8 px-2 overflow-x-auto no-scrollbar scroll-smooth pb-4 flex-grow"
              >
                {CATEGORIES.map((category) => {
                  const categoryProducts = PRODUCTS.filter(
                    (p) => p.category.toLowerCase() === category.name.toLowerCase()
                  );
                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="min-w-[280px] md:min-w-[340px] lg:min-w-[400px] group cursor-pointer flex-shrink-0"
                    >
                      <Link to={CATEGORY_LINKS[category.id] ?? '/catalog'}>
                        <div className="relative h-[200px] md:h-[280px] overflow-hidden bg-white border border-sky-200 shadow-sm">
                          {/* Category Image */}
<img
                             src={category.image}
                             alt={category.name}
                             className="w-full h-full object-cover"
                             referrerPolicy="no-referrer"
                           />
                          {/* Dark overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
{/* Bottom content */}
                           <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                             <div className="flex items-center justify-between mb-1">
                               <h3 className="text-lg md:text-xl font-display font-bold tracking-tight text-white">
                                 {category.name}
                               </h3>
                               <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/90 border border-white/40 px-3 py-1 rounded-none hover:bg-white hover:text-zinc-950 transition-all duration-300">
                                 Browse
                                 <ArrowRight size={10} />
                               </span>
                             </div>
                             <div className="flex items-center justify-between mt-1">
                               <p className="text-white/80 text-[11px] md:text-xs leading-relaxed line-clamp-2">
                                 {category.description}
                               </p>
                               <span className="bg-sky-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-none flex-shrink-0">
                                 {categoryProducts.length} Products
                               </span>
                             </div>
                           </div>
                          {/* Shimmer */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <button
                onClick={() => {
                  if (carouselRef.current) {
                    carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
                  }
                }}
                className="w-10 h-10 flex items-center justify-center border-2 border-zinc-200 hover:border-[#00539E] hover:bg-[#00539E]/5 transition-all duration-300 rounded-none flex-shrink-0"
                aria-label="Scroll right"
              >
                <ArrowRight size={18} className="text-zinc-700" />
              </button>
</div>

            {/* Featured Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Payment Card */}
              <div className="bg-white p-8 border border-sky-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <CreditCard size={32} className="text-[#00539E]" />
                </div>
                <h3 className="text-xl font-display font-bold tracking-tight text-slate-900 mb-3">Payment</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Don't have the full amount? No stress. We offer simple monthly installment plans so you can own your machine today and pay little by little — at a pace that works for you.
                </p>
              </div>

              {/* Guarantee Card */}
              <div className="bg-white p-8 border border-sky-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck size={32} className="text-[#00539E]" />
                </div>
                <h3 className="text-xl font-display font-bold tracking-tight text-slate-900 mb-3">Guarantee</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every machine and spare part is certified, inspected, and backed by our quality guarantee. Shop with total confidence — if it's not right, we make it right. Your peace of mind is our priority.
                </p>
              </div>

              {/* Free Shipping Card */}
              <div className="bg-white p-8 border border-sky-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <Truck size={32} className="text-[#00539E]" />
                </div>
                <h3 className="text-xl font-display font-bold tracking-tight text-slate-900 mb-3">Free Shipping</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Spend over $100 and we'll deliver straight to your door — completely free. Fast, secure, and fully tracked so your order arrives safely and on time, every time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category Showcase with Slideshow */}
        <CategoryShowcase />



      {/* WhatsApp CTA */}
     
    </div>
  );
}
