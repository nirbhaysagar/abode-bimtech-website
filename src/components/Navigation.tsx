import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "glass shadow-apple" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-semibold tracking-tight ${
            isScrolled ? "text-foreground" : "text-white"
          }`}>
                            ABODE BIMTECH
          </div>
          
          <div className="hidden lg:flex items-center space-x-10">
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

          <Button 
            className={`lg:hidden tracking-wide ${
              isScrolled 
                ? "apple-gradient text-white" 
                : "glass text-white border-white/30 hover:bg-white/20"
            }`}
            variant={isScrolled ? "default" : "outline"}
            size="sm"
          >
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;