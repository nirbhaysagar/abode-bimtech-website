import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import QuoteRequestModal from "./QuoteRequestModal";
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
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
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
    
    try {
      // Option 1: Try Formspree first
      const response = await fetch('https://formspree.io/f/xwpqdnpg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          formType: 'Contact Form',
          submittedAt: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        console.log('Form submitted successfully via Formspree');
      } else {
        // If Formspree fails, try alternative method
        throw new Error('Formspree failed, trying alternative method');
      }
    } catch (error) {
      console.error('Formspree submission error:', error);
      
      // Option 2: Fallback to mailto link
      try {
        const mailtoLink = `mailto:abodebimtech@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}

This message was sent from your website contact form.
        `)}`;
        
        window.open(mailtoLink, '_blank');
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        console.log('Form submitted via mailto fallback');
      } catch (fallbackError) {
        console.error('Fallback submission also failed:', fallbackError);
        alert('Form submission failed. Please email us directly at abodebimtech@gmail.com');
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }
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
    <section ref={sectionRef} id="contact" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-white/80 max-w-2xl">
                Ready to transform your BIM projects? Let's discuss how we can help you achieve excellence in your architectural and construction endeavors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 min-h-[48px] text-base"
                    placeholder="Enter your full name"
                    aria-describedby="name-error"
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
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 min-h-[48px] text-base"
                    placeholder="Enter your email address"
                    aria-describedby="email-error"
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
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 min-h-[48px] text-base"
                  placeholder="What's this about?"
                  aria-describedby="subject-error"
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
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 resize-none min-h-[120px] text-base"
                  placeholder="Tell us about your project requirements..."
                  aria-describedby="message-error"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={isSubmitting ? "Sending message..." : "Send message"}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" aria-hidden="true" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>

              {submitSuccess && (
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-center" role="alert" aria-live="polite">
                  <div className="flex items-center justify-center space-x-2 text-green-400">
                    <CheckCircle className="w-5 h-5" aria-hidden="true" />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-green-300 text-sm mt-1">We've received your message and will reply to {formData.email} within 24 hours.</p>
                </div>
              )}
            </form>
          </div>

          {/* Office Image */}
          <div className="relative">
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
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-white/90 tracking-wider">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 border border-white/5 group-hover:border-white/10" aria-hidden="true">
                        <Phone className="w-6 h-6 text-white/70" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm uppercase tracking-widest font-medium">Phone</p>
                        <a 
                          href="tel:+916396594184" 
                          className="text-white text-xl font-medium hover:text-blue-200 transition-colors duration-300 block min-h-[44px] flex items-center"
                          onClick={(e) => {
                            // For mobile devices, this will open the phone app
                            // For desktop, it will show a confirmation dialog
                            if (!navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
                              e.preventDefault();
                              if (confirm('Call +91 6396594184?')) {
                                window.open('tel:+916396594184', '_blank');
                              }
                            }
                          }}
                          aria-label="Call +91 6396594184"
                        >
                          +91 6396594184
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 border border-white/5 group-hover:border-white/10" aria-hidden="true">
                        <Mail className="w-6 h-6 text-white/70" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm uppercase tracking-widest font-medium">Email</p>
                        <a 
                          href="mailto:abodebimtech@gmail.com" 
                          className="text-white text-xl font-medium hover:text-blue-200 transition-colors duration-300 block min-h-[44px] flex items-center"
                          aria-label="Send email to abodebimtech@gmail.com"
                        >
                          abodebimtech@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 border border-white/5 group-hover:border-white/10" aria-hidden="true">
                        <MapPin className="w-6 h-6 text-white/70" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm uppercase tracking-widest font-medium">Address</p>
                        <p className="text-white text-xl font-medium">KAILASH VIHAR</p>
                        <p className="text-white text-xl font-medium">DAYALBAGH AGRA-5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Section - Quick Actions */}
              <div className="lg:col-span-3 space-y-6">
                <h3 className="text-2xl font-light text-white/90 tracking-wide">Quick Actions</h3>
                <div className="space-y-3">
                  <a 
                    href="tel:+916396594184"
                    className="w-full text-left py-4 px-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group border border-white/5 hover:border-white/10 hover:scale-105 block min-h-[56px] flex items-center"
                    onClick={(e) => {
                      // For mobile devices, this will open the phone app
                      // For desktop, it will show a confirmation dialog
                      if (!navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
                        e.preventDefault();
                        if (confirm('Call +91 6396594184?')) {
                          window.open('tel:+916396594184', '_blank');
                        }
                      }
                    }}
                    aria-label="Call +91 6396594184"
                  >
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-300" aria-hidden="true" />
                      <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-base font-medium">Call Now</span>
                    </div>
                  </a>
                  <a 
                    href="https://wa.me/916396594184?text=Hi%20Abode%20Bimtech,%20I%20would%20like%20to%20know%20more%20about%20your%20BIM%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-left py-4 px-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group border border-white/5 hover:border-white/10 hover:scale-105 block min-h-[56px] flex items-center"
                    aria-label="Open WhatsApp chat with Abode Bimtech"
                  >
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-5 h-5 text-green-400" aria-hidden="true" />
                      <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-base font-medium">WhatsApp</span>
                    </div>
                  </a>
                  <button 
                    className="w-full text-left py-4 px-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group border border-white/5 hover:border-white/10 hover:scale-105 min-h-[56px] flex items-center"
                    aria-label="Get a quote for BIM services"
                    onClick={() => setIsQuoteModalOpen(true)}
                  >
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-base font-medium">Get Quote</span>
                  </button>
                  <a 
                    href="https://cal.com/abodebimtech/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-left py-4 px-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group border border-white/5 hover:border-white/10 hover:scale-105 min-h-[56px] flex items-center"
                    aria-label="Book a consultation for BIM services"
                  >
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-base font-medium">Book Consultation</span>
                  </a>
                  <button 
                    className="w-full text-left py-4 px-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group border border-white/5 hover:border-white/10 hover:scale-105 min-h-[56px] flex items-center"
                    aria-label="View Abode Bimtech portfolio"
                  >
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-base font-medium">View Portfolio</span>
                  </button>
                </div>
              </div>

              {/* Right Section - Social & Stats */}
              <div className="lg:col-span-4 space-y-6">
                <h3 className="text-2xl font-light text-white/90 tracking-wide">Connect</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
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
                        className={`w-12 h-12 sm:w-14 sm:h-14 ${social.bg} ${social.hover} ${social.border} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/20`}
                        aria-label={`Follow us on ${social.icon.name || 'social media'}`}
                      >
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
                
                <div className="pt-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="text-center p-3 sm:p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 hover:scale-105">
                      <p className="text-xl sm:text-2xl font-bold text-white mb-2">500+</p>
                      <p className="text-white/60 text-xs sm:text-sm uppercase tracking-wider font-medium">Projects</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 hover:scale-105">
                      <p className="text-xl sm:text-2xl font-bold text-white mb-2">50+</p>
                      <p className="text-white/60 text-xs sm:text-sm uppercase tracking-wider font-medium">Clients</p>
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
              
              {/* Floating Contact Button - Mobile Only */}
              <div className="lg:hidden fixed bottom-6 right-6 z-50">
                <div className="relative group">
                  {/* Main Contact Button */}
                  <button 
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                    onClick={() => {
                      // Show contact options
                      const contactOptions = [
                        { label: 'Call Now', action: () => window.open('tel:+916396594184', '_blank') },
                        { label: 'WhatsApp', action: () => window.open('https://wa.me/916396594184?text=Hi%20Abode%20Bimtech,%20I%20would%20like%20to%20know%20more%20about%20your%20BIM%20services', '_blank') },
                        { label: 'Email', action: () => window.open('mailto:abodebimtech@gmail.com', '_blank') }
                      ];
                      
                      // For mobile, show action sheet or use native sharing
                      if (navigator.share) {
                        navigator.share({
                          title: 'Contact Abode Bimtech',
                          text: 'Get in touch with Abode Bimtech for BIM services',
                          url: window.location.href
                        }).catch(() => {
                          // Fallback if sharing fails
                          const choice = prompt('Choose contact method:\n1. Call Now\n2. WhatsApp\n3. Email\n\nEnter 1, 2, or 3:');
                          if (choice === '1') contactOptions[0].action();
                          else if (choice === '2') contactOptions[1].action();
                          else if (choice === '3') contactOptions[2].action();
                        });
                      } else {
                        // Fallback: show alert with options
                        const choice = prompt('Choose contact method:\n1. Call Now\n2. WhatsApp\n3. Email\n\nEnter 1, 2, or 3:');
                        if (choice === '1') contactOptions[0].action();
                        else if (choice === '2') contactOptions[1].action();
                        else if (choice === '3') contactOptions[2].action();
                      }
                    }}
                    aria-label="Quick contact options - Call, WhatsApp, or Email"
                    title="Quick contact options"
                  >
                    <MessageSquare className="w-7 h-7 text-white" aria-hidden="true" />
                  </button>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    Contact Options
                    <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Request Modal */}
      <QuoteRequestModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </section>
  );
};

export default ContactSection;