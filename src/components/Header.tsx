import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  activeSection?: string;
  onThemeToggle?: () => void;
  isDark?: boolean;
}

export function Header({ activeSection, onThemeToggle, isDark }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Explore", href: "#explore" },
    { name: "Designs", href: "#designs" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              className="text-primary font-bold text-xl hover:text-primary-glow transition-colors duration-300"
            >
              Logo
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-surface",
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-surface"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
              className="hidden sm:flex"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="hero" size="sm">
                Start now
              </Button>
              <Button variant="outline" size="sm">
                Create Account
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in-scale">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-surface/95 backdrop-blur-md rounded-lg border border-border mt-2 shadow-medium">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300",
                    activeSection === item.href.slice(1)
                      ? "text-primary bg-surface-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface-secondary"
                  )}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile CTA */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="hero" size="sm" className="w-full">
                  Start now
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Create Account
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onThemeToggle}
                  className="w-full"
                >
                  {isDark ? (
                    <>
                      <Sun className="h-4 w-4 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4 mr-2" />
                      Dark Mode
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}