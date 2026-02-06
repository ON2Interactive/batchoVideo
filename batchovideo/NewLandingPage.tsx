import React from 'react';
import { ArrowRight, Video, Layers, Type, Download, Cloud, Zap, Play, Sparkles } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

interface NewLandingPageProps {
    onStartEditing: () => void;
}

const NewLandingPage: React.FC<NewLandingPageProps> = ({ onStartEditing }) => {
    return (
        <div className="w-full bg-black text-white min-h-screen font-['Inter']">
            {/* Subtle Grid Pattern Background */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            {/* Blue Glow Effects - Matching BatchoMuse */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            {/* Navigation */}
            <Navigation onGetStarted={onStartEditing} />

            {/* Hero Section */}
            <section className="relative z-10 px-8 pt-24 pb-32 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-8">
                        <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                            Create Videos
                            <br />
                            with Precision.
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
                            Layer videos, add text, and export professional content—fast, clean, and intentional.
                        </p>
                        <button
                            onClick={onStartEditing}
                            className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-base font-semibold hover:scale-105 transition-all shadow-lg shadow-white/10"
                        >
                            Start Creating
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right: Visual Demo */}
                    <div className="relative">
                        <div className="aspect-video bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                            <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-900 to-black flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
                                <Play size={64} className="text-zinc-700 relative z-10" />
                            </div>
                        </div>
                        {/* Subtle glow */}
                        <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 scale-110" />
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section id="features" className="relative z-10 px-8 py-24 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">Design on Canvas</h2>
                    <p className="text-zinc-400 text-lg">
                        Marketing · Social Media · Presentations · Tutorials
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    {/* Feature 1 */}
                    <div className="bg-zinc-900/30 backdrop-blur border border-zinc-800/50 rounded-xl p-8 space-y-4 hover:border-zinc-700 transition-all group">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                            <Layers size={24} className="text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Video Layers</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Add and layer multiple video clips with precise control over positioning and timing.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-zinc-900/30 backdrop-blur border border-zinc-800/50 rounded-xl p-8 space-y-4 hover:border-zinc-700 transition-all group">
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                            <Type size={24} className="text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Text & Shapes</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Professional text overlays and graphics with full customization options.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-zinc-900/30 backdrop-blur border border-zinc-800/50 rounded-xl p-8 space-y-4 hover:border-zinc-700 transition-all group">
                        <div className="w-12 h-12 bg-violet-500/10 rounded-lg flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                            <Download size={24} className="text-violet-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Export to WebM</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            High-quality video export optimized for web and social media.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-zinc-900/30 backdrop-blur border border-zinc-800/50 rounded-xl p-8 space-y-4 hover:border-zinc-700 transition-all group">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                            <Cloud size={24} className="text-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Cloud Saving</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Projects saved automatically to the cloud. Access from anywhere.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="bg-zinc-900/30 backdrop-blur border border-zinc-800/50 rounded-xl p-8 space-y-4 hover:border-zinc-700 transition-all group">
                        <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                            <Zap size={24} className="text-pink-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Auto-Save</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Never lose your work with automatic saving every 30 seconds.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="bg-zinc-900/30 backdrop-blur border border-zinc-800/50 rounded-xl p-8 space-y-4 hover:border-zinc-700 transition-all group">
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                            <Sparkles size={24} className="text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-semibold">AI Generation</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Generate video content with AI. Transform images into motion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="relative z-10 px-8 py-32 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-zinc-400 text-lg">
                        No subscriptions. No expiring credits. Pay once, use anytime.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Starter Pack */}
                    <div className="bg-zinc-900/30 backdrop-blur border border-zinc-800/50 rounded-2xl p-8 space-y-6 hover:border-emerald-500/50 transition-all">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                                    <Zap size={16} className="text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-semibold">Starter Pack</h3>
                            </div>
                            <div className="text-4xl font-bold">$5</div>
                            <div className="text-emerald-400 font-semibold">5 credits</div>
                        </div>

                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li className="flex items-center gap-2">
                                <Download size={16} className="text-emerald-400" />
                                Export → 1 credit
                            </li>
                        </ul>

                        <p className="text-xs text-zinc-500">
                            Best for testing ideas and a few quick projects.
                        </p>

                        <div className="text-xs text-emerald-400 font-semibold">
                            ✓ + 3 Free Credits
                        </div>

                        <button className="w-full py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Creator Pack - Most Popular */}
                    <div className="bg-zinc-900/30 backdrop-blur border-2 border-blue-500/50 rounded-2xl p-8 space-y-6 relative scale-105">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                            Most Popular
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                    <Video size={16} className="text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold">Creator Pack</h3>
                            </div>
                            <div className="text-4xl font-bold">$15</div>
                            <div className="text-blue-400 font-semibold">20 credits</div>
                        </div>

                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li className="flex items-center gap-2">
                                <Download size={16} className="text-blue-400" />
                                Export → 1 credit
                            </li>
                        </ul>

                        <p className="text-xs text-zinc-500">
                            Ideal for creators and brands running multiple campaigns.
                        </p>

                        <div className="text-xs text-blue-400 font-semibold">
                            ✓ + 3 Free Credits
                        </div>

                        <button className="w-full py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Pro Pack */}
                    <div className="bg-zinc-900/30 backdrop-blur border border-zinc-800/50 rounded-2xl p-8 space-y-6 hover:border-violet-500/50 transition-all">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-violet-500/10 rounded-lg flex items-center justify-center">
                                    <Layers size={16} className="text-violet-400" />
                                </div>
                                <h3 className="text-xl font-semibold">Pro Pack</h3>
                            </div>
                            <div className="text-4xl font-bold">$30</div>
                            <div className="text-violet-400 font-semibold">50 credits</div>
                        </div>

                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li className="flex items-center gap-2">
                                <Download size={16} className="text-violet-400" />
                                Export → 1 credit
                            </li>
                        </ul>

                        <p className="text-xs text-zinc-500">
                            Built for high-volume content creators and agencies.
                        </p>

                        <div className="text-xs text-violet-400 font-semibold">
                            ✓ + 3 Free Credits
                        </div>

                        <button className="w-full py-3 bg-violet-500 text-white rounded-full font-semibold hover:bg-violet-600 transition-colors">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Pricing Benefits */}
                <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        No subscriptions
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        Credits never expire
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        Design for free
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        4K premium output
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default NewLandingPage;
