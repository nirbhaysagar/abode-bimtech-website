import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "PRODUCTS", sectionId: "products" },
    { label: "ABOUT US", sectionId: "about" },
    { label: "SERVICES", sectionId: "services" },
    { label: "GALLERY", sectionId: "gallery" },
    { label: "TESTIMONIALS", sectionId: "testimonials" },
    { label: "FAQ", sectionId: "faq" },
    { label: "CONTACT US", sectionId: "contact" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass shadow-apple" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center ml-[120px]">
              <img 
                src="/logo.png" 
                alt="Abode Bimtech Logo" 
                className="h-24 w-auto sm:h-30 lg:h-36 xl:h-42 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? "text-muted-foreground hover:text-primary" 
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? "bg-white/10 text-foreground hover:bg-white/20" 
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-0 right-0 w-80 h-full bg-black/95 backdrop-blur-xl border-l border-white/10 p-6">
            <div className="flex flex-col h-full">
              {/* Navigation Items */}
              <div className="flex-1 space-y-4 pt-8">
                {navItems.map((item) => (
                  <button
                    key={item.sectionId}
                    onClick={() => scrollToSection(item.sectionId)}
                    className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 hover:text-white transition-all duration-300 border border-white/5 hover:border-white/10"
                  >
                    <span className="text-lg font-medium tracking-wide">{item.label}</span>
                  </button>
                ))}
              </div>
              
              {/* Bottom Info */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-center text-white/60 text-sm">
                  <div className="flex items-center justify-center mb-3">
                    <img 
                      src="/logo.png" 
                      alt="Abode Bimtech Logo" 
                      className="h-24 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    />
                  </div>
                  <p className="text-white/60">Transforming BIM Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;