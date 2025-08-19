import { Building2, University, FileText, Scan, Model, ArrowRight, Sparkles, Zap, Target, CheckCircle, Award, Users, TrendingUp, Star, Building, FileCode, Database, Cloud, Globe, Shield, Zap as ZapIcon, FileSearch, Hammer, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import QuoteRequestModal from "./QuoteRequestModal";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Function to scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Scan,
      title: "BUILT & AS BUILT MODELING SCANS",
      description: "Comprehensive 3D modeling from existing structures and point cloud data",
      longDescription: "Transform existing buildings into intelligent 3D models using advanced laser scanning technology. Our as-built modeling services capture every detail of your structure for accurate documentation and future planning.",
      features: ["3D Point Cloud Processing", "Existing Conditions Analysis", "As-Built Documentation", "Clash Detection"],
      benefits: ["Reduce site visits by 80%", "Accurate existing conditions", "Faster project planning"],
      stats: { accuracy: "99.9%", speed: "3x Faster", efficiency: "80% Less" },
      category: "Scanning",
      difficulty: "Advanced",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      iconBg: "from-blue-400 to-blue-500",
      ctaText: "Start Scanning",
      ctaIcon: "📐"
    },
    {
      icon: Building2,
      title: "BIM MODELING SERVICES LOD 500",
      description: "Detailed BIM models with full construction documentation and specifications",
      longDescription: "Create comprehensive Building Information Models at the highest level of detail (LOD 500). Our BIM modeling services include complete construction documentation, specifications, and detailed component information.",
      features: ["LOD 500 Modeling", "Construction Documentation", "Component Specifications", "Quality Assurance"],
      benefits: ["Complete project documentation", "Reduced construction errors", "Enhanced collaboration"],
      stats: { accuracy: "99.7%", speed: "2.5x Faster", efficiency: "70% Less" },
      category: "Modeling",
      difficulty: "Expert",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      iconBg: "from-purple-400 to-purple-500",
      ctaText: "Model Now",
      ctaIcon: "🏗️"
    },
    {
      icon: FileSearch,
      title: "REVIT CONVERSIONS & CLASH DETECTION",
      description: "Convert legacy drawings to Revit models with comprehensive clash detection analysis",
      longDescription: "Modernize your legacy CAD drawings by converting them to intelligent Revit models. Our clash detection services identify and resolve conflicts before construction begins, saving time and money.",
      features: ["CAD to Revit Conversion", "Clash Detection", "Conflict Resolution", "Model Validation"],
      benefits: ["Modernized workflows", "Reduced construction delays", "Cost savings"],
      stats: { accuracy: "99.5%", speed: "2x Faster", efficiency: "60% Less" },
      category: "Conversion",
      difficulty: "Professional",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      iconBg: "from-green-400 to-green-500",
      ctaText: "Convert Now",
      ctaIcon: "🔄"
    }
  ];

  const additionalServices = [
    {
      icon: FileCode,
      title: "REVIT FAMILY CREATION",
      description: "Custom Revit families and components tailored to your project needs",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Database,
      title: "SHOP DRAWINGS",
      description: "Detailed fabrication and installation drawings for contractors",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Cloud,
      title: "CLOUD COLLABORATION",
      description: "Real-time collaboration tools for distributed teams",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Building },
    { number: "99.9%", label: "Accuracy Rate", icon: Target },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "Global", label: "Delivery", icon: Globe }
  ];

  return (
    <>
      <section ref={sectionRef} id="services" className="py-20 sm:py-24 lg:py-28 xl:py-32 text-white animate-on-scroll relative overflow-hidden">
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0 apple-gradient"></div>
        
        {/* Enhanced Glow Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-transparent to-purple-600/20"></div>
        
        {/* Enhanced Floating Elements with Parallax */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72 bg-blue-500/5 rounded-full blur-2xl sm:blur-3xl animate-float parallax"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 xl:w-[24rem] xl:h-[24rem] bg-purple-500/5 rounded-full blur-2xl sm:blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-88 xl:h-88 bg-blue-400/5 rounded-full blur-2xl sm:blur-3xl animate-float parallax" style={{animationDelay: '4s'}}></div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-16 sm:top-32 right-16 sm:right-32 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18 border border-white/20 rounded-lg rotate-45 animate-float"></div>
          <div className="absolute bottom-16 sm:bottom-32 left-16 sm:left-32 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 border-2 border-white/30 transform rotate-12 animate-float" style={{animationDelay: '3s'}}></div>
          
          {/* Interactive Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: '20px 20px sm:40px 40px lg:60px 60px xl:70px 70px'
            }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 relative z-10">
          {/* Enhanced Header Section */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24 xl:mb-28">
            <div className="inline-flex items-center space-x-3 sm:space-x-4 px-5 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 sm:mb-10 hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
              <span className="text-white/80 font-medium tracking-wide text-base sm:text-lg">WHAT WE OFFER</span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 sm:mb-10 lg:mb-12 tracking-tight">
              <span className="bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
                OUR SERVICES
              </span>
            </h2>
            
            <div className="w-20 sm:w-24 lg:w-28 xl:w-32 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8 sm:mb-10 lg:mb-12 rounded-full hover:w-24 sm:hover:w-28 lg:hover:w-32 xl:hover:w-36 transition-all duration-500"></div>
            
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white/90 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto leading-relaxed font-light tracking-wide px-6 sm:px-8">
              We are a one-stop-shop for MEP, architecture and engineering firms. From 3D BIM to point cloud to BIM services, 
              CAD services, Scan to BIM, Revit BIM services, Revit family creation services and final shop drawings, we deliver 
              intelligent solutions that capture every aspect of your design and build through enhanced construction documentation.
            </p>

            {/* Interactive Stats Bar - Mobile Responsive */}
            <div className="grid grid-cols-2 lg:flex lg:justify-center lg:items-center gap-8 lg:gap-12 mt-12 sm:mt-16 lg:mt-20 max-w-3xl lg:max-w-none mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-200 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/70 flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 lg:space-x-3">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-blue-300" />
                      <span className="text-center">{stat.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 max-w-6xl lg:max-w-7xl xl:max-w-8xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div 
                  key={index} 
                  className="relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Enhanced Service Card */}
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-7 sm:p-9 lg:p-11 xl:p-13 border border-white/10 shadow-apple transition-all duration-500 overflow-hidden min-h-[660px] sm:min-h-[715px] lg:min-h-[770px] xl:min-h-[825px]">
                    
                    {/* Background Overlay - Auto Show with Delay */}
                    <div className={`absolute inset-0 ${service.bgColor} opacity-0 apple-fade-in`} style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}></div>
                    
                    {/* Enhanced Icon Container - Fixed overflow */}
                    <div className={`relative z-10 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 glass rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-7 sm:mb-9 lg:mb-11 transition-all duration-500 border border-white/20 overflow-hidden mt-8 sm:mt-10 lg:mt-12`}>
                      {/* Icon Background Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.iconBg} rounded-2xl sm:rounded-3xl blur-xl transition-all duration-500 opacity-60`}></div>
                      
                      {/* Icon - Fixed size to prevent overflow */}
                      <IconComponent className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 text-white relative z-10 transition-transform duration-500" />
                      
                      {/* Enhanced Particle System */}
                      <div className="absolute top-2 right-2 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute top-1/2 left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      <div className="absolute top-1/2 right-2 w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                      
                      {/* Sparkle Effect - Auto Show with Delay */}
                      <Sparkles className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-yellow-300 animate-ping opacity-0 apple-fade-in" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}} />
                      <Zap className="absolute -bottom-2 -left-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-blue-300 animate-pulse opacity-0 apple-fade-in" style={{animationDelay: '1.3s', animationFillMode: 'forwards'}} />
                    </div>
                    
                    {/* Enhanced Content with Progressive Disclosure - Fixed overflow */}
                    <div className="relative z-10 text-center">
                      {/* Category Badge - Auto Show with Delay */}
                      <div className="inline-flex items-center space-x-2 px-3 py-2 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4 lg:mb-6 opacity-0 apple-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                        <Target className="w-3 h-3 lg:w-4 lg:h-4 text-blue-300" />
                        <span className="text-sm lg:text-base text-white/80 font-medium">{service.category}</span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6 tracking-tight text-white transition-colors duration-200 leading-tight">
                        {service.title}
                      </h3>
                      
                      {/* Difficulty Indicator - Auto Show with Delay */}
                      <div className="inline-flex items-center space-x-2 px-3 py-2 lg:px-4 lg:py-2 bg-white/10 rounded-full mb-4 lg:mb-6 opacity-0 apple-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                        <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-white/60" />
                        <span className="text-sm lg:text-base text-white/60 font-medium">{service.difficulty}</span>
                      </div>
                      
                      <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 leading-relaxed font-light tracking-wide mb-6 lg:mb-8 px-2">
                        {service.description}
                      </p>

                    {/* Interactive Stats - Auto Show with Delay */}
                    <div className="flex flex-wrap justify-center gap-3 mb-4 lg:mb-6 opacity-0 apple-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                      {Object.entries(service.stats).map(([key, value], statIndex) => (
                        <div key={key} className="inline-flex items-center space-x-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                          <span className="text-sm lg:text-base font-bold text-blue-200">{value}</span>
                          <span className="text-xs lg:text-sm text-white/60 capitalize">{key}</span>
                        </div>
                      ))}
                    </div>
                      
                      {/* Features List with Enhanced Animation - Auto Show with Delay */}
                      <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                        <h4 className="text-sm lg:text-base font-semibold text-blue-200 uppercase tracking-wide mb-2 lg:mb-3 opacity-0 apple-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                          Key Features
                        </h4>
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm lg:text-base text-white/70 transition-colors duration-200">
                            <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-blue-300 opacity-0 apple-fade-in flex-shrink-0" style={{animationDelay: `${0.5 + featureIndex * 0.05}s`, animationFillMode: 'forwards'}} />
                            <span className="opacity-0 apple-fade-in text-left" style={{animationDelay: `${0.5 + featureIndex * 0.05}s`, animationFillMode: 'forwards'}}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Benefits List with Enhanced Animation - Auto Show with Delay */}
                      <div className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                        <h4 className="text-sm lg:text-base font-semibold text-blue-200 uppercase tracking-wide mb-2 lg:mb-3 opacity-0 apple-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                          Benefits
                        </h4>
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2 text-sm lg:text-base text-white/70 transition-colors duration-200">
                            <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-blue-300 opacity-0 apple-fade-in flex-shrink-0" style={{animationDelay: `${0.6 + benefitIndex * 0.05}s`, animationFillMode: 'forwards'}} />
                            <span className="opacity-0 apple-fade-in text-left" style={{animationDelay: `${0.6 + benefitIndex * 0.05}s`, animationFillMode: 'forwards'}}>
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Enhanced CTA Button - Auto Show with Delay */}
                      <Button 
                        variant="outline" 
                        size="default"
                        className="border-white/30 text-white hover:bg-white/10 transition-all duration-200 opacity-0 apple-fade-in w-full hover:scale-105 px-7 py-4 text-lg lg:text-xl"
                        style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}
                      >
                        <span>{service.ctaText}</span>
                        <span className="ml-2">{service.ctaIcon}</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                    
                    {/* Enhanced Decorative Elements - Auto Show with Delay */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 apple-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 apple-fade-in" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}></div>
                    
                    {/* Service Badge with Enhanced Animation - Auto Show with Delay */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-0 apple-fade-in" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
                      <span className="text-xs text-white/80 font-medium">Service</span>
                    </div>

                    {/* Connection Lines to Other Cards - Auto Show with Delay */}
                    {index < services.length - 1 && (
                      <div className="absolute -right-8 top-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400/30 to-purple-400/30 opacity-0 apple-fade-in hidden md:block" style={{animationDelay: '1.1s', animationFillMode: 'forwards'}}></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Services Section */}
          <div className="mt-24">
            <h3 className="text-3xl font-bold text-center mb-12 text-white/90">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {additionalServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="group cursor-pointer">
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white text-center mb-2">{service.title}</h4>
                      <p className="text-white/70 text-sm text-center">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Enhanced CTA Section */}
          <div className="text-center mt-24">
            <div className="inline-flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer group mb-8">
              <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
              <span className="text-white/90 font-medium">Ready to get started?</span>
              <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToServices}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-lg font-medium"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Explore All Services
              </Button>
              <Button 
                onClick={() => setIsQuoteModalOpen(true)}
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <Target className="w-5 h-5 mr-2" />
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Modal */}
      <QuoteRequestModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
};

export default ServicesSection;