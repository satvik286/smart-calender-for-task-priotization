
import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-bold">SmartDay</h2>
          </div>
          <p className="text-muted-foreground text-sm">
            AI-powered smart calendar app to boost your productivity and organize your day efficiently.
          </p>
        </div>
        
        <div>
          <h3 className="font-medium mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/changelog" className="text-muted-foreground hover:text-foreground transition-colors">
                Changelog
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container py-6 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SmartDay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
