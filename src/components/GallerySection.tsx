import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download, Eye, Filter, Sparkles, Zap, Target, CheckCircle, Building2, FileText, Scan, Users, Star, Globe, Award, TrendingUp, Calendar, MapPin, Users as UsersIcon, Clock, DollarSign } from "lucide-react";

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
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

  // Filter projects based on selected category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category.toLowerCase().includes(selectedCategory.toLowerCase())));
    }
  }, [selectedCategory]);

  const projects = [
    {
      title: "BIM",
      category: "Building Information Modeling",
      size: "large",
      image: "/BIM.jpeg",
      description: "Advanced BIM modeling with comprehensive building information management",
      longDescription: "Complete Building Information Modeling solution featuring detailed 3D models, construction documentation, and intelligent building systems integration.",
      features: ["3D Modeling", "Construction Docs", "System Integration", "Quality Assurance"],
      benefits: ["Reduced construction time", "Enhanced collaboration", "Cost savings"],
      stats: { duration: "6 weeks", team: "8 members", budget: "$50K", complexity: "High" },
      technologies: ["Revit", "Navisworks", "BIM 360"],
      client: "Commercial Developer",
      location: "New York, NY",
      year: "2024",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      icon: Building2
    },
    {
      title: "3D Model Revit",
      category: "3D Modeling & Visualization",
      size: "large",
      image: "/3D-Model-Revit-FabLab.jpeg",
      description: "Advanced Revit modeling with detailed industrial facility design and automation systems",
      longDescription: "Comprehensive 3D Revit model of an advanced manufacturing facility featuring automated production lines, robotic systems, and smart building technologies.",
      features: ["Industrial Design", "Automation Systems", "Smart Building", "Production Planning"],
      benefits: ["Optimized workflow", "Increased efficiency", "Future-ready design"],
      stats: { duration: "8 weeks", team: "12 members", budget: "$75K", complexity: "Expert" },
      technologies: ["Revit", "Dynamo", "Fabrication"],
      client: "Manufacturing Corp",
      location: "Detroit, MI",
      year: "2024",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      icon: Building2
    },
    {
      title: "CAD and Revit Drafting",
      category: "CAD & Drafting Services",
      size: "large",
      image: "/CAD.jpeg",
      description: "Professional CAD and Revit drafting services for architectural and engineering projects",
      longDescription: "Professional technical documentation and detailed drawings for complex architectural and engineering projects with industry-standard precision and quality.",
      features: ["Technical Drawings", "Detail Libraries", "Standards Compliance", "Quality Control"],
      benefits: ["Industry standards", "Comprehensive documentation", "Quality assurance"],
      stats: { duration: "4 weeks", team: "6 members", budget: "$30K", complexity: "Medium" },
      technologies: ["AutoCAD", "Revit", "Bluebeam"],
      client: "Architecture Firm",
      location: "Los Angeles, CA",
      year: "2024",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      icon: FileText
    },
    {
      title: "Interior Design",
      category: "Interior Design & Visualization",
      size: "large",
      image: "/interior.jpeg",
      description: "Professional interior design and 3D visualization services for residential and commercial spaces",
      longDescription: "Complete interior design solution with photorealistic 3D visualizations, material specifications, and detailed furniture layouts for modern living and working spaces.",
      features: ["Interior Design", "3D Visualization", "Material Selection", "Furniture Layout"],
      benefits: ["Visual clarity", "Material efficiency", "Space optimization"],
      stats: { duration: "5 weeks", team: "4 members", budget: "$25K", complexity: "Medium" },
      technologies: ["3ds Max", "V-Ray", "SketchUp"],
      client: "Residential Developer",
      location: "Miami, FL",
      year: "2024",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      icon: Users
    },
    {
      title: "Scan to BIM",
      category: "3D Scanning & BIM",
      size: "large",
      image: "/ScantoBim.jpeg",
      description: "Advanced 3D scanning and point cloud to BIM conversion services for existing buildings",
      longDescription: "Transform existing structures into intelligent 3D models using advanced laser scanning technology with comprehensive point cloud processing and BIM model generation.",
      features: ["3D Scanning", "Point Cloud Processing", "BIM Conversion", "Clash Detection"],
      benefits: ["Accurate documentation", "Reduced site visits", "Faster planning"],
      stats: { duration: "7 weeks", team: "10 members", budget: "$60K", complexity: "High" },
      technologies: ["Faro Scanner", "ReCap", "Revit"],
      client: "Heritage Foundation",
      location: "Boston, MA",
      year: "2024",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      icon: Scan
    },
    {
      title: "Other",
      category: "Additional Services",
      size: "large",
      image: "/Other.jpeg",
      description: "Comprehensive BIM and design services for various project types",
      longDescription: "Specialized BIM and design services tailored to unique project requirements including custom solutions, specialized modeling, and innovative design approaches.",
      features: ["Custom Solutions", "Specialized Modeling", "Innovation", "Flexibility"],
      benefits: ["Tailored approach", "Innovative solutions", "Adaptable services"],
      stats: { duration: "Variable", team: "Variable", budget: "Custom", complexity: "Variable" },
      technologies: ["Multiple Platforms", "Custom Tools", "Industry Specific"],
      client: "Various Clients",
      location: "Global",
      year: "2024",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      icon: Star
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Target, count: projects.length },
    { id: 'bim', name: 'BIM Services', icon: Building2, count: projects.filter(p => p.category.toLowerCase().includes('bim')).length },
    { id: '3d', name: '3D Modeling', icon: Building2, count: projects.filter(p => p.category.toLowerCase().includes('3d')).length },
    { id: 'cad', name: 'CAD Services', icon: FileText, count: projects.filter(p => p.category.toLowerCase().includes('cad')).length },
    { id: 'interior', name: 'Interior Design', icon: Users, count: projects.filter(p => p.category.toLowerCase().includes('interior')).length },
    { id: 'scanning', name: 'Scanning', icon: Scan, count: projects.filter(p => p.category.toLowerCase().includes('scan')).length }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", icon: Award },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Clock },
    { number: "Global", label: "Delivery", icon: Globe }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2 h-96 min-h-[384px]";
      case "medium":
        return "col-span-1 row-span-2 h-96 min-h-[384px]";
      case "wide":
        return "col-span-3 row-span-1 h-48 min-h-[192px]";
      case "tall":
        return "col-span-1 row-span-2 h-96 min-h-[384px]";
      case "square":
        return "col-span-1 row-span-1 h-48 min-h-[192px]";
      default:
        return "col-span-1 row-span-1 h-44 min-h-[176px]";
    }
  };

  return (
    <section ref={sectionRef} id="gallery" className="py-32 relative overflow-hidden" style={{ background: 'var(--section-gradient)' }}>
      {/* Enhanced Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float parallax"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float parallax" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-float parallax" style={{animationDelay: '4s'}}></div>
        
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
            <span className="text-primary font-medium tracking-wide">OUR PORTFOLIO</span>
            <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight text-foreground">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              PROJECT GALLERY
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8 rounded-full hover:w-32 transition-all duration-500"></div>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light tracking-wide leading-relaxed">
            Explore our comprehensive portfolio of successful BIM projects across various industries
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

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-glow'
                    : 'bg-white/50 text-muted-foreground border-gray-200 hover:bg-primary/10 hover:border-primary/30'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
              </button>
            );
          })}
        </div>

        {/* Enhanced Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 auto-rows-min max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            const isHovered = hoveredProject === index;
            
            return (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-3xl shadow-apple hover:shadow-glow transition-all duration-500 cursor-pointer hover:transform hover:scale-[1.02] apple-fade-in ${getSizeClasses(project.size)}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {project.image ? (
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain bg-gray-50 group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Enhanced Hover Overlay with Progressive Disclosure */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {/* Floating Particles */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      <div className="absolute top-1/2 right-2 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                      
                      {/* Sparkle Effect on Hover */}
                      {isHovered && (
                        <>
                          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-ping" />
                          <Zap className="absolute -bottom-2 -left-2 w-5 h-5 text-blue-300 animate-pulse" />
                        </>
                      )}
                      
                      <div className="absolute inset-0 flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="text-center px-6">
                          {/* Project Title and Category */}
                          <h3 className="font-bold text-2xl mb-3 tracking-tight group-hover:text-blue-200 transition-colors duration-300">{project.title}</h3>
                          <p className="text-sm text-white/80 font-light mb-3 group-hover:text-blue-100 transition-colors duration-300">{project.category}</p>
                          
                          {/* Project Stats on Hover */}
                          {isHovered && (
                            <div className="grid grid-cols-2 gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100">
                              {Object.entries(project.stats).map(([key, value], statIndex) => (
                                <div key={key} className="text-center p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                                  <div className="text-xs font-bold text-blue-200">{value}</div>
                                  <div className="text-xs text-white/60 capitalize">{key}</div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {/* Features List with Enhanced Animation */}
                          <div className="space-y-1 mb-4">
                            <h4 className="text-xs font-semibold text-blue-200 uppercase tracking-wide mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Key Features
                            </h4>
                            {project.features.slice(0, 2).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2 text-xs text-white/70 group-hover:text-white transition-colors duration-300">
                                <CheckCircle className="w-3 h-3 text-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300" style={{transitionDelay: `${featureIndex * 0.1}s`}}>
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Technologies Used */}
                          <div className="mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0" style={{transitionDelay: '0.3s'}}>
                            <div className="text-xs text-white/60 mb-2">Technologies:</div>
                            <div className="flex flex-wrap justify-center gap-1">
                              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                <span key={techIndex} className="px-2 py-1 bg-white/20 rounded-full text-xs text-white/80">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Project Details */}
                          <div className="mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0" style={{transitionDelay: '0.4s'}}>
                            <div className="flex items-center justify-center space-x-4 text-xs text-white/70">
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-3 h-3" />
                                <span>{project.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{project.year}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Enhanced CTA Buttons */}
                          <div className="flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{transitionDelay: '0.5s'}}>
                            <button className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-sm font-medium hover:bg-white/30 transition-all duration-300">
                              <Eye className="w-4 h-4" />
                              <span>View Details</span>
                            </button>
                            <button className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-primary/80 backdrop-blur-md rounded-full border border-primary/30 text-sm font-medium hover:bg-primary text-white transition-all duration-300">
                              <ArrowRight className="w-4 h-4" />
                              <span>Get Quote</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Project Badge */}
                      <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                        <span className="text-xs text-white font-medium flex items-center space-x-1">
                          <IconComponent className="w-3 h-3" />
                          <span>{project.category.split(' ')[0]}</span>
                        </span>
                      </div>
                      
                      {/* Client Badge */}
                      <div className="absolute top-3 right-3 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                        <span className="text-xs text-white font-medium">{project.client}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-primary/30 glass bg-gray-50">
                    <div className="text-center p-6 w-full h-full flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <div className="w-8 h-8 bg-primary/20 rounded"></div>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">Image Placeholder</p>
                      <p className="text-xs text-muted-foreground/70 mt-1">{project.size}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-24">
          <div className="inline-flex items-center space-x-4 p-6 bg-primary/10 backdrop-blur-md rounded-2xl border border-primary/20 hover:scale-105 transition-transform duration-300 cursor-pointer group mb-8">
            <div className="w-3 h-3 bg-primary rounded-full group-hover:animate-pulse"></div>
            <span className="text-primary font-medium">Ready to start your project?</span>
            <div className="w-3 h-3 bg-primary rounded-full group-hover:animate-pulse"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-lg font-medium">
              <Eye className="w-5 h-5 mr-2" />
              View All Projects
            </button>
            <button className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 font-medium">
              <Download className="w-5 h-5 mr-2" />
              Download Portfolio
            </button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6 font-light">
            Get in touch to discuss your next BIM project
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;