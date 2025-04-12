
import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <Hero />
        <Features />
        
        {/* Testimonials Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Productive People</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                See how SmartDay has transformed how people manage their time and boost productivity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-6 rounded-xl shadow-sm border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">U{item}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">User {item}</h4>
                      <p className="text-sm text-muted-foreground">Product Manager</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "SmartDay has completely changed how I manage my workday. The AI suggestions are surprisingly accurate, and I love how it adapts to my work style."
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 bg-primary/5">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Productivity?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Join thousands of users who have already upgraded their daily planning with SmartDay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started for Free
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Login to Your Account
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
