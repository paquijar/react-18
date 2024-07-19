import { InputProps } from "@/types/types";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, error, ...props }, ref) => {
    return (
      <div>
        <input
          className="input input-bordered w-60"
          ref={ref}
          placeholder={placeholder}
          {...props}
        />
        {error && <span className="text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
