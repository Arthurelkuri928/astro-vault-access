
import React, { useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ToolCard } from "./ToolCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dados das ferramentas
const toolsData = [
  {
    id: "adminer",
    name: "Adminer",
    logo: "https://i.postimg.cc/mcmrf5bH/ADMINER.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#FF5733"
  },
  {
    id: "adobe-stock",
    name: "Adobe Stock",
    logo: "https://i.postimg.cc/sMRxpW6v/ADOBE-STOCK.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#3366FF"
  },
  {
    id: "adsparo",
    name: "Adsparo",
    logo: "https://i.postimg.cc/94mfkhj2/ADSPARO.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#FF9933"
  },
  {
    id: "answer-the-public",
    name: "Answer The Public",
    logo: "https://i.postimg.cc/yDXdnNtn/ANSWER-THE-PUBLIC.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#FFFFFF",
    textColor: "#000000"
  },
  {
    id: "bigspy",
    name: "BigSpy",
    logo: "https://i.postimg.cc/62Tp9f31/BIGSPY.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#001F5B"
  },
  {
    id: "blackhat",
    name: "Blackhat",
    logo: "https://i.postimg.cc/jw9dCnnq/BLACKHAT.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#E6B905"
  },
  {
    id: "canva-pro",
    name: "Canva Pro",
    logo: "https://i.postimg.cc/6T2pgcF8/CANVA-PRO.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#20C4CB"
  },
  {
    id: "capcut-pro",
    name: "CapCut Pro",
    logo: "https://i.postimg.cc/4H94c4p6/CAPCUT-PRO.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#00C8FF"
  },
  {
    id: "chat-gpt",
    name: "ChatGPT",
    logo: "https://i.postimg.cc/fkGRNXhB/CHAT-GPT.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#74AA9C"
  },
  {
    id: "chatbot-x",
    name: "Chatbot X",
    logo: "https://i.postimg.cc/jLydd5xK/CHATBOT-X.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#000000"
  },
  {
    id: "claude-ia",
    name: "Claude IA",
    logo: "https://i.postimg.cc/JGXtDxQf/CLAUDE-IA.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#7A53D9"
  },
  {
    id: "clicopy",
    name: "CliCopy",
    logo: "https://i.postimg.cc/mzNWWc36/CLICOPY.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#2DB6A0"
  },
  {
    id: "crunchyroll",
    name: "Crunchyroll",
    logo: "https://i.postimg.cc/vgvkSJMJ/CRUNCHYROLL.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#FF6B18"
  },
  {
    id: "disney",
    name: "Disney+",
    logo: "https://i.postimg.cc/zHX6mxGV/DISNEY.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#0F1640"
  },
  {
    id: "dreamface",
    name: "DreamFace",
    logo: "https://i.postimg.cc/9DR3Fgt9/DREAMFACE.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#6750A4"
  },
  {
    id: "droptool",
    name: "DropTool",
    logo: "https://i.postimg.cc/6T9DGpft/DROPTOOL.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#5533FF"
  },
  {
    id: "envato-elements",
    name: "Envato Elements",
    logo: "https://i.postimg.cc/yWv2hCL9/ENVATO-ELEMENTS.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#82B541"
  },
  {
    id: "epidemic-sound",
    name: "Epidemic Sound",
    logo: "https://i.postimg.cc/VdvpDZhh/EPIDEMIC-SOUND.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#24FFB8"
  },
  {
    id: "filtrify",
    name: "Filtrify",
    logo: "https://i.postimg.cc/k2tZd6qF/FILTRIFY.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#FF7EA7"
  },
  {
    id: "flaticon",
    name: "Flaticon",
    logo: "https://i.postimg.cc/TyMs2dP8/FLATICON.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#1A67F5"
  },
  {
    id: "freelahub",
    name: "FreelaHub",
    logo: "https://i.postimg.cc/ppS77YbL/FREELAHUB.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#6937FF"
  },
  {
    id: "freepik",
    name: "FreePik",
    logo: "https://i.postimg.cc/XZfzpRZr/FREEPIK.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#1863FE"
  },
  {
    id: "gamma-app",
    name: "Gamma App",
    logo: "https://i.postimg.cc/zbp2kTF5/GAMMA-APP.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#5A67FF"
  },
  {
    id: "grok",
    name: "Grok",
    logo: "https://i.postimg.cc/qhpZn1nj/GROK.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#161616"
  },
  {
    id: "heygen",
    name: "HeyGen",
    logo: "https://i.postimg.cc/1VtC74vF/HEYGEN.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#01D1FD"
  },
  {
    id: "leonard-ia",
    name: "Leonard IA",
    logo: "https://i.postimg.cc/DmjYJdzP/LEONARD-IA.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#5B5BD6"
  },
  {
    id: "lovepik",
    name: "LovePik",
    logo: "https://i.postimg.cc/5jNR2kft/LOVEPIK.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#FF4893"
  },
  {
    id: "midjourney",
    name: "Midjourney",
    logo: "https://i.postimg.cc/pp3GkWz9/MIDJOURNEY.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#000000"
  },
  {
    id: "netflix-premium",
    name: "Netflix Premium",
    logo: "https://i.postimg.cc/PPCVmpps/NETFLIX-PREMIUM.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#E50914"
  },
  {
    id: "paramount",
    name: "Paramount+",
    logo: "https://i.postimg.cc/G4YM5WxX/PARAMOUNT.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#0164FF"
  },
  {
    id: "pipiads",
    name: "PipiAds",
    logo: "https://i.postimg.cc/gXcNrnF7/PIPIADS.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#FFB31A"
  },
  {
    id: "prime-video",
    name: "Prime Video",
    logo: "https://i.postimg.cc/R3LgMw8f/PRIME-VIDEO.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#00A8E1"
  },
  {
    id: "semrush",
    name: "SEMRush",
    logo: "https://i.postimg.cc/JyLTVpTM/SEMRUSH.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#FF642D"
  },
  {
    id: "similar-web",
    name: "Similar Web",
    logo: "https://i.postimg.cc/qhmQK4pv/SIMILAR-WEB.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#143DCE"
  },
  {
    id: "spyguru",
    name: "SpyGuru",
    logo: "https://i.postimg.cc/vxchLkmL/SPYGURU.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#576CBC"
  },
  {
    id: "spyhero",
    name: "SpyHero",
    logo: "https://i.postimg.cc/7b6KkGNG/SPYHERO.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#8294C4"
  },
  {
    id: "spyhorus",
    name: "Spyhorus",
    logo: "https://i.postimg.cc/Th4CYdkk/SPYHORUS.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#ACB1D6"
  },
  {
    id: "storyblocks",
    name: "StoryBlocks",
    logo: "https://i.postimg.cc/pmDZZDP7/STORYBLOCKS.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#01DFFC"
  },
  {
    id: "ubersuggest",
    name: "Ubersuggest",
    logo: "https://i.postimg.cc/JGHKsfvR/UBERSUGGEST.png",
    description: "Gateway de Pagamento",
    backgroundColor: "#FF8200"
  },
  {
    id: "vectorizer",
    name: "Vectorizer",
    logo: "https://i.postimg.cc/BjWpHhfH/VECTORIZER.png",
    description: "Gateway de Pagamento",
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
    // Aqui você pode adicionar a lógica para redirecionar para a página do produto
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent className="py-4" ref={carouselRef}>
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <CarouselItem key={slideIndex} className="basis-full md:basis-full lg:basis-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {toolsData.slice(slideIndex * 4, slideIndex * 4 + 4).map((tool) => (
                    <ToolCard
                      key={tool.id}
                      name={tool.name}
                      logo={tool.logo}
                      description="Gateway de Ferramentas"
                      backgroundColor={tool.backgroundColor}
                      textColor={tool.textColor}
                      onClick={() => handleCardClick(tool.id)}
                    />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/20" />
            <CarouselNext className="right-0 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/20" />
          </div>
        </Carousel>
      </div>
      
      {/* Indicadores de página (dots) */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              activeSlide === index ? "bg-white scale-125" : "bg-white/40"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
