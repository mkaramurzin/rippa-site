import React from 'react';
import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  siteContent?: {
    companyName?: string;
    tagline?: string;
    contact?: {
      phone?: string;
      email?: string;
      address?: string;
    };
    footer?: {
      description?: string;
      equipmentLinks?: Array<{ text: string; href: string }>;
      supportLinks?: Array<{ text: string; href: string }>;
      legalLinks?: Array<{ text: string; href: string }>;
      copyright?: string;
    };
  };
}

export default function Footer({ siteContent }: FooterProps) {
  // Fallback to default values if content not provided
  const companyName = siteContent?.companyName || 'VOLK EQUIPMENT';
  const tagline = siteContent?.tagline || 'Official Rippa Dealer';
  const phone = siteContent?.contact?.phone || '(425) 560-6009';
  const email = siteContent?.contact?.email || 'volkequipment@gmail.com';
  const address = siteContent?.contact?.address || 'Sammamish, WA 98074';
  const description = siteContent?.footer?.description || 'Your trusted source for premium Kubota-powered mini excavators in the Pacific Northwest.';
  const equipmentLinks = siteContent?.footer?.equipmentLinks || [
    { text: 'Rippa R10D', href: '/products/rippa_r10d' },
    { text: 'Rippa R10G', href: '/products/rippa_r10g' },
    { text: 'Rippa R13 PRO', href: '/products/rippa_r13_pro' },
    { text: 'Rippa R15', href: '/products/rippa_15' },
    { text: 'Rippa R18 PRO', href: '/products/rippa_r18_pro' },
    { text: 'Rippa R22 PRO', href: '/products/rippa_r22_pro' },
    { text: 'Rippa R32 PRO', href: '/products/rippa_32_pro' }
  ];
  const supportLinks = siteContent?.footer?.supportLinks || [
    { text: 'Financing Options', href: '#' },
    { text: 'Warranty Information', href: '#' },
    { text: 'Parts & Service', href: '#' },
    { text: 'Training Resources', href: '#' },
    { text: 'FAQ', href: '#' }
  ];
  const legalLinks = siteContent?.footer?.legalLinks || [
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' },
    { text: 'Warranty Info', href: '#' }
  ];
  const copyright = siteContent?.footer?.copyright || '© 2024 Volk Equipment LLC. All rights reserved.';

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
                <div className="text-lg font-bold text-white">{companyName}</div>
                <div className="text-xs text-cyan-400">{tagline}</div>
              </div>
            </div>
            <p className="text-sm mb-4 text-slate-500">
              {description}
            </p>
            <div className="text-sm text-slate-500">
              <div>{address}</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Equipment</h4>
            <ul className="space-y-3 text-sm">
              {equipmentLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-cyan-400 transition-colors">{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-3 text-sm">
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-cyan-400 transition-colors">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={`tel:${phone.replace(/\D/g, '')}`} className="flex items-center hover:text-cyan-400 transition-colors group">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-slate-700 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Call Us</div>
                    <div className="font-semibold text-white">{phone}</div>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="flex items-center hover:text-cyan-400 transition-colors group">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-slate-700 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Email Us</div>
                    <div className="font-semibold text-white text-xs">{email}</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">
              {copyright}
            </div>
            <div className="flex gap-6 text-sm">
              {legalLinks.map((link, idx) => (
                <a key={idx} href={link.href} className="hover:text-cyan-400 transition-colors">{link.text}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



