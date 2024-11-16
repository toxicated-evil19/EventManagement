import React from "react";

interface ProgressIndicatorProps {
  steps: { number: number; title: string }[];
  activeStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ steps, activeStep }) => {
  return (
    <div className="flex items-center justify-between mb-8 md:mb-10 relative">
      <div className="absolute h-0.5 bg-rose-100 w-full top-5 -z-10" />
      <div
        className="absolute h-0.5 bg-rose-500 transition-all duration-500"
        style={{
          width: `${((activeStep - 1) / (steps.length - 1)) * 100}%`,
          top: "1.25rem",
        }}
      />
      {steps.map((step) => (
        <div key={step.number} className="flex-1">
          <div
            className={`
              flex flex-col items-center gap-2
              ${step.number === activeStep ? "text-rose-500" :
                step.number < activeStep ? "text-rose-400" : "text-gray-400"}
            `}
          >
            <div
              className={`
                w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium
                transition-all duration-500 
                ${step.number === activeStep ? "bg-rose-500 text-white scale-110 shadow-md" :
                  step.number < activeStep ? "bg-rose-400 text-white" : "bg-white text-gray-500 border-2 border-rose-100"}
              `}
            >
              {step.number}
            </div>
            <span className="text-xs sm:text-sm font-medium hidden sm:block">{step.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;
