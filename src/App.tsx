/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Upload, 
  Target, 
  Zap, 
  Microscope, 
  BarChart3, 
  Users, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Star,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const investors = [
  "Y Combinator", "a16z", "Sequoia", "Techstars", "Tiger Global", 
  "SoftBank", "Bessemer", "NEA", "GV", "Lightspeed"
];

const features = [
  {
    title: "Investor-Specific Intelligence",
    description: "Our AI knows each firm's portfolio, thesis, and rejection patterns to give you targeted advice.",
    icon: Target
  },
  {
    title: "Real-time Fact-Checking",
    description: "Challenges market size claims against real-world data sources so you never get caught off guard.",
    icon: Microscope
  },
  {
    title: "Shark Tank Mode",
    description: "Face a multi-investor panel with conflicting views to hone your negotiation and deal strategy.",
    icon: Users
  },
  {
    title: "Section Scoring",
    description: "Get detailed scores on team, market, traction, revenue, narrative, and investor fit.",
    icon: BarChart3
  },
  {
    title: "Session History",
    description: "Track your score improvements across multiple attempts to quantify your progress.",
    icon: Zap
  },
  {
    title: "200+ Source Training",
    description: "Trained on pitch books, partner talks, and thousands of funded company decks.",
    icon: ShieldCheck
  }
];

const investorProfiles = [
  { name: "Y Combinator", color: "bg-orange-500", focus: "Early stage, Scalability", rejection: "Decks without clear distribution" },
  { name: "a16z", color: "bg-blue-600", focus: "Consumer Tech, AI, Crypto", rejection: "No product-market fit evidence" },
  { name: "Sequoia", color: "bg-green-700", focus: "Enterprise, Cloud, Fintech", rejection: "Weak unit economics" },
  { name: "Techstars", color: "bg-purple-600", focus: "Accelerator, Generalist", rejection: "Solo founders with no technical lead" },
  { name: "Tiger Global", color: "bg-yellow-500", focus: "Growth, High-volume", rejection: "Slow growth rates in competitive markets" },
  { name: "Bessemer", color: "bg-blue-800", focus: "SaaS, Infrastructure", rejection: "Poor retention metrics" },
  { name: "GV", color: "bg-gray-100", focus: "Life Sciences, AI", rejection: "Lack of deep technical defensibility" },
  { name: "Lightspeed", color: "bg-rose-500", focus: "Enterprise, Consumer", rejection: "Market size claims aren't backed by data" },
];

const pricingPlans = [
  { name: "Starter", price: 19, annualPrice: 15, features: ["5 simulations / month", "Limited investor library", "Email support", "Basic feedback"] },
  { name: "Pro", price: 49, annualPrice: 39, features: ["Unlimited simulations", "Full investor library", "Performance tracking", "Priority support", "Market fact-checking"], highlighted: true },
  { name: "Team", price: 199, annualPrice: 159, features: ["Shark Tank mode", "5 team seats", "Shared session history", "Custom investor personas", "API Access"] },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 20 ? 'bg-dark-bg/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center font-bold text-white shadow-lg shadow-brand/20">PS</div>
              <span className="text-xl font-display font-bold tracking-tight">PitchSim</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#investors" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Investors</a>
              <a href="#pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#blog" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Blog</a>
              <button className="bg-brand hover:bg-brand-accent px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand/20">
                Start Free Trial
              </button>
            </div>

            <button className="md:hidden text-gray-400 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-card-bg border-b border-white/10 px-4 py-6 space-y-4"
            >
              <a href="#features" className="block text-lg font-medium text-gray-400" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#investors" className="block text-lg font-medium text-gray-400" onClick={() => setIsMenuOpen(false)}>Investors</a>
              <a href="#pricing" className="block text-lg font-medium text-gray-400" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <button className="w-full bg-brand py-3 rounded-lg font-semibold">Start Free Trial</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.1] mb-6 tracking-tight">
                Practice Your Pitch. <br/>
                <span className="text-brand">Get Funded.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
                The AI that simulates your specific investor — critiques your deck, fact-checks your numbers, and tells you exactly why they'd say yes or no.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-20">
                <button className="bg-brand hover:bg-brand-accent px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 group transition-all hover:scale-105 shadow-xl shadow-brand/20">
                  Simulate a Pitch <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-white/20 hover:bg-white/5 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105">
                  See How It Works
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand/20 blur-[60px] rounded-3xl" />
              <div className="relative bg-[#141428] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6 glow-purple">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center font-bold">YC</div>
                    <div>
                      <h4 className="font-bold">YC Simulator</h4>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">Active Critique</p>
                    </div>
                  </div>
                  <div className="bg-brand/10 px-3 py-1 rounded text-xs font-bold text-brand ring-1 ring-brand/50">84% FUNDABLE</div>
                </div>

                <div className="space-y-5">
                  {[
                    { label: "Team", score: 88, color: "bg-green-500" },
                    { label: "Market", score: 71, color: "bg-yellow-500" },
                    { label: "Traction", score: 80, color: "bg-brand" },
                    { label: "Pitch", score: 74, color: "bg-orange-500" },
                  ].map((item, i) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-gray-400 font-semibold">{item.label}</span>
                        <span className="font-bold">{item.score}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${item.score}%` }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                          className={`h-full ${item.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex-shrink-0" />
                    <div className="p-3 bg-white/5 rounded-xl text-sm italic text-gray-300">
                      "Your distribution strategy is vague. How do you acquire the first 100 enterprise customers without a direct sales force?"
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF TICKER */}
      <div className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap">
        <div className="marquee">
          {[...investors, ...investors].map((name, i) => (
            <span key={i} className="mx-12 text-xl font-display font-black opacity-20 uppercase tracking-widest blur-[0.5px]">
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* PROBLEM SECTION */}
      <section className="py-24 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black mb-4">Most founders practice pitches blind.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto italic">Stop guessing and start preparing with data-backed insights.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Generic AI feedback", desc: "Standard AI doesn't know what YC or a16z actually cares about in a narrative.", icon: "01" },
              { title: "Thesis Blindness", desc: "Every VC has a different thesis. It's impossible to prep for 40 different meetings alone.", icon: "02" },
              { title: "High Coaching Fees", desc: "Real pitch sessions cost hundreds per hour and aren't available at 2 AM.", icon: "03" },
              { title: "Fragile Rehearsals", desc: "Founders rehearse the same polished version — nobody is stress-testing their core numbers.", icon: "04" },
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="p-8 bg-card-bg border border-red-500/20 rounded-2xl relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 font-display font-black text-6xl opacity-5 group-hover:opacity-10 transition-opacity">
                  {p.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-red-400">{p.title}</h4>
                <p className="text-gray-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white text-dark-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-4">From deck to funded in 5 steps.</h2>
          </div>

          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative">
              {[
                { title: "Upload Deck", desc: "Submit your PDF or structured text files.", icon: "📁" },
                { title: "Choose Investor", desc: "Pick from 40+ top VC and Accelerator profiles.", icon: "🎯" },
                { title: "AI Calibrates", desc: "The engine tunes to specific rejection patterns.", icon: "⚙️" },
                { title: "Critique Session", desc: "Real-time questioning and score breakdown.", icon: "💬" },
                { title: "Iterate & Improve", desc: "Use the roadmap to fix weak narrative points.", icon: "🚀" },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center text-3xl mb-6 shadow-xl relative z-10 group-hover:border-brand transition-colors">
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black mb-4">What makes PitchSim different.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Built by ex-founders and VCs to automate the brutal honesty of the fundraising trail.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 bg-card-bg border border-white/5 rounded-2xl group transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-all">
                  <f.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTOR LIBRARY PREVIEW */}
      <section id="investors" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-black mb-4 tracking-tight">40+ investors. <br/> One platform.</h2>
              <p className="text-gray-400">Battle-tested profiles based on real partner talks and portfolio data.</p>
            </div>
            <button className="text-brand font-bold flex items-center gap-2 hover:underline">
              View All 40+ Profiles <ArrowRight size={18} />
            </button>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
            {investorProfiles.map((p, i) => (
              <motion.div 
                key={i}
                className="flex-shrink-0 w-80 bg-card-bg border border-white/10 rounded-2xl p-6 snap-start hover:border-brand/40 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${p.color} flex items-center justify-center font-bold text-white shadow-lg`}>
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{p.name}</h4>
                    <p className="text-xs text-brand uppercase font-bold tracking-tighter">Active Simulation</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {p.focus.split(', ').map(f => (
                      <span key={f} className="text-[10px] bg-white/5 px-2 py-1 rounded-full text-gray-400 font-semibold">{f}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-xl">
                  <p className="text-xs text-red-400 font-bold mb-1 uppercase tracking-widest">Famous for rejecting:</p>
                  <p className="text-xs text-gray-400 italic">"{p.rejection}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24 bg-white text-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-4">See what others miss.</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 border-b border-gray-100 bg-gray-50 rounded-tl-xl">Feature</th>
                  <th className="py-4 px-6 border-b border-brand bg-brand/5 text-brand text-center font-black rounded-t-xl">PitchSim</th>
                  <th className="py-4 px-6 border-b border-gray-100 text-center text-gray-500">ChatGPT</th>
                  <th className="py-4 px-6 border-b border-gray-100 text-center text-gray-500">Pitch Coach</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Investor-Specific Profiles", ps: true, ai: false, co: "⚡" },
                  { name: "Real-time Fact Checking", ps: true, ai: "⚡", co: false },
                  { name: "Shark Tank Panel Mode", ps: true, ai: false, co: false },
                  { name: "Session History/Trends", ps: true, ai: false, co: false },
                  { name: "Scalable 24/7 Access", ps: true, ai: true, co: false },
                  { name: "Accurate Rejection Logic", ps: true, ai: "⚡", co: true },
                  { name: "Affordable Pricing", ps: true, ai: true, co: false },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="py-4 px-6 border-b border-gray-100 font-medium">{row.name}</td>
                    <td className="py-4 px-6 border-b border-brand/20 bg-brand/5 text-center">
                      <Check className="mx-auto text-green-500" size={20} />
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100 text-center">
                      {row.ai === true ? <Check className="mx-auto text-gray-300" size={20} /> : row.ai === "⚡" ? <span className="text-yellow-500">⚡</span> : <X className="mx-auto text-red-300" size={20} />}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100 text-center">
                      {row.co === true ? <Check className="mx-auto text-gray-300" size={20} /> : row.co === "⚡" ? <span className="text-yellow-500">⚡</span> : <X className="mx-auto text-red-300" size={20} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black mb-8">One price. Unlimited insights.</h2>
            
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm font-semibold transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-14 h-7 bg-white/10 rounded-full relative p-1 transition-colors"
                style={{ backgroundColor: isAnnual ? '#6C63FF' : '' }}
              >
                <motion.div 
                  animate={{ x: isAnnual ? 28 : 0 }}
                  className="w-5 h-5 bg-white rounded-full shadow-lg" 
                />
              </button>
              <span className={`text-sm font-semibold transition-colors ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
                Annual <span className="text-green-500 ml-1">2 months free</span>
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-3xl border flex flex-col h-full relative ${plan.highlighted ? 'bg-[#141428] border-brand shadow-2xl shadow-brand/20 glow-purple' : 'bg-card-bg border-white/5'}`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Best Value
                  </div>
                )}
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <div className="mb-6">
                  <span className="text-4xl font-black">${isAnnual ? plan.annualPrice : plan.price}</span>
                  <span className="text-gray-500 ml-2">/mo</span>
                </div>
                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-start gap-3">
                      <Check size={18} className="text-brand shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlighted ? 'bg-brand text-white hover:bg-brand-accent' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Finally something that preps you for a16z, not just generic questions.", author: "Meera R., B2B SaaS Founder", stars: 5 },
              { text: "Ran 8 simulations before our Sequoia meeting. Got 3 of the exact questions the partners asked.", author: "David K., Fintech Founder", stars: 5 },
              { text: "Our accelerator uses PitchSim as the official demo day prep tool for every cohort.", author: "James T., Accelerator Director", stars: 5 },
            ].map((t, i) => (
              <div key={i} className="p-8 bg-card-bg border border-white/5 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => <Star key={j} size={14} className="fill-yellow-500 text-yellow-500" />)}
                </div>
                <Quote size={24} className="text-brand/40 mb-4" />
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                <p className="text-sm font-bold text-white">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-brand to-brand-accent rounded-[32px] p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <h2 className="text-3xl md:text-5xl font-display font-black mb-6 relative z-10 leading-tight">
              Your next investor meeting <br className="hidden md:block"/> is in 30 days. Start practicing today.
            </h2>
            <div className="flex flex-col items-center gap-4 relative z-10">
              <button className="bg-white text-brand hover:bg-gray-100 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all hover:scale-105">
                Simulate Your First Pitch Free
              </button>
              <p className="text-white/80 text-sm font-medium">No credit card. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-[#0A0A0F] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center font-bold text-white">PS</div>
                <span className="text-xl font-display font-bold tracking-tight">PitchSim</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Perfect your startup narrative and secure your seed/series round with AI-powered investor simulations.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Product</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-brand">Features</a></li>
                <li><a href="#" className="hover:text-brand">Shark Tank Mode</a></li>
                <li><a href="#" className="hover:text-brand">Fact Checker</a></li>
                <li><a href="#" className="hover:text-brand">API Access</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Investors</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-brand">YC Simulation</a></li>
                <li><a href="#" className="hover:text-brand">a16z Training</a></li>
                <li><a href="#" className="hover:text-brand">Sequoia Prep</a></li>
                <li><a href="#" className="hover:text-brand">View All 40+</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Company</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-brand">About Us</a></li>
                <li><a href="#" className="hover:text-brand">Careers</a></li>
                <li><a href="#" className="hover:text-brand">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>© 2026 PitchSim AI. All rights reserved. Pitch your way to the top.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Crunchbase</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
