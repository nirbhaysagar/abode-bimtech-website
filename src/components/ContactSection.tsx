import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Globe, Users, Award, Building2, FileText, Scan, ArrowRight, Sparkles, Zap, Target, CheckCircle, MessageCircle, Send, Download, Linkedin, Twitter, Facebook, Instagram, Youtube, Map, Calendar, Shield, Zap as ZapIcon, Star, Heart, TrendingUp, MessageSquare, Headphones, Zap as ZapIcon2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content: "KAILASH VIHAR DAYALBAGH AGRA-5",
      description: "Located in the heart of Agra, easily accessible for meetings and consultations",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+91 6396594184",
      description: "Available 24/7 for urgent project discussions and support",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "abodebimtech@gmail.com",
      description: "Get detailed quotes and project specifications via email",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "24/7 Support Available",
      description: "Round-the-clock service to meet your project deadlines",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about", icon: Users },
    { name: "Services", href: "#services", icon: Building2 },
    { name: "Products", href: "#products", icon: FileText },
    { name: "Gallery", href: "#gallery", icon: Scan },
    { name: "Testimonials", href: "#testimonials", icon: Star },
    { name: "FAQ", href: "#faq", icon: MessageSquare }
  ];

  const services = [
    "BIM Modeling",
    "3D Visualization",
    "Scan to BIM",
    "Clash Detection",
    "Revit Services",
    "CAD Drafting",
    "Point Cloud Processing",
    "Construction Documentation"
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "from-blue-600 to-blue-700" },
    { name: "Twitter", icon: Twitter, href: "#", color: "from-sky-500 to-sky-600" },
    { name: "Facebook", icon: Facebook, href: "#", color: "from-blue-600 to-blue-700" },
    { name: "Instagram", icon: Instagram, href: "#", color: "from-pink-500 to-pink-600" },
    { name: "YouTube", icon: Youtube, href: "#", color: "from-red-500 to-red-600" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "50+", label: "Happy Clients", icon: Heart },
    { number: "5+", label: "Years Experience", icon: Clock },
    { number: "24/7", label: "Support Available", icon: Shield }
  ];

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-white/80 max-w-2xl">
                Ready to transform your BIM projects? Let's discuss how we can help you achieve excellence in your architectural and construction endeavors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>

              {submitSuccess && (
                <div className="bg-green-500/20 border border-green-500/40 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-green-300 text-sm mt-1">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Office Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
              <div className="relative z-10 text-center">
                <img 
                  src="/footer.jpeg"
                  alt="Abode Bimtech Office"
                  className="w-full h-full object-contain bg-gray-50 group-hover:scale-110 transition-transform duration-700 rounded-2xl"
                />
                <h3 className="text-3xl font-bold text-white mb-4 mt-6">
                  Our Office in Agra
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Visit our state-of-the-art facility where innovation meets expertise. Experience our BIM solutions firsthand.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Enhanced Footer */}
        <div className="border-t border-white/10 relative m-0 p-0 -mb-20">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          <div className="relative z-10">
            {/* Main Footer Content - Enhanced Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-0">
              {/* Left Section - Contact Info */}
              <div className="lg:col-span-5 space-y-10">
                <div className="space-y-8">
                  <h3 className="text-4xl font-light text-white/90 tracking-wider">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-5 group cursor-pointer">
                      <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 border border-white/5 group-hover:border-white/10">
                        <Phone className="w-7 h-7 text-white/70" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm uppercase tracking-widest font-medium">Phone</p>
                        <p className="text-white text-2xl font-medium">+91 6396594184</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-5 group cursor-pointer">
                      <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 border border-white/5 group-hover:border-white/10">
                        <Mail className="w-7 h-7 text-white/70" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm uppercase tracking-widest font-medium">Email</p>
                        <p className="text-white text-2xl font-medium">abodebimtech@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-5 group cursor-pointer">
                      <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 border border-white/5 group-hover:border-white/10">
                        <MapPin className="w-7 h-7 text-white/70" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm uppercase tracking-widest font-medium">Address</p>
                        <p className="text-white text-2xl font-medium">KAILASH VIHAR</p>
                        <p className="text-white text-2xl font-medium">DAYALBAGH AGRA-5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Section - Quick Actions */}
              <div className="lg:col-span-3 space-y-8">
                <h3 className="text-3xl font-light text-white/90 tracking-wide">Quick Actions</h3>
                <div className="space-y-4">
                  <button className="w-full text-left py-4 px-5 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group border border-white/5 hover:border-white/10 hover:scale-105">
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-lg font-medium">Get Quote</span>
                  </button>
                  <button className="w-full text-left py-4 px-5 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group border border-white/5 hover:border-white/10 hover:scale-105">
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-lg font-medium">Book Consultation</span>
                  </button>
                  <button className="w-full text-left py-4 px-5 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group border border-white/5 hover:border-white/10 hover:scale-105">
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-lg font-medium">View Portfolio</span>
                  </button>
                </div>
              </div>

              {/* Right Section - Social & Stats */}
              <div className="lg:col-span-4 space-y-8">
                <h3 className="text-3xl font-light text-white/90 tracking-wide">Connect</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, bg: 'bg-blue-600/20', hover: 'hover:bg-blue-600/30', border: 'border-blue-500/20' },
                    { icon: Twitter, bg: 'bg-sky-500/20', hover: 'hover:bg-sky-500/30', border: 'border-sky-500/20' },
                    { icon: Facebook, bg: 'bg-blue-700/20', hover: 'hover:bg-blue-700/30', border: 'border-blue-700/20' },
                    { icon: Instagram, bg: 'bg-pink-500/20', hover: 'hover:bg-pink-500/30', border: 'border-pink-500/20' }
                  ].map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href="#"
                        className={`w-14 h-14 ${social.bg} ${social.hover} ${social.border} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border hover:shadow-lg`}
                      >
                        <IconComponent className="w-6 h-6 text-white/80" />
                      </a>
                    );
                  })}
                </div>
                
                <div className="pt-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 hover:scale-105">
                      <p className="text-3xl font-bold text-white mb-2">500+</p>
                      <p className="text-white/60 text-sm uppercase tracking-wider font-medium">Projects</p>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 hover:scale-105">
                      <p className="text-2xl font-bold text-white mb-2">50+</p>
                      <p className="text-white/60 text-sm uppercase tracking-wider font-medium">Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Bottom Section */}
            <div className="relative">
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="pt-10 text-center">
                <p className="text-white/50 text-base font-light">
                  © 2024 Abode Bimtech. All rights reserved.
                </p>
                <p className="text-white/30 text-sm mt-2 font-light">
                  Transforming BIM Services Worldwide
                </p>
              </div>
              
              {/* Abode Bimtech Brand Name */}
              <div className="text-left -ml-32 lg:-ml-64 xl:-ml-80 w-full m-0 p-0">
                <h2 className="text-[12rem] lg:text-[16rem] font-normal text-white/90 tracking-wider leading-none whitespace-nowrap m-0 p-0">
                  Abode Bimtech
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;