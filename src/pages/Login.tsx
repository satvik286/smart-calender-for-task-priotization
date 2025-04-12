
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";
import { Calendar } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Auth form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <Link to="/" className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SmartDay</span>
            </Link>
          </div>
          
          <LoginForm />
        </div>
      </div>
      
      {/* Right side - Banner */}
      <div className="hidden md:block md:flex-1 bg-gradient-to-br from-primary/90 to-accent/80">
        <div className="h-full flex flex-col justify-center items-center text-white p-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-6">Welcome back to SmartDay</h2>
            <p className="text-lg opacity-90 mb-6">
              Your AI-powered productivity assistant is ready to help you plan your perfect day.
            </p>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-white/40"></div>
              <div className="w-3 h-3 rounded-full bg-white/60"></div>
              <div className="w-3 h-3 rounded-full bg-white/80"></div>
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
