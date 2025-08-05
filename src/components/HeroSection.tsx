import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToExplore = () => {
    const element = document.querySelector("#explore");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToLearnMore = () => {
    const element = document.querySelector("#features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-background via-background to-surface px-4 sm:px-6 lg:px-8"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="block text-primary bg-clip-text bg-brand-gradient">
            Drag. Drop. Deploy
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          A Smart Way to Build Stunning UIs
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-text-subtle max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
          A visual UI builder that helps backend devs create beautiful frontends — without touching Figma.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToExplore}
            className="w-full sm:w-auto"
          >
            Open app
          </Button>
          <Button 
            variant="hero-outline" 
            size="lg" 
            onClick={scrollToLearnMore}
            className="w-full sm:w-auto"
          >
            Learn more
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <button
            onClick={scrollToExplore}
            className="p-2 rounded-full hover:bg-surface transition-colors duration-300 group"
            aria-label="Scroll to explore section"
          >
            <ChevronDown className="h-6 w-6 text-text-subtle group-hover:text-primary transition-all duration-300 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
    </section>
  );
}