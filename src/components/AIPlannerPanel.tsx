
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BrainCircuit, CheckCircle } from "lucide-react";

interface Task {
  id: string;
  title: string;
  startTime?: string;
  endTime?: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
}

interface AIPlannerPanelProps {
  tasks: Task[];
  selectedDate: Date;
  onTaskToggle: (taskId: string) => void;
}

const AIPlannerPanel: React.FC<AIPlannerPanelProps> = ({ 
  tasks, 
  selectedDate,
  onTaskToggle
}) => {
  // Group tasks by priority
  const highPriorityTasks = tasks.filter(task => task.priority === 'high');
  const mediumPriorityTasks = tasks.filter(task => task.priority === 'medium');
  const lowPriorityTasks = tasks.filter(task => task.priority === 'low');

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const renderTask = (task: Task) => (
    <div 
      key={task.id} 
      className={cn(
        "task-card hover:bg-muted/50 cursor-pointer",
        `task-priority-${task.priority}`,
        task.completed && "opacity-60"
      )}
      onClick={() => onTaskToggle(task.id)}
    >
      <div className="flex items-start gap-2">
        <div className="mt-0.5">
          <CheckCircle 
            className={cn(
              "h-5 w-5",
              task.completed ? "text-primary fill-primary" : "text-muted-foreground"
            )} 
          />
        </div>
        <div className="flex-1">
          <p className={cn(task.completed && "line-through")}>{task.title}</p>
          {task.startTime && (
            <p className="text-sm text-muted-foreground mt-1">
              {task.startTime} {task.endTime ? `- ${task.endTime}` : ''}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Card className="bg-white border border-border shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-primary" />
          <CardTitle>AI Daily Planner</CardTitle>
        </div>
        <CardDescription>
          {formatDate(selectedDate)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {tasks.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            <p>No tasks scheduled for today.</p>
            <p className="text-sm mt-2">Add a task to get started.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {highPriorityTasks.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-calendar-taskHigh mb-2">High Priority</h3>
                {highPriorityTasks.map(renderTask)}
              </div>
            )}
            
            {mediumPriorityTasks.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-calendar-taskMedium mb-2">Medium Priority</h3>
                {mediumPriorityTasks.map(renderTask)}
              </div>
            )}
            
            {lowPriorityTasks.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-calendar-taskLow mb-2">Low Priority</h3>
                {lowPriorityTasks.map(renderTask)}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIPlannerPanel;
