
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
        "flex rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105",
        "h-32 md:h-28 shadow-md border border-white/10"
      )}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      <div className="w-1/3 flex items-center justify-center p-3">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="max-h-16 max-w-full object-contain" 
        />
      </div>
      <div className="w-2/3 flex flex-col justify-center p-4" style={{ color: textColor }}>
        <h3 className="font-bold text-lg md:text-xl mb-1">{name}</h3>
        <p className="text-xs opacity-80">{description}</p>
      </div>
    </div>
  );
}
