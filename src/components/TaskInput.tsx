
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";
import { toast } from "sonner";

interface TaskInputProps {
  onTaskCreate: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onTaskCreate }) => {
  const [taskInput, setTaskInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!taskInput.trim()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call for task processing
      await new Promise(resolve => setTimeout(resolve, 800));
      
      onTaskCreate(taskInput);
      setTaskInput("");
      toast.success("Task added successfully");
    } catch (error) {
      console.error("Error creating task:", error);
      toast.error("Failed to add task. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-border p-4">
      <h3 className="font-medium mb-4">Add New Task</h3>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          placeholder="E.g. Meeting with John at 2pm tomorrow"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          disabled={isLoading}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading || !taskInput.trim()}>
          {isLoading ? (
            <span className="animate-pulse">Processing...</span>
          ) : (
            <SendHorizontal className="h-5 w-5" />
          )}
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-2">
        Tip: Try adding natural language like "Meeting with John at 2pm tomorrow" and AI will parse it.
      </p>
    </div>
  );
};

export default TaskInput;
