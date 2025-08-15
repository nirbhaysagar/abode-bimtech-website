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
    <section ref={sectionRef} id="about" className="py-32 bg-gradient-to-br from-secondary/30 via-background to-secondary/20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 right-32 w-16 h-16 border border-primary/20 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-primary/30 transform rotate-12 animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Interactive Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 mb-8 hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
            <span className="text-primary font-medium tracking-wide">OUR STORY</span>
            <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight text-foreground">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              ABOUT US
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8 rounded-full hover:w-32 transition-all duration-500"></div>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light tracking-wide leading-relaxed">
            Pioneering the future of Building Information Modeling with innovative solutions and unmatched expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Enhanced Image Section */}
          <div className="order-2 lg:order-1 group">
            <div className="relative">
              {/* Main Image Container */}
              <div className="rounded-3xl h-96 w-96 mx-auto overflow-hidden shadow-apple hover:shadow-glow transition-all duration-500 hover:scale-105 relative">
                <img 
                  src="/aboutus.jpeg"
                  alt="About Us - BIM Design & Metaverse"
                  className="w-full h-full object-contain bg-gray-50 group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Enhanced Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Elements on Hover */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100" style={{transitionDelay: '0.2s'}}></div>
                
                {/* Sparkle Effect */}
                <Sparkles className="absolute top-4 left-4 w-6 h-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping" />
              </div>
              
              {/* Decorative Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              {/* Image Badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-white backdrop-blur-md rounded-full border border-primary/20 shadow-apple opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-xs text-primary font-medium">Floor Plan</span>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* Enhanced Paragraphs */}
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg hover:text-foreground transition-colors duration-300 cursor-pointer group">
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                    We are committed to providing a full range of services through Building lifecycle. 
                    BIM Design & Metaverse was established to help in advancement of Architecture, 
                    Engineering, Construction & Scan to BIM, Facility Management in a range of 
                    services and solutions. As professionals from the AEC Industry, we understand the 
                    difficulties and challenges involved.
                  </span>
                </p>

                <p className="text-muted-foreground leading-relaxed text-lg hover:text-foreground transition-colors duration-300 cursor-pointer group">
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                    In today's digital world, your business is only as good as the technology you leverage. 
                    You need an agile tech infrastructure that empowers you to unleash the full potential 
                    of your business. We work with you, to build and adopt an entire BIM ecosystem that 
                    suits your business needs, so that you realise your vision of complete digital transformation!
                  </span>
                </p>
              </div>

              {/* Interactive Stats Section */}
              <div className="grid grid-cols-2 gap-4 py-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index}
                      className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:scale-105 transition-all duration-300 cursor-pointer group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
                        <IconComponent className="w-4 h-4 text-primary" />
                        <span>{stat.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Enhanced Why Choose Us Section */}
              <div className="mt-12">
                <h3 className="text-3xl font-bold mb-8 text-foreground tracking-tight flex items-center space-x-3">
                  <Target className="w-8 h-8 text-primary" />
                  <span>Why Choose Us?</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Features Column */}
                  <div className="space-y-4">
                    {features.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div 
                          key={index}
                          className="group cursor-pointer"
                          onMouseEnter={() => setHoveredFeature(index)}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                            <div className={`w-8 h-8 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-apple`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                                {feature.text}
                              </div>
                              {hoveredFeature === index && (
                                <div className="text-sm text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => {
                      const IconComponent = achievement.icon;
                      return (
                        <div 
                          key={index}
                          className="group cursor-pointer"
                          onMouseEnter={() => setHoveredFeature(index + 4)}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                            <div className={`w-8 h-8 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-apple`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                                {achievement.text}
                              </div>
                              {hoveredFeature === index + 4 && (
                                <div className="text-sm text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

              {/* Enhanced CTA Section */}
              <div className="mt-12 pt-8 border-t border-gray-200/50">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-glow text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-lg font-medium">
                    <span>Learn More About Us</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="inline-flex items-center space-x-2 px-6 py-3 border border-primary/30 text-primary rounded-xl hover:bg-primary/10 transition-all duration-300 font-medium">
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