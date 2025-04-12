
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Calendar from "@/components/Calendar";
import TaskInput from "@/components/TaskInput";
import AIPlannerPanel from "@/components/AIPlannerPanel";
import { Calendar as CalendarIcon, User, BellRing, LogOut, Settings } from "lucide-react";
import { formatDate } from "@/utils/dateUtils";
import { Link } from "react-router-dom";
import { toast } from "sonner";

// Mock data for demo purposes
const mockTasks = [
  {
    id: "1",
    title: "Team meeting",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    priority: "high" as const,
    completed: false
  },
  {
    id: "2",
    title: "Review project proposal",
    startTime: "1:00 PM",
    endTime: "2:30 PM",
    priority: "medium" as const,
    completed: false
  },
  {
    id: "3",
    title: "Reply to client emails",
    startTime: "3:00 PM",
    endTime: "4:00 PM",
    priority: "low" as const,
    completed: true
  },
  {
    id: "4",
    title: "Prepare weekly report",
    startTime: "4:30 PM",
    endTime: "5:30 PM",
    priority: "medium" as const,
    completed: false
  }
];

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState(mockTasks);
  
  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    toast.info(`Selected date: ${formatDate(date, "EEEE, MMMM d, yyyy")}`);
  };
  
  const handleTaskCreate = (taskText: string) => {
    // In a real app, this would send to an API for NLP processing
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title: taskText,
      priority: "medium" as const,
      completed: false
    };
    
    setTasks([...tasks, newTask]);
  };
  
  const handleTaskToggle = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  
  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-border p-4">
        <div className="flex items-center gap-2 mb-8">
          <CalendarIcon className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">SmartDay</h1>
        </div>
        
        <nav className="space-y-2 mb-8">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/dashboard" className="font-medium">Dashboard</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/calendar" className="font-normal">Calendar</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/tasks" className="font-normal">Tasks</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/stats" className="font-normal">Statistics</Link>
          </Button>
        </nav>
        
        <div className="mt-auto space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/settings" className="font-normal flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/profile" className="font-normal flex items-center">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Link>
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            onClick={() => {
              toast.info("Logout functionality will be implemented with Supabase");
              window.location.href = "/";
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-border p-4 flex items-center justify-between sticky top-0 z-10">
          <h2 className="font-bold text-lg">
            Dashboard
          </h2>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <BellRing className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link to="/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </header>
        
        {/* Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left column */}
              <div className="md:col-span-4 space-y-6">
                <Calendar onSelectDate={handleSelectDate} />
                <TaskInput onTaskCreate={handleTaskCreate} />
              </div>
              
              {/* Right column */}
              <div className="md:col-span-8">
                <AIPlannerPanel 
                  tasks={tasks} 
                  selectedDate={selectedDate} 
                  onTaskToggle={handleTaskToggle}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
