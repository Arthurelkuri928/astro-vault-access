
import React, { useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { ToolCard } from "./ToolCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Tool data with color mappings
const toolsData = [
  {
    id: "adminer",
    name: "ADMINER",
    logo: "https://i.postimg.cc/mcmrf5bH/ADMINER.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#FF5733"
  },
  {
    id: "adobe-stock",
    name: "ADOBE STOCK",
    logo: "https://i.postimg.cc/sMRxpW6v/ADOBE-STOCK.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#3366FF"
  },
  {
    id: "adsparo",
    name: "ADSPARO",
    logo: "https://i.postimg.cc/94mfkhj2/ADSPARO.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#FF9933"
  },
  {
    id: "answer-the-public",
    name: "ANSWER THE PUBLIC",
    logo: "https://i.postimg.cc/yDXdnNtn/ANSWER-THE-PUBLIC.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#FFFFFF",
    textColor: "#000000"
  },
  {
    id: "bigspy",
    name: "BIGSPY",
    logo: "https://i.postimg.cc/62Tp9f31/BIGSPY.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#001F5B"
  },
  {
    id: "blackhat",
    name: "BLACKHAT",
    logo: "https://i.postimg.cc/jw9dCnnq/BLACKHAT.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#E6B905"
  },
  {
    id: "canva-pro",
    name: "CANVA PRO",
    logo: "https://i.postimg.cc/6T2pgcF8/CANVA-PRO.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#20C4CB"
  },
  {
    id: "capcut-pro",
    name: "CAPCUT PRO",
    logo: "https://i.postimg.cc/4H94c4p6/CAPCUT-PRO.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#00C8FF"
  },
  {
    id: "chat-gpt",
    name: "CHAT GPT",
    logo: "https://i.postimg.cc/fkGRNXhB/CHAT-GPT.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#74AA9C"
  },
  {
    id: "chatbot-x",
    name: "CHATBOT X",
    logo: "https://i.postimg.cc/jLydd5xK/CHATBOT-X.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#000000"
  },
  {
    id: "claude-ia",
    name: "CLAUDE IA",
    logo: "https://i.postimg.cc/JGXtDxQf/CLAUDE-IA.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#7A53D9"
  },
  {
    id: "clicopy",
    name: "CLICOPY",
    logo: "https://i.postimg.cc/mzNWWc36/CLICOPY.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#2DB6A0"
  },
  {
    id: "crunchyroll",
    name: "CRUNCHYROLL",
    logo: "https://i.postimg.cc/vgvkSJMJ/CRUNCHYROLL.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#FF6B18"
  },
  {
    id: "disney",
    name: "DISNEY",
    logo: "https://i.postimg.cc/zHX6mxGV/DISNEY.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#0F1640"
  },
  {
    id: "dreamface",
    name: "DREAMFACE",
    logo: "https://i.postimg.cc/9DR3Fgt9/DREAMFACE.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#6750A4"
  },
  {
    id: "droptool",
    name: "DROPTOOL",
    logo: "https://i.postimg.cc/6T9DGpft/DROPTOOL.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#5533FF"
  },
  {
    id: "envato-elements",
    name: "ENVATO ELEMENTS",
    logo: "https://i.postimg.cc/yWv2hCL9/ENVATO-ELEMENTS.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#82B541"
  },
  {
    id: "epidemic-sound",
    name: "EPIDEMIC SOUND",
    logo: "https://i.postimg.cc/VdvpDZhh/EPIDEMIC-SOUND.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#24FFB8"
  },
  {
    id: "filtrify",
    name: "FILTRIFY",
    logo: "https://i.postimg.cc/k2tZd6qF/FILTRIFY.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#FF7EA7"
  },
  {
    id: "flaticon",
    name: "FLATICON",
    logo: "https://i.postimg.cc/TyMs2dP8/FLATICON.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#1A67F5"
  },
  {
    id: "freelahub",
    name: "FREELAHUB",
    logo: "https://i.postimg.cc/ppS77YbL/FREELAHUB.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#6937FF"
  },
  {
    id: "freepik",
    name: "FREEPIK",
    logo: "https://i.postimg.cc/XZfzpRZr/FREEPIK.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#1863FE"
  },
  {
    id: "gamma-app",
    name: "GAMMA APP",
    logo: "https://i.postimg.cc/zbp2kTF5/GAMMA-APP.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#5A67FF"
  },
  {
    id: "grok",
    name: "GROK",
    logo: "https://i.postimg.cc/qhpZn1nj/GROK.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#161616"
  },
  {
    id: "heygen",
    name: "HEYGEN",
    logo: "https://i.postimg.cc/1VtC74vF/HEYGEN.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#01D1FD"
  },
  {
    id: "leonard-ia",
    name: "LEONARD IA",
    logo: "https://i.postimg.cc/DmjYJdzP/LEONARD-IA.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#5B5BD6"
  },
  {
    id: "lovepik",
    name: "LOVEPIK",
    logo: "https://i.postimg.cc/5jNR2kft/LOVEPIK.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#FF4893"
  },
  {
    id: "midjourney",
    name: "MIDJOURNEY",
    logo: "https://i.postimg.cc/pp3GkWz9/MIDJOURNEY.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#000000"
  },
  {
    id: "netflix-premium",
    name: "NETFLIX PREMIUM",
    logo: "https://i.postimg.cc/PPCVmpps/NETFLIX-PREMIUM.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#E50914"
  },
  {
    id: "paramount",
    name: "PARAMOUNT",
    logo: "https://i.postimg.cc/G4YM5WxX/PARAMOUNT.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#0164FF"
  },
  {
    id: "pipiads",
    name: "PIPIADS",
    logo: "https://i.postimg.cc/gXcNrnF7/PIPIADS.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#FFB31A"
  },
  {
    id: "prime-video",
    name: "PRIME VIDEO",
    logo: "https://i.postimg.cc/R3LgMw8f/PRIME-VIDEO.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#00A8E1"
  },
  {
    id: "semrush",
    name: "SEMRUSH",
    logo: "https://i.postimg.cc/JyLTVpTM/SEMRUSH.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#FF642D"
  },
  {
    id: "similar-web",
    name: "SIMILAR WEB",
    logo: "https://i.postimg.cc/qhmQK4pv/SIMILAR-WEB.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#143DCE"
  },
  {
    id: "spyguru",
    name: "SPYGURU",
    logo: "https://i.postimg.cc/vxchLkmL/SPYGURU.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#576CBC"
  },
  {
    id: "spyhero",
    name: "SPYHERO",
    logo: "https://i.postimg.cc/7b6KkGNG/SPYHERO.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#8294C4"
  },
  {
    id: "spyhorus",
    name: "SPYHORUS",
    logo: "https://i.postimg.cc/Th4CYdkk/SPYHORUS.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#ACB1D6"
  },
  {
    id: "storyblocks",
    name: "STORYBLOCKS",
    logo: "https://i.postimg.cc/pmDZZDP7/STORYBLOCKS.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#01DFFC"
  },
  {
    id: "ubersuggest",
    name: "UBERSUGGEST",
    logo: "https://i.postimg.cc/JGHKsfvR/UBERSUGGEST.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#FF8200"
  },
  {
    id: "vectorizer",
    name: "VECTORIZER",
    logo: "https://i.postimg.cc/BjWpHhfH/VECTORIZER.png",
    description: "Gateway de Ferramentas",
    backgroundColor: "#7139ED"
  }
];

export function ToolsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = Math.ceil(toolsData.length / 4);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleDotClick = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.offsetWidth,
        behavior: 'smooth'
      });
      setActiveSlide(index);
    }
  };

  const handleCardClick = (id: string) => {
    console.log(`Tool ${id} clicked`);
    // Adicione aqui a lógica para redirecionar ou mostrar detalhes da ferramenta
  };

  return (
    <div className="space-y-6 tools-carousel">
      <div className="relative tools-carousel-container">
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="py-4" ref={carouselRef}>
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <CarouselItem key={slideIndex} className="basis-full md:basis-full lg:basis-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {toolsData.slice(slideIndex * 4, slideIndex * 4 + 4).map((tool) => (
                    <div key={tool.id} className="animate-fade-in" style={{ animationDelay: `${(0.1 * (slideIndex + 1))}s` }}>
                      <ToolCard
                        name={tool.name}
                        logo={tool.logo}
                        description={tool.description}
                        backgroundColor={tool.backgroundColor}
                        textColor={tool.textColor}
                        onClick={() => handleCardClick(tool.id)}
                      />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="-left-4 bg-white/15 backdrop-blur-sm text-white hover:bg-white/25 border-white/20" />
          <CarouselNext className="-right-4 bg-white/15 backdrop-blur-sm text-white hover:bg-white/25 border-white/20" />
        </Carousel>
      </div>
      
      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${activeSlide === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
