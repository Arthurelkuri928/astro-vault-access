
import { cn } from "@/lib/utils";

interface ToolCardProps {
  name: string;
  logo: string;
  description: string;
  backgroundColor: string;
  textColor?: string;
  onClick?: () => void;
}

export function ToolCard({ name, logo, description, backgroundColor, textColor = "white", onClick }: ToolCardProps) {
  return (
    <div 
      className={cn(
        "flex items-center rounded-xl overflow-hidden cursor-pointer transition-all",
        "h-32 shadow-lg hover:shadow-xl hover:scale-105 duration-300"
      )}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      <div className="w-1/2 flex items-center justify-center p-4">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="max-h-20 max-w-full object-contain" 
        />
      </div>
      <div 
        className="w-1/2 flex flex-col justify-center p-4" 
        style={{ color: textColor }}
      >
        <h3 className="font-bold text-lg md:text-xl mb-1 line-clamp-2">{name}</h3>
        <p className="text-xs opacity-80">{description}</p>
      </div>
    </div>
  );
}
