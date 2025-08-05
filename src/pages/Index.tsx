import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ExploreSection } from "@/components/ExploreSection";
import { useTheme } from "@/hooks/useTheme";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useEffect } from "react";

const Index = () => {
  const { theme, setTheme, isDark } = useTheme();
  const activeSection = useActiveSection();

  const handleThemeToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  useEffect(() => {
    // Set page title
    document.title = "Logo - Drag. Drop. Deploy";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A visual UI builder that helps backend devs create beautiful frontends — without touching Figma.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        activeSection={activeSection}
        onThemeToggle={handleThemeToggle}
        isDark={isDark}
      />
      
      <main>
        <HeroSection />
        <ExploreSection />
        
        {/* Placeholder sections for navigation */}
        <section id="designs" className="min-h-screen flex items-center justify-center py-20 px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Designs</h2>
            <p className="text-xl text-text-subtle">Coming soon...</p>
          </div>
        </section>
        
        <section id="pricing" className="min-h-screen flex items-center justify-center py-20 px-4 bg-surface">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Pricing</h2>
            <p className="text-xl text-text-subtle">Coming soon...</p>
          </div>
        </section>
        
        <section id="faq" className="min-h-screen flex items-center justify-center py-20 px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-foreground">FAQ</h2>
            <p className="text-xl text-text-subtle">Coming soon...</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
