import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";
import { useGSAP } from "@/hooks/useGSAP";

const HeroSection = () => {
  useGSAP();

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section pt-20">
      {/* Enhanced Background with Multiple Layers */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Primary overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        
        {/* Secondary overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        
        {/* Accent overlay for visual interest */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Floating Geometric Elements for Visual Interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-white/10 rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/10 rotate-45 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Enhanced Stats with Better Visual Impact */}
      <div className="absolute top-32 right-8 z-20 space-y-4 apple-fade-in">
        <div className="glass rounded-2xl px-8 py-4 shadow-apple border border-white/20 backdrop-blur-xl">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-base font-medium tracking-tight text-white">4500+ Projects Delivered</p>
          </div>
        </div>
        <div className="glass rounded-2xl px-8 py-4 shadow-apple border border-white/20 backdrop-blur-xl">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <p className="text-base font-medium tracking-tight text-white">12+ Architects' Teams</p>
          </div>
        </div>
      </div>

      {/* Enhanced Content with Better Typography and Layout */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white hero-content">
        {/* Enhanced Subtitle with Torch-like Running Glow Effect on Border */}
        <div className="mb-12 apple-slide-up">
          <div className="relative inline-flex">
            {/* Torch-like Running Glow Border */}
            <div className="relative rounded-full p-[2px] border border-white/20 overflow-hidden">
              {/* Running Glow Effect */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent">
                <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-torch-run"></div>
              </div>
              
              {/* Button Content */}
              <div className="flex items-center space-x-3 px-6 py-3 bg-black/20 backdrop-blur-md rounded-full">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <p className="text-lg text-white/90 font-light tracking-wide">
                  BIM outsourcing in USA, UK, EU & UAE
                </p>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 leading-tight tracking-tight apple-scale-in">
          <span className="block mb-4">DELIVERING HIGH QUALITY</span>
          <span className="block mb-4">PROJECTS AT</span>
          <span className="relative">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              5X FASTER
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 rounded-full opacity-60"></div>
          </span>
        </h1>

        {/* Enhanced CTA Section */}
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={() => scrollToSection("services")}
              className="apple-gradient hover:apple-gradient-dark text-white px-16 py-8 text-xl font-bold rounded-full shadow-apple hover:shadow-glow transition-all duration-300 hover:scale-105 tracking-wide relative overflow-hidden group"
            >
              <span className="relative z-10">OUR SERVICES</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              onClick={() => scrollToSection("gallery")}
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-8 text-lg font-medium rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 tracking-wide"
            >
              VIEW PROJECTS
            </Button>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-white/70 font-light tracking-wide">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <span>Global Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <span>Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;