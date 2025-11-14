interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "danger" | "success" | "info" | "warning";
}

export const Badge: React.FC<BadgeProps> = ({ children, className, variant }) => {
  let bgColor = "bg-gray-300";
  if (variant === "danger") bgColor = "bg-red-500 text-white";
  if (variant === "success") bgColor = "bg-green-500 text-white";
  if (variant === "info") bgColor = "bg-blue-500 text-white";
  if (variant === "warning") bgColor = "bg-yellow-400 text-black";

  return <span className={`inline-flex items-center justify-center text-xs font-semibold px-2 py-1 rounded-full ${bgColor} ${className}`}>{children}</span>;
};

