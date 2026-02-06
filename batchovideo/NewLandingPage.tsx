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
            <section className="relative z-10 px-8 pt-[100px] pb-[100px] max-w-7xl mx-auto min-h-[800px] flex items-center">
                <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                    {/* Left: Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                                Design Video on Canvas.
                            </h1>
                            <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Export Clean MP4s.
                            </h1>
                        </div>

                        <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
                            BatchoVideo is a layer-based video canvas for creators who want fast, intentional layout control—without fighting a traditional editor.
                        </p>

                        <div className="space-y-8">
                            <button
                                onClick={onStartEditing}
                                className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-base font-semibold hover:scale-105 transition-all shadow-lg shadow-white/10"
                            >
                                Start Creating
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right: Visual Demo / Video Placeholder */}
                    <div className="relative">
                        <div className="aspect-video bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                            {/* Placeholder for future video - configured to fill container */}
                            <div className="w-full h-full bg-black relative">
                                <video
                                    src="/demo.mp4"
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
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
                        Layers · Scenes · Aspect Ratios · MP4 Export
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

            {/* Why BatchoVideo Section */}
            <section className="relative z-10 px-8 py-24 max-w-4xl mx-auto">
                <div className="space-y-16">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why BatchoVideo?</h2>
                        <p className="text-zinc-300 text-lg leading-relaxed">
                            Most video editing tools force you through complex timelines and endless menus. BatchoVideo removes that friction.
                            With canvas-based editing and intuitive layer controls, you get professional results without the tedious manual work.
                            Every video is crafted with precision, while still giving you full creative control when you need it.
                            BatchoVideo turns hours of editing into just a few clicks.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Built for Creators</h2>
                        <p className="text-zinc-300 text-lg leading-relaxed">
                            BatchoVideo was built to solve a real problem: content creators, marketers, and educators were wasting countless hours
                            making the same edits across multiple videos. No tool truly streamlined video creation while offering intelligent,
                            targeted control. We created BatchoVideo to bridge that gap — a fast, reliable editor that handles the repetitive work,
                            adapts to your creative needs, and scales effortlessly with your workflow.
                        </p>
                    </div>
                </div>
            </section>

            {/* Users/Testimonials Section */}
            <section className="relative z-10 px-8 py-24 max-w-7xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">Users</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            quote: "BatchoVideo completely transformed our content workflow. What used to take hours now takes seconds — and looks even better.",
                            author: "Maya",
                            role: "Marketing Agency"
                        },
                        {
                            quote: "As a small creator, I couldn't afford expensive software. BatchoVideo gives me studio-quality videos whenever I need them.",
                            author: "Daniel",
                            role: "YouTube Creator"
                        },
                        {
                            quote: "Our social media posts instantly looked more premium. The consistent edits noticeably improved engagement and conversions.",
                            author: "Aisha",
                            role: "E-commerce Brand"
                        },
                        {
                            quote: "I run a content agency — BatchoVideo saves me so much time. I can generate on-brand visuals for clients in minutes.",
                            author: "Chris",
                            role: "Content Agency"
                        },
                        {
                            quote: "BatchoVideo makes even quick screen recordings look professionally edited. It's like having a video editor in my pocket.",
                            author: "Lena",
                            role: "Course Creator"
                        },
                        {
                            quote: "Our entire product line finally has a unified, high-end look across our videos and ads. Zero manual retouching needed.",
                            author: "Oliver",
                            role: "Product Brand"
                        }
                    ].map((testimonial, idx) => (
                        <div key={idx} className="space-y-4">
                            <p className="text-zinc-300 text-base leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <p className="text-zinc-500 text-sm">
                                — {testimonial.author} • {testimonial.role}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQs Section */}
            <section className="relative z-10 px-8 py-24 max-w-4xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">FAQs</h2>
                <div className="space-y-8">
                    {[
                        {
                            question: "What is BatchoVideo?",
                            answer: "BatchoVideo is a canvas-based video editor that lets you layer videos, add text, and create professional content quickly and intuitively."
                        },
                        {
                            question: "Do I need video editing experience to use it?",
                            answer: "No. The canvas interface is intuitive and designed for creators of all skill levels. You can start creating professional videos immediately."
                        },
                        {
                            question: "Can I export in different formats?",
                            answer: "Yes. BatchoVideo supports multiple export formats and resolutions, optimized for social media, presentations, and web use."
                        },
                        {
                            question: "Are my videos stored permanently?",
                            answer: "Your projects are saved in your account so you can return to them later. You have full control over your content."
                        },
                        {
                            question: "What types of videos work best with BatchoVideo?",
                            answer: "Anything — tutorials, social media content, presentations, marketing videos, and more. BatchoVideo is versatile and adapts to your needs."
                        },
                        {
                            question: "Will BatchoVideo get better over time?",
                            answer: "Yes. We continuously improve the editor with new features, better performance, and enhanced capabilities based on user feedback."
                        },
                        {
                            question: "How many videos can I create?",
                            answer: "It depends on your plan. Our free tier lets you experiment, while premium plans offer unlimited projects and exports."
                        }
                    ].map((faq, idx) => (
                        <div key={idx} className="space-y-3">
                            <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                            <p className="text-zinc-300 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="relative z-10 px-8 py-24 max-w-7xl mx-auto">
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
