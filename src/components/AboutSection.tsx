import { Check, Award, Users, Target, TrendingUp, Building2, Sparkles, ArrowRight, Star, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
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

  const features = [
    {
      text: "Years Of Experience",
      icon: Award,
      description: "Decades of expertise in BIM and AEC industry",
      color: "from-blue-500 to-blue-600",
      delay: 0.1
    },
    {
      text: "True cost reduction",
      icon: TrendingUp,
      description: "Save up to 30% on project costs",
      color: "from-green-500 to-green-600",
      delay: 0.2
    },
    {
      text: "Affordable Pricing",
      icon: Target,
      description: "Competitive rates without compromising quality",
      color: "from-purple-500 to-purple-600",
      delay: 0.3
    },
    {
      text: "Continuous skill-upgradation & in-house training",
      icon: Users,
      description: "Always up-to-date with latest technologies",
      color: "from-orange-500 to-orange-600",
      delay: 0.4
    }
  ];

  const achievements = [
    {
      text: "100% satisfaction Guarantee",
      icon: Star,
      description: "We stand behind our work completely",
      color: "from-yellow-500 to-yellow-600",
      delay: 0.5
    },
    {
      text: "Over 5 million Square feets projects delivered",
      icon: Building2,
      description: "Massive scale of successful projects",
      color: "from-red-500 to-red-600",
      delay: 0.6
    },
    {
      text: "Long-lasting client relations",
      icon: Users,
      description: "Building partnerships that last",
      color: "from-indigo-500 to-indigo-600",
      delay: 0.7
    },
    {
      text: "Unparalled Expertise",
      icon: Zap,
      description: "Industry-leading knowledge and skills",
      color: "from-pink-500 to-pink-600",
      delay: 0.8
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Projects Completed", icon: Building2 },
    { number: "5M+", label: "Sq Ft Delivered", icon: Target },
    { number: "100%", label: "Client Satisfaction", icon: Star }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-secondary/30 via-background to-secondary/20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-2xl sm:blur-3xl animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-secondary/5 rounded-full blur-2xl sm:blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-accent/5 rounded-full blur-2xl sm:blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-16 sm:top-32 right-16 sm:right-32 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border border-primary/20 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-16 sm:left-32 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border-2 border-primary/30 transform rotate-12 animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Interactive Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '20px 20px sm:40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 mb-6 sm:mb-8 hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
            <span className="text-primary font-medium tracking-wide text-sm sm:text-base">OUR STORY</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 tracking-tight text-foreground">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              ABOUT US
            </span>
          </h2>
          
          <div className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 sm:mb-8 rounded-full hover:w-20 sm:hover:w-24 lg:hover:w-32 transition-all duration-500"></div>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto font-light tracking-wide leading-relaxed px-4 sm:px-6">
            Pioneering the future of Building Information Modeling with innovative solutions and unmatched expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Enhanced Image Section - Mobile Responsive */}
          <div className="order-2 lg:order-1 group">
            <div className="relative">
              {/* Main Image Container - Responsive Sizing */}
              <div className="rounded-2xl sm:rounded-3xl h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 mx-auto overflow-hidden shadow-apple hover:shadow-glow transition-all duration-500 hover:scale-105 relative">
                <img 
                  src="/aboutus.jpeg"
                  alt="About Us - BIM Design & Metaverse"
                  className="w-full h-full object-contain bg-gray-50 group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Enhanced Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Elements on Hover */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100" style={{transitionDelay: '0.2s'}}></div>
                
                {/* Sparkle Effect */}
                <Sparkles className="absolute top-2 sm:top-4 left-2 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping" />
              </div>
              
              {/* Decorative Border */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              {/* Image Badge */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 px-2 sm:px-4 py-1 sm:py-2 bg-white backdrop-blur-md rounded-full border border-primary/20 shadow-apple opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-xs text-primary font-medium">Floor Plan</span>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section - Mobile Responsive */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 sm:space-y-8">
              {/* Enhanced Paragraphs */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 cursor-pointer group">
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                    We are committed to providing a full range of services through Building lifecycle. 
                    BIM Design & Metaverse was established to help in advancement of Architecture, 
                    Engineering, Construction & Scan to BIM, Facility Management in a range of 
                    services and solutions. As professionals from the AEC Industry, we understand the 
                    difficulties and challenges involved.
                  </span>
                </p>

                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 cursor-pointer group">
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                    In today's digital world, your business is only as good as the technology you leverage. 
                    You need an agile tech infrastructure that empowers you to unleash the full potential 
                    of your business. We work with you, to build and adopt an entire BIM ecosystem that 
                    suits your business needs, so that you realise your vision of complete digital transformation!
                  </span>
                </p>
              </div>

              {/* Interactive Stats Section - Mobile Responsive */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 py-4 sm:py-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index}
                      className="text-center p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/50 hover:scale-105 transition-all duration-300 cursor-pointer group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center space-x-1">
                        <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        <span>{stat.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Enhanced Why Choose Us Section - Mobile Responsive */}
              <div className="mt-8 sm:mt-12">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-foreground tracking-tight flex items-center space-x-2 sm:space-x-3">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  <span>Why Choose Us?</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Features Column */}
                  <div className="space-y-3 sm:space-y-4">
                    {features.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div 
                          key={index}
                          className="group cursor-pointer"
                          onMouseEnter={() => setHoveredFeature(index)}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <div className="flex items-start space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-white/50 transition-all duration-300">
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-apple`}>
                              <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-sm sm:text-base text-foreground group-hover:text-primary transition-colors duration-300">
                                {feature.text}
                              </div>
                              {hoveredFeature === index && (
                                <div className="text-xs sm:text-sm text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  {feature.description}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Achievements Column */}
                  <div className="space-y-3 sm:space-y-4">
                    {achievements.map((achievement, index) => {
                      const IconComponent = achievement.icon;
                      return (
                        <div 
                          key={index}
                          className="group cursor-pointer"
                          onMouseEnter={() => setHoveredFeature(index + 4)}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <div className="flex items-start space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-white/50 transition-all duration-300">
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-apple`}>
                              <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-sm sm:text-base text-foreground group-hover:text-primary transition-colors duration-300">
                                {achievement.text}
                              </div>
                              {hoveredFeature === index + 4 && (
                                <div className="text-xs sm:text-sm text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  {achievement.description}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Section - Mobile Responsive */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200/50">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-primary-glow text-white rounded-lg sm:rounded-xl hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-lg font-medium">
                    <span>Learn More About Us</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-primary/30 text-primary rounded-lg sm:rounded-xl hover:bg-primary/10 transition-all duration-300 font-medium">
                    <span>View Our Portfolio</span>
                    <Building2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;