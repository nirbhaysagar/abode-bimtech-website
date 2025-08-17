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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section pt-[-154px] sm:pt-[-152px] lg:pt-[-150px]">
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
        <div className="absolute top-16 left-2 sm:left-4 lg:left-10 w-12 h-12 sm:w-20 sm:h-20 lg:w-32 lg:h-32 border border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-2 sm:right-4 lg:right-20 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border border-white/10 rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-2 sm:left-4 lg:left-20 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border border-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-16 right-2 sm:right-4 lg:right-10 w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border border-white/10 rotate-45 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Enhanced Stats with Better Visual Impact - Mobile Responsive */}
      <div className="absolute top-[94px] sm:top-[108px] lg:top-[170px] left-1/2 transform -translate-x-1/2 z-20 space-y-1 sm:space-y-1.5 lg:space-y-4 apple-fade-in">
        <div className="glass rounded-md sm:rounded-lg lg:rounded-2xl px-1.5 sm:px-3 lg:px-8 py-1.5 sm:py-2.5 lg:py-4 shadow-apple border border-white/20 backdrop-blur-xl">
          <div className="flex items-center space-x-1.5 sm:space-x-2 lg:space-x-3">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-xs sm:text-sm lg:text-base font-medium tracking-tight text-white">4500+ Projects Delivered</p>
          </div>
        </div>
        <div className="glass rounded-md sm:rounded-lg lg:rounded-2xl px-1.5 sm:px-3 lg:px-8 py-1.5 sm:py-2.5 lg:py-4 shadow-apple border border-white/20 backdrop-blur-xl">
          <div className="flex items-center space-x-1.5 sm:space-x-2 lg:space-x-3">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <p className="text-xs sm:text-sm lg:text-base font-medium tracking-tight text-white">12+ Architects' Teams</p>
          </div>
        </div>
      </div>

      {/* Enhanced Content with Better Typography and Layout */}
      <div className="relative z-10 container mx-auto px-2 sm:px-3 lg:px-6 text-center text-white hero-content">
        {/* Enhanced Subtitle with Torch-like Running Glow Effect on Border */}
        <div className="mb-4 sm:mb-6 lg:mb-12 apple-slide-up">
          <div className="relative inline-flex">
            {/* Torch-like Running Glow Border */}
            <div className="relative rounded-full p-[1px] sm:p-[2px] border border-white/20 overflow-hidden">
              {/* Running Glow Effect */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent">
                <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-torch-run"></div>
              </div>
              
              {/* Button Content */}
              <div className="flex items-center space-x-1 sm:space-x-1.5 lg:space-x-3 px-2 sm:px-3 lg:px-6 py-1 sm:py-1.5 lg:py-3 bg-black/20 backdrop-blur-md rounded-full">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <p className="text-xs sm:text-sm lg:text-lg text-white/90 font-light tracking-wide">
                  BIM outsourcing in USA, UK, EU & UAE
                </p>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Main Headline - Mobile Responsive */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 lg:mb-12 leading-tight tracking-tight apple-scale-in">
          <span className="block mb-1 sm:mb-1.5 lg:mb-4">DELIVERING HIGH QUALITY</span>
          <span className="block mb-1 sm:mb-1.5 lg:mb-4">PROJECTS AT</span>
          <span className="relative">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              5X FASTER
            </span>
            <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 rounded-full opacity-60"></div>
          </span>
        </h1>

        {/* Enhanced CTA Section - Mobile Responsive */}
        <div className="flex flex-col items-center space-y-3 sm:space-y-4 lg:space-y-8">
          <div className="flex flex-col sm:flex-row items-center space-y-2.5 sm:space-y-0 sm:space-x-3 lg:space-x-6">
            <Button 
              onClick={() => scrollToSection("services")}
              className="apple-gradient hover:apple-gradient-dark text-white px-4 sm:px-6 lg:px-16 py-3 sm:py-4 lg:py-8 text-sm sm:text-base lg:text-xl font-bold rounded-full shadow-apple hover:shadow-glow transition-all duration-300 hover:scale-105 tracking-wide relative overflow-hidden group w-full sm:w-auto"
            >
              <span className="relative z-10">OUR SERVICES</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              onClick={() => scrollToSection("gallery")}
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-3 sm:px-4 lg:px-12 py-3 sm:py-4 lg:py-8 text-xs sm:text-sm lg:text-lg font-medium rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 tracking-wide w-full sm:w-auto"
            >
              VIEW PROJECTS
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-1.5 sm:space-y-0 sm:space-x-2 lg:space-x-6 text-xs sm:text-sm text-white/70 font-light tracking-wide">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <span>Global Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <span>Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;