'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900 shadow-xl' : 'bg-slate-900/98'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <div className="text-white font-bold text-xl">V</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">VOLK EQUIPMENT</div>
              <div className="text-xs text-cyan-400">Official Rippa Dealer - PNW</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/#equipment" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Equipment</Link>
            <Link href="/#solutions" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Solutions</Link>
            <Link href="/#why-volk" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Why Us</Link>
            <Link href="/#contact" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Contact</Link>
            <a href="tel:4255606009" className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors font-medium">
              <Phone className="w-4 h-4 mr-2" />
              (425) 560-6009
            </a>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105">
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-4 space-y-3">
            <Link href="/#equipment" className="block text-slate-300 hover:text-cyan-400 py-2 font-medium">Equipment</Link>
            <Link href="/#solutions" className="block text-slate-300 hover:text-cyan-400 py-2 font-medium">Solutions</Link>
            <Link href="/#why-volk" className="block text-slate-300 hover:text-cyan-400 py-2 font-medium">Why Us</Link>
            <Link href="/#contact" className="block text-slate-300 hover:text-cyan-400 py-2 font-medium">Contact</Link>
            <a href="tel:4255606009" className="block text-slate-300 hover:text-cyan-400 py-2 font-medium">
              <Phone className="w-4 h-4 inline mr-2" />
              (425) 560-6009
            </a>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold">
              Request Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

