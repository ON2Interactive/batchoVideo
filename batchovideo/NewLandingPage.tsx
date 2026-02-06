import React from 'react';
import { ArrowRight, Video, Layers, Type, Download, Cloud, Zap } from 'lucide-react';

interface NewLandingPageProps {
    onStartEditing: () => void;
}

const NewLandingPage: React.FC<NewLandingPageProps> = ({ onStartEditing }) => {
    return (
        <div className="w-full bg-zinc-950 text-white min-h-screen font-['Inter']">
            {/* Grid Pattern Background */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            {/* Blue Glow Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-500/10 to-transparent" />
                <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-blue-500/5 to-transparent" />
            </div>

            {/* Navigation */}
            <nav className="relative z-50 flex items-center justify-between px-6 sm:px-10 py-6">
                <div className="h-8">
                    <img src="../Assets/batchoVideo.svg" alt="batchoVideo" className="h-full" />
                </div>
                <div className="flex items-center gap-6">
                    <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
                        Pricing
                    </a>
                    <button
                        onClick={onStartEditing}
                        className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                    >
                        Create Now
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 px-6 pt-20 pb-32 sm:pt-32 sm:pb-48">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-8">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                            Create Videos
                            <br />
                            with Ease.
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 max-w-lg">
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

                    {/* Right: Editor Screenshot Placeholder */}
                    <div className="relative">
                        <div className="aspect-video bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden shadow-2xl shadow-blue-500/10">
                            <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                                <Video size={64} className="text-zinc-700" />
                            </div>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10" />
                    </div>
                </div>
            </section>

            {/* Product Demo Section */}
            <section className="relative z-10 px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Video Editing</h2>
                        <p className="text-zinc-400">
                            Marketing · Social Media · Presentations · Tutorials + more
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="relative z-10 px-6 py-20 bg-zinc-100/5">
                <div className="max-w-6xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-lg p-8 space-y-4 hover:border-zinc-700 transition-colors">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <Layers size={24} className="text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold">Video Layers</h3>
                            <p className="text-zinc-400 text-sm">
                                Add and layer multiple video clips with precise control over positioning and timing.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-lg p-8 space-y-4 hover:border-zinc-700 transition-colors">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                                <Type size={24} className="text-emerald-500" />
                            </div>
                            <h3 className="text-xl font-bold">Text & Shapes</h3>
                            <p className="text-zinc-400 text-sm">
                                Professional text overlays and graphics with full customization options.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-lg p-8 space-y-4 hover:border-zinc-700 transition-colors">
                            <div className="w-12 h-12 bg-violet-500/10 rounded-lg flex items-center justify-center">
                                <Download size={24} className="text-violet-500" />
                            </div>
                            <h3 className="text-xl font-bold">Export to MP4</h3>
                            <p className="text-zinc-400 text-sm">
                                High-quality video export with professional codec settings.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-lg p-8 space-y-4 hover:border-zinc-700 transition-colors">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                                <Cloud size={24} className="text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold">Cloud Saving</h3>
                            <p className="text-zinc-400 text-sm">
                                Projects saved automatically to the cloud. Access from anywhere.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-lg p-8 space-y-4 hover:border-zinc-700 transition-colors">
                            <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center">
                                <Zap size={24} className="text-pink-500" />
                            </div>
                            <h3 className="text-xl font-bold">Auto-Save</h3>
                            <p className="text-zinc-400 text-sm">
                                Never lose your work with automatic saving every 30 seconds.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-lg p-8 space-y-4 hover:border-zinc-700 transition-colors">
                            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                                <Video size={24} className="text-cyan-500" />
                            </div>
                            <h3 className="text-xl font-bold">Free Credits</h3>
                            <p className="text-zinc-400 text-sm">
                                Start with 3 free video exports. No credit card required.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="relative z-10 px-6 py-32">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
                        <p className="text-zinc-400 text-lg">
                            No subscriptions. No expiring credits. Pay once, use anytime.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Starter Pack */}
                        <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-2xl p-8 space-y-6 hover:border-emerald-500/50 transition-colors">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                                        <Zap size={16} className="text-emerald-500" />
                                    </div>
                                    <h3 className="text-xl font-bold">Starter Pack</h3>
                                </div>
                                <div className="text-4xl font-bold">$5</div>
                                <div className="text-emerald-500 font-semibold">5 credits</div>
                            </div>

                            <ul className="space-y-3 text-sm text-zinc-400">
                                <li className="flex items-center gap-2">
                                    <Download size={16} className="text-emerald-500" />
                                    Export → 1 credit
                                </li>
                            </ul>

                            <p className="text-xs text-zinc-500">
                                Best for testing ideas and a few quick projects.
                            </p>

                            <div className="text-xs text-emerald-500 font-semibold">
                                ✓ + 3 Free Credits
                            </div>

                            <button className="w-full py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors">
                                Get Started
                            </button>
                        </div>

                        {/* Creator Pack - Most Popular */}
                        <div className="bg-zinc-900/50 backdrop-blur border-2 border-blue-500 rounded-2xl p-8 space-y-6 relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                                Most Popular
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                        <Video size={16} className="text-blue-500" />
                                    </div>
                                    <h3 className="text-xl font-bold">Creator Pack</h3>
                                </div>
                                <div className="text-4xl font-bold">$15</div>
                                <div className="text-blue-500 font-semibold">20 credits</div>
                            </div>

                            <ul className="space-y-3 text-sm text-zinc-400">
                                <li className="flex items-center gap-2">
                                    <Download size={16} className="text-blue-500" />
                                    Export → 1 credit
                                </li>
                            </ul>

                            <p className="text-xs text-zinc-500">
                                Ideal for creators and brands running multiple campaigns.
                            </p>

                            <div className="text-xs text-blue-500 font-semibold">
                                ✓ + 3 Free Credits
                            </div>

                            <button className="w-full py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors">
                                Get Started
                            </button>
                        </div>

                        {/* Pro Pack */}
                        <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-2xl p-8 space-y-6 hover:border-violet-500/50 transition-colors">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-violet-500/10 rounded-lg flex items-center justify-center">
                                        <Layers size={16} className="text-violet-500" />
                                    </div>
                                    <h3 className="text-xl font-bold">Pro Pack</h3>
                                </div>
                                <div className="text-4xl font-bold">$30</div>
                                <div className="text-violet-500 font-semibold">50 credits</div>
                            </div>

                            <ul className="space-y-3 text-sm text-zinc-400">
                                <li className="flex items-center gap-2">
                                    <Download size={16} className="text-violet-500" />
                                    Export → 1 credit
                                </li>
                            </ul>

                            <p className="text-xs text-zinc-500">
                                Built for high-volume content creators and agencies.
                            </p>

                            <div className="text-xs text-violet-500 font-semibold">
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
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            No subscriptions
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            Credits never expire
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            Design for free
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            4K premium output
                        </div>
                    </div>
                </div>
            </section>

            <footer className="relative z-10 border-t border-zinc-800 px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="h-8 mb-8">
                        <img src="../Assets/batchoVideo.svg" alt="batchoVideo" className="h-full" />
                    </div>
                    <div className="text-sm text-zinc-600">
                        © 2025 BatchoVideo. Crafted for video excellence.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NewLandingPage;
