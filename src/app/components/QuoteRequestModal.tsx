'use client';

import React, { useState } from 'react';
import { X, Send, Check, Loader2 } from 'lucide-react';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  excavatorModel: string;
}

export default function QuoteRequestModal({ isOpen, onClose, excavatorModel }: QuoteRequestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    timeline: '',
    financing: 'not-sure',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Quote Request Submitted:', {
      ...formData,
      excavatorModel,
      submittedAt: new Date().toISOString()
    });

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 2 seconds
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        timeline: '',
        financing: 'not-sure',
        message: ''
      });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6 rounded-t-2xl border-b border-slate-700">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-black mb-2">Request a Quote</h2>
          <p className="text-cyan-400 font-semibold">{excavatorModel}</p>
        </div>

        {/* Success State */}
        {isSuccess && (
          <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center z-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Request Submitted!</h3>
              <p className="text-slate-600">We'll contact you within 24 hours</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
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
                  Company Name
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
            <h3 className="text-lg font-bold text-slate-900 mb-4">Project Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Primary Use / Industry
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="landscaping">Landscaping & Grounds</option>
                  <option value="construction">Construction & Excavation</option>
                  <option value="agriculture">Agriculture & Farming</option>
                  <option value="utilities">Utilities & Municipal</option>
                  <option value="rental">Rental Fleet</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Purchase Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Ready to purchase now</option>
                  <option value="1-3months">Within 1-3 months</option>
                  <option value="3-6months">Within 3-6 months</option>
                  <option value="researching">Just researching</option>
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
                  <option value="financing">Interested in financing</option>
                  <option value="lease">Lease options</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Additional Comments or Questions
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, attachments needed, or any specific questions..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-bold hover:bg-slate-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Request Quote
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-slate-500 text-center">
            By submitting this form, you agree to be contacted by Volk Equipment regarding your quote request.
          </p>
        </form>
      </div>
    </div>
  );
}



