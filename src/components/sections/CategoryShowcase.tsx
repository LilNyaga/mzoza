/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { CATEGORIES, CATEGORY_LINKS, PRODUCTS } from '@/constants';
import { formatCurrency } from '@/lib/utils';

const ROWS = [
  {
    label: 'Sewing Machines',
    categoryId: 'sewing-machines',
  },
  {
    label: 'Long Arm Quilting Machines',
    categoryId: 'long-arm-quilting-machines',
  },
  {
    label: 'Sewing Furniture',
    categoryId: 'sewing-furniture',
  },
];

export default function CategoryShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00539E]/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-[1px] bg-[#00539E]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.36em] text-slate-500">
              Discover diffrent collecions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-slate-900 mb-3">
            Find your perfect machine 
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            Powering Tailors, workshops & Factories World-wide.
          </p>
        </div>

        {/* 3 Product Rows */}
        <div className="space-y-6">
          {ROWS.map((row) => {
            const category = CATEGORIES.find((c) => c.id === row.categoryId);
            const link = CATEGORY_LINKS[row.categoryId] || `/catalog/${row.categoryId}`;
            const products = PRODUCTS.filter((p) => p.category === row.label);

            return (
              <Link
                key={row.categoryId}
                to={link}
                className="block group bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors rounded-none overflow-hidden"
              >
                {/* Row Header */}
                <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {category && (
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-10 h-10 object-cover rounded-none"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-display font-bold tracking-tight text-zinc-950 group-hover:text-[#00539E] transition-colors">
                        {row.label}
                      </h3>
                      {category && (
                        <p className="text-[10px] text-zinc-500">{category.description}</p>
                      )}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-950 transition-colors">
                    Explore All
                    <ChevronRight size={12} />
                  </span>
                </div>

                {/* Product Items */}
                <div className="flex flex-nowrap overflow-x-auto py-4 px-6 gap-6">
                  {products.slice(0, 6).map((product) => (
                    <div
                      key={product.id}
                      className="flex-shrink-0 w-48 md:w-56 bg-white border border-zinc-100 p-3 group/item"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-32 object-cover mb-2"
                      />
                      <p className="text-xs font-bold text-zinc-900 line-clamp-1 group-hover/item:text-[#00539E] transition-colors">
                        {product.name}
                      </p>
                      <p className="text-[10px] text-zinc-500">{product.brand}</p>
                      <p className="text-sm font-mono font-bold text-zinc-900 mt-1">
                        {formatCurrency(product.price)}
                      </p>
                    </div>
                  ))}
                  {products.length === 0 && (
                    <div className="px-4 py-8 text-center text-sm text-zinc-400">
                      No products available
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Browse All CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 bg-zinc-950 text-white px-8 py-4 uppercase tracking-widest text-[10px] font-bold rounded-none hover:bg-zinc-800 transition-colors"
          >
            Browse Full Catalog
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}