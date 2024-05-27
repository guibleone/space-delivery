import { cn } from "../utils";

interface ButtonProps {
  isEnabled?: boolean;
  text: string;
  onClick: () => void;
}

export default function Button({ isEnabled, text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full rounded-xl py-4 hover:cursor-pointer",
        isEnabled ? "shadow-lg bg-white" : "bg-gray-100"
      )}
    >
      <h2 className={cn("text-sm md:text-base", isEnabled ? "font-bold" : "font-normal")}>
        {text}
      </h2>
    </button>
  );
}
