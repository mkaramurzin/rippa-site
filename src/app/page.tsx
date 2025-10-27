'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ArrowRight, Check, Star, Wrench, Shield, Clock, Users, Zap, Award, TrendingUp, Package } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './components/Footer';

const VolkEquipmentSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeModel, setActiveModel] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const models = [
    {
      name: "Rippa R10D",
      slug: "rippa_r10d",
      tonnage: "1.0 Ton",
      power: "7.2 kW",
      features: ["Ultra-compact design", "Diesel efficiency", "Perfect for tight spaces"],
      specs: { depth: "1.8m", reach: "3.2m", width: "0.78m" },
      image: "/products/rippa_r10d/IMG_7771.jpg"
    },
    {
      name: "Rippa R10G",
      slug: "rippa_r10g",
      tonnage: "1.0 Ton",
      power: "7.5 kW",
      features: ["Gas-powered option", "Zero tail swing", "Indoor/outdoor use"],
      specs: { depth: "1.8m", reach: "3.2m", width: "0.78m" },
      image: "/products/rippa_r10g/IMG_7774.jpg"
    },
    {
      name: "Rippa R13 PRO",
      slug: "rippa_r13_pro",
      tonnage: "1.3 Ton",
      power: "10.5 kW",
      features: ["Enhanced hydraulics", "Expandable tracks", "Superior stability"],
      specs: { depth: "2.3m", reach: "3.8m", width: "1.0m" },
      image: "/products/rippa_r13_pro/IMG_7824.jpg"
    },
    {
      name: "Rippa R15",
      slug: "rippa_15",
      tonnage: "1.5 Ton",
      power: "12.8 kW",
      features: ["Versatile workhorse", "Optimized fuel economy", "Extended reach"],
      specs: { depth: "2.5m", reach: "4.2m", width: "1.2m" },
      image: "/products/rippa_15/IMG_7791.jpg"
    },
    {
      name: "Rippa R18 PRO",
      slug: "rippa_r18_pro",
      tonnage: "1.8 Ton",
      power: "15.2 kW",
      features: ["Professional grade", "Advanced boom control", "All-day comfort"],
      specs: { depth: "2.7m", reach: "4.6m", width: "1.45m" },
      image: "/products/rippa_r18_pro/IMG_7815.jpg"
    },
    {
      name: "Rippa R22 PRO",
      slug: "rippa_r22_pro",
      tonnage: "2.2 Ton", 
      power: "18.0 kW",
      features: ["Most popular model", "Maximum versatility", "Heavy-duty performance"],
      specs: { depth: "2.8m", reach: "4.8m", width: "1.5m" },
      image: "/products/rippa_r22_pro/IMG_7836.jpg"
    },
    {
      name: "Rippa R32 PRO",
      slug: "rippa_32_pro",
      tonnage: "3.2 Ton",
      power: "19.5 kW",
      features: ["Maximum digging force", "Cast swing boom", "All-terrain capable"],
      specs: { depth: "3.2m", reach: "5.2m", width: "1.7m" },
      image: "/products/rippa_32_pro/IMG_7856.jpg"
    }
  ];

  const testimonials = [
    {
      text: "We've run three Rippa excavators for two years straight—no major issues, just routine maintenance. The Kubota engines sip fuel compared to our old machines, and the expandable tracks are a game-changer on residential properties.",
      author: "Jake Morrison",
      company: "Morrison Landscaping, Bellevue, WA",
      rating: 5
    },
    {
      text: "Volk Equipment didn't just sell us a machine—they helped us calculate ROI, explained every feature, and followed up monthly. That's the service level that builds long-term partnerships.",
      author: "Sarah Chen", 
      company: "Chen Excavation Services, Portland, OR",
      rating: 5
    },
    {
      text: "The hydraulic force on these mini excavators rivals machines double the weight. We're completing trenching jobs 30% faster, which directly impacts our bottom line.",
      author: "David Torres",
      company: "Torres Utilities, Spokane, WA",
      rating: 5
    }
  ];

  const stats = [
    { number: "200,000+", label: "Units Delivered Globally", icon: <Package className="w-6 h-6" /> },
    { number: "15+", label: "Years Excellence", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Tech Support", icon: <Clock className="w-6 h-6" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const advantages = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Kubota Power Plant",
      desc: "Every machine features legendary Kubota diesel engines—proven for fuel efficiency, longevity, and reliable performance in the toughest PNW conditions."
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Advanced Hydraulics",
      desc: "Superior hydraulic systems deliver exceptional digging force and smooth operation. Hidden gear motors reduce maintenance and extend machine life."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Built to Last",
      desc: "Reinforced cast swing booms, telescopic expandable tracks, and heavy-duty construction ensure your Rippa excavator works for decades, not just years."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Local PNW Support",
      desc: "Based in Sammamish with 48-hour response times. We understand Pacific Northwest terrain and provide dedicated service throughout WA, OR, and ID."
    }
  ];

  const industries = [
    { name: "Landscaping & Grounds", icon: "🌳", image: "/ai-photography/industry-landscaping.png" },
    { name: "Construction & Excavation", icon: "🏗️", image: "/ai-photography/industry-construction.png" },
    { name: "Agriculture & Farming", icon: "🚜", image: "/ai-photography/industry-agriculture.png" },
    { name: "Utilities & Municipal", icon: "⚡", image: "/ai-photography/industry-utilities.png" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900 shadow-xl' : 'bg-slate-900/98'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-xl">V</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">VOLK EQUIPMENT</div>
                <div className="text-xs text-cyan-400">Official Rippa Dealer - PNW</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#equipment" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Equipment</a>
              <a href="#solutions" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Solutions</a>
              <a href="#why-volk" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Why Us</a>
              <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Contact</a>
              <a href="tel:4255606009" className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                <Phone className="w-4 h-4 mr-2" />
                (425) 560-6009
              </a>
              <Link href="/quote" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105">
                Request Quote
              </Link>
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
              <a href="#equipment" className="block text-slate-300 hover:text-cyan-400 py-2 font-medium">Equipment</a>
              <a href="#solutions" className="block text-slate-300 hover:text-cyan-400 py-2 font-medium">Solutions</a>
              <a href="#why-volk" className="block text-slate-300 hover:text-cyan-400 py-2 font-medium">Why Us</a>
              <a href="#contact" className="block text-slate-300 hover:text-cyan-400 py-2 font-medium">Contact</a>
              <a href="tel:4255606009" className="block text-slate-300 hover:text-cyan-400 py-2 font-medium">
                <Phone className="w-4 h-4 inline mr-2" />
                (425) 560-6009
              </a>
              <Link href="/quote" className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold">
                Request Quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* AI Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/ai-photography/hero-background-pnw.png"
            alt="Mini excavator in Pacific Northwest"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/50 to-slate-900/60"></div>
        </div>

        {/* Glowing orb effect */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-sm font-bold tracking-wide">OFFICIAL RIPPA DEALER • PACIFIC NORTHWEST</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Premium Kubota-Powered
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-pulse">
                Mini Excavators
              </span>
          </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Built by Rippa. Backed by Volk Equipment. Engineered for the demanding terrain and projects of the Pacific Northwest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/models" className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center justify-center">
                Explore Models
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/quote" className="bg-slate-800 border-2 border-cyan-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all">
                Request Quote
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-cyan-500/50 transition-all">
                <Check className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <span className="text-sm font-semibold block">Kubota Diesel</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-cyan-500/50 transition-all">
                <Check className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <span className="text-sm font-semibold block">2-Year Warranty</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-cyan-500/50 transition-all">
                <Check className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <span className="text-sm font-semibold block">Local Support</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-cyan-500/50 transition-all">
                <Check className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <span className="text-sm font-semibold block">24/7 Tech Help</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-16 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="flex justify-center mb-3 text-cyan-600 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Models Section */}
      <section id="equipment" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-bold mb-4">
              RIPPA MINI EXCAVATORS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Perfect Match</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From compact 1-ton landscapers to powerful 3-ton excavators—all featuring Kubota diesel reliability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {models.map((model, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveModel(idx)}
                className={`relative bg-white rounded-2xl overflow-hidden border-2 transition-all cursor-pointer hover:shadow-2xl ${
                  activeModel === idx 
                    ? 'border-cyan-500 shadow-xl shadow-cyan-500/20 scale-105' 
                    : 'border-slate-200 hover:border-cyan-300'
                }`}
              >
                {/* Product Image */}
                <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-slate-50 to-white">
                  <Image 
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <div className="text-sm font-bold text-cyan-600 mb-2">{model.tonnage}</div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">{model.name}</h3>
                    <div className="text-slate-600 text-sm font-semibold">Power: {model.power}</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {model.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4 mb-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-black text-slate-900">{model.specs.depth}</div>
                        <div className="text-xs text-slate-600">Dig Depth</div>
                      </div>
                      <div>
                        <div className="text-lg font-black text-slate-900">{model.specs.reach}</div>
                        <div className="text-xs text-slate-600">Max Reach</div>
                      </div>
                      <div>
                        <div className="text-lg font-black text-slate-900">{model.specs.width}</div>
                        <div className="text-xs text-slate-600">Width</div>
                      </div>
                    </div>
                  </div>

                  <Link 
                    href={`/products/${model.slug}`}
                    className={`block w-full py-3 rounded-xl font-bold transition-all text-center ${
                      activeModel === idx
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {activeModel === idx ? 'View Full Details' : 'View Details'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors">
              View Complete Model Lineup
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Volk Equipment */}
      <section id="why-volk" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Volk Equipment</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              More than a dealer—your trusted partner for Pacific Northwest construction and excavation success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => (
              <div key={idx} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-slate-800 transition-all hover:scale-105">
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">{adv.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{adv.title}</h3>
                <p className="text-slate-400 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section id="solutions" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Every Industry</span>
            </h2>
            <p className="text-xl text-slate-600">Specialized solutions for your specific needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-cyan-500 hover:shadow-xl transition-all">
                {/* AI-Generated Industry Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image 
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-5xl drop-shadow-lg">{industry.icon}</div>
                  <h3 className="absolute bottom-4 right-4 text-xl font-black text-white drop-shadow-lg text-right leading-tight">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Trusted Across the Northwest
            </h2>
            <p className="text-cyan-100 text-lg">Real feedback from real professionals</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex justify-center mb-6 gap-1">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <div className="min-h-56">
              <div className="text-4xl text-white/40 mb-4">"</div>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                {testimonials[activeTestimonial].text}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[activeTestimonial].author.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">{testimonials[activeTestimonial].author}</div>
                  <div className="text-cyan-100 text-sm">{testimonials[activeTestimonial].company}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-10 gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeTestimonial ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Power Up Your Fleet?
          </h2>
          <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto">
            Get expert guidance, transparent pricing, and equipment that delivers results every single day.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Link href="/quote" className="bg-slate-800 border-2 border-slate-700 rounded-2xl p-8 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-xl mb-3">Request Quote</h3>
              <p className="text-slate-400 text-sm mb-6">Detailed pricing in under 24 hours</p>
              <div className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors flex items-center justify-center mx-auto">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
            
            <Link href="/quote" className="bg-slate-800 border-2 border-slate-700 rounded-2xl p-8 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-xl mb-3">Schedule Demo</h3>
              <p className="text-slate-400 text-sm mb-6">See Rippa machines in action</p>
              <div className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors flex items-center justify-center mx-auto">
                Book Now <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
            
            <div className="bg-slate-800 border-2 border-slate-700 rounded-2xl p-8 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-xl mb-3">Call Now</h3>
              <p className="text-slate-400 text-sm mb-6">Speak with a Rippa expert</p>
              <a href="tel:4255606009" className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors flex items-center justify-center mx-auto">
                (425) 560-6009
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-cyan-400 mr-2" />
              No-pressure consultations
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-cyan-400 mr-2" />
              Transparent fixed pricing
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-cyan-400 mr-2" />
              Same-day quotes
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-cyan-400 mr-2" />
              Local PNW service
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VolkEquipmentSite;
