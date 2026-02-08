function Stepper({ currentStep }: { currentStep: number }) {
  const steps = [1, 2, 3, 4];

  return (
    <div className="flex  items-center justify-center gap-4">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-4">
          <div
            className={`w-9 h-9  rounded-full flex items-center justify-center text-sm font-medium
              ${
                step === currentStep
                  ? "bg-primary text-white"
                  : step < currentStep
                  ? "bg-primary/20 text-primary"
                  : "bg-neutral-100 text-neutral-600"
              }`}
          >
            {step}
          </div>

          {i < steps.length - 1 && (
            <div className="sm:w-16 w-7 h-px bg-neutral-200" />
          )}
        </div>
      ))}
    </div>
  );
}

export default Stepper;
