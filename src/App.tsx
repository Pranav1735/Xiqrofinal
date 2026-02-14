import { useState, useEffect } from 'react';
import { Menu, X, Code, ShoppingCart, Smartphone, Palette, Zap, Target, Rocket, Bot, TrendingUp, BarChart, Check, ChevronRight, Layers, Shield, Twitter, Linkedin, Instagram, ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './components/Logo';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 cursor-pointer w-40 md:w-48" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo />
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('about')} className="hover:text-gray-300 transition-colors px-3 py-2 text-sm font-medium tracking-wide">About</button>
                <button onClick={() => scrollToSection('services')} className="hover:text-gray-300 transition-colors px-3 py-2 text-sm font-medium tracking-wide">Services</button>
                <button onClick={() => scrollToSection('process')} className="hover:text-gray-300 transition-colors px-3 py-2 text-sm font-medium tracking-wide">Process</button>
                <button onClick={() => scrollToSection('industries')} className="hover:text-gray-300 transition-colors px-3 py-2 text-sm font-medium tracking-wide">Industries</button>
                <button onClick={() => scrollToSection('contact')} className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">Contact</button>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-gray-300 transition-colors p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-b border-white/10 animate-fade-in">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-lg font-medium hover:bg-white/5 rounded-lg transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 text-lg font-medium hover:bg-white/5 rounded-lg transition-colors">Services</button>
              <button onClick={() => scrollToSection('process')} className="block w-full text-left px-4 py-3 text-lg font-medium hover:bg-white/5 rounded-lg transition-colors">Process</button>
              <button onClick={() => scrollToSection('industries')} className="block w-full text-left px-4 py-3 text-lg font-medium hover:bg-white/5 rounded-lg transition-colors">Industries</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 text-lg font-medium hover:bg-white/5 rounded-lg transition-colors">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 md:mb-8 inline-block animate-fade-in">
            <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs md:text-sm font-medium text-white backdrop-blur-sm">
              Welcome to the Future of Digital Solutions
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight animate-slide-up">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">XIQRO</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-200 mb-8 animate-slide-up-delay-1 max-w-2xl mx-auto">
            Next-Gen Digital & AI Solutions for <span className="text-white">Modern Businesses</span>
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 md:mb-12 max-w-xl md:max-w-3xl mx-auto leading-relaxed animate-slide-up-delay-2">
            We design and build websites, e-commerce platforms, apps, and fully autonomous AI agents that help businesses grow in the digital era.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-slide-up-delay-3 px-4">
            <button onClick={() => scrollToSection('contact')} className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-white/20">
              Get a Free Quote
            </button>
            <button onClick={() => scrollToSection('services')} className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300">
              Explore Services
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="about" className="py-16 md:py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Manifesto Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-gray-400 mb-4 uppercase">XIQRO</h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white">
              The Manifesto
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mb-12"></div>

            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-2xl sm:text-3xl text-gray-200 font-light leading-relaxed">
                "We are not here to participate. <span className="text-white font-semibold">We are here to define.</span>"
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Xiqro was not created to follow the digital age — it was built to <span className="text-white">engineer what comes next</span>. In a world saturated with noise, shortcuts, and imitation, we choose <span className="text-white">precision</span>. We choose <span className="text-white">structure</span>. We choose <span className="text-white">legacy</span>.
              </p>
              <div className="pt-6">
                <p className="text-xl text-gray-300 font-medium italic">
                  Technology is not a commodity. It is power — when architected correctly.
                </p>
              </div>
            </div>
          </div>

          {/* We Believe */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 border-l-4 border-white pl-6">We Believe</h3>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Excellence is deliberate", desc: "No accidents. Only engineered success." },
                  { title: "Precision is discipline", desc: "Every pixel, every line of code matters." },
                  { title: "Innovation is responsibility", desc: "We build to solve, not just to show." },
                  { title: "Leadership is earned", desc: "Through quality, integrity, and impact." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="mt-1 bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <h4 className="text-2xl font-bold text-white mb-6">Our Philosophy</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Systems must be built with foresight.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Scalability is not optional.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Security is foundational.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Performance is non-negotiable.</span>
                </li>
              </ul>
              <p className="mt-8 text-xl font-light text-white italic border-t border-white/20 pt-6">
                "We do not chase trends. We build frameworks that outlive them."
              </p>
            </div>
          </div>

          {/* Our Standard */}
          <div className="mb-24 text-center">
            <h3 className="text-3xl font-bold text-white mb-12">Our <span className="text-white">Standard</span></h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-black/40 border border-white/5 p-8 rounded-xl hover:border-white/30 transition-all duration-300">
                <Shield className="w-10 h-10 text-white mx-auto mb-6" />
                <h4 className="text-xl font-bold text-white mb-3">No Average Builds</h4>
                <p className="text-gray-400 text-sm">Every solution is engineered with intention and refined with intelligence.</p>
              </div>
              <div className="bg-black/40 border border-white/5 p-8 rounded-xl hover:border-white/30 transition-all duration-300">
                <Target className="w-10 h-10 text-white mx-auto mb-6" />
                <h4 className="text-xl font-bold text-white mb-3">Institutional Precision</h4>
                <p className="text-gray-400 text-sm">We operate with startup agility but execute with the rigor of established leaders.</p>
              </div>
              <div className="bg-black/40 border border-white/5 p-8 rounded-xl hover:border-white/30 transition-all duration-300">
                <Layers className="w-10 h-10 text-white mx-auto mb-6" />
                <h4 className="text-xl font-bold text-white mb-3">Scale Beyond Expectation</h4>
                <p className="text-gray-400 text-sm">Every structure is designed to support growth far into the future.</p>
              </div>
            </div>
          </div>

          {/* The Leadership */}
          <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl border border-white/10 p-8 md:p-12 mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-5 bg-cover bg-center"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">The Leadership</h3>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">PRANAV R RAAJ RAJENDAR</h2>
                <p className="text-gray-400 text-sm font-medium tracking-wide mb-8">DIRECTOR</p>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  A strategist by mindset. An engineer by discipline. A visionary by ambition.
                </p>
                <p className="text-gray-300 leading-relaxed mb-8">
                  He founded Xiqro with a singular belief: <span className="text-white italic">"True innovation is not loud. It is structured, strategic, and unstoppable."</span>
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-5 h-5 text-white" />
                    <span className="text-gray-300">Think long-term</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-5 h-5 text-white" />
                    <span className="text-gray-300">Build intelligently</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-5 h-5 text-white" />
                    <span className="text-gray-300">Lead with clarity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-5 h-5 text-white" />
                    <span className="text-gray-300">Deliver beyond expectation</span>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="inline-block relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-gray-500/20 to-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm">
                    <Rocket className="w-24 h-24 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-black border border-white p-4 rounded-xl">
                    <p className="text-white font-bold text-xl">Deliberate Scaling</p>
                  </div>
                </div>
                <p className="mt-8 text-gray-400 text-sm max-w-sm ml-auto">
                  "Under his direction, Xiqro is not growing randomly. It is scaling deliberately. Not just building products — but building influence."
                </p>
              </div>
            </div>
          </div>

          {/* Our Commitment & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Commitment</h3>
              <div className="bg-white/5 rounded-xl p-8 border-l-4 border-white">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3 text-lg text-gray-200">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">1</div>
                    <span>Architect before building.</span>
                  </li>
                  <li className="flex items-center space-x-3 text-lg text-gray-200">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">2</div>
                    <span>Secure before scaling.</span>
                  </li>
                  <li className="flex items-center space-x-3 text-lg text-gray-200">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">3</div>
                    <span>Optimize before delivering.</span>
                  </li>
                  <li className="flex items-center space-x-3 text-lg text-gray-200">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">4</div>
                    <span>Refine before presenting.</span>
                  </li>
                </ul>
                <p className="mt-8 text-gray-400">
                  We create digital ecosystems that empower businesses to move confidently into the future. <span className="text-white font-medium">We build assets — not experiments.</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                To establish Xiqro as a globally respected technology house — synonymous with intelligence, power, and refined digital craftsmanship.
              </p>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-gray-500">Not the biggest.</p>
                <p className="text-2xl font-bold text-gray-400">Not the loudest.</p>
                <p className="text-3xl font-bold text-white">But the most respected.</p>
              </div>
            </div>
          </div>

          {/* This Is Xiqro */}
          <div className="text-center py-16 border-t border-white/10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">This Is <span className="text-white">Xiqro</span></h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="p-4">
                <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">Where</p>
                <p className="text-xl font-bold text-white">Vision becomes architecture</p>
              </div>
              <div className="p-4 border-l border-r border-white/10">
                <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">Where</p>
                <p className="text-xl font-bold text-white">Discipline becomes dominance</p>
              </div>
              <div className="p-4">
                <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">Where</p>
                <p className="text-xl font-bold text-white">Innovation becomes legacy</p>
              </div>
            </div>
            <p className="text-2xl font-light text-gray-300">
              "We are not here to participate. <span className="text-white font-bold">We are here to lead.</span>"
            </p>
          </div>

        </div>
      </section>

      <section id="services" className="py-16 md:py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Services</span>
            </h2>.
            <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital & AI solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 hover:border-white transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/5 border border-white/10">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Website Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Custom, responsive websites built with modern technologies. From simple landing pages to complex web applications.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 hover:border-white transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/5 border border-white/10">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">E-commerce Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Complete online store solutions with payment integration, inventory management, and seamless user experience.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 hover:border-white transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/5 border border-white/10">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Mobile App Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Native and cross-platform mobile applications that deliver exceptional performance and user engagement.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 hover:border-white transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/5 border border-white/10">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">UI/UX Design</h3>
              <p className="text-gray-400 leading-relaxed">
                Beautiful, intuitive interfaces designed to enhance user satisfaction and drive conversions.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 hover:border-white transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/5 border border-white/10">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Digital Marketing</h3>
              <p className="text-gray-400 leading-relaxed">
                Strategic SEO, social media, and performance marketing to boost your brand visibility and ROI.
              </p>
            </div>



            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 hover:border-white transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/5 border border-white/10">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Data Analytics</h3>
              <p className="text-gray-400 leading-relaxed">
                Advanced data visualization and business intelligence to turn raw data into actionable insights.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 hover:border-white transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/5 border border-white/10">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">AI & Intelligent Automation</h3>
              <p className="text-gray-400 leading-relaxed">
                Custom AI agents and automated workflows to streamline operations and reduce manual effort.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 hover:border-white transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/5 border border-white/10">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Product Strategy & MVP</h3>
              <p className="text-gray-400 leading-relaxed">
                From ideation to market-ready MVP. We validate, prototype, and build scalable products efficiently.
              </p>
            </div>


          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-black relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              The <span className="text-white">Protocol</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              How we engineer success. No guesswork. Pure execution.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "The Blueprint", desc: "We deconstruct your vision and reassemble it with architectural precision." },
              { step: "02", title: "The Build", desc: "Engineering with the cleanest code and most robust frameworks." },
              { step: "03", title: "The Polish", desc: "Rigorous testing and refinement to ensure perfection." },
              { step: "04", title: "The Launch", desc: "Deploying your digital asset to dominate the market." }
            ].map((item, index) => (
              <div key={index} className="relative p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-black font-bold flex items-center justify-center rounded-lg shadow-lg shadow-white/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mt-6 mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Sectors of <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Impact</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["FinTech", "E-Commerce", "Healthcare", "Real Estate", "SaaS", "Education", "Logistics", "AI & Automation"].map((industry, index) => (
              <div key={index} className="p-6 border border-white/10 rounded-lg text-center hover:border-white/50 hover:bg-white/5 transition-all duration-300 cursor-default">
                <p className="text-lg font-bold text-gray-300 hover:text-white transition-colors">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400">
              Let's build your digital future with Xiqro
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:outline-none focus:border-white text-white placeholder-gray-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:outline-none focus:border-white text-white placeholder-gray-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:outline-none focus:border-white text-white placeholder-gray-500 transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:outline-none focus:border-white text-white placeholder-gray-500 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-white to-gray-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Logo className="h-10 w-auto" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Building the digital infrastructure for the next generation of business. Precision, Scale, Legacy.
              </p>
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Stay Updated</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 w-full"
                  />
                  <button className="bg-white text-black px-4 py-2 rounded-r-lg hover:bg-gray-200 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white text-sm transition-colors">Website Development</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white text-sm transition-colors">Mobile Applications</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white text-sm transition-colors">AI & Automation</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white text-sm transition-colors">Product Strategy</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white text-sm transition-colors">Data Analytics</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white text-sm transition-colors">About Xiqro</button></li>
                <li><button onClick={() => scrollToSection('process')} className="text-gray-400 hover:text-white text-sm transition-colors">Our Protocol</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Connect</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0" />
                  <span>No:33, Radha Nagar 2nd Cross,<br />Muthupillaipalayam,<br />Puducherry – 605110</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 text-sm">
                  <Mail className="w-5 h-5 text-white flex-shrink-0" />
                  <a href="mailto:info@xiqro.in" className="hover:text-white transition-colors">info@xiqro.in</a>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 text-sm">
                  <Phone className="w-5 h-5 text-white flex-shrink-0" />
                  <a href="tel:+916384711735" className="hover:text-white transition-colors">+91-6384711735</a>
                </li>
              </ul>
              <div className="flex space-x-4 mt-8">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <p className="text-gray-300 text-sm font-medium italic">
                "Founded by <span className="text-white font-bold">Pranav R Raaj RAJENDAR</span>, Xiqro was established with a bold ambition: to create a technology brand that merges startup agility with premium execution standards."
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">
                Copyright © {new Date().getFullYear()} Xiqro. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
