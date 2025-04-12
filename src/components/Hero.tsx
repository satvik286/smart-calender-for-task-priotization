
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, BrainCircuit } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight">
              AI-Powered Calendar for{" "}
              <span className="text-primary">Smarter Productivity</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              Let AI organize your day with intelligent task prioritization and scheduling. Save time and focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started for Free
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Save 10+ hours weekly</span>
              </div>
              <div className="flex items-center gap-2">
                <BrainCircuit className="h-4 w-4" />
                <span>AI-optimized schedule</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 p-6 rounded-2xl shadow-xl animate-fade-in">
            <img
              src="https://via.placeholder.com/600x400?text=Smart+Calendar+Screenshot"
              alt="SmartDay Calendar Interface"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
