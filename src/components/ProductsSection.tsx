import { Home, Settings, Edit3, Calculator, ArrowRight, CheckCircle, Sparkles, Zap, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import QuoteRequestModal from "./QuoteRequestModal";

const ProductsSection = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
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
    <>
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
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px lg:60px 60px xl:80px 80px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 xl:px-10 relative z-10">
          {/* Enhanced Header Section */}
          <div className="text-center mb-20 lg:mb-24 xl:mb-28">
            <div className="inline-flex items-center space-x-3 lg:space-x-4 px-5 lg:px-6 py-3 lg:py-4 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 mb-8 lg:mb-10 hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
              <span className="text-primary/80 font-medium tracking-wide text-base lg:text-lg">OUR PRODUCTS</span>
              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 lg:mb-10 xl:mb-12 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-primary to-purple-600 bg-clip-text text-transparent">
                BIM Solutions
              </span>
            </h2>
            
            <div className="w-24 lg:w-28 xl:w-32 h-1 lg:h-1.5 xl:h-2 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8 lg:mb-10 xl:mb-12 rounded-full hover:w-28 lg:hover:w-32 xl:hover:w-36 transition-all duration-500"></div>
            
            <p className="text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto leading-relaxed font-light tracking-wide px-6 lg:px-8">
              Discover our comprehensive range of BIM products and services designed to streamline your workflow, 
              enhance collaboration, and deliver exceptional results for every project.
            </p>

            {/* Interactive Stats Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-16 lg:mt-20 max-w-4xl mx-auto">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-sm lg:text-base text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">
                  99.9%
                </div>
                <div className="text-sm lg:text-base text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-sm lg:text-base text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 group-hover:scale-110 transition-transform duration-300">
                  Global
                </div>
                <div className="text-sm lg:text-base text-muted-foreground">Delivery</div>
              </div>
            </div>
          </div>

          {/* Enhanced Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 xl:gap-12 max-w-7xl mx-auto">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              
              return (
                <div 
                  key={index} 
                  className="relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Enhanced Product Card */}
                  <div className="relative bg-card backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-border shadow-apple transition-all duration-500 overflow-hidden min-h-[600px] lg:min-h-[650px] xl:min-h-[700px] hover:shadow-glow hover:scale-105">
                    
                    {/* Background Overlay */}
                    <div className={`absolute inset-0 ${product.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Enhanced Icon Container - Fixed overflow */}
                    <div className={`relative z-10 w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 glass rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-6 lg:mb-8 transition-all duration-500 border border-border/20 overflow-hidden mt-6 lg:mt-8`}>
                      {/* Icon Background Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl lg:rounded-3xl blur-xl transition-all duration-500 opacity-60`}></div>
                      
                      {/* Icon - Fixed size to prevent overflow */}
                      <IconComponent className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 text-white relative z-10 transition-transform duration-500" />
                      
                      {/* Enhanced Particle System */}
                      <div className="absolute top-2 right-2 w-2 h-2 lg:w-3 lg:h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 lg:w-3 lg:h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute top-1/2 left-2 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      <div className="absolute top-1/2 right-2 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    </div>
                    
                    {/* Enhanced Content - Fixed overflow */}
                    <div className="relative z-10 text-center">
                      {/* Category Badge */}
                      <div className="inline-flex items-center space-x-2 px-3 py-2 lg:px-4 lg:py-2 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 mb-4 lg:mb-6">
                        <Target className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />
                        <span className="text-sm lg:text-base text-primary/80 font-medium">{product.category}</span>
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-4 lg:mb-6 tracking-tight text-foreground transition-colors duration-200 leading-tight">
                        {product.title}
                      </h3>
                      
                      {/* Difficulty Indicator */}
                      <div className="inline-flex items-center space-x-2 px-3 py-2 lg:px-4 lg:py-2 bg-muted/50 rounded-full mb-4 lg:mb-6">
                        <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-muted-foreground" />
                        <span className="text-sm lg:text-base text-muted-foreground font-medium">{product.difficulty}</span>
                      </div>
                      
                      <p className="text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed font-light tracking-wide mb-6 lg:mb-8 px-2">
                        {product.description}
                      </p>

                      {/* Interactive Stats */}
                      <div className="flex flex-wrap justify-center gap-3 mb-4 lg:mb-6">
                        {Object.entries(product.stats).map(([key, value], statIndex) => (
                          <div key={key} className="inline-flex items-center space-x-2 px-3 py-2 bg-muted/50 backdrop-blur-sm rounded-full border border-border/20">
                            <span className="text-sm lg:text-base font-bold text-primary">{value}</span>
                            <span className="text-xs lg:text-sm text-muted-foreground capitalize">{key}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Features List */}
                      <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                        <h4 className="text-sm lg:text-base font-semibold text-primary uppercase tracking-wide mb-2 lg:mb-3">
                          Key Features
                        </h4>
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm lg:text-base text-muted-foreground transition-colors duration-200">
                            <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0" />
                            <span className="text-left">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Benefits List */}
                      <div className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                        <h4 className="text-sm lg:text-base font-semibold text-primary uppercase tracking-wide mb-2 lg:mb-3">
                          Benefits
                        </h4>
                        {product.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2 text-sm lg:text-base text-muted-foreground transition-colors duration-200">
                            <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0" />
                            <span className="text-left">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Enhanced CTA Button */}
                      <Button 
                        variant="outline" 
                        size="default"
                        className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-200 w-full hover:scale-105 px-6 lg:px-7 py-3 lg:py-4 text-base lg:text-lg"
                      >
                        <span>{product.ctaText}</span>
                        <span className="ml-2">{product.ctaIcon}</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                    
                    {/* Enhanced Decorative Elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                    
                    {/* Product Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20">
                      <span className="text-xs text-primary/80 font-medium">Product</span>
                    </div>

                    {/* Connection Lines to Other Cards */}
                    {index < products.length - 1 && (
                      <div className="absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-primary/30 to-primary/30 hidden xl:block"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Enhanced CTA Section */}
          <div className="text-center mt-24 lg:mt-28">
            <div className="inline-flex items-center space-x-4 p-6 bg-primary/10 backdrop-blur-md rounded-2xl border border-primary/20 hover:scale-105 transition-transform duration-300 cursor-pointer group mb-8">
              <div className="w-3 h-3 bg-primary rounded-full group-hover:animate-pulse"></div>
              <span className="text-foreground/90 font-medium">Ready to get started?</span>
              <div className="w-3 h-3 bg-primary rounded-full group-hover:animate-pulse"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-lg font-medium"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              <Button 
                onClick={() => setIsQuoteModalOpen(true)}
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300"
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

export default ProductsSection;