
import React from "react";
import { cn } from "@/lib/utils";

interface RegistrationProgressProps {
  currentStep: number;
  steps: Array<{
    id: number;
    title: string;
  }>;
  onStepClick?: (step: number) => void;
}

const RegistrationProgress: React.FC<RegistrationProgressProps> = ({
  currentStep,
  steps,
  onStepClick,
}) => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <button
                onClick={() => onStepClick && onStepClick(step.id)}
                disabled={step.id > currentStep}
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full text-white font-bold transition-all",
                  step.id === currentStep
                    ? "bg-furia-orange ring-4 ring-furia-orange/20"
                    : step.id < currentStep
                    ? "bg-green-500 cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                )}
              >
                {step.id < currentStep ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step.id
                )}
              </button>
              <span className={cn(
                "mt-2 text-sm font-medium",
                step.id === currentStep ? "text-furia-orange" : "text-gray-500"
              )}>
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "h-1 flex-1 mx-2",
                  currentStep > index + 1 ? "bg-green-500" : "bg-gray-300"
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RegistrationProgress;
