import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check, ArrowRight, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function ModelsPage() {
  const featuredModels = [
    {
      name: "Rippa R13 PRO",
      slug: "rippa_r13_pro",
      tonnage: "1.3 Ton",
      power: "10.5 kW",
      tagline: "The Perfect Entry to Professional Grade",
      description: "Ideal for contractors seeking compact access with professional-grade performance. Features expandable tracks and enhanced hydraulics.",
      features: ["Enhanced hydraulics", "Expandable tracks", "Superior stability", "Swing boom capability", "Entry PRO model"],
      specs: { depth: "2.3m", reach: "3.8m", width: "1.0m" },
      idealFor: ["Landscaping professionals", "Small excavation companies", "Residential contractors", "Utility work"]
    },
    {
      name: "Rippa R22 PRO",
      slug: "rippa_r22_pro",
      tonnage: "2.2 Ton",
      power: "18.0 kW",
      tagline: "Our Most Popular & Versatile Model",
      description: "The bestselling choice for contractors who need maximum versatility. Perfect balance of power, reach, and maneuverability for diverse applications.",
      features: ["Most popular model", "Maximum versatility", "Heavy-duty performance", "Zero-tail swing", "Cab option available"],
      specs: { depth: "2.8m", reach: "4.8m", width: "1.5m" },
      idealFor: ["Professional contractors", "Municipal work", "Commercial projects", "Rental fleets"]
    },
    {
      name: "Rippa R32 PRO",
      slug: "rippa_32_pro",
      tonnage: "3.2 Ton",
      power: "19.5 kW",
      tagline: "Maximum Power for Demanding Projects",
      description: "Our flagship heavy-duty excavator delivering maximum digging force and all-terrain capability for the most demanding applications.",
      features: ["Maximum digging force", "Cast swing boom", "All-terrain capable", "Climate-controlled cab", "LCD display"],
      specs: { depth: "3.2m", reach: "5.2m", width: "1.7m" },
      idealFor: ["Large excavation companies", "Site development", "Deep trenching", "Commercial construction"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full">
            <Wrench className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-bold tracking-wide">TOP 3 MOST POPULAR MODELS</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Our Most Popular
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">
              Excavator Models
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Discover the three Rippa excavators that contractors across the Pacific Northwest trust most for their projects.
          </p>

          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {featuredModels.map((model, idx) => (
              <div key={idx} className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Placeholder */}
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl overflow-hidden border-4 border-white shadow-2xl relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-slate-400">
                        <Wrench className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-sm font-semibold">{model.name} Image</p>
                      </div>
                    </div>
                    {idx === 1 && (
                      <div className="absolute top-4 right-4 bg-cyan-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                        MOST POPULAR
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-bold mb-4">
                    {model.tonnage} • {model.power}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                    {model.name}
                  </h2>
                  <p className="text-xl text-cyan-600 font-bold mb-6">{model.tagline}</p>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {model.description}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-slate-100 rounded-xl p-4 text-center">
                      <div className="text-2xl font-black text-slate-900">{model.specs.depth}</div>
                      <div className="text-xs text-slate-600 font-semibold">Dig Depth</div>
                    </div>
                    <div className="bg-slate-100 rounded-xl p-4 text-center">
                      <div className="text-2xl font-black text-slate-900">{model.specs.reach}</div>
                      <div className="text-xs text-slate-600 font-semibold">Max Reach</div>
                    </div>
                    <div className="bg-slate-100 rounded-xl p-4 text-center">
                      <div className="text-2xl font-black text-slate-900">{model.specs.width}</div>
                      <div className="text-xs text-slate-600 font-semibold">Width</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {model.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="bg-cyan-50 border-2 border-cyan-200 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-bold text-cyan-900 mb-3">Ideal For:</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {model.idealFor.map((use, i) => (
                        <div key={i} className="flex items-center text-cyan-700">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></div>
                          {use}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/products/${model.slug}`}
                      className="flex-1 text-center px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
                    >
                      View Full Details
                    </Link>
                    <Link
                      href="/quote"
                      className="flex-1 text-center px-6 py-4 border-2 border-cyan-500 text-cyan-600 rounded-xl font-bold hover:bg-cyan-50 transition-all"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Models CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Explore Our Complete Lineup
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            From ultra-compact 1.0-ton models to heavy-duty 3.2-ton excavators—we have the perfect machine for every application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#equipment"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              View All 7 Models
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:4255606009"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 border-2 border-cyan-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all"
            >
              Call (425) 560-6009
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

