import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, HelpCircle, BookOpen, Clock, DollarSign, Users, Building2, FileText, Scan, Sparkles, Zap, Target, CheckCircle, ArrowRight, MessageCircle, Phone, Mail, MapPin, Globe, Award, TrendingUp, Star, Shield, Zap as ZapIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
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

  const faqs = [
    {
      question: "What are BIM Services?",
      answer: "BIM (Building Information Modeling) services involve creating digital representations of physical and functional characteristics of buildings. Our services include 3D modeling, clash detection, quantity takeoffs, and project coordination using advanced software like Revit, Navisworks, and AutoCAD.",
      category: "BIM Services",
      icon: Building2,
      tags: ["BIM", "3D Modeling", "Revit", "Navisworks"],
      relatedQuestions: ["Why is BIM important?", "What software do you use?"],
      estimatedTime: "2 min read",
      difficulty: "Beginner"
    },
    {
      question: "Why is BIM important?",
      answer: "BIM is crucial for modern construction projects as it improves collaboration, reduces errors, saves time and costs, enhances visualization, and provides better project management. It enables all stakeholders to work with accurate, up-to-date information throughout the project lifecycle.",
      category: "BIM Services",
      icon: Building2,
      tags: ["Importance", "Collaboration", "Cost Savings", "Efficiency"],
      relatedQuestions: ["What are BIM Services?", "How do we save your time?"],
      estimatedTime: "3 min read",
      difficulty: "Beginner"
    },
    {
      question: "How do we save your time?",
      answer: "We save your time by providing expert BIM professionals who work efficiently, use standardized processes, deliver projects faster with our streamlined workflows, and offer 24/7 support to meet tight deadlines. Our experienced team eliminates the learning curve typically associated with BIM implementation.",
      category: "Process & Efficiency",
      icon: Clock,
      tags: ["Time Saving", "Efficiency", "24/7 Support", "Expert Team"],
      relatedQuestions: ["How can we complete multiple projects?", "What makes you different?"],
      estimatedTime: "2 min read",
      difficulty: "Intermediate"
    },
    {
      question: "How can we complete multiple projects at the same time?",
      answer: "Our large team of skilled BIM professionals allows us to handle multiple projects simultaneously. We have dedicated project managers, use scalable resources, maintain quality control processes, and leverage our global workforce to ensure timely delivery across all projects.",
      category: "Process & Efficiency",
      icon: Users,
      tags: ["Multiple Projects", "Team Size", "Project Management", "Scalability"],
      relatedQuestions: ["How do we save your time?", "What's your team size?"],
      estimatedTime: "2 min read",
      difficulty: "Intermediate"
    },
    {
      question: "How do we benefit you with true cost reduction and shorter review cycles?",
      answer: "We reduce costs through efficient processes, competitive pricing, reduced rework due to clash detection, faster design iterations, and shorter review cycles. Our standardized workflows and quality control measures minimize errors and accelerate project completion, resulting in significant cost savings.",
      category: "Cost & Benefits",
      icon: DollarSign,
      tags: ["Cost Reduction", "Review Cycles", "Efficiency", "Quality Control"],
      relatedQuestions: ["What are your pricing models?", "How do you ensure quality?"],
      estimatedTime: "3 min read",
      difficulty: "Advanced"
    },
    {
      question: "What software and tools do you use?",
      answer: "We use industry-leading software including Autodesk Revit for BIM modeling, Navisworks for coordination and clash detection, AutoCAD for 2D drafting, Dynamo for automation, and various point cloud processing tools. Our team is certified in all major BIM platforms and stays updated with the latest technologies.",
      category: "Technology",
      icon: FileText,
      tags: ["Software", "Revit", "Navisworks", "AutoCAD", "Dynamo"],
      relatedQuestions: ["What are BIM Services?", "Are your team members certified?"],
      estimatedTime: "2 min read",
      difficulty: "Intermediate"
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity and scope. Small projects (single building) typically take 2-4 weeks, medium projects (complex structures) take 4-8 weeks, and large projects (campus developments) take 8-16 weeks. We always provide detailed timelines during project planning and keep you updated on progress.",
      category: "Project Management",
      icon: Clock,
      tags: ["Timeline", "Project Planning", "Progress Updates", "Complexity"],
      relatedQuestions: ["How do we save your time?", "Can you meet tight deadlines?"],
      estimatedTime: "2 min read",
      difficulty: "Beginner"
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Yes, we provide 24/7 support to ensure your projects never face delays. Our global team works across different time zones, and we have dedicated support staff available around the clock. You can reach us via phone, email, or our project management portal at any time.",
      category: "Support",
      icon: Shield,
      tags: ["24/7 Support", "Global Team", "Multiple Channels", "No Delays"],
      relatedQuestions: ["How do we save your time?", "What's your response time?"],
      estimatedTime: "1 min read",
      difficulty: "Beginner"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle, count: faqs.length },
    { id: 'bim', name: 'BIM Services', icon: Building2, count: faqs.filter(f => f.category.toLowerCase().includes('bim')).length },
    { id: 'process', name: 'Process & Efficiency', icon: Clock, count: faqs.filter(f => f.category.toLowerCase().includes('process')).length },
    { id: 'cost', name: 'Cost & Benefits', icon: DollarSign, count: faqs.filter(f => f.category.toLowerCase().includes('cost')).length },
    { id: 'technology', name: 'Technology', icon: FileText, count: faqs.filter(f => f.category.toLowerCase().includes('technology')).length },
    { id: 'support', name: 'Support', icon: Shield, count: faqs.filter(f => f.category.toLowerCase().includes('support')).length }
  ];

  const stats = [
    { number: "100+", label: "Questions Answered", icon: HelpCircle },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "< 2hrs", label: "Response Time", icon: MessageCircle },
    { number: "98%", label: "Satisfaction Rate", icon: Star }
  ];

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           faq.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  const handleAccordionChange = (value: string) => {
    if (value) {
      setExpandedItems(prev => [...prev, value]);
    }
  };

  return (
    <section ref={sectionRef} id="faq" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-secondary/30 via-background to-secondary/20 relative overflow-hidden">
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
            <span className="text-primary font-medium tracking-wide text-sm sm:text-base">HELP & SUPPORT</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 tracking-tight text-foreground">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </h2>
          
          <div className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 sm:mb-8 rounded-full hover:w-20 sm:hover:w-24 lg:hover:w-32 transition-all duration-500"></div>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto font-light tracking-wide leading-relaxed px-4 sm:px-6">
            Find answers to common questions about our BIM services, processes, and how we can help your projects succeed
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

        {/* Enhanced Search and Filter Section - Mobile Responsive */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Search Bar */}
          <div className="relative mb-6 sm:mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for questions, topics, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-white/50 backdrop-blur-md border border-gray-200/50 rounded-xl sm:rounded-2xl text-sm sm:text-base text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
            />
          </div>

          {/* Category Filter - Horizontal Scrollable on Mobile */}
          <div className="lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:gap-4">
            {/* Mobile: Horizontal Scrollable */}
            <div className="lg:hidden overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
              <div className="flex space-x-3 min-w-max">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  const isActive = selectedCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 flex-shrink-0 ${
                        isActive
                          ? 'bg-primary text-white border-primary shadow-glow'
                          : 'bg-white/50 text-muted-foreground border-gray-200 hover:bg-primary/10 hover:border-primary/30'
                      }`}
                    >
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-medium text-sm sm:text-base whitespace-nowrap">{category.name}</span>
                      <span className="text-xs bg-white/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">{category.count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Desktop: Flex Wrap */}
            <div className="hidden lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:gap-4">
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
          </div>
        </div>

        {/* Enhanced FAQ Accordion - Mobile Responsive */}
        <div className="max-w-5xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <Accordion type="multiple" className="space-y-4 sm:space-y-6" onValueChange={handleAccordionChange}>
              {filteredFaqs.map((faq, index) => {
                const IconComponent = faq.icon;
                return (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="group bg-card rounded-2xl sm:rounded-3xl border border-gray-100 shadow-apple hover:shadow-glow transition-all duration-500 hover:border-primary/20 overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left hover:no-underline transition-all duration-300 group-hover:bg-primary/5">
                      <div className="flex items-start space-x-3 sm:space-x-4 w-full">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <div className="flex-1 text-left min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2 space-y-2 sm:space-y-0">
                            <span className="text-base sm:text-lg lg:text-xl font-semibold text-card-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                              {faq.question}
                            </span>
                            <span className="px-2 py-1 bg-primary/10 rounded-full text-xs text-primary border border-primary/20 w-fit">
                              {faq.difficulty}
                            </span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-muted-foreground">
                            <span className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{faq.estimatedTime}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <BookOpen className="w-3 h-3" />
                              <span>{faq.category}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
                      <div className="space-y-4 sm:space-y-6">
                        {/* Main Answer */}
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {faq.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 sm:px-3 py-1 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Related Questions */}
                        <div className="pt-3 sm:pt-4 border-t border-gray-200/50">
                          <h4 className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide mb-2 sm:mb-3">Related Questions</h4>
                          <div className="space-y-1 sm:space-y-2">
                            {faq.relatedQuestions.map((relatedQ, qIndex) => (
                              <div key={qIndex} className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                                <ArrowRight className="w-3 h-3" />
                                <span>{relatedQ}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <HelpCircle className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">No questions found</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>

        {/* Enhanced CTA Section - Mobile Responsive */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="inline-flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-primary/10 backdrop-blur-md rounded-2xl border border-primary/20 hover:scale-105 transition-transform duration-300 cursor-pointer group mb-6 sm:mb-8">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full group-hover:animate-pulse"></div>
            <span className="text-primary font-medium text-sm sm:text-base">Still have questions?</span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full group-hover:animate-pulse"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
            <button className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-lg font-medium">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Contact Support
            </button>
            <button className="w-full sm:w-auto border-primary/30 text-primary hover:bg-primary/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-105 transition-all duration-300 font-medium">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call Us Now
            </button>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              Can't find what you're looking for? Our expert team is here to help with any BIM-related questions or concerns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;