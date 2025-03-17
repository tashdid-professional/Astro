import { cn } from "../../lib/utils";
import React, { InputHTMLAttributes } from "react";

type InputGroupProps = {
  className?: string;
  children: React.ReactNode;
};

type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

// ✅ Input Group Component
const InputGroup = ({ className, children }: InputGroupProps) => {
  return (
    <div
      className={cn(
        "input-group focus-within:shadow-lg pl-4 transition-all relative flex items-center w-full rounded-full overflow-hidden",
        className ?? ""
      )}
    >
      {children}
    </div>
  );
};

// ✅ Input Component (Fix: Added `displayName`)
const Input = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        className={cn(
          "input-control w-full py-3 pr-4 outline-none placeholder:font-normal placeholder:text-sm",
          className ?? ""
        )}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        ref={ref}
        {...rest}
      />
    );
  }
);

Input.displayName = "Input"; // 🔥 Fix for ESLint warning

// ✅ Input Group Text Component (Fix: Added `displayName`)
const InputGroupText = ({ className, children }: InputGroupProps) => {
  return (
    <div className={cn("input-group-text mr-3", className ?? "")}>
      {children}
    </div>
  );
};

InputGroupText.displayName = "InputGroupText"; // 🔥 Good practice for debugging

// ✅ Attach components to InputGroup
InputGroup.Text = InputGroupText;
InputGroup.Input = Input;

// ✅ Export InputGroup as the main component
export default InputGroup;
