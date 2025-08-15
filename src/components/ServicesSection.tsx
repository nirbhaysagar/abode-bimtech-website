import { Building2, University, FileText, Scan, Model, ArrowRight, Sparkles, Zap, Target, CheckCircle, Award, Users, TrendingUp, Star, Building, FileCode, Database, Cloud, Globe, Shield, Zap as ZapIcon, FileSearch, Hammer, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
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
    <section ref={sectionRef} id="services" className="py-32 text-white animate-on-scroll relative overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 apple-gradient"></div>
      
      {/* Enhanced Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-transparent to-purple-600/20"></div>
      
      {/* Enhanced Floating Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float parallax"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float parallax" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-float parallax" style={{animationDelay: '4s'}}></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 right-32 w-16 h-16 border border-white/20 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-white/30 transform rotate-12 animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Interactive Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
            <span className="text-white/80 font-medium tracking-wide">WHAT WE OFFER</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight">
            <span className="bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
              OUR SERVICES
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8 rounded-full hover:w-32 transition-all duration-500"></div>
          
          <p className="text-xl text-white/90 max-w-5xl mx-auto leading-relaxed font-light tracking-wide">
            We are a one-stop-shop for MEP, architecture and engineering firms. From 3D BIM to point cloud to BIM services, 
            CAD services, Scan to BIM, Revit BIM services, Revit family creation services and final shop drawings, we deliver 
            intelligent solutions that capture every aspect of your design and build through enhanced construction documentation.
          </p>

          {/* Interactive Stats Bar */}
          <div className="flex justify-center items-center space-x-8 mt-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-blue-200 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70 flex items-center justify-center space-x-1">
                    <IconComponent className="w-4 h-4 text-blue-300" />
                    <span>{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredService === index;
            
            return (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Enhanced Service Card */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-apple hover:shadow-glow transition-all duration-500 hover:transform hover:scale-105 overflow-hidden cursor-pointer">
                  
                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Enhanced Icon Container */}
                  <div className={`relative z-10 w-40 h-40 glass rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:shadow-glow transition-all duration-500 border border-white/20 overflow-hidden`}>
                    {/* Icon Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.iconBg} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60`}></div>
                    
                    {/* Icon */}
                    <IconComponent className="w-24 h-24 text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
                    
                    {/* Enhanced Particle System */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 right-2 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    
                    {/* Sparkle Effect on Hover */}
                    {isHovered && (
                      <>
                        <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-ping" />
                        <Zap className="absolute -bottom-2 -left-2 w-5 h-5 text-blue-300 animate-pulse" />
                      </>
                    )}
                  </div>
                  
                  {/* Enhanced Content with Progressive Disclosure */}
                  <div className="relative z-10 text-center">
                    {/* Category Badge */}
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <Target className="w-3 h-3 text-blue-300" />
                      <span className="text-xs text-white/80 font-medium">{service.category}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 tracking-tight text-white group-hover:text-blue-200 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Difficulty Indicator */}
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0" style={{transitionDelay: '0.1s'}}>
                      <TrendingUp className="w-3 h-3 text-white/60" />
                      <span className="text-xs text-white/60 font-medium">{service.difficulty}</span>
                    </div>
                    
                    <p className="text-white/80 leading-relaxed font-light tracking-wide text-lg mb-6">
                      {service.description}
                    </p>

                    {/* Interactive Stats on Hover */}
                    {isHovered && (
                      <div className="grid grid-cols-3 gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100">
                        {Object.entries(service.stats).map(([key, value], statIndex) => (
                          <div key={key} className="text-center p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                            <div className="text-xs font-bold text-blue-200">{value}</div>
                            <div className="text-xs text-white/60 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Features List with Enhanced Animation */}
                    <div className="space-y-2 mb-4">
                      <h4 className="text-xs font-semibold text-blue-200 uppercase tracking-wide mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Key Features
                      </h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-xs text-white/70 group-hover:text-white transition-colors duration-300">
                          <CheckCircle className="w-3 h-3 text-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300" style={{transitionDelay: `${featureIndex * 0.1}s`}}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Benefits List with Enhanced Animation */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs font-semibold text-blue-200 uppercase tracking-wide mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{transitionDelay: '0.4s'}}>
                        Benefits
                      </h4>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-xs text-white/70 group-hover:text-white transition-colors duration-300">
                          <CheckCircle className="w-3 h-3 text-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300" style={{transitionDelay: `${0.5 + benefitIndex * 0.1}s`}}>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Enhanced CTA Button */}
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-white/30 text-white hover:bg-white/10 group-hover:border-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 w-full hover:scale-105"
                    >
                      <span>{service.ctaText}</span>
                      <span className="ml-2">{service.ctaIcon}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                  
                  {/* Enhanced Decorative Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" style={{transitionDelay: '0.2s'}}></div>
                  
                  {/* Service Badge with Enhanced Animation */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <span className="text-xs text-white/80 font-medium">Service</span>
                  </div>

                  {/* Connection Lines to Other Cards */}
                  {index < services.length - 1 && (
                    <div className="absolute -right-8 top-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"></div>
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
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-lg font-medium">
              <Sparkles className="w-5 h-5 mr-2" />
              Explore All Services
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300">
              <Target className="w-5 h-5 mr-2" />
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;