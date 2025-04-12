
import React from "react";
import { Calendar, Clock, BrainCircuit, SparkleIcon, BarChart, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "AI Task Prioritization",
      description: "Smart algorithm analyzes your tasks and suggests the optimal order based on deadlines, importance, and your work habits.",
      icon: <BrainCircuit className="h-12 w-12 text-primary" />
    },
    {
      title: "Natural Language Input",
      description: "Simply type 'Meeting with John at 2pm tomorrow' and our AI will create and schedule the event automatically.",
      icon: <SparkleIcon className="h-12 w-12 text-primary" />
    },
    {
      title: "Interactive Calendar",
      description: "Drag and drop tasks to reschedule. The calendar automatically adjusts your day to maintain optimal productivity.",
      icon: <Calendar className="h-12 w-12 text-primary" />
    },
    {
      title: "Daily AI Planner",
      description: "Start each day with an AI-generated plan based on your tasks, habits, and productivity patterns.",
      icon: <Clock className="h-12 w-12 text-primary" />
    },
    {
      title: "Productivity Analytics",
      description: "Track your progress and identify patterns to continuously improve your time management and focus.",
      icon: <BarChart className="h-12 w-12 text-primary" />
    },
    {
      title: "Multiple Calendar Sync",
      description: "Seamlessly integrate with Google Calendar, Outlook, and other popular calendar services.",
      icon: <Globe className="h-12 w-12 text-primary" />
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Our smart calendar combines cutting-edge AI with intuitive design to transform how you manage your time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border bg-card animate-fade-in transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
