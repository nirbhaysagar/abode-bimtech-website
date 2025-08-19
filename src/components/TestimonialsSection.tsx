import { Star, Quote, Award, Users, Globe, TrendingUp, ArrowRight, CheckCircle, Building2, FileText, Scan, MapPin, Clock, MessageCircle, Heart, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      name: "Jonathan Camards",
      company: "Senior Architect",
      location: "New York, USA",
      rating: 5,
      text: "ABODE BIMTECH has grown to be one of our most trusted & reliable Partner. Their Team is very responsive & professional & always try to deliver projects before deadline.",
      longText: "Working with ABODE BIMTECH has transformed our architectural workflow. Their BIM expertise and attention to detail have consistently exceeded our expectations. They've become an integral part of our design process.",
      avatar: "JC",
      project: "Commercial Complex",
      duration: "6 months",
      budget: "$500K",
      services: ["BIM Modeling", "3D Visualization", "Construction Docs"],
      benefits: ["30% faster delivery", "Enhanced collaboration", "Cost savings"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      icon: Building2,
      verified: true,
      responseTime: "< 2 hours",
      satisfaction: "98%"
    },
    {
      name: "Mike Krezdorn",
      company: "Principal Architect", 
      location: "Miami, Florida",
      rating: 5,
      text: "We are always impressed with their Design Team and their reasonable prices and most of all, their patience in revising design until completion to customers satisfaction.",
      longText: "The ABODE BIMTECH team's dedication to quality and customer satisfaction is unmatched. Their iterative approach ensures we get exactly what we need, and their pricing is always competitive.",
      avatar: "MK",
      project: "Residential Tower",
      duration: "8 months",
      budget: "$750K",
      services: ["Interior Design", "3D Rendering", "Material Selection"],
      benefits: ["Design excellence", "Client satisfaction", "Timely delivery"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      icon: Users,
      verified: true,
      responseTime: "< 4 hours",
      satisfaction: "100%"
    },
    {
      name: "Boyega Ajayi",
      company: "Founder & CEO",
      location: "Boston, Massachusetts",
      rating: 5,
      text: "In Scan to BIM & Pointcloud services, submitting proposals in a timely & cost effective manner is key and ABODE BIMTECH has been a key partner in supporting our business development activities.",
      longText: "ABODE BIMTECH's expertise in Scan to BIM services has been crucial for our business development. Their quick turnaround times and cost-effective solutions have helped us win multiple projects.",
      avatar: "BA",
      project: "Industrial Facility",
      duration: "4 months",
      budget: "$300K",
      services: ["Scan to BIM", "Point Cloud Processing", "As-Built Modeling"],
      benefits: ["Faster proposals", "Cost efficiency", "Business growth"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      icon: Scan,
      verified: true,
      responseTime: "< 1 hour",
      satisfaction: "95%"
    },
    {
      name: "Sarah Mitchell",
      company: "Senior Project Manager",
      location: "Los Angeles, California",
      rating: 5,
      text: "The ABODE BIMTECH Team has been great to work with. We have trusted them with hundreds of our key design and find them to be extremely reliable, communicative to making partnership.",
      longText: "Over the years, ABODE BIMTECH has become our go-to partner for all BIM needs. Their reliability, communication, and quality have made them an essential part of our project success.",
      avatar: "SM",
      project: "Healthcare Complex",
      duration: "12 months",
      budget: "$1.2M",
      services: ["BIM Coordination", "MEP Modeling", "Clash Detection"],
      benefits: ["Project success", "Team reliability", "Long-term partnership"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      icon: Shield,
      verified: true,
      responseTime: "< 3 hours",
      satisfaction: "99%"
    },
    {
      name: "David Chen",
      company: "Senior Structural Engineer",
      location: "Houston, Texas",
      rating: 5,
      text: "They are best in making scan to BIM LOD 500 projects in Built & As built designs. They require minimal inputs & work with Pointcloud / Lidar / Matterport services efficiently.",
      longText: "ABODE BIMTECH's expertise in LOD 500 projects is exceptional. Their ability to work with minimal input while delivering high-quality results has made them our preferred partner for complex projects.",
      avatar: "DC",
      project: "Heritage Building",
      duration: "5 months",
      budget: "$400K",
      services: ["LOD 500 Modeling", "Heritage Documentation", "Structural Analysis"],
      benefits: ["Minimal input required", "High quality output", "Efficient workflow"],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      icon: Building2,
      verified: true,
      responseTime: "< 2 hours",
      satisfaction: "97%"
    },
    {
      name: "James Thompson",
      company: "Director of Operations",
      location: "New York, NY",
      rating: 5,
      text: "Their quick response, quality of service, make ABODE BIMTECH our BIM partner of choice. Professional team with excellent technical capabilities.",
      longText: "ABODE BIMTECH's combination of quick response times and exceptional quality makes them our preferred BIM partner. Their technical capabilities consistently meet our high standards.",
      avatar: "JT",
      project: "Mixed-Use Development",
      duration: "10 months",
      budget: "$900K",
      services: ["BIM Management", "Coordination", "Documentation"],
      benefits: ["Quick response", "Quality service", "Technical excellence"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      icon: FileText,
      verified: true,
      responseTime: "< 1 hour",
      satisfaction: "100%"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "< 2hrs", label: "Response Time", icon: Clock },
    { number: "Global", label: "Client Base", icon: Globe }
  ];

  const ratingStats = [
    { rating: 5, count: 156, percentage: 85 },
    { rating: 4, count: 23, percentage: 12 }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-secondary/30 via-background to-secondary/20 relative overflow-hidden">
      {/* Enhanced Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-2xl sm:blur-3xl animate-float parallax"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-secondary/5 rounded-full blur-2xl sm:blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-accent/5 rounded-full blur-2xl sm:blur-3xl animate-float parallax" style={{animationDelay: '4s'}}></div>
        
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
            <span className="text-primary font-medium tracking-wide text-sm sm:text-base">CLIENT FEEDBACK</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 tracking-tight text-foreground">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              WHAT OUR CLIENTS SAY
            </span>
          </h2>
          
          <div className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 sm:mb-8 rounded-full hover:w-20 sm:hover:w-24 lg:hover:w-32 transition-all duration-500"></div>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto font-light tracking-wide leading-relaxed px-4 sm:px-6">
            Discover why leading architects, engineers, and developers choose ABODE BIMTECH as their trusted BIM partner
          </p>

          {/* Interactive Stats Bar - Mobile Responsive */}
          <div className="grid grid-cols-2 lg:flex lg:justify-center lg:items-center gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12 max-w-2xl lg:max-w-none mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="text-2xl sm:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-1">
                    <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    <span className="text-center">{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rating Distribution Section - Modern Circular Design */}
        <div className="max-w-5xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Client Satisfaction Overview</h3>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Our commitment to excellence reflected in every review
            </p>
          </div>
          
          {/* Modern Rating Cards Grid */}
          <div className="flex justify-center items-center gap-8 sm:gap-12 lg:gap-16">
            {ratingStats.map((ratingStat, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                  {/* Circular Progress Ring */}
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      {/* Background Circle */}
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-200"
                      />
                      {/* Progress Circle */}
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray={`${ratingStat.percentage}, 100`}
                        className="text-primary transition-all duration-1000 ease-out"
                      />
                    </svg>
                    
                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-lg sm:text-xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                        {ratingStat.percentage}%
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                          i < ratingStat.rating 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  
                  {/* Rating Label */}
                  <div className="text-center">
                    <div className="text-sm sm:text-base font-semibold text-foreground mb-1">
                      {ratingStat.rating === 5 ? 'Excellent' : 
                       ratingStat.rating === 4 ? 'Very Good' : 
                       ratingStat.rating === 3 ? 'Good' : 
                       ratingStat.rating === 2 ? 'Fair' : 'Poor'}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {ratingStat.count} reviews
                    </div>
                  </div>
                  
                  {/* Hover Effect Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Overall Rating Summary */}
          <div className="mt-10 sm:mt-12 text-center">
            <div className="inline-flex items-center space-x-4 p-4 sm:p-6 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl border border-primary/20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm sm:text-base font-medium text-primary">Overall Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg sm:text-xl font-bold text-primary">4.9</span>
                <span className="text-sm text-muted-foreground">/ 5.0</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Based on <span className="font-semibold text-foreground">179</span> reviews
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Testimonials Grid - Horizontal Scrollable on Mobile */}
        <div className="lg:max-w-7xl lg:mx-auto">
          {/* Mobile: Horizontal Scrollable */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
            <div className="flex space-x-6 min-w-max">
              {testimonials.map((testimonial, index) => {
                const IconComponent = testimonial.icon;
                
                return (
                  <div 
                    key={index}
                    className="group relative cursor-pointer flex-shrink-0"
                    style={{ width: '320px' }}
                  >
                    {/* Enhanced Testimonial Card - Modern Design */}
                    <div className={`group relative cursor-pointer`}>
                      <div className={`bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-apple hover:shadow-glow-xl transition-all duration-500 hover:transform hover:scale-[1.02] apple-fade-in border border-white/10 hover:border-primary/30 overflow-hidden relative`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* Gradient Background Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgColor} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                        
                        {/* Decorative Corner Elements */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-all duration-500" style={{transitionDelay: '0.2s'}}></div>
                        
                        {/* Enhanced Header with Modern Layout */}
                        <div className="relative z-10 flex items-start space-x-4 mb-6">
                          <div className={`relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-all duration-300`}>
                            {testimonial.avatar}
                            {/* Verified Badge */}
                            {testimonial.verified && (
                              <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-bold text-card-foreground text-lg sm:text-xl group-hover:text-primary transition-colors duration-300 truncate">
                                {testimonial.name}
                              </h4>
                            </div>
                            <p className="text-sm sm:text-base text-primary font-medium mb-1 group-hover:text-primary/80 transition-colors duration-300">
                              {testimonial.company}
                            </p>
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">{testimonial.location}</span>
                            </div>
                          </div>
                          
                          {/* Rating Stars - Top Right */}
                          <div className="flex flex-col items-end space-y-2">
                            <div className="flex items-center space-x-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 0.1}s`}} />
                              ))}
                            </div>
                            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                              {testimonial.rating}.0
                            </span>
                          </div>
                        </div>

                        {/* Quote Icon with Enhanced Design */}
                        <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-20 transition-all duration-500">
                          <div className="relative">
                            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                            <div className="absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-full blur-sm group-hover:blur-md transition-all duration-500"></div>
                          </div>
                        </div>

                        {/* Main Testimonial Text with Enhanced Typography */}
                        <div className="relative z-10 mb-6">
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 italic">
                            "{testimonial.text}"
                          </p>
                        </div>

                        {/* Enhanced Project Info Section */}
                        <div className="relative z-10 space-y-4">
                          {/* Project Details */}
                          <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                            <div className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg border border-white/10">
                              <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 truncate">
                                {testimonial.project}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg border border-white/10">
                              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                {testimonial.duration}
                              </span>
                            </div>
                          </div>
                          
                          {/* Services Tags with Enhanced Design */}
                          <div className="flex flex-wrap gap-2">
                            {testimonial.services.slice(0, 3).map((service, serviceIndex) => (
                              <span key={serviceIndex} className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full text-xs font-medium text-primary border border-primary/20 group-hover:border-primary/30 group-hover:bg-primary/15 transition-all duration-300">
                                {service}
                              </span>
                            ))}
                            {testimonial.services.length > 3 && (
                              <span className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-muted-foreground border border-white/10">
                                +{testimonial.services.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Enhanced CTA Button */}
                        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                          <button className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm rounded-xl border border-primary/30 text-sm font-medium text-primary hover:from-primary hover:to-primary hover:text-white transition-all duration-300 hover:shadow-glow">
                            <span>View Full Review</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>

                        {/* Floating Decorative Elements */}
                        <div className="absolute top-4 left-4 w-2 h-2 bg-gradient-to-r from-primary/60 to-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                        <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-gradient-to-r from-secondary/60 to-secondary/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Desktop: Horizontal Row Layout */}
          <div className="hidden lg:flex lg:space-x-8 lg:overflow-x-auto lg:scrollbar-hide lg:pb-4">
            {testimonials.map((testimonial, index) => {
              const IconComponent = testimonial.icon;
              
              return (
                <div 
                  key={index}
                  className="group relative cursor-pointer flex-shrink-0"
                  style={{ width: '380px' }}
                >
                  {/* Enhanced Testimonial Card - Modern Design */}
                  <div className={`group relative cursor-pointer`}>
                    <div className={`bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-apple hover:shadow-glow-xl transition-all duration-500 hover:transform hover:scale-[1.02] apple-fade-in border border-white/10 hover:border-primary/30 overflow-hidden relative`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Gradient Background Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgColor} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                      
                      {/* Decorative Corner Elements */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-all duration-500" style={{transitionDelay: '0.2s'}}></div>
                      
                      {/* Enhanced Header with Modern Layout */}
                      <div className="relative z-10 flex items-start space-x-4 mb-6">
                        <div className={`relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-all duration-300`}>
                          {testimonial.avatar}
                          {/* Verified Badge */}
                          {testimonial.verified && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-bold text-card-foreground text-lg sm:text-xl group-hover:text-primary transition-colors duration-300 truncate">
                              {testimonial.name}
                            </h4>
                          </div>
                          <p className="text-sm sm:text-base text-primary font-medium mb-1 group-hover:text-primary/80 transition-colors duration-300">
                            {testimonial.company}
                          </p>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{testimonial.location}</span>
                          </div>
                        </div>
                        
                        {/* Rating Stars - Top Right */}
                        <div className="flex flex-col items-end space-y-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 0.1}s`}} />
                            ))}
                          </div>
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {testimonial.rating}.0
                          </span>
                        </div>
                      </div>

                      {/* Quote Icon with Enhanced Design */}
                      <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-20 transition-all duration-500">
                        <div className="relative">
                          <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                          <div className="absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-full blur-sm group-hover:blur-md transition-all duration-500"></div>
                        </div>
                      </div>

                      {/* Main Testimonial Text with Enhanced Typography */}
                      <div className="relative z-10 mb-6">
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 italic">
                          "{testimonial.text}"
                        </p>
                      </div>

                      {/* Enhanced Project Info Section */}
                      <div className="relative z-10 space-y-4">
                        {/* Project Details */}
                        <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                          <div className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg border border-white/10">
                            <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 truncate">
                              {testimonial.project}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg border border-white/10">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              {testimonial.duration}
                            </span>
                          </div>
                        </div>
                        
                        {/* Services Tags with Enhanced Design */}
                        <div className="flex flex-wrap gap-2">
                          {testimonial.services.slice(0, 3).map((service, serviceIndex) => (
                            <span key={serviceIndex} className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full text-xs font-medium text-primary border border-primary/20 group-hover:border-primary/30 group-hover:bg-primary/15 transition-all duration-300">
                              {service}
                            </span>
                          ))}
                          {testimonial.services.length > 3 && (
                            <span className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-muted-foreground border border-white/10">
                              +{testimonial.services.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Enhanced CTA Button */}
                      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <button className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm rounded-xl border border-primary/30 text-sm font-medium text-primary hover:from-primary hover:to-primary hover:text-white transition-all duration-300 hover:shadow-glow">
                          <span>View Full Review</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>

                      {/* Floating Decorative Elements */}
                      <div className="absolute top-4 left-4 w-2 h-2 bg-gradient-to-r from-primary/60 to-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                      <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-gradient-to-r from-secondary/60 to-secondary/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced CTA Section - Modern Design */}
        <div className="text-center mt-20 sm:mt-24 lg:mt-28">
          <div className="inline-flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 backdrop-blur-sm rounded-2xl border border-primary/20 hover:border-primary/30 transition-all duration-300 cursor-pointer group mb-8 hover:scale-105 hover:shadow-glow">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full group-hover:animate-pulse"></div>
            <span className="text-primary font-semibold text-sm sm:text-base">Ready to join our satisfied clients?</span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full group-hover:animate-pulse"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
            <button className="group relative w-full sm:w-auto bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-glow hover:to-primary text-white px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-xl font-semibold overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Start Your Project</span>
              </div>
            </button>
            
            <button className="group relative w-full sm:w-auto border-2 border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 font-semibold overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>View More Reviews</span>
              </div>
            </button>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              Join <span className="font-semibold text-foreground">hundreds of satisfied clients</span> who trust ABODE BIMTECH with their BIM needs. 
              Experience the difference that professional expertise and dedicated service can make.
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-8 sm:mt-10">
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-green-500" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
              <Globe className="w-4 h-4 text-blue-500" />
              <span>Global Service</span>
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-orange-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;