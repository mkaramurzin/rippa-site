'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Send, Check, Loader2, Package } from 'lucide-react';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    model: '',
    projectType: '',
    timeline: '',
    financing: 'not-sure',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const excavatorModels = [
    { value: 'rippa_r10d', label: 'Rippa R10D (1.0 Ton - Diesel)' },
    { value: 'rippa_r10g', label: 'Rippa R10G (1.0 Ton - Gas)' },
    { value: 'rippa_r13_pro', label: 'Rippa R13 PRO (1.3 Ton)' },
    { value: 'rippa_15', label: 'Rippa R15 (1.5 Ton)' },
    { value: 'rippa_r18_pro', label: 'Rippa R18 PRO (1.8 Ton)' },
    { value: 'rippa_r22_pro', label: 'Rippa R22 PRO (2.2 Ton) - Most Popular' },
    { value: 'rippa_32_pro', label: 'Rippa R32 PRO (3.2 Ton)' },
    { value: 'not_sure', label: "Not sure - Need recommendation" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Quote Request Submitted:', {
      ...formData,
      submittedAt: new Date().toISOString()
    });

    setIsSubmitting(false);
    setIsSuccess(true);

    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
            <Package className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-bold tracking-wide">FREE CONSULTATION</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Get Your Custom Quote
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Fill out the form below and we'll provide detailed pricing, specifications, and expert guidance within 24 hours.
          </p>
        </div>
      </section>

      {/* Success Message */}
      {isSuccess && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-green-900 mb-2">Quote Request Submitted Successfully!</h3>
                <p className="text-green-800 mb-4">
                  Thank you for your interest in Rippa mini excavators. We've received your request and will contact you within 24 hours with:
                </p>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Detailed pricing and specifications
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Financing options (if applicable)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Answers to your specific questions
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Demo scheduling availability
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quote Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            
            {/* Excavator Selection */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                Select Your Excavator
              </h2>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Which model interests you? *
                </label>
                <select
                  required
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-lg"
                >
                  <option value="">Choose an excavator model...</option>
                  {excavatorModels.map(model => (
                    <option key={model.value} value={model.value}>{model.label}</option>
                  ))}
                </select>
                <p className="text-sm text-slate-500 mt-2">
                  Not sure? Select "Need recommendation" and we'll help you choose the perfect model.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Company / Business Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Your Company LLC"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="(425) 555-0100"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                Project & Purchase Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Primary Use / Industry
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select an industry...</option>
                    <option value="landscaping">Landscaping & Grounds Maintenance</option>
                    <option value="construction">Construction & General Contracting</option>
                    <option value="excavation">Excavation & Site Development</option>
                    <option value="agriculture">Agriculture & Farming</option>
                    <option value="utilities">Utilities & Municipal Work</option>
                    <option value="rental">Rental Fleet / Equipment Rental</option>
                    <option value="property">Property Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Purchase Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select timeline...</option>
                      <option value="immediate">Ready to purchase now</option>
                      <option value="1-3months">Within 1-3 months</option>
                      <option value="3-6months">Within 3-6 months</option>
                      <option value="6-12months">Within 6-12 months</option>
                      <option value="researching">Currently researching options</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Financing Interest
                    </label>
                    <select
                      value={formData.financing}
                      onChange={(e) => setFormData({ ...formData, financing: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="not-sure">Not sure yet</option>
                      <option value="cash">Cash purchase</option>
                      <option value="financing">Interested in financing options</option>
                      <option value="lease">Lease or rent-to-own</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                    placeholder="Share details about your project, specific features or attachments you need, any questions you have, or anything else that would help us provide an accurate quote..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full px-8 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Submitting Your Request...
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="w-6 h-6" />
                    Request Submitted!
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    Request My Custom Quote
                  </>
                )}
              </button>
              <p className="text-sm text-slate-500 text-center mt-4">
                By submitting this form, you agree to be contacted by Volk Equipment regarding your quote request. We typically respond within 24 hours.
              </p>
            </div>
          </form>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-cyan-500 transition-all">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-bold text-slate-900 mb-2">Prefer to Call?</h3>
              <p className="text-slate-600 text-sm mb-3">Speak directly with our equipment specialists</p>
              <a href="tel:4255606009" className="text-cyan-600 font-bold hover:text-cyan-700">(425) 560-6009</a>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-cyan-500 transition-all">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600 text-sm mb-3">Send detailed questions anytime</p>
              <a href="mailto:volkequipment@gmail.com" className="text-cyan-600 font-bold hover:text-cyan-700 text-sm break-all">volkequipment@gmail.com</a>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-cyan-500 transition-all">
              <div className="text-4xl mb-3">🚜</div>
              <h3 className="font-bold text-slate-900 mb-2">Schedule Demo</h3>
              <p className="text-slate-600 text-sm mb-3">See our excavators in action</p>
              <span className="text-cyan-600 font-bold">Mention in form above</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

