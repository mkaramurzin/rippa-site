'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import QuoteRequestModal from './QuoteRequestModal';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Check, Package, Wrench } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductPageProps {
  name: string;
  tonnage: string;
  power: string;
  features: string[];
  specs: {
    depth: string;
    reach: string;
    width: string;
    weight?: string;
  };
  description: string;
  images?: string[];
  detailedSpecs?: Array<{ specification: string; details: string }>;
}

export default function ProductPage({ name, tonnage, power, features, specs, description, images = [], detailedSpecs }: ProductPageProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'specifications'>('description');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
 
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <QuoteRequestModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        excavatorModel={name}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#equipment" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Equipment
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-sm font-bold mb-4">
                {tonnage} • {power}
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                {name}
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Kubota-powered mini excavator engineered for demanding Pacific Northwest terrain
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
                  <Package className="w-6 h-6 text-cyan-400 mb-2" />
                  <div className="text-sm text-slate-400">Operating Weight</div>
                  <div className="text-2xl font-bold">{tonnage}</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
                  <Wrench className="w-6 h-6 text-cyan-400 mb-2" />
                  <div className="text-sm text-slate-400">Engine Power</div>
                  <div className="text-2xl font-bold">{power}</div>
                </div>
              </div>

              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
              >
                Request Quote
              </button>
            </div>

            <div className="relative">
              <div className="relative w-full bg-white border-2 border-slate-700/50 rounded-2xl overflow-hidden">
                {images && images.length > 0 ? (
                  <Image 
                    src={images[0]} 
                    alt={name}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="aspect-[4/3] flex items-center justify-center text-slate-500">
                    <div className="text-center">
                      <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">Product image coming soon</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-4xl font-black text-slate-900 mb-2">{specs.depth}</div>
              <div className="text-slate-600 font-medium">Max Dig Depth</div>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-4xl font-black text-slate-900 mb-2">{specs.reach}</div>
              <div className="text-slate-600 font-medium">Max Reach</div>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-4xl font-black text-slate-900 mb-2">{specs.width}</div>
              <div className="text-slate-600 font-medium">Machine Width</div>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-4xl font-black text-slate-900 mb-2">{tonnage}</div>
              <div className="text-slate-600 font-medium">Operating Weight</div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 border-b border-slate-200">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-8 py-4 font-bold text-lg transition-all relative ${
                activeTab === 'description'
                  ? 'text-cyan-600'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Description
              {activeTab === 'description' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`px-8 py-4 font-bold text-lg transition-all relative ${
                activeTab === 'specifications'
                  ? 'text-cyan-600'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Technical Specifications
              {activeTab === 'specifications' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
              )}
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'description' ? (
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-6">Key Features</h2>
                <div className="space-y-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="w-6 h-6 text-cyan-500 mr-4 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-6">About This Model</h2>
                <div className="prose prose-lg prose-slate max-w-none">
                  {description ? (
                    <ReactMarkdown>{description}</ReactMarkdown>
                  ) : (
                    <p className="text-slate-600 italic">
                      Detailed description coming soon. This Rippa excavator features Kubota diesel reliability
                      and is engineered for Pacific Northwest conditions.
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Technical Specifications</h2>
              {detailedSpecs && detailedSpecs.length > 0 ? (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="text-left py-4 px-6 font-black text-slate-900 text-lg border-b border-slate-200">
                          Specification
                        </th>
                        <th className="text-left py-4 px-6 font-black text-slate-900 text-lg border-b border-slate-200">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {detailedSpecs.map((spec, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="py-4 px-6 font-semibold text-slate-700 border-b border-slate-200">
                            {spec.specification}
                          </td>
                          <td className="py-4 px-6 text-slate-600 border-b border-slate-200">
                            {spec.details}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-center text-slate-600 italic">
                  Detailed specifications coming soon. Contact us for complete technical data.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Additional Images Gallery */}
      {images && images.length > 1 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">More Views</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.slice(1).map((image, idx) => (
                <div key={idx} className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-cyan-500 transition-all">
                  <Image 
                    src={image} 
                    alt={`${name} view ${idx + 2}`}
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Get expert guidance, detailed specifications, and transparent pricing for the {name}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:4255606009" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105">
              Call (425) 560-6009
            </a>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-slate-800 border-2 border-cyan-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all"
            >
              Request Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

