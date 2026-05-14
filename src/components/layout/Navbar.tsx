/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Phone, User, Package, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/CartContext';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const [hoveredProduct, setHoveredProduct] = useState(false);
   const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
   const { totalItems } = useCart();

const navLinks = [
      { name: 'Home', href: '/' },
      {
        name: 'Products',
        href: '/catalog',
        hasDropdown: true,
        submenu: [
          { name: 'Sewing Machines', href: '/catalog/sewing-machines' },
          { name: 'Embroidery Machines', href: '/catalog/embroidery-machines' },
          { name: 'Sergers & Overlocks', href: '/catalog/sergers' },
          { name: 'Long Arm Quilting Machines', href: '/catalog/long-arm-quilting-machines' },
          { name: 'Sewing Furniture', href: '/catalog/sewing-furniture' },
          { name: 'Coverstitch Machines', href: '/catalog/coverstitch-machines' },
          { name: 'Industrial Machines', href: '/catalog/industrial' },
          { name: 'Presser Feet', href: '/catalog/presser-feet' },
          { name: 'Serger Feet', href: '/catalog/serger-feet' },
          { name: 'Bobbins', href: '/catalog/bobbins' },
          { name: 'Bobbin Cases', href: '/catalog/bobbin-cases' },
          { name: 'Foot Controls', href: '/catalog/foot-controls' },
          { name: 'Power Cords', href: '/catalog/power-cords' }
        ]
      },
      { name: 'Track Order', href: '/track-order' },
      { name: 'Services and repair', href: '/services' },
      { name: 'About', href: '/about' },
      { name: 'Brands', href: '/contact' },
    ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-b-3xl',
        'bg-white/60 backdrop-blur-md shadow-sm'
      )}
      style={{
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        boxShadow: '0 2px 16px rgba(0, 83, 158, 0.1)',
        color: 'rgb(15, 23, 42)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        justifyContent: 'space-between',
        lineHeight: '24px',
        marginTop: '0',
        maxWidth: '1240px',
        paddingBottom: '12px',
        paddingLeft: '0',
        paddingRight: '0',
        paddingTop: '0',
        position: 'fixed',
        top: '0',
        transitionDuration: '0.3s',
        transitionProperty: 'all',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        width: 'calc(100% - 32px)',
      }}
    >
      {/* Delivery Bar (Top) */}
      <div className="w-full bg-[#00539E]/90 text-white text-[10px] py-1">
        <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center">
          <Link to="/track-order" className="flex items-center gap-2 hover:text-white/80 transition-colors">
            <Package size={12} />
            <span>Track Order</span>
          </Link>
          <span className="hidden md:inline-flex items-center gap-1">
            📞 +256 (414) 123-456
          </span>
        </div>
      </div>

      {/* Main Navbar Content */}
      <div className="w-full flex items-center justify-between px-4">
        {/* Left: Menu and Logo */}
        <div className="flex items-center space-x-3">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-[#00539E] hover:text-[#004080] transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          
          {/* Logo - Just "J" */}
          <Link to="/" className="flex items-center group">
            <div className="bg-[#00539E] text-white w-7 h-7 flex items-center justify-center font-bold text-sm tracking-tighter rounded-lg shadow-sm group-hover:bg-[#004080] transition-colors">J</div>
          </Link>
        </div>

        {/* Center: Desktop Nav (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <>
{link.hasDropdown ? (
                  <div className="relative group">
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        cn(
                          'inline-flex items-center text-xs font-medium tracking-wide uppercase transition-colors hover:text-[#00539E] whitespace-nowrap',
                          isActive ? 'text-[#00539E]' : 'text-slate-600'
                        )
                      }
                    >
                      {link.name}
                      <ChevronDown size={12} className="ml-1" />
                    </NavLink>
                    <div className="absolute left-0 top-full w-52 pt-2 -mt-px hidden group-hover:block">
                      <div className="bg-white border border-sky-200 rounded-md shadow-lg z-20">
                        {link.submenu?.map((subLink) => (
                          <NavLink
                            key={subLink.name}
                            to={subLink.href}
                            className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-[#00539E] hover:text-white"
                          >
                            {subLink.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      'text-xs font-medium tracking-wide uppercase transition-colors hover:text-[#00539E] whitespace-nowrap',
                      isActive ? 'text-[#00539E]' : 'text-slate-600'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </>
          ))}
        </div>

        {/* Right: Search, Cart, Profile */}
        <div className="flex items-center space-x-1">
          <button className="p-1.5 text-slate-500 hover:text-[#00539E] transition-colors">
            <Search size={16} />
          </button>
          <Link to="/cart" className="p-1.5 text-slate-500 hover:text-[#00539E] transition-colors relative">
            <ShoppingCart size={16} />
            <span className="absolute top-0 right-0 bg-[#00539E] text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          </Link>
          <Link to="/profile" className="p-1.5 text-slate-500 hover:text-[#00539E] transition-colors">
            <User size={16} />
          </Link>
        </div>
      </div>

{/* Mobile Nav Slider from Top */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 right-0 bg-white z-50 md:hidden shadow-lg"
              >
                {/* Mobile Header */}
                <div className="px-4 pt-6 pb-4 flex items-center justify-between border-b border-zinc-100">
                  <div className="flex items-center space-x-2">
                    <div className="bg-[#00539E] text-white w-8 h-8 flex items-center justify-center font-bold text-lg tracking-tighter rounded-lg">J</div>
                    <span className="text-lg font-bold text-zinc-950 uppercase tracking-wider">Menu</span>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="p-1.5 text-zinc-500 hover:text-zinc-950 transition-colors">
                    <X size={22} />
                  </button>
                </div>

                <div className="px-4 pt-2 pb-6 space-y-1 max-h-[calc(100vh-70px)] overflow-y-auto">
                  {navLinks.map((link) => (
                    <>
                      {link.hasDropdown ? (
                        <>
                          <div
                            className="flex items-center justify-between w-full py-3 px-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-[#00539E] transition-colors cursor-pointer"
                            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                          >
                            <span className="uppercase tracking-wide">{link.name}</span>
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`}
                            />
                          </div>
                          {mobileProductsOpen &&
                            link.submenu?.map((subLink) => (
                              <Link
                                key={subLink.name}
                                to={subLink.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileProductsOpen(false);
                                }}
                                className="block pl-8 py-2 text-sm text-zinc-500 hover:bg-zinc-50 hover:text-[#00539E] transition-colors"
                              >
                                {subLink.name}
                              </Link>
                            ))}
                        </>
                      ) : (
                        <Link
                          key={link.name}
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-3 px-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-[#00539E] transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </>
                  ))}

                  <div className="pt-4 mx-3 border-t border-zinc-100">
                    <div className="flex items-center justify-center space-x-2 text-zinc-400 text-sm">
                      <Phone size={14} />
                      <span>Call Us: +1 (234) 567-890</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
    </nav>
  );
}
