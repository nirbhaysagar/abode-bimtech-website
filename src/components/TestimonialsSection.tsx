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
    { rating: 4, count: 23, percentage: 12 },
    { rating: 3, count: 4, percentage: 2 },
    { rating: 2, count: 1, percentage: 1 },
    { rating: 1, count: 0, percentage: 0 }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-32 bg-gradient-to-br from-secondary/30 via-background to-secondary/20 relative overflow-hidden">
      {/* Enhanced Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float parallax"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float parallax" style={{animationDelay: '4s'}}></div>
        
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
            <span className="text-primary font-medium tracking-wide">CLIENT FEEDBACK</span>
            <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight text-foreground">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              WHAT OUR CLIENTS SAY
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8 rounded-full hover:w-32 transition-all duration-500"></div>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light tracking-wide leading-relaxed">
            Discover why leading architects, engineers, and developers choose ABODE BIMTECH as their trusted BIM partner
          </p>

          {/* Interactive Stats Bar */}
          <div className="flex justify-center items-center space-x-8 mt-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
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
        </div>

        {/* Rating Distribution Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Client Satisfaction Ratings</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {ratingStats.map((ratingStat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(ratingStat.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  {ratingStat.percentage}%
                </div>
                <div className="text-sm text-muted-foreground">
                  {ratingStat.count} reviews
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${ratingStat.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            
            return (
              <div 
                key={index}
                className="group relative cursor-pointer"
              >
                {/* Enhanced Testimonial Card */}
                <div className={`bg-card rounded-3xl p-8 shadow-apple hover:shadow-glow transition-all duration-500 hover:transform hover:scale-105 apple-fade-in border border-gray-100 hover:border-primary/20 overflow-hidden relative`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 ${testimonial.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Enhanced Header */}
                  <div className="relative z-10 flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg mr-5 group-hover:scale-110 transition-transform duration-300 shadow-apple`}>
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-card-foreground text-lg group-hover:text-primary transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        {testimonial.verified && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {testimonial.company}
                      </p>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center mb-4 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 0.1}s`}} />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {testimonial.rating}.0
                    </span>
                  </div>

                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>

                  {/* Main Testimonial Text */}
                  <p className="text-muted-foreground italic leading-relaxed text-base mb-6 relative z-10 group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.text}"
                  </p>

                  {/* Simple Project Info - Always Visible */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span className="flex items-center space-x-1">
                        <IconComponent className="w-3 h-3" />
                        <span>{testimonial.project}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{testimonial.duration}</span>
                      </span>
                    </div>
                    
                    {/* Simple Services Tags */}
                    <div className="flex flex-wrap gap-1">
                      {testimonial.services.slice(0, 2).map((service, serviceIndex) => (
                        <span key={serviceIndex} className="px-2 py-1 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced CTA Button */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <button className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full border border-primary/30 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300">
                      <span>View Full Review</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-gradient-to-r from-primary/40 to-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-r from-primary/40 to-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" style={{transitionDelay: '0.2s'}}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-24">
          <div className="inline-flex items-center space-x-4 p-6 bg-primary/10 backdrop-blur-md rounded-2xl border border-primary/20 hover:scale-105 transition-transform duration-300 cursor-pointer group mb-8">
            <div className="w-3 h-3 bg-primary rounded-full group-hover:animate-pulse"></div>
            <span className="text-primary font-medium">Ready to join our satisfied clients?</span>
            <div className="w-3 h-3 bg-primary rounded-full group-hover:animate-pulse"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-lg font-medium">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Project
            </button>
            <button className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 font-medium">
              <Users className="w-5 h-5 mr-2" />
              View More Reviews
            </button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6 font-light">
            Join hundreds of satisfied clients who trust ABODE BIMTECH with their BIM needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;