'use client';

import React, { useState, useEffect } from 'react';
import { Lock, Save, LogOut, Home, Settings, Package, MessageSquare, BarChart3, Users, FileText, ChevronRight, Check, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ContentData {
  site: any;
  homepage: any;
  products: any[];
  modelsPage: any;
  quotePage: any;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [activeSection, setActiveSection] = useState('homepage');

  useEffect(() => {
    // Check if already authenticated (simple check)
    const auth = sessionStorage.getItem('admin_authenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadContent();
    } else {
      setLoading(false);
    }
  }, []);

  const loadContent = async () => {
    try {
      const response = await fetch('/api/content');
      if (response.ok) {
        const data = await response.json();
        setContent(data);
      }
    } catch (error) {
      console.error('Error loading content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        sessionStorage.setItem('admin_authenticated', 'true');
        loadContent();
      } else {
        const data = await response.json();
        setLoginError(data.error || 'Invalid password');
      }
    } catch (error) {
      setLoginError('Login failed. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
    setContent(null);
    setPassword('');
  };

  const handleSave = async () => {
    if (!content) return;

    setSaving(true);
    setSaveSuccess(false);

    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.details || errorData.error || 'Failed to save content. Please try again.';
        alert(errorMessage);
      }
    } catch (error) {
      alert('Error saving content. Please check your connection and try again.');
    } finally {
      setSaving(false);
    }
  };

  const updateContent = (path: string[], value: any) => {
    if (!content) return;

    const newContent = { ...content };
    let current: any = newContent;

    for (let i = 0; i < path.length - 1; i++) {
      if (!current[path[i]]) {
        current[path[i]] = {};
      }
      current = current[path[i]];
    }

    current[path[path.length - 1]] = value;
    setContent(newContent);
  };

  const updateNestedContent = (path: string[], value: any) => {
    if (!content) return;

    const newContent = JSON.parse(JSON.stringify(content));
    let current: any = newContent;

    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }

    current[path[path.length - 1]] = value;
    setContent(newContent);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-indigo-200">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950 flex items-center justify-center p-4">
        <div className="bg-slate-900 border-2 border-indigo-500/30 rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/50">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-black text-white mb-2">Admin Login</h1>
            <p className="text-slate-400">Enter your password to access the admin panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors placeholder:text-slate-500"
                placeholder="Enter admin password"
                required
              />
            </div>

            {loginError && (
              <div className="bg-red-900/30 border-2 border-red-500/50 rounded-lg p-4">
                <p className="text-red-300 text-sm">{loginError}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-indigo-500/50 transition-all hover:scale-[1.02]"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
            >
              ← Back to website
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950 flex items-center justify-center">
        <p className="text-indigo-200">Loading content...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-indigo-500/30 sticky top-0 z-50 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/50">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-black text-white">Admin Dashboard</h1>
                <p className="text-xs text-indigo-300">Content Management System</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {saveSuccess && (
                <div className="flex items-center gap-2 text-green-400">
                  <Check className="w-5 h-5" />
                  <span className="text-sm font-semibold">Saved!</span>
                </div>
              )}
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2.5 rounded-lg font-bold hover:shadow-lg hover:shadow-indigo-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                <Save className="w-5 h-5" />
                {saving ? 'Saving...' : 'Save All Changes'}
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-slate-300 hover:text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition-all border border-slate-700 hover:border-slate-600"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <nav className="bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-500/30 p-4 sticky top-24">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveSection('homepage')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeSection === 'homepage'
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/50'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <Home className="w-5 h-5" />
                    Homepage
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('products')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeSection === 'products'
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/50'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <Package className="w-5 h-5" />
                    Products
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('testimonials')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeSection === 'testimonials'
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/50'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <MessageSquare className="w-5 h-5" />
                    Testimonials
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('site')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all ${
                      activeSection === 'site'
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/50'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <Settings className="w-5 h-5" />
                    Site Settings
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </button>
                </li>
              </ul>
            </nav>

            <div className="mt-6 bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-500/30 p-4">
              <a
                href="/"
                target="_blank"
                className="flex items-center gap-2 text-slate-300 hover:text-indigo-400 transition-colors text-sm font-semibold"
              >
                <Home className="w-4 h-4" />
                View Website
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {activeSection === 'homepage' && (
              <HomepageEditor content={content} updateContent={updateNestedContent} />
            )}
            {activeSection === 'products' && (
              <ProductsEditor content={content} updateContent={updateNestedContent} />
            )}
            {activeSection === 'testimonials' && (
              <TestimonialsEditor content={content} updateContent={updateNestedContent} />
            )}
            {activeSection === 'site' && (
              <SiteSettingsEditor content={content} updateContent={updateNestedContent} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

// Homepage Editor Component
function HomepageEditor({ content, updateContent }: { content: ContentData; updateContent: (path: string[], value: any) => void }) {
  return (
    <div className="space-y-8">
      <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-500/30 p-6">
        <h2 className="text-2xl font-black text-white mb-6">Hero Section</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Badge Text</label>
            <input
              type="text"
              value={content.homepage.hero.badge}
              onChange={(e) => updateContent(['homepage', 'hero', 'badge'], e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Title</label>
            <input
              type="text"
              value={content.homepage.hero.title}
              onChange={(e) => updateContent(['homepage', 'hero', 'title'], e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Title Highlight (colored text)</label>
            <input
              type="text"
              value={content.homepage.hero.titleHighlight}
              onChange={(e) => updateContent(['homepage', 'hero', 'titleHighlight'], e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Subtitle</label>
            <textarea
              value={content.homepage.hero.subtitle}
              onChange={(e) => updateContent(['homepage', 'hero', 'subtitle'], e.target.value)}
              rows={3}
              className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none resize-none"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-500/30 p-6">
        <h2 className="text-2xl font-black text-white mb-6">Statistics</h2>
        <div className="space-y-4">
          {content.homepage.stats.map((stat: any, idx: number) => (
            <div key={idx} className="grid grid-cols-2 gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Number</label>
                <input
                  type="text"
                  value={stat.number}
                  onChange={(e) => {
                    const newStats = [...content.homepage.stats];
                    newStats[idx].number = e.target.value;
                    updateContent(['homepage', 'stats'], newStats);
                  }}
                  className="w-full px-4 py-2 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Label</label>
                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) => {
                    const newStats = [...content.homepage.stats];
                    newStats[idx].label = e.target.value;
                    updateContent(['homepage', 'stats'], newStats);
                  }}
                  className="w-full px-4 py-2 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-500/30 p-6">
        <h2 className="text-2xl font-black text-white mb-6">Why Choose Us (Advantages)</h2>
        <div className="space-y-6">
          {content.homepage.advantages.map((adv: any, idx: number) => (
            <div key={idx} className="p-4 bg-slate-800/50 rounded-lg space-y-4 border border-slate-700">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Title</label>
                <input
                  type="text"
                  value={adv.title}
                  onChange={(e) => {
                    const newAdvs = [...content.homepage.advantages];
                    newAdvs[idx].title = e.target.value;
                    updateContent(['homepage', 'advantages'], newAdvs);
                  }}
                  className="w-full px-4 py-2 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Description</label>
                <textarea
                  value={adv.description}
                  onChange={(e) => {
                    const newAdvs = [...content.homepage.advantages];
                    newAdvs[idx].description = e.target.value;
                    updateContent(['homepage', 'advantages'], newAdvs);
                  }}
                  rows={3}
                  className="w-full px-4 py-2 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none resize-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Products Editor Component
function ProductsEditor({ content, updateContent }: { content: ContentData; updateContent: (path: string[], value: any) => void }) {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const product = content.products[selectedProduct];

  return (
    <div className="space-y-6">
      <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-500/30 p-6">
        <h2 className="text-2xl font-black text-white mb-4">Select Product</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {content.products.map((p: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setSelectedProduct(idx)}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedProduct === idx
                  ? 'border-indigo-500 bg-indigo-500/20 text-white'
                  : 'border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white bg-slate-800/50'
              }`}
            >
              <div className="font-bold text-sm">{p.name}</div>
            </button>
          ))}
        </div>
      </div>

      {product && (
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-500/30 p-6 space-y-6">
          <h2 className="text-2xl font-black text-white">Edit {product.name}</h2>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Product Name</label>
            <input
              type="text"
              value={product.name}
              onChange={(e) => {
                const newProducts = [...content.products];
                newProducts[selectedProduct].name = e.target.value;
                updateContent(['products'], newProducts);
              }}
              className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Tonnage</label>
              <input
                type="text"
                value={product.tonnage}
                onChange={(e) => {
                  const newProducts = [...content.products];
                  newProducts[selectedProduct].tonnage = e.target.value;
                  updateContent(['products'], newProducts);
                }}
                className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Power</label>
              <input
                type="text"
                value={product.power}
                onChange={(e) => {
                  const newProducts = [...content.products];
                  newProducts[selectedProduct].power = e.target.value;
                  updateContent(['products'], newProducts);
                }}
                className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Features (one per line)</label>
            <textarea
              value={product.features.join('\n')}
              onChange={(e) => {
                const newProducts = [...content.products];
                newProducts[selectedProduct].features = e.target.value.split('\n').filter(f => f.trim());
                updateContent(['products'], newProducts);
              }}
              rows={5}
              className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none resize-none"
              placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Dig Depth</label>
              <input
                type="text"
                value={product.specs.depth}
                onChange={(e) => {
                  const newProducts = [...content.products];
                  newProducts[selectedProduct].specs.depth = e.target.value;
                  updateContent(['products'], newProducts);
                }}
                className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Max Reach</label>
              <input
                type="text"
                value={product.specs.reach}
                onChange={(e) => {
                  const newProducts = [...content.products];
                  newProducts[selectedProduct].specs.reach = e.target.value;
                  updateContent(['products'], newProducts);
                }}
                className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Width</label>
              <input
                type="text"
                value={product.specs.width}
                onChange={(e) => {
                  const newProducts = [...content.products];
                  newProducts[selectedProduct].specs.width = e.target.value;
                  updateContent(['products'], newProducts);
                }}
                className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Description (Markdown)</label>
            <textarea
              value={product.description || ''}
              onChange={(e) => {
                const newProducts = [...content.products];
                newProducts[selectedProduct].description = e.target.value;
                updateContent(['products'], newProducts);
              }}
              rows={10}
              className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none resize-none font-mono text-sm"
              placeholder="Enter markdown description..."
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Testimonials Editor Component
function TestimonialsEditor({ content, updateContent }: { content: ContentData; updateContent: (path: string[], value: any) => void }) {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-500/30 p-6">
        <h2 className="text-2xl font-black text-white mb-6">Customer Testimonials</h2>
        <div className="space-y-6">
          {content.homepage.testimonials.map((testimonial: any, idx: number) => (
            <div key={idx} className="p-6 bg-slate-800/50 rounded-lg space-y-4 border border-slate-700">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Testimonial Text</label>
                <textarea
                  value={testimonial.text}
                  onChange={(e) => {
                    const newTestimonials = [...content.homepage.testimonials];
                    newTestimonials[idx].text = e.target.value;
                    updateContent(['homepage', 'testimonials'], newTestimonials);
                  }}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Author Name</label>
                  <input
                    type="text"
                    value={testimonial.author}
                    onChange={(e) => {
                      const newTestimonials = [...content.homepage.testimonials];
                      newTestimonials[idx].author = e.target.value;
                      updateContent(['homepage', 'testimonials'], newTestimonials);
                    }}
                    className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Company</label>
                  <input
                    type="text"
                    value={testimonial.company}
                    onChange={(e) => {
                      const newTestimonials = [...content.homepage.testimonials];
                      newTestimonials[idx].company = e.target.value;
                      updateContent(['homepage', 'testimonials'], newTestimonials);
                    }}
                    className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Rating (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={testimonial.rating}
                  onChange={(e) => {
                    const newTestimonials = [...content.homepage.testimonials];
                    newTestimonials[idx].rating = parseInt(e.target.value);
                    updateContent(['homepage', 'testimonials'], newTestimonials);
                  }}
                  className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Site Settings Editor Component
function SiteSettingsEditor({ content, updateContent }: { content: ContentData; updateContent: (path: string[], value: any) => void }) {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-500/30 p-6">
        <h2 className="text-2xl font-black text-white mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Phone Number</label>
            <input
              type="text"
              value={content.site.contact.phone}
              onChange={(e) => updateContent(['site', 'contact', 'phone'], e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
            <input
              type="email"
              value={content.site.contact.email}
              onChange={(e) => updateContent(['site', 'contact', 'email'], e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Address</label>
            <input
              type="text"
              value={content.site.contact.address}
              onChange={(e) => updateContent(['site', 'contact', 'address'], e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-500/30 p-6">
        <h2 className="text-2xl font-black text-white mb-6">Company Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Company Name</label>
            <input
              type="text"
              value={content.site.companyName}
              onChange={(e) => updateContent(['site', 'companyName'], e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Tagline</label>
            <input
              type="text"
              value={content.site.tagline}
              onChange={(e) => updateContent(['site', 'tagline'], e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Footer Description</label>
            <textarea
              value={content.site.footer.description}
              onChange={(e) => updateContent(['site', 'footer', 'description'], e.target.value)}
              rows={3}
              className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:border-indigo-500 focus:outline-none resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

