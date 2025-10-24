import React from 'react';
import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <div className="text-white font-bold text-xl">V</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">VOLK EQUIPMENT</div>
                <div className="text-xs text-cyan-400">Official Rippa Dealer</div>
              </div>
            </div>
            <p className="text-sm mb-4 text-slate-500">
              Your trusted source for premium Kubota-powered mini excavators in the Pacific Northwest.
            </p>
            <div className="text-sm text-slate-500">
              <div>Sammamish, WA 98074</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Equipment</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products/rippa_r10d" className="hover:text-cyan-400 transition-colors">Rippa R10D</Link></li>
              <li><Link href="/products/rippa_r10g" className="hover:text-cyan-400 transition-colors">Rippa R10G</Link></li>
              <li><Link href="/products/rippa_r13_pro" className="hover:text-cyan-400 transition-colors">Rippa R13 PRO</Link></li>
              <li><Link href="/products/rippa_15" className="hover:text-cyan-400 transition-colors">Rippa R15</Link></li>
              <li><Link href="/products/rippa_r18_pro" className="hover:text-cyan-400 transition-colors">Rippa R18 PRO</Link></li>
              <li><Link href="/products/rippa_r22_pro" className="hover:text-cyan-400 transition-colors">Rippa R22 PRO</Link></li>
              <li><Link href="/products/rippa_32_pro" className="hover:text-cyan-400 transition-colors">Rippa R32 PRO</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Financing Options</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Warranty Information</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Parts & Service</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Training Resources</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:4255606009" className="flex items-center hover:text-cyan-400 transition-colors group">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-slate-700 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Call Us</div>
                    <div className="font-semibold text-white">(425) 560-6009</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:volkequipment@gmail.com" className="flex items-center hover:text-cyan-400 transition-colors group">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-slate-700 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Email Us</div>
                    <div className="font-semibold text-white text-xs">volkequipment@gmail.com</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">
              © 2024 Volk Equipment LLC. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Warranty Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



