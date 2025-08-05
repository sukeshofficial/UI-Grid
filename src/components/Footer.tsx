import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Explore', href: '#explore' },
    { name: 'Designs', href: '#designs' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' }
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-gradient rounded-lg"></div>
              <span className="text-xl font-bold text-foreground">Logo</span>
            </div>
            <p className="text-text-subtle text-sm max-w-xs">
              A visual UI builder that helps backend devs create beautiful frontends — without touching Figma.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-subtle hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Media & Back to Top */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-text-subtle hover:text-primary transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            {/* Back to Top Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="mt-4 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-200" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-text-subtle text-sm">
            © {currentYear} Logo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};