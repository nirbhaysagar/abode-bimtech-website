import { Home, Settings, Edit3, Calculator, ArrowRight, CheckCircle, Sparkles, Zap, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const ProductsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      const parallaxElements = sectionRef.current.querySelectorAll('.parallax');
      parallaxElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1);
        (el as HTMLElement).style.transform = `translateY(${rate * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      icon: Home,
      title: "Scan to BIM",
      description: "Transform existing structures into intelligent 3D models using advanced scanning technology",
      features: ["3D Point Cloud Processing", "Existing Conditions Analysis", "BIM Model Generation", "Clash Detection"],
      benefits: ["Reduce site visits by 80%", "Accurate as-built documentation", "Faster project planning"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      ctaText: "Start Scanning",
      ctaIcon: "📐",
      stats: { accuracy: "99.9%", speed: "3x Faster", efficiency: "80% Less" },
      category: "Technology",
      difficulty: "Advanced"
    },
    {
      icon: Settings,
      title: "REVIT / MEP",
      description: "Comprehensive MEP design and coordination services for complex building systems",
      features: ["MEP System Design", "Family Creation", "Clash Detection", "Coordination"],
      benefits: ["Streamlined MEP workflows", "Reduced coordination time", "Enhanced collaboration"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      ctaText: "Design MEP",
      ctaIcon: "⚙️",
      stats: { accuracy: "99.7%", speed: "2.5x Faster", efficiency: "70% Less" },
      category: "Engineering",
      difficulty: "Expert"
    },
    {
      icon: Edit3,
      title: "DRAFTING",
      description: "Professional technical documentation and detailed drawings for construction excellence",
      features: ["Technical Drawings", "Detail Libraries", "Construction Docs", "Standards Compliance"],
      benefits: ["Industry-standard documentation", "Comprehensive detail libraries", "Quality assurance"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      ctaText: "Get Quote",
      ctaIcon: "✏️",
      stats: { accuracy: "99.5%", speed: "2x Faster", efficiency: "60% Less" },
      category: "Documentation",
      difficulty: "Professional"
    },
    {
      icon: Calculator,
      title: "UNDER BUILT & AS-BUILT",
      description: "Comprehensive documentation and analysis of existing and proposed building conditions",
      features: ["As-Built Documentation", "Cloud Integration", "Navisworks Coordination", "Quality Assurance"],
      benefits: ["Accurate existing conditions", "Seamless cloud workflow", "Enhanced coordination"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      ctaText: "Document Now",
      ctaIcon: "🏗️",
      stats: { accuracy: "99.8%", speed: "2.8x Faster", efficiency: "75% Less" },
      category: "Analysis",
      difficulty: "Specialist"
    }
  ];

  return (
    <section ref={sectionRef} id="products" className="py-24 lg:py-28 xl:py-32 bg-background relative overflow-hidden">
      {/* Enhanced Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 lg:w-[24rem] lg:h-[24rem] xl:w-96 xl:h-96 bg-blue-500/5 rounded-full blur-3xl parallax"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 lg:w-[20rem] lg:h-[20rem] xl:w-80 xl:h-80 bg-purple-500/5 rounded-full blur-3xl parallax"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-green-500/5 rounded-full blur-3xl parallax"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 right-32 w-16 h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 border border-primary/20 rounded-lg rotate-45 animate-float parallax"></div>
        <div className="absolute bottom-32 left-32 w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-primary/10 rounded-full animate-float parallax" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 border-2 border-primary/30 transform rotate-12 animate-float parallax" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Interactive Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px lg:50px 50px xl:60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-8 lg:px-10 xl:px-12 relative z-10">
        {/* Enhanced Header Section with Interactive Elements */}
        <div className="text-center mb-20 lg:mb-24 xl:mb-28">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 mb-8 lg:mb-10 hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
            <span className="text-primary font-medium tracking-wide text-base">OUR SOLUTIONS</span>
            <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-10 lg:mb-12 tracking-tight text-foreground">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              PRODUCTS & SERVICES
            </span>
          </h2>
          
          <div className="w-24 lg:w-28 xl:w-32 h-1 lg:h-1.5 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8 lg:mb-10 rounded-full hover:w-28 lg:hover:w-32 xl:hover:w-36 transition-all duration-500"></div>
          
          <p className="text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto font-light tracking-wide leading-relaxed">
            Comprehensive BIM solutions designed to streamline your architectural and engineering workflows
          </p>

          {/* Interactive Stats Bar */}
          <div className="flex justify-center items-center space-x-10 lg:space-x-12 mt-12 lg:mt-16">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-sm lg:text-base xl:text-lg text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-sm lg:text-base xl:text-lg text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm lg:text-base xl:text-lg text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>

        {/* Enhanced Products Grid with Magnetic Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 xl:gap-12 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            
            return (
              <div 
                key={index} 
                id={`card-${index}`}
                className="relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Enhanced Product Card with Magnetic Effect */}
                <div 
                  className="relative bg-white rounded-3xl p-9 lg:p-11 xl:p-13 border border-gray-100 shadow-apple transition-all duration-500 overflow-hidden min-h-[605px] lg:min-h-[660px] xl:min-h-[715px]"
                >
                  
                  {/* Background Overlay - Auto Show with Delay */}
                  <div className={`absolute inset-0 ${product.bgColor} opacity-0 apple-fade-in`} style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}></div>
                  
                  {/* Enhanced Icon Container with Particle System */}
                  <div className={`relative z-10 w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mx-auto mb-9 lg:mb-11 transition-all duration-500 shadow-apple overflow-hidden mt-8 lg:mt-10 xl:mt-12`}>
                    {/* Icon Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl blur-xl transition-all duration-500 opacity-60`}></div>
                    
                    {/* Icon */}
                    <IconComponent className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 text-white relative z-10 transition-transform duration-500" />
                    
                    {/* Enhanced Particle System */}
                    <div className="absolute top-2 right-2 w-2 h-2 lg:w-3 lg:h-3 bg-white/80 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 lg:w-3 lg:h-3 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-1/2 left-2 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 right-2 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    
                    {/* Sparkle Effect - Auto Show with Delay */}
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-yellow-400 animate-ping opacity-0 apple-fade-in" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}} />
                    <Zap className="absolute -bottom-2 -left-2 w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-blue-400 animate-pulse opacity-0 apple-fade-in" style={{animationDelay: '1.3s', animationFillMode: 'forwards'}} />
                  </div>
                  
                  {/* Enhanced Content with Progressive Disclosure */}
                  <div className="relative z-10 text-center">
                    {/* Category Badge - Auto Show with Delay */}
                    <div className="inline-flex items-center space-x-2 px-3 py-2 lg:px-4 lg:py-2 bg-primary/10 rounded-full border border-primary/20 mb-4 lg:mb-6 opacity-0 apple-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                      <Target className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />
                      <span className="text-sm lg:text-base text-primary font-medium">{product.category}</span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6 text-foreground tracking-tight transition-colors duration-200">
                      {product.title}
                    </h3>
                    
                    {/* Difficulty Indicator - Auto Show with Delay */}
                    <div className="inline-flex items-center space-x-2 px-3 py-2 lg:px-4 lg:py-2 bg-gray-100 rounded-full mb-4 lg:mb-6 opacity-0 apple-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                      <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600" />
                      <span className="text-sm lg:text-base text-gray-600 font-medium">{product.difficulty}</span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg xl:text-xl mb-6 lg:mb-8 px-3">
                      {product.description}
                    </p>
                    
                    {/* Interactive Stats - Auto Show with Delay */}
                    <div className="grid grid-cols-3 gap-2 lg:gap-3 mb-4 lg:mb-6 opacity-0 apple-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                      {Object.entries(product.stats).map(([key, value], statIndex) => (
                        <div key={key} className="text-center p-2 lg:p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200/50">
                          <div className="text-base lg:text-lg font-bold text-primary">{value}</div>
                          <div className="text-base lg:text-lg text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Features List with Enhanced Animation - Auto Show with Delay */}
                    <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                      <h4 className="text-base lg:text-lg font-semibold text-primary uppercase tracking-wide mb-2 lg:mb-3 opacity-0 apple-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                        Key Features
                      </h4>
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-base lg:text-lg text-muted-foreground transition-colors duration-200">
                          <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-primary opacity-0 apple-fade-in" style={{animationDelay: `${0.5 + featureIndex * 0.05}s`, animationFillMode: 'forwards'}} />
                          <span className="opacity-0 apple-fade-in" style={{animationDelay: `${0.5 + featureIndex * 0.05}s`, animationFillMode: 'forwards'}}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Benefits List with Enhanced Animation - Auto Show with Delay */}
                    <div className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                      <h4 className="text-base lg:text-lg font-semibold text-primary uppercase tracking-wide mb-2 lg:mb-3 opacity-0 apple-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                        Benefits
                      </h4>
                      {product.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-base lg:text-lg text-muted-foreground transition-colors duration-200">
                          <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-primary opacity-0 apple-fade-in" style={{animationDelay: `${0.6 + benefitIndex * 0.05}s`, animationFillMode: 'forwards'}} />
                          <span className="opacity-0 apple-fade-in" style={{animationDelay: `${0.6 + benefitIndex * 0.05}s`, animationFillMode: 'forwards'}}>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Enhanced CTA Button with Loading State - Auto Show with Delay */}
                    <Button 
                      variant="outline" 
                      size="default"
                      className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-200 opacity-0 apple-fade-in w-full hover:scale-105 px-7 py-4 text-lg lg:text-xl"
                      style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}
                    >
                      <span>{product.ctaText}</span>
                      <span className="ml-2">{product.ctaIcon}</span>
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                  
                  {/* Enhanced Decorative Elements - Auto Show with Delay */}
                  <div className="absolute top-4 right-4 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-primary/40 to-primary/60 rounded-full opacity-0 apple-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 lg:w-3 lg:h-3 bg-gradient-to-r from-primary/40 to-primary/60 rounded-full opacity-0 apple-fade-in" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}></div>
                  
                  {/* Service Badge with Enhanced Animation - Auto Show with Delay */}
                  <div className="absolute top-4 left-4 px-3 py-2 lg:px-4 lg:py-2 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 opacity-0 apple-fade-in" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
                    <span className="text-sm lg:text-base text-primary font-medium">Service</span>
                  </div>

                  {/* Connection Lines to Other Cards - Auto Show with Delay */}
                  {index < products.length - 1 && (
                    <div className="absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-primary/30 to-transparent opacity-0 apple-fade-in hidden lg:block" style={{animationDelay: '1.1s', animationFillMode: 'forwards'}}></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section with Interactive Elements */}
        <div className="text-center mt-24">
          <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-primary/10 to-primary-glow/10 backdrop-blur-md rounded-2xl border border-primary/20 hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <div className="w-3 h-3 bg-primary rounded-full group-hover:animate-pulse"></div>
            <span className="text-primary font-medium">Ready to get started?</span>
            <div className="w-3 h-3 bg-primary rounded-full group-hover:animate-pulse"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Explore All Products
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300">
              <Target className="w-5 h-5 mr-2" />
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;