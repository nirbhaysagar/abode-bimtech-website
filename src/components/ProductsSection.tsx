import { Home, Settings, Edit3, Calculator, ArrowRight, CheckCircle, Sparkles, Zap, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const ProductsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse tracking for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <section ref={sectionRef} id="products" className="py-32 bg-background relative overflow-hidden">
      {/* Enhanced Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl parallax"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl parallax"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-3xl parallax"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 right-32 w-16 h-16 border border-primary/20 rounded-lg rotate-45 animate-float parallax"></div>
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-primary/10 rounded-full animate-float parallax" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-primary/30 transform rotate-12 animate-float parallax" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Interactive Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Enhanced Header Section with Interactive Elements */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 mb-8 hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
            <span className="text-primary font-medium tracking-wide">OUR SOLUTIONS</span>
            <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight text-foreground">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              PRODUCTS & SERVICES
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8 rounded-full hover:w-32 transition-all duration-500"></div>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light tracking-wide leading-relaxed">
            Comprehensive BIM solutions designed to streamline your architectural and engineering workflows
          </p>

          {/* Interactive Stats Bar */}
          <div className="flex justify-center items-center space-x-8 mt-12">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>

        {/* Enhanced Products Grid with Magnetic Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            const isHovered = hoveredCard === index;
            
            // Calculate magnetic effect
            const cardElement = document.getElementById(`card-${index}`);
            const cardRect = cardElement?.getBoundingClientRect();
            const cardCenterX = cardRect ? cardRect.left + cardRect.width / 2 : 0;
            const cardCenterY = cardRect ? cardRect.top + cardRect.height / 2 : 0;
            
            const deltaX = (mousePosition.x - cardCenterX) * 0.02;
            const deltaY = (mousePosition.y - cardCenterY) * 0.02;
            
            return (
              <div 
                key={index} 
                id={`card-${index}`}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Enhanced Product Card with Magnetic Effect */}
                <div 
                  className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-apple hover:shadow-glow transition-all duration-500 hover:transform hover:scale-105 overflow-hidden group-hover:border-primary/20 cursor-pointer"
                  style={{
                    transform: isHovered ? `translate(${deltaX}px, ${deltaY}px)` : 'translate(0, 0)',
                    transition: isHovered ? 'none' : 'all 0.5s ease'
                  }}
                >
                  
                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 ${product.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Enhanced Icon Container with Particle System */}
                  <div className={`relative z-10 w-32 h-32 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:shadow-glow transition-all duration-500 shadow-apple overflow-hidden`}>
                    {/* Icon Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60`}></div>
                    
                    {/* Icon */}
                    <IconComponent className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
                    
                    {/* Enhanced Particle System */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 right-2 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    
                    {/* Sparkle Effect on Hover */}
                    {isHovered && (
                      <>
                        <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-ping" />
                        <Zap className="absolute -bottom-2 -left-2 w-5 h-5 text-blue-400 animate-pulse" />
                      </>
                    )}
                  </div>
                  
                  {/* Enhanced Content with Progressive Disclosure */}
                  <div className="relative z-10 text-center">
                    {/* Category Badge */}
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <Target className="w-3 h-3 text-primary" />
                      <span className="text-xs text-primary font-medium">{product.category}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                      {product.title}
                    </h3>
                    
                    {/* Difficulty Indicator */}
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0" style={{transitionDelay: '0.1s'}}>
                      <TrendingUp className="w-3 h-3 text-gray-600" />
                      <span className="text-xs text-gray-600 font-medium">{product.difficulty}</span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm mb-6 px-2">
                      {product.description}
                    </p>
                    
                    {/* Interactive Stats on Hover */}
                    {isHovered && (
                      <div className="grid grid-cols-3 gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100">
                        {Object.entries(product.stats).map(([key, value], statIndex) => (
                          <div key={key} className="text-center p-2 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200/50">
                            <div className="text-xs font-bold text-primary">{value}</div>
                            <div className="text-xs text-gray-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Features List with Enhanced Animation */}
                    <div className="space-y-2 mb-4">
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Key Features
                      </h4>
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <CheckCircle className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300" style={{transitionDelay: `${featureIndex * 0.1}s`}}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Benefits List with Enhanced Animation */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{transitionDelay: '0.4s'}}>
                        Benefits
                      </h4>
                      {product.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <CheckCircle className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300" style={{transitionDelay: `${0.5 + benefitIndex * 0.1}s`}}>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Enhanced CTA Button with Loading State */}
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/30 text-primary hover:bg-primary/10 group-hover:border-primary transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 w-full hover:scale-105"
                    >
                      <span>{product.ctaText}</span>
                      <span className="ml-2">{product.ctaIcon}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                  
                  {/* Enhanced Decorative Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-primary/40 to-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-primary/40 to-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" style={{transitionDelay: '0.2s'}}></div>
                  
                  {/* Service Badge with Enhanced Animation */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <span className="text-xs text-primary font-medium">Service</span>
                  </div>

                  {/* Connection Lines to Other Cards */}
                  {index < products.length - 1 && (
                    <div className="absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block"></div>
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