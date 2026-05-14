/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { CATEGORIES, CATEGORY_LINKS } from '@/constants';

const SLIDES_DURATION = 5000;
const TRANSITION_DURATION = 600;

const CATEGORIES_WITH_LINKS = CATEGORIES.map(cat => ({
  ...cat,
  href: CATEGORY_LINKS[cat.id] || '/catalog'
}));

function CategorySlide({ category, index }: { category: typeof CATEGORIES_WITH_LINKS[0]; index: number }) {
  return (
    <Link to={category.href} className="group block w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className={cn(
          "relative h-[320px] md:h-[450px] lg:h-[400px] rounded-none overflow-hidden cursor-pointer",
          "shadow-[0_8px_32px_rgba(0,0,0,0.15)]",
          "transition-all duration-500 group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
        )}
      >
        {/* Image */}
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Dark overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-white"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold tracking-tight mb-2">
              {category.name}
            </h3>
            <p className="text-[12px] md:text-sm text-white/80 mb-3 max-w-md">
              {category.description}
            </p>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 border border-white/40 px-5 py-2 rounded-none hover:bg-white hover:text-zinc-950 transition-all duration-300">
              Explore Category
              <ChevronRight size={14} />
            </span>
          </motion.div>
        </div>

        {/* Subtle shimmer on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>
      </motion.div>
    </Link>
  );
}

export default function CategoryShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSlides = CATEGORIES_WITH_LINKS.length;

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        setDirection('right');
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }
    }, SLIDES_DURATION);
  }, [isPaused, totalSlides]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [startTimer, stopTimer]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      startTimer();
    }
  };

  const goNext = () => {
    setDirection('right');
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      startTimer();
    }
  };

  const goPrev = () => {
    setDirection('left');
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      startTimer();
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00539E]/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-[1px] bg-[#00539E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.36em] text-slate-500">
                Browse by Category
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-slate-900 mb-3">
              Explore Our Categories
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Click into any category to discover the machines and products available.
              <span className="text-[#00539E] font-semibold"> Auto-rotates every {SLIDES_DURATION / 1000}s.</span>
            </p>
          </div>

          {/* Counter & Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={goPrev}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-12 h-12 flex items-center justify-center border-2 border-zinc-200 hover:border-[#00539E] hover:bg-[#00539E]/5 transition-all duration-300 rounded-none"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="text-zinc-700" />
            </button>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
              {String(currentSlide + 1).padStart(2, '0')}
              <span className="text-zinc-200 mx-1">/</span>
              {String(totalSlides).padStart(2, '0')}
            </span>
            <button
              onClick={goNext}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-12 h-12 flex items-center justify-center border-2 border-zinc-200 hover:border-[#00539E] hover:bg-[#00539E]/5 transition-all duration-300 rounded-none"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="text-zinc-700" />
            </button>
          </div>
        </div>

        {/* Slideshow Carousel */}
        <div className="relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-zinc-100 z-20">
            <motion.div
              className="h-full bg-[#00539E] origin-left"
              animate={{ scaleX: (currentSlide + 1) / totalSlides }}
              transition={{ duration: SLIDES_DURATION / 1000, ease: "linear" }}
            />
          </div>

          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              initial={{ x: direction === 'right' ? '100%' : '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === 'right' ? '-30%' : '30%', opacity: 0 }}
              transition={{
                duration: TRANSITION_DURATION / 1000,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
               {CATEGORIES_WITH_LINKS.map((category, i) => (
                <div key={category.id}>
                  <CategorySlide category={category} index={i} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className={cn(
                "relative h-1 w-10 rounded-none transition-all duration-300",
                index === currentSlide
                  ? "bg-[#00539E] w-14"
                  : "bg-zinc-200 hover:bg-zinc-400"
              )}
            />
          ))}
        </div>

        {/* Manual navigation hint */}
        <p className="text-center text-[10px] text-zinc-400 mt-6 uppercase tracking-[0.2em]">
          Click any card to explore • Hover to pause • Auto-rotates every {SLIDES_DURATION / 1000}s
        </p>
      </div>
    </section>
  );
}