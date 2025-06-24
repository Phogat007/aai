
import { useEffect } from "react";
import { SignupForm } from "@/components/auth/SignupForm";

const Signup = () => {
  useEffect(() => {
    document.title = "Sign Up - aai";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/30 p-4">
      <div className="w-full max-w-md mb-8 text-center">
        <div className="inline-block mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground font-bold text-2xl shadow-lg mx-auto">
            aai
          </div>
        </div>
      </div>
      
      <SignupForm />
      
      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} aai. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Signup;
